import { getStageProgress, getStageStatus, type InvestmentStage, type StageIconKey, type StageStatus } from '@/data/investment-data'
import styles from './LiveRemittanceTracker.module.css'

/* Inline SVG icons (no icon library detected in the project) */
const icons: Record<StageIconKey, React.ReactNode> = {
  subscription: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3.5-2.5-6-6.5-6 0 3.8 2.6 6 6.5 6Z" />
      <path d="M12 15c0-3 2.2-5.5 6.5-5.5 0 3.5-2.6 5.5-6.5 5.5Z" />
    </svg>
  ),
  cultivation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21v-9" />
      <path d="M12 12c-3 0-5-2-5-5 3 0 5 2 5 5Z" />
      <path d="M12 12c3 0 5-2 5-5-3 0-5 2-5 5Z" />
      <path d="M12 8c-1.5-1-2-2.6-2-4.5 2 .3 3.5 1.9 3.5 4" />
      <path d="M7 21h10" />
    </svg>
  ),
  harvest: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="7" cy="17" r="3" />
      <circle cx="18" cy="18" r="2" />
      <path d="M10 17h6M4 14V8h7l2 4h3V8" />
      <path d="M15 8V4h3" />
    </svg>
  ),
  sale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
      <path d="M8 5l8 4" />
    </svg>
  ),
  remittance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 3h6l-1.5 3h-3L9 3Z" />
      <path d="M10 6C6 8 4.5 11 4.5 14.5 4.5 18 7.5 21 12 21s7.5-3 7.5-6.5C19.5 11 18 8 14 6" />
      <path d="M12 11v6M13.8 12.3c-.4-.6-1-.8-1.8-.8-1 0-1.8.5-1.8 1.3 0 1.8 3.6.8 3.6 2.6 0 .8-.8 1.3-1.8 1.3-.8 0-1.5-.3-1.9-.9" />
    </svg>
  ),
}

const statusLabel: Record<StageStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  pending: 'Pending',
}

const statusClass: Record<StageStatus, string> = {
  completed: styles.stateCompleted,
  'in-progress': styles.stateActive,
  pending: styles.statePending,
}

export default function InvestmentStages({ stages }: { stages: InvestmentStage[] }) {
  return (
    <div className={styles.stagesScroll}>
      <ol className={styles.stages} aria-label="Investment journey stages">
        {stages.map((stage, i) => {
          const isLast = i === stages.length - 1
          const status = getStageStatus(stage)
          return (
            <li key={stage.id} className={`${styles.stage} ${statusClass[status]}`}>
              <div className={styles.stageIconRow}>
                <span className={styles.stageIcon}>{icons[stage.icon]}</span>
                {!isLast && (
                  <span
                    className={`${styles.connector} ${status !== 'pending' ? styles.connectorOn : ''}`}
                    aria-hidden
                  />
                )}
              </div>
              <span className={styles.stageName}>{stage.name}</span>
              <span className={styles.stageStatus}>{statusLabel[status]}</span>
              <span className={styles.stagePct}>{getStageProgress(stage)}%</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}