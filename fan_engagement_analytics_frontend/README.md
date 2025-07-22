# Fan Engagement Analytics Dashboard – React Frontend

This project implements a responsive, modern React dashboard for displaying and analyzing 16 key fan engagement metrics for live event platforms.

## Features

- **Display of 16 key engagement metrics**
    - Cards, bar charts, circular progress, device breakdown bars, word cloud, heatmap, geo map
- **Filters**
    - Date range, event name, poll type, device type
- **3-Section Grid Layout**
    - _Poll Metrics_, _Viewer Engagement_, _System Insights_
    - Collapsible sections for better mobile use
- **Interactive Visualizations**
    - Placeholder for map, heatmap, and word cloud (ready for REST/GraphQL data integration)
- **Theme**
    - Modern, minimalistic dark/light toggle, KAVIA brand color palette
- **Responsive Design**
    - Grid cards auto-stack for mobile view

## Custom Components

- `FilterBar` – Top of dashboard, interactive filtering
- `DashboardCard` – Modern card container for metrics/charts
- `CollapsiblePanel` – Collapsible/grouped dashboards
- `BarChart` – Bar chart using pure React/CSS
- `CircularProgress` – Circular rate/progress charts
- `DeviceBreakdownChart` – Horizontal device bars
- `GeoMap` – Placeholder for geo breakdown
- `HeatMap` – Activity heatmap of engagement/session
- `WordCloud` – Tag cloud of freeform engagement

## Getting Started

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000/).

### `npm run build`
Builds the app for production.

## API/Data Integration

All metric visualizations use mock (static) data by default. Connect REST/GraphQL endpoints for live data by replacing corresponding parts in `App.js` and components.

## Theme & UI

Modify colors in `src/App.css`. All components styled with minimal CSS and dark theme support.

---
