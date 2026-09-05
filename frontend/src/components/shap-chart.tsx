"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { FeatureContribution } from "@/lib/api";

interface ShapChartProps {
  factors: FeatureContribution[];
}

export default function ShapChart({
  factors,
}: ShapChartProps) {
  const data = factors.map((factor) => ({
    feature: factor.feature,
    impact: factor.impact,
    effect: factor.effect,
  }));

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            type="number"
            domain={["auto", "auto"]}
          />

          <YAxis
            type="category"
            dataKey="feature"
            width={130}
          />

          <Tooltip
            formatter={(value) => [
              Number(value).toFixed(4),
              "SHAP Impact",
            ]}
          />

          <Bar
            dataKey="impact"
            radius={[0, 4, 4, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.impact > 0
                    ? "#ef4444"
                    : "#22c55e"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}