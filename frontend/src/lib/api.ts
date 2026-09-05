import type { EmployeeFormData } from "@/lib/employee-schema";

const API_URL = "http://127.0.0.1:8000";

export interface FeatureContribution {
  feature: string;
  impact: number;
  effect: string;
}

export interface PredictionResponse {
  prediction: string;
  probability: number;
  risk_level: string;
  recommendation: string;
  top_factors: FeatureContribution[];
}

export async function predictAttrition(
  employee: EmployeeFormData
): Promise<PredictionResponse> {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Prediction request failed");
  }

  return response.json();
}