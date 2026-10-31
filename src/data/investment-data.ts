/* ─────────────────────────────────────────────────────────
   Types, helpers + mock data for the Live Remittance Tracker.

   Each crop owns its own journey:
     • stageProgress   → colours the 5-stage tracker for that crop
     • remittedPercent → Crop Remittance card (and the Revenue Remittance stage)
     • phase           → picture + write-up shown in the "current phase" panel

   To update a crop, edit ONLY its object in `crops` below.
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
  /** 0–100: share of this crop's revenue already remitted. */
  remittedPercent: number
  /** 0–100 per stage. Missing stages count as 0; `remittance` defaults to remittedPercent. */
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

export function getRemittanceProgress(crop: { remittedPercent: number }) {
  const clamped = clampPct(crop.remittedPercent)
  let percent = 0
  if (clamped >= 100) percent = 100
  else if (clamped > 0) percent = Math.min(99, Math.max(1, Math.round(clamped))) // never rounds up to 100
  const status: StageStatus = percent >= 100 ? 'completed' : percent > 0 ? 'in-progress' : 'pending'
  return { percent, status }
}

/** Combine the shared stage definitions with one crop's progress. */
export function buildStages(definitions: StageDefinition[], crop: CropInvestment): InvestmentStage[] {
  return definitions.map((def) => ({
    ...def,
    progress:
      def.id === 'remittance'
        ? clampPct(crop.stageProgress.remittance ?? crop.remittedPercent)
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
    remittedPercent: 0,
    stageProgress: { subscription: 100, cultivation: 100, harvest: 100, sale: 91 },
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
    remittedPercent: 0,
    stageProgress: { subscription: 100, cultivation: 100, harvest: 100, sale: 90 },
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
    remittedPercent: 0,
    stageProgress: { subscription: 100, cultivation: 100, harvest: 100, sale: 90 },
    phase: {
      thankYou:
        'Thank you for investing in tomatoes with Agrolocale. Your full revenue has been remitted — we truly appreciate your trust.',
      image: '/farm-produce/tomato/tomato3.jpg', // replace with your real asset
      imageAlt: 'Freshly harvested tomatoes',
    },
  },
]

export const lastUpdated = '2026-10-26T10:42:00+01:00'