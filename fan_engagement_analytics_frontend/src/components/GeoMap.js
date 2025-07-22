import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./GeoMap.css";

/**
 * PUBLIC_INTERFACE
 * GeoMap: Renders a 3D Pie Chart (using Recharts) visualizing geo regional breakdown.
 * @param {Array} data - [{region: string, value: number}]
 */
function GeoMap({ data = [] }) {
  // Assign a color palette for regions
  const PIE_COLORS = ["#2563eb", "#f59e42", "#22d3ee", "#64748b", "#16a34a"];
  const pieData = (data || []).map((row, idx) => ({
    name: row.region,
    value: row.value,
  }));

  return (
    <div className="geomap-root" style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={34}
            paddingAngle={7}
            isAnimationActive={true}
            startAngle={335}
            endAngle={-25}
            label
          >
            {pieData.map((_, idx) => (
              <Cell key={`cell-${idx}`} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value,name) => [`${value}`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GeoMap;
