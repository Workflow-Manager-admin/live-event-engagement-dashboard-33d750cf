import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./DeviceBreakdownChart.css";

/**
 * PUBLIC_INTERFACE
 * DeviceBreakdownChart: Renders 3D Pie Chart (via Recharts) for device usage distribution
 * @param {Array} data - [{device: string, percent: number, color?: string}]
 */
function DeviceBreakdownChart({ data = [] }) {
  // Make the pie visually 3D by configuring inner/outer radius and shading.
  const PIE_COLORS = (data.map(d => d.color)).filter(Boolean).length === data.length
    ? data.map(d => d.color)
    : ["#64748b", "#f59e42", "#2563eb", "#22d3ee", "#8b5cf6"];

  const pieData = (data || []).map(row => ({
    name: row.device,
    value: row.percent,
    fill: row.color
  }));

  return (
    <div className="device-bd-root" style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={38}
            paddingAngle={6}
            isAnimationActive={true}
            startAngle={320}
            endAngle={-40}
          >
            {pieData.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value,name) => [`${value}%`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DeviceBreakdownChart;
