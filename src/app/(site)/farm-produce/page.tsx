'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './farm-produce.module.css'
import { farmProduce } from '@/data/home.data'

type SortKey = 'default' | 'name-asc' | 'name-desc'

/* ─── Product Card ───────────────────────────────────── */
function ProduceCard({ p }: { p: typeof farmProduce[number] }) {
  const badgeClass =
    p.badgeKey === 'green' ? styles.badgeGreen
    : p.badgeKey === 'red' ? styles.badgeRed
    : styles.badgeGold

  return (
    <article className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={p.image}
          alt={p.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          className={styles.img}
        />
        {p.badge && <span className={`${styles.badge} ${badgeClass}`}>{p.badge}</span>}
      </div>

      <div className={styles.cardBody}>
        <p className={styles.cardType}>{p.type}</p>
        <h2 className={styles.cardTitle}>{p.title}</h2>
        <p className={styles.cardLoc}>🚚 {p.location}</p>

        <div className={styles.cardMeta}>
          <span>{p.variants}</span>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardPrice}>{p.price}</div>
          <Link href={p.href} className={styles.orderBtn}>
            Order Now
          </Link>
        </div>
      </div>
    </article>
  )
}

/* ─── Page ───────────────────────────────────────────── */
export default function FarmProducePage() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<SortKey>('default')

  const results = useMemo(() => {
    let d = [...farmProduce]

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      d = d.filter(p => p.title.toLowerCase().includes(q))
    }

    if (sort === 'name-asc')  d.sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'name-desc') d.sort((a, b) => b.title.localeCompare(a.title))

    return d
  }, [query, sort])

  const resetFilters = () => { setQuery(''); setSort('default') }

  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <p className={styles.headerTag}>Farm-Fresh &amp; Direct</p>
          <h1 className={styles.headerTitle}>Farm Produce Marketplace</h1>
          <p className={styles.headerSub}>
            Quality crops and staples sourced directly from our partner farms — delivered fresh, nationwide.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Toolbar */}
        <div className={styles.toolbar}>
          <p className={styles.resultCount}>
            <strong>{results.length}</strong> product{results.length !== 1 ? 's' : ''} found
          </p>

          <div className={styles.toolbarRight}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search produce..."
              className={styles.searchInput}
              aria-label="Search produce"
            />
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortKey)}
              className={styles.sortSel}
              aria-label="Sort produce"
            >
              <option value="default">Default</option>
              <option value="name-asc">Name: A → Z</option>
              <option value="name-desc">Name: Z → A</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {results.length > 0 ? (
          <div className={styles.grid}>
            {results.map(p => (
              <ProduceCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🌾</div>
            <h3>No Produce Found</h3>
            <p>Try a different search term.</p>
            <button className={styles.emptyReset} onClick={resetFilters}>Clear Search</button>
          </div>
        )}
      </div>
    </main>
  )
}