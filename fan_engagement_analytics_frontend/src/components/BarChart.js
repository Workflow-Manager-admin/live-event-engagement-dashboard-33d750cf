import React from "react";
import "./BarChart.css";

// PUBLIC_INTERFACE
function BarChart({ data = [], labels = [], height = 100, colors = [] }) {
  /**
   * Simple bar chart using plain divs.
   * data: [number]
   * labels: [string]
   * colors: [string], fallback to accent color
   */
  const maxValue = Math.max(...data, 1);

  return (
    <div className="barchart-root" style={{ height }}>
      {data.map((val, idx) => (
        <div className="barchart-bar-wrap" key={idx}>
          <div
            className="barchart-bar"
            title={labels[idx] + ": " + val}
            style={{
              height: `${(val / maxValue) * 92}%`,
              background: colors[idx] || "var(--accent, #f59e42)",
            }}
          />
          <div className="barchart-label">{labels[idx]}</div>
        </div>
      ))}
    </div>
  );
}

export default BarChart;
