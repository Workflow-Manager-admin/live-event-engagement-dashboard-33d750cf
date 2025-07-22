import React from "react";
import "./HeatMap.css";

// PUBLIC_INTERFACE
function HeatMap({ data, rows = 4, cols = 6, colorScale = ["#3935aa", "#8888ff", "#f59e42"] }) {
  /**
   * data: 2D array, data[rows][cols], values: 0..1
   */
  const getColor = (v) => {
    // Linear scale. Simple interpolation between colorScale[0] and colorScale[2]
    if (v <= 0) return colorScale[0];
    if (v >= 1) return colorScale[colorScale.length - 1];
    if (colorScale.length === 3) {
      if (v < 0.5) return colorScale[0];
      if (v < 0.8) return colorScale[1];
      return colorScale[2];
    }
    return colorScale[0];
  };
  return (
    <div className="heatmap-root">
      {data.map((row, ridx) => (
        <div className="heatmap-row" key={ridx}>
          {row.map((val, cidx) => (
            <div
              key={cidx}
              className="heatmap-cell"
              style={{ background: getColor(val) }}
              title={`Value: ${(val * 100).toFixed(1)}%`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default HeatMap;
