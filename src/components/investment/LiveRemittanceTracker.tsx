'use client'

import { useState } from 'react'
import Image from 'next/image'
import InvestmentStages from './InvestmentStages'
import CropRemittance from './CropRemittance'
import {
  buildStages,
  getPhaseView,
  type CropInvestment,
  type StageDefinition,
} from '@/data/investment-data'
import styles from './LiveRemittanceTracker.module.css'

type Props = {
  crops: CropInvestment[]
  stageDefinitions: StageDefinition[]
  lastUpdated: string | Date
  title?: string
  subtitle?: string
  defaultCropId?: string
}

/* Fixed timezone keeps server + client output identical (no hydration mismatch). */
function formatUpdated(value: string | Date) {
  const d = typeof value === 'string' ? new Date(value) : value
  if (Number.isNaN(d.getTime())) return ''
  const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'Africa/Lagos' })
  const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lagos' })
  return `${date} • ${time}`
}

export default function LiveRemittanceTracker({
  crops,
  stageDefinitions,
  lastUpdated,
  title = 'Live Remittance Tracker',
  subtitle = 'Follow the journey from your investment to your returns.',
  defaultCropId,
}: Props) {
  const [selectedId, setSelectedId] = useState(defaultCropId ?? crops[0]?.id ?? '')

  const crop = crops.find((c) => c.id === selectedId) ?? crops[0]
  if (!crop) return null

  // Everything below is derived from the selected crop.
  const stages = buildStages(stageDefinitions, crop)
  const phase = getPhaseView(crop, stages)

  return (
    <section className={styles.section} aria-labelledby="lrt-title">
      <div className={styles.inner}>
      <div className={styles.tracker}>
      <header className={styles.header}>
        <div>
          <h2 id="lrt-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.headerMeta}>
          <span className={styles.live}><span className={styles.liveDot} aria-hidden />Live</span>
          <span className={styles.updated}>
            Last updated <time dateTime={new Date(lastUpdated).toISOString()}>{formatUpdated(lastUpdated)}</time>
          </span>
        </div>
      </header>

      <div className={styles.stagesPanel}>
        <InvestmentStages stages={stages} />
      </div>

      <div className={styles.lower}>
        {/* key → re-runs the fade when the crop changes */}
        <article className={styles.phaseCard} key={crop.id} aria-live="polite">
          <div className={`${styles.phaseImg} ${styles.swap}`}>
            <Image
              src={phase.image}
              alt={phase.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 260px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={`${styles.phaseBody} ${styles.swap}`}>
            <h3 className={styles.phaseTitle}>{phase.title}</h3>
            <p className={styles.phasePct}>{phase.progress}% Complete</p>
            <p className={styles.phaseText}>{phase.description}</p>
            <div
              className={styles.track}
              role="progressbar"
              aria-label={`${crop.name} ${phase.title} progress`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={phase.progress}
            >
              <div className={`${styles.fill} ${styles.fillActive}`} style={{ width: `${phase.progress}%` }} />
            </div>
          </div>
        </article>

        <CropRemittance crops={crops} selectedId={crop.id} onSelect={setSelectedId} />
      </div>
      </div>
      </div>
    </section>
  )
}