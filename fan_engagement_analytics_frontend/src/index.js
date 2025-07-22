import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Load dashboard component styles (in one place for easier dev hot reload)
import "./components/FilterBar.css";
import "./components/DashboardCard.css";
import "./components/CollapsiblePanel.css";
import "./components/BarChart.css";
import "./components/CircularProgress.css";
import "./components/DeviceBreakdownChart.css";
import "./components/GeoMap.css";
import "./components/HeatMap.css";
import "./components/WordCloud.css";
import "./components/DashboardSections.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
