import React, { useState } from "react";
import "./CollapsiblePanel.css";

// PUBLIC_INTERFACE
function CollapsiblePanel({ title, defaultOpen = true, children }) {
  /** Collapsible section for metric panels. */
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="collap-panel">
      <div
        className="collap-panel-header"
        onClick={() => setOpen((open) => !open)}
        tabIndex={0}
        aria-expanded={open}
        role="button"
      >
        <span>{title}</span>
        <span style={{ marginLeft: "auto", fontWeight: 700 }}>
          {open ? "▼" : "►"}
        </span>
      </div>
      {open && <div className="collap-panel-body">{children}</div>}
    </div>
  );
}

export default CollapsiblePanel;
