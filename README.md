# NYISO Transmission Outage Dashboard

A transmission outage data visualization dashboard built with Vue 3 and ECharts. It displays outage
KPIs, annual trends, voltage level distributions, outage type distributions, and recent outage events.

The current version is a frontend presentation prototype using mock outage data for page and chart component
development. It has not yet integrated FastAPI, DuckDB/Parquet, or real NYISO outage data.

## Current Features

- 1920×1080 fixed dashboard canvas with responsive scaling
- Three-column dashboard layout (25% / 50% / 25%)
- KPI cards
- Annual outage trend line chart
- New York State geographic base map rendered with ECharts Map
- Voltage level outage distribution bar chart
- Outage type distribution pie chart
- Recent outage event list
- Reusable Vue components

The map currently displays only New York State administrative boundaries. NYISO A–K power zone
boundaries are not yet included.

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

The production build is generated in the `dist` directory.

## Tech Stack

- **Vue 3**: Page components and interface organization.
- **Vite**: Local development server and production builds.
- **Apache ECharts**: Line, bar, and pie charts, plus ECharts Map for geographic visualization.
- **GeoJSON**: Static New York State geographic boundary data loaded by the frontend.
- **JavaScript**: Frontend logic.
- **CSS**: Dashboard layout and styling.
- **Mock data**: Simulated outage business data for frontend development.

## Current Frontend Architecture

The current frontend prototype follows this presentation structure:

```text
dashboardMock.js + public/maps/new-york-state.geojson
                         ↓
                  Vue components
                         ↓
              ECharts / UI components
                         ↓
                   DashboardView
```

- Outage data: `src/mock/dashboardMock.js` provides simulated outage business data.
- Geographic data: `public/maps/new-york-state.geojson` provides static New York State administrative boundaries.
- Component layer: Reusable common, chart, and layout components in `src/components/`.
- Page layer: `src/views/DashboardView.vue`.

## Future Integration

Future versions are planned to replace mock data with backend API responses and processed NYISO outage data.
