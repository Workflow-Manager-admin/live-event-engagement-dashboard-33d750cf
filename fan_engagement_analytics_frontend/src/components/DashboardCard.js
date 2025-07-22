import React from "react";
import "./DashboardCard.css";

// PUBLIC_INTERFACE
function DashboardCard({ title, value, children, footer }) {
  /** Card component for dashboard sections. */
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-card-title">{title}</h3>
      {typeof value !== "undefined" && (
        <span className="dashboard-card-value">{value}</span>
      )}
      <div className="dashboard-card-content">{children}</div>
      {footer && <div className="dashboard-card-footer">{footer}</div>}
    </div>
  );
}

export default DashboardCard;
