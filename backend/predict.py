import pandas as pd
import shap

from model_loader import model, label_encoder


# Load SHAP background data
background_data = pd.read_csv("../models/shap_background.csv")


def get_feature_contributions(input_df):

    # Get preprocessing and classifier from pipeline
    preprocessor = model.named_steps["preprocessor"]
    classifier = model.named_steps["classifier"]

    # Transform background data and current employee
    background_transformed = preprocessor.transform(background_data)
    input_transformed = preprocessor.transform(input_df)

    # Create SHAP explainer
    explainer = shap.LinearExplainer(
        classifier,
        background_transformed
    )

    # Calculate SHAP values
    shap_values = explainer(input_transformed)

    # SHAP values for this employee
    values = shap_values.values[0]

    # Feature names after preprocessing
    feature_names = preprocessor.get_feature_names_out()

    # Store contributions
    contributions = []

    for feature, value in zip(feature_names, values):

        # Remove preprocessing prefixes
        feature = feature.replace("num__", "")
        feature = feature.replace("cat__", "")

        contributions.append({
            "feature": feature,
            "impact": float(value)
        })

    # ------------------------------------------------
    # Combine one-hot encoded categorical features
    # ------------------------------------------------

    grouped_contributions = {}

    for item in contributions:

        feature = item["feature"]
        impact = item["impact"]

        # Example:
        # OverTime_Yes -> OverTime
        # JobRole_Sales Executive -> JobRole

        if "_" in feature:
            original_feature = feature.split("_")[0]
        else:
            original_feature = feature

        if original_feature not in grouped_contributions:
            grouped_contributions[original_feature] = 0

        grouped_contributions[original_feature] += impact

    # Convert grouped dictionary into list
    final_contributions = []

    for feature, impact in grouped_contributions.items():

        if impact > 0:
            effect = "Increases attrition risk"
        elif impact < 0:
            effect = "Reduces attrition risk"
        else:
            effect = "Neutral"

        final_contributions.append({
            "feature": feature,
            "impact": round(float(impact), 4),
            "effect": effect
        })

    # Sort by strongest absolute impact
    final_contributions.sort(
        key=lambda x: abs(x["impact"]),
        reverse=True
    )

    # Return top 5 factors
    return final_contributions[:5]


def predict_attrition(employee_data: dict):

    # Convert employee data into DataFrame
    input_df = pd.DataFrame([employee_data])

    # Make prediction
    prediction = model.predict(input_df)[0]

    # Probability of employee leaving
    probability = model.predict_proba(input_df)[0][1]

    # Convert encoded prediction back to Yes/No
    prediction = label_encoder.inverse_transform([prediction])[0]

    probability_percent = round(
        float(probability) * 100,
        2
    )

    # -----------------------------
    # Risk Level
    # -----------------------------

    if probability >= 0.75:
        risk_level = "High"

    elif probability >= 0.50:
        risk_level = "Medium"

    else:
        risk_level = "Low"

    # -----------------------------
    # Recommendation
    # -----------------------------

    if prediction == "Yes":

        recommendation = (
            "Employee is likely to leave. "
            "Consider discussing career growth, workload, "
            "job satisfaction and work-life balance."
        )

    else:

        recommendation = (
            "Employee is likely to stay. "
            "Continue regular engagement and performance reviews."
        )

    # -----------------------------
    # SHAP Explanation
    # -----------------------------

    contributions = get_feature_contributions(input_df)

    # -----------------------------
    # Final API Response
    # -----------------------------

    return {
        "prediction": (
            "Likely to Leave"
            if prediction == "Yes"
            else "Likely to Stay"
        ),
        "probability": probability_percent,
        "risk_level": risk_level,
        "recommendation": recommendation,
        "top_factors": contributions
    }