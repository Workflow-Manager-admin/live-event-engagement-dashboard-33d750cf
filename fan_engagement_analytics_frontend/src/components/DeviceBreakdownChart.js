import React from "react";
import "./DeviceBreakdownChart.css";

// PUBLIC_INTERFACE
function DeviceBreakdownChart({ data }) {
  /**
   * data: [{device: string, percent: number, color?: string}]
   */
  return (
    <div className="device-bd-root">
      {data.map((row, idx) => (
        <div className="device-bd-row" key={row.device}>
          <span className="device-bd-label">{row.device}</span>
          <div className="device-bd-bar-bg">
            <div
              className="device-bd-bar"
              style={{
                width: `${row.percent}%`,
                background: row.color || "var(--accent, #f59e42)"
              }}
              title={`${row.device} : ${row.percent}%`}
            />
          </div>
          <span className="device-bd-value">{row.percent}%</span>
        </div>
      ))}
    </div>
  );
}

export default DeviceBreakdownChart;
