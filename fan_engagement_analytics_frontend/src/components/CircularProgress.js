import React from "react";
import "./CircularProgress.css";

// PUBLIC_INTERFACE
function CircularProgress({ value, label, color = "var(--accent,#f59e42)" }) {
  /**
   * Simple SVG circular progress.
   * value: number (0-100)
   * label: string
   */
  const size = 84, stroke = 7, radius = (size - stroke) / 2;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - value / 100);
  return (
    <div className="circular-progress-root">
      <svg width={size} height={size}>
        <circle
          className="circular-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
        />
        <circle
          className="circular-bar"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          stroke={color}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <span className="circular-progress-label">{label}</span>
      <span className="circular-progress-value">{value}%</span>
    </div>
  );
}

export default CircularProgress;
