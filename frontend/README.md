# Frontend — Strategic Deal ROI Modeler

React 18 + TypeScript + Vite client. Charts use Recharts; styling is plain CSS in `src/index.css`.

## Scripts

```bash
npm install
npm run dev       # Vite dev server on http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Configuration

In development, Vite proxies `/api` to `http://localhost:4000` (see `vite.config.ts`), so just run
the backend alongside it. For a deployed backend, set `VITE_API_URL` at build time.

## Components

- `DealForm` — all deal inputs plus a sample-deal loader.
- `ResultsPanel` — KPI cards and a cumulative cash-flow chart.
- `ScenarioTable` — worst / base / best comparison.
- `SensitivityChart` — ROI vs. a selectable driver.
- `BusinessCase` — recommendation badge, hurdle rationale, and a written summary.
