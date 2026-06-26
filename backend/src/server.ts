import express from "express";
import cors from "cors";
import dealsRouter from "./routes/deals";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "deal-roi-modeler", time: new Date().toISOString() });
});

app.use("/api/deals", dealsRouter);

// Fallback 404 for unknown API routes.
app.use("/api", (_req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`Deal ROI Modeler API listening on http://localhost:${PORT}`);
});
