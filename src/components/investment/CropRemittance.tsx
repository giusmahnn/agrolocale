'use client'

import { useId } from 'react'
import { getRemittanceProgress, type CropInvestment } from '@/data/investment-data'
import styles from './LiveRemittanceTracker.module.css'

type Props = {
  crops: CropInvestment[]
  selectedId: string
  onSelect: (id: string) => void
}

/** Controlled: the parent owns the selected crop so the whole tracker can react to it. */
export default function CropRemittance({ crops, selectedId, onSelect }: Props) {
  const selectId = useId()
  const crop = crops.find((c) => c.id === selectedId) ?? crops[0]
  if (!crop) return null

  const { percent, status } = getRemittanceProgress(crop)
  const complete = status === 'completed'
  const stateClass =
    status === 'completed' ? styles.fillComplete : status === 'in-progress' ? styles.fillActive : ''

  return (
    <aside className={styles.remitCard} aria-labelledby={`${selectId}-title`}>
      <h3 id={`${selectId}-title`} className={styles.remitTitle}>Crop Remittance</h3>

      <div className={styles.selectWrap}>
        <span className={styles.selectLeaf} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
            <path d="M5 19c2-4 5-7 9-9" />
          </svg>
        </span>
        <label htmlFor={selectId} className={styles.srOnly}>Select crop</label>
        <select
          id={selectId}
          className={styles.select}
          value={crop.id}
          onChange={(e) => onSelect(e.target.value)}
        >
          {crops.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <span className={styles.selectChevron} aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>

      <div aria-live="polite">
        <p className={styles.remitPercent}>
          <strong>{percent}%</strong>
          <span>Remitted</span>
          {complete && <span className={styles.remitCheck} aria-label="Completed">✓</span>}
        </p>

        <p className={styles.remitMeta}>
          <span className={`${styles.remitBadge} ${styles[`badge_${status.replace('-', '_')}`]}`}>
            {status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Pending'}
          </span>
        </p>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-label={`${crop.name} revenue remitted`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`${percent}% remitted`}
      >
        <div className={`${styles.fill} ${stateClass}`} style={{ width: `${percent}%` }} />
      </div>
    </aside>
  )
}