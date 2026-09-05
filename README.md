# Employee Attrition Prediction Platform

An end-to-end Machine Learning web application that predicts whether an employee is likely to leave an organization.

The platform combines a trained **Logistic Regression model**, **FastAPI**, **Next.js**, and **SHAP explainability** to provide not only an attrition prediction but also the key factors influencing that prediction.

---

## Live Demo

**Live:**  
https://employee-arrtrition-e5pqw4n1o-05-jagritiis-projects.vercel.app

**Backend API:**  
https://employee-attrition-api-zyhg.onrender.com

**API Documentation:**  
https://employee-attrition-api-zyhg.onrender.com/docs

---

## Project Overview

Employee attrition can significantly impact organizations through recruitment costs, productivity loss, and disruption to teams.

This project provides an ML-powered platform that helps identify employees who may be at higher risk of leaving.

The application:

- Collects employee information through a web form
- Validates the input
- Sends the data to a FastAPI backend
- Uses a trained Logistic Regression model to predict attrition
- Calculates the probability of attrition
- Assigns a risk level
- Generates a recommendation
- Uses SHAP to explain the prediction
- Displays the most influential factors in an interactive chart

---

## Architecture

```text
                    ┌─────────────────────────┐
                    │       User              │
                    │  Employee Information   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     Next.js Frontend    │
                    │   React + TypeScript     │
                    │      Tailwind CSS       │
                    └────────────┬────────────┘
                                 │
                          HTTP POST /predict
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │     FastAPI Backend     │
                    │      Input Validation   │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    ML Prediction        │
                    │  Logistic Regression    │
                    │       Pipeline          │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
          ┌──────────────────┐      ┌──────────────────┐
          │ Attrition        │      │ SHAP             │
          │ Probability      │      │ Explainability   │
          └────────┬─────────┘      └────────┬─────────┘
                   │                         │
                   └────────────┬────────────┘
                                ▼
                    ┌─────────────────────────┐
                    │     Prediction Result   │
                    │                         │
                    │ • Prediction            │
                    │ • Probability           │
                    │ • Risk Level             │
                    │ • Recommendation        │
                    │ • Top Factors            │
                    └─────────────────────────┘
```

## Feature 
#### Machine Learning
- Employee attrition prediction
- Logistic Regression classification
- Balanced class weights to handle class imbalance
- Probability-based risk assessment
- Saved production model using Joblib

#### Explainable AI
The application uses SHAP (SHapley Additive exPlanations) to explain individual predictions.
The platform displays the top factors influencing the prediction.
A positive SHAP value indicates that the feature contributes toward higher attrition risk, while a negative value indicates that it reduces the predicted attrition risk.

## Tech Stack
#### Machine Learning
- Python
- Pandas
- Scikit-learn
- XGBoost
- SHAP
- Joblib
- Jupyter Notebook
- Backend
- FastAPI
- Pydantic
- Uvicorn
- Python
#### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Recharts
#### Deployment
- GitHub
- Render
- Vercel
