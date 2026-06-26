// Shared domain types for the Strategic Deal ROI & Investment Modeler.

export type PartnerCategory = "OEM" | "ODM" | "Silicon" | "Distribution";
export type Region = "Americas" | "EMEA" | "APAC" | "Greater China";
export type DealType =
  | "Volume Incentive"
  | "Co-Marketing"
  | "Strategic Investment"
  | "Rebate Program";

/**
 * Inputs that define a strategic deal with a hardware partner.
 * The economics model: we pay a partner up-front + per-unit + fixed annual
 * incentives in exchange for a committed device volume that attaches our
 * software/services revenue.
 */
export interface DealInput {
  dealName: string;
  partnerName: string;
  partnerCategory: PartnerCategory;
  region: Region;
  dealType: DealType;

  termMonths: number;            // total length of the deal
  rampMonths: number;            // months to reach full run-rate volume

  committedUnits: number;        // total devices over the term
  attachRatePct: number;         // % of units that attach our revenue (0-100)
  revenuePerUnit: number;        // our revenue per attached unit ($)
  grossMarginPct: number;        // gross margin on that revenue (0-100)

  upfrontInvestment: number;     // one-time discretionary investment ($)
  perUnitIncentive: number;      // incentive paid to partner per unit ($)
  fixedAnnualIncentive: number;  // co-marketing / fixed fund per year ($)

  discountRatePct: number;       // annual discount rate for NPV (0-100)
}

export interface DealMetrics {
  grossRevenue: number;
  grossProfit: number;
  totalIncentiveCost: number;
  netProfit: number;
  roi: number;                   // netProfit / totalIncentiveCost
  roiPct: number;
  npv: number;
  irrPct: number | null;         // annualized IRR, null if undefined
  paybackMonths: number | null;
  breakEvenUnits: number;
  monthlyCashFlows: number[];    // index 0 = t0 outflow
  cumulativeCashFlows: number[];
}

export interface Scenario {
  name: string;
  assumptions: string;
  metrics: DealMetrics;
}

export interface SensitivityPoint {
  x: number;
  roiPct: number;
  npv: number;
}

export interface SensitivityResult {
  variable: string;
  label: string;
  points: SensitivityPoint[];
}

export interface Recommendation {
  decision: "Approve" | "Approve with conditions" | "Revise";
  rationale: string[];
  thresholds: { minRoiPct: number; minNpv: number; maxPaybackMonths: number };
}

export interface EvaluateResponse {
  input: DealInput;
  metrics: DealMetrics;
  scenarios: Scenario[];
  recommendation: Recommendation;
}
