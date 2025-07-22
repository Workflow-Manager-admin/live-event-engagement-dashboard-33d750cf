import React from "react";
import "./FilterBar.css";

// PUBLIC_INTERFACE
function FilterBar({
  filters,
  setFilters,
  onRefresh,
}) {
  /** This is a public filter bar component.
   *  Props:
   *    filters: {dateFrom, dateTo, event, pollType, deviceType}
   *    setFilters: function to update filters
   *    onRefresh: callback to refresh data
   */
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>
          Date Range:
          <input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
          />
          <span>&nbsp;-&nbsp;</span>
          <input
            type="date"
            value={filters.dateTo}
            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          Event:
          <input
            type="text"
            value={filters.event}
            placeholder="Event Name"
            onChange={(e) => setFilters({ ...filters, event: e.target.value })}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          Poll Type:
          <select
            value={filters.pollType}
            onChange={(e) => setFilters({ ...filters, pollType: e.target.value })}
          >
            <option value="">All</option>
            <option value="single">Single Choice</option>
            <option value="multiple">Multiple Choice</option>
            <option value="open">Open Text</option>
          </select>
        </label>
      </div>
      <div className="filter-group">
        <label>
          Device:
          <select
            value={filters.deviceType}
            onChange={(e) => setFilters({ ...filters, deviceType: e.target.value })}
          >
            <option value="">All</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
          </select>
        </label>
      </div>
      <button
        className="refresh-btn"
        onClick={onRefresh}
        aria-label="Refresh dashboard"
      >
        🔄 Refresh
      </button>
    </div>
  );
}

export default FilterBar;
