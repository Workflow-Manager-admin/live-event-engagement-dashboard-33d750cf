import React from "react";
import "./GeoMap.css";

// PUBLIC_INTERFACE
function GeoMap({ data }) {
  /** Placeholder map component.
   * data: [{region: string, value: number}]
   * Future: replace with map library (e.g. Mapbox, Leaflet) and REST API data.
   */
  return (
    <div className="geomap-root">
      <div className="geomap-placeholder">
        <span role="img" aria-label="Map">🗺️</span>
        <div style={{marginTop: 12, color: "var(--text-secondary)"}}>
          Interactive Geo Map Placeholder
        </div>
        <ul>
          {(data || []).map((row, idx) => (
            <li key={row.region}>
              {row.region}: <b>{row.value}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GeoMap;
