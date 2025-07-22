import React, { useState, useEffect } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import DashboardSections from "./components/DashboardSections";

// PUBLIC_INTERFACE
function App() {
  // State for dark/light theme
  const [theme, setTheme] = useState("dark");
  // State for filter controls
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    event: "",
    pollType: "",
    deviceType: "",
  });
  // State for fetched dashboard metrics
  const [metrics, setMetrics] = useState(defaultMetrics());

  // PUBLIC_INTERFACE
  function defaultMetrics() {
    // Placeholders for all 16 key metrics (simulate API data)
    return {
      pollsGenerated: 314,
      avgPollsPerEvent: 5.1,
      pollsApproved: 288,
      pollsRejected: 26,
      avgApprovalTime: 92,
      approvalRate: 91,
      rejectionReasons: [
        { text: "Late Submission", weight: 15 },
        { text: "Off-topic", weight: 8 },
        { text: "Spam", weight: 5 },
        { text: "Duplicate", weight: 3 },
      ],
      participationRate: 78,
      votesCast: 2045,
      avgVotesPerPoll: 8.5,
      peakParticipation: 188,
      deviceBreakdown: [
        { device: "Desktop", percent: 45, color: "#64748b" },
        { device: "Mobile", percent: 42, color: "#f59e42" },
        { device: "Tablet", percent: 13, color: "#2563eb" },
      ],
      topPolls: [
        { label: "Q1", votes: 194 },
        { label: "Q2", votes: 185 },
        { label: "Q3", votes: 108 },
      ],
      engagementHeatmap: [
        [0.6,0.8,0.4,0.5,0.3,0.35],
        [0.7,0.3,0.8,0.5,0.2,0.1],
        [0.2,0.1,0.4,0.8,0.9,0.3],
        [0.1,0.2,0.2,0.5,0.9,0.7],
      ],
      wordCloud: [
        { text: "fun", weight: 14 },
        { text: "interactive", weight: 9 },
        { text: "poll", weight: 20 },
        { text: "easy", weight: 11 },
        { text: "fast", weight: 6 },
        { text: "vote", weight: 10 },
      ],
      geoBreakdown: [
        { region: "NY", value: 59 },
        { region: "CA", value: 47 },
        { region: "TX", value: 31 },
      ],
      sessionHeatmap: [
        [0.2,0.4,0.9,1,0.5,0.1],
        [0.3,0.85,0.7,0.4,0.3,0.3],
        [0.5,1,0.6,0.6,0.6,0.0],
        [0.0,0.2,0.7,0.5,0.5,0.25],
      ],
      votesPerState: [
        { state: "NY", votes: 430 },
        { state: "CA", votes: 402 },
        { state: "TX", votes: 320 },
        { state: "FL", votes: 277 },
      ],
      engagementOverTime: [120,142,167,131,175],
      engagementOverTimeLabel: ["12:00","12:15","12:30","12:45","13:00"],
      pollsGeneratedHistory: [49,54,62,44,59],
      approvalTimesHistory: [89,92,105,94,93],
      votesCastHistory: [340,420,489,395,401],
      peakParticipationByEvent: [120,188,154,133],
    };
  }

  // Effect updates theme on document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.background = "var(--bg-primary)";
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  // PUBLIC_INTERFACE
  const handleRefresh = () => {
    // Placeholder: future API fetch integration.
    setMetrics(defaultMetrics());
    // Add: fetch via REST/GraphQL with filters, updateMetrics(...)
  };

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <main className="dashboard-main">
        <h1 className="dashboard-title">Fan Engagement Analytics Dashboard</h1>
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onRefresh={handleRefresh}
        />
        <DashboardSections metrics={metrics} />
      </main>
      <footer className="dashboard-footer">
        &copy; {new Date().getFullYear()} Live Event Platform &mdash; Fan Engagement Analytics
      </footer>
    </div>
  );
}

export default App;
