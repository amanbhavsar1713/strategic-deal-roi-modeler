# Backend — Strategic Deal ROI Modeler

Express + TypeScript API that evaluates strategic deals.

## Scripts

```bash
npm install
npm run dev     # tsx watch on http://localhost:4000
npm run build   # tsc -> dist/
npm start       # node dist/server.js
```

## Endpoints

- `GET  /api/health` — liveness check.
- `GET  /api/deals` — bundled sample deals + the default deal.
- `POST /api/deals/evaluate` — body is a `DealInput`; returns metrics, scenarios, and a recommendation.
- `POST /api/deals/sensitivity` — body `{ deal, variable, from, to, steps }`; sweeps one driver.

## Where the math lives

`src/lib/finance.ts` holds all pure functions — `npv`, `irr` (bisection), `paybackPeriod`,
`evaluateDeal`, `runScenarios`, `sensitivity`, and `recommend`. Nothing in there touches Express,
so it is straightforward to unit-test.
