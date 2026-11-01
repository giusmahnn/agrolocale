/* ─────────────────────────────────────────────────────────
   Types, helpers + mock data for the Live Remittance Tracker.

   Each crop owns its own journey:
     • stageProgress   → colours the 5-stage tracker for that crop
     • totalInvestors / investorsPaid → Crop Remittance % (calculated automatically)
     • phase           → picture + write-up shown in the "current phase" panel

   To update a crop, edit ONLY its object in `crops` below.
   Paying more investors? Just raise that crop's `investorsPaid`.
───────────────────────────────────────────────────────── */

export type StageStatus = 'completed' | 'in-progress' | 'pending'

/** Icons are referenced by key so this data stays serialisable (API-friendly). */
export type StageIconKey = 'subscription' | 'cultivation' | 'harvest' | 'sale' | 'remittance'

export type StageId = 'subscription' | 'cultivation' | 'harvest' | 'sale' | 'remittance'

/** The five shared stages (name + icon). Progress comes from each crop. */
export type StageDefinition = { id: StageId; name: string; icon: StageIconKey }

/** A stage resolved for one crop. */
export type InvestmentStage = StageDefinition & { progress: number } // 0–100

export type CropPhaseContent = {
  title?: string        // optional override, defaults to "<Stage name> Phase"
  /** Optional per-stage write-ups for this crop. Missing stages use the defaults below. */
  stageDescriptions?: Partial<Record<StageId, string>>
  /** Shown instead of the stage description once remittance hits 100%. */
  thankYou?: string
  image: string
  imageAlt: string
}

export type CropInvestment = {
  id: string
  name: string
  /** Total number of investors in this crop. */
  totalInvestors: number
  /** How many of them have already been paid. Remittance % = investorsPaid / totalInvestors. */
  investorsPaid: number
  /** 0–100 per stage. Missing stages count as 0; `remittance` is calculated from investors paid. */
  stageProgress: Partial<Record<StageId, number>>
  phase: CropPhaseContent
}

/* ─── Derived values ────────────────────────────────────── */

const clampPct = (n: number | undefined) => {
  const v = typeof n === 'number' && Number.isFinite(n) ? n : 0
  return Math.min(100, Math.max(0, v))
}

export function getStageProgress(stage: { progress: number }) {
  return Math.round(clampPct(stage.progress))
}

export function getStageStatus(stage: { progress: number }): StageStatus {
  const p = getStageProgress(stage)
  return p >= 100 ? 'completed' : p > 0 ? 'in-progress' : 'pending'
}

type RemittanceInput = { totalInvestors: number; investorsPaid: number }

/** Raw remittance percentage (0–100) from investors paid ÷ total investors. */
export function getRemittedPercent(crop: RemittanceInput) {
  const total = Number.isFinite(crop.totalInvestors) ? Math.max(0, crop.totalInvestors) : 0
  if (total === 0) return 0
  const paid = Number.isFinite(crop.investorsPaid) ? Math.min(total, Math.max(0, crop.investorsPaid)) : 0
  return (paid / total) * 100
}

export function getRemittanceProgress(crop: RemittanceInput) {
  const clamped = clampPct(getRemittedPercent(crop))
  let percent = 0
  if (clamped >= 100) percent = 100
  else if (clamped > 0) percent = Math.min(99, Math.max(1, Math.round(clamped))) // never rounds up to 100 until everyone is paid
  const status: StageStatus = percent >= 100 ? 'completed' : percent > 0 ? 'in-progress' : 'pending'

  const total = Math.max(0, Math.round(crop.totalInvestors) || 0)
  const paid = Math.min(total, Math.max(0, Math.round(crop.investorsPaid) || 0))
  return { percent, status, paid, total }
}

/** Combine the shared stage definitions with one crop's progress. */
export function buildStages(definitions: StageDefinition[], crop: CropInvestment): InvestmentStage[] {
  return definitions.map((def) => ({
    ...def,
    progress:
      def.id === 'remittance'
        ? clampPct(crop.stageProgress.remittance ?? getRemittanceProgress(crop).percent)
        : clampPct(crop.stageProgress[def.id]),
  }))
}

/**
 * The stage shown in the "current phase" panel:
 *  1. Any revenue remitted (remittance stage > 0) → Revenue Remittance,
 *     regardless of the other stages.
 *  2. Otherwise → the in-progress stage with the highest percentage
 *     (e.g. harvest 50, sale 60 → Sale). Ties go to the later stage.
 *     Completed (100%) stages are done, so they don't compete.
 *  3. Nothing in progress → the next stage still pending, else the last stage.
 */
export function getCurrentStage(stages: InvestmentStage[]): InvestmentStage {
  const remittance = stages.find((s) => s.id === 'remittance')
  if (remittance && getStageProgress(remittance) > 0) return remittance

  const inProgress = stages.filter((s) => getStageStatus(s) === 'in-progress')
  if (inProgress.length > 0) {
    return inProgress.reduce((best, s) => (getStageProgress(s) >= getStageProgress(best) ? s : best))
  }

  return stages.find((s) => getStageStatus(s) === 'pending') ?? stages[stages.length - 1]
}

/* Default write-up for each phase (used unless a crop overrides it). */
export const defaultStageDescriptions: Record<StageId, (cropName: string) => string> = {
  subscription: (n) =>
    `Your ${n} subscription has been received and confirmed. We're allocating your portion of the farm and preparing for planting.`,
  cultivation: (n) =>
    `Your ${n} crop is currently growing on the farm. We're monitoring soil health, weather conditions and progress daily.`,
  harvest: (n) =>
    `Your ${n} is being harvested. Our team is carefully picking, sorting and preparing the produce for sale.`,
  sale: (n) =>
    `Your harvested ${n} is being sold. We're securing buyers and the best market prices for your produce.`,
  remittance: (n) =>
    `Revenue of the sale of the ${n} is being remitted to you, follow the progress.`,
}

export const defaultThankYou = (cropName: string) =>
  `Thank you for investing in ${cropName.toLowerCase()} with Agrolocale. Your full revenue has been remitted — we truly appreciate your trust and look forward to growing with you again.`

/** Everything the "current phase" panel needs for the selected crop. */
export function getPhaseView(crop: CropInvestment, stages: InvestmentStage[]) {
  const stage = getCurrentStage(stages)
  const remittance = stages.find((s) => s.id === 'remittance')
  const fullyRemitted = !!remittance && getStageProgress(remittance) >= 100

  const description = fullyRemitted
    ? crop.phase.thankYou ?? defaultThankYou(crop.name)
    : crop.phase.stageDescriptions?.[stage.id] ??
      defaultStageDescriptions[stage.id](crop.name.toLowerCase())

  return {
    title: crop.phase.title ?? `${stage.name} Phase`,
    progress: getStageProgress(stage),
    description,
    image: crop.phase.image,
    imageAlt: crop.phase.imageAlt,
  }
}

/* ─── Mock data ─────────────────────────────────────────── */

export const stageDefinitions: StageDefinition[] = [
  { id: 'subscription', name: 'Subscription', icon: 'subscription' },
  { id: 'cultivation', name: 'Cultivation', icon: 'cultivation' },
  { id: 'harvest', name: 'Harvest', icon: 'harvest' },
  { id: 'sale', name: 'Sale of Produce', icon: 'sale' },
  { id: 'remittance', name: 'Revenue Remittance', icon: 'remittance' },
]

export const crops: CropInvestment[] = [
  {
    id: 'sweet-potato',
    name: 'Sweet Potato',
    totalInvestors: 29,
    investorsPaid: 23,
    stageProgress: { subscription: 100, cultivation: 100, harvest: 40, sale: 35 },
    phase: {
      stageDescriptions: {
        cultivation:
          "Your sweet potatoes are growing well. We're monitoring soil health, weather conditions and vine growth daily.",
      },
      image: '/farm-produce/potato2.jpg', // replace with your real asset
      imageAlt: 'Sweet potato vines growing in rows on the farm',
    },
  },
  {
    id: 'pepper',
    name: 'Pepper',
    totalInvestors: 314,
    investorsPaid: 0,
    stageProgress: { subscription: 100, cultivation: 100, harvest: 30, sale: 60 },
    phase: {
      thankYou:
        'Thank you for investing in pepper with Agrolocale. Your full revenue has been remitted — we truly appreciate your trust.',
      image: '/farm-produce/pepper/pepper.jpg',
      imageAlt: 'Freshly harvested pepper',
    },
  },
  {
    id: 'tomato',
    name: 'Tomato',
    totalInvestors: 237,
    investorsPaid: 47,
    stageProgress: { subscription: 100, cultivation: 100, harvest: 60, sale: 75 },
    phase: {
      thankYou:
        'Thank you for investing in tomatoes with Agrolocale. Your full revenue has been remitted — we truly appreciate your trust.',
      image: '/farm-produce/tomato/tomato3.jpg', // replace with your real asset
      imageAlt: 'Freshly harvested tomatoes',
    },
  },
]

export const lastUpdated = '2026-11-01T14:37:00+01:00'