"use client";

import ShapChart from "@/components/shap-chart";

import { useState } from "react";

import EmployeeForm from "@/components/employee-form";
import { PredictionResponse } from "@/lib/api";


export default function Home() {

  const [prediction, setPrediction] =
  useState<PredictionResponse | null>(null); 

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Employee Attrition Prediction
          </h1>

          <p className="mt-2 text-slate-600">
            Predict employee attrition risk using machine learning
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h2 className="text-xl font-semibold">
      Employee Information
    </h2>

    <p className="mt-1 mb-6 text-sm text-slate-500">
      Enter employee details to generate an attrition prediction.
    </p>

    <EmployeeForm 
    onPrediction={(result) => setPrediction(result)}
    />
  </div>
</div>

          <div>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                Prediction Result
              </h2>

              {prediction ? (
  <div className="mt-6 space-y-4">

    <div>
      <p className="text-sm text-slate-500">
        Prediction
      </p>

      <p className="text-2xl font-bold">
        {prediction.prediction}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Attrition Probability
      </p>

      <p className="text-2xl font-bold">
        {prediction.probability}%
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Risk Level
      </p>

      <p className="text-lg font-semibold">
        {prediction.risk_level}
      </p>
    </div>

    <div>
      <p className="text-sm text-slate-500">
        Recommendation
      </p>

      <p className="text-sm leading-6">
        {prediction.recommendation}
      </p>
    </div>

    {prediction.top_factors.length > 0 && (
  <div className="pt-4">
    <h3 className="text-lg font-semibold">
      Top Factors
    </h3>

    <p className="mb-4 text-sm text-slate-500">
      Factors influencing this prediction
    </p>

    <ShapChart factors={prediction.top_factors} />
  </div>
)}

  </div>
) : (
  <p className="mt-1 text-sm text-slate-500">
    Your prediction will appear here.
  </p>
)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}