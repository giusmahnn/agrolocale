'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/image'
import styles from './home.module.css'
import {
  ProjectId,
  featuredProjects,
  farmProduce,
  homeData,
  testimonials,
  whyItems,
  cropTabs,
  adukeFlierImages,
  elysianFlierImages,
  anniversaryEventImages
} from '@/data/home.data'
import { Post } from '@/lib/sanity/queries'
import { useCarousel } from "@/hooks/useCarousel"
import AgronomicReports from "@/components/AgronomicReports";

const featuredProduceIds = new Set([2, 3, 4, 5])
const featuredProduce = farmProduce.filter((produce) => featuredProduceIds.has(produce.id))



/* ─── Animated counter hook ──────────────────────────── */
function useCountUp(target: number, running: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!running) return
    let frame = 0
    const total = 60
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((frame / total) * target))
      if (frame >= total) clearInterval(timer)
    }, 1800 / total)
    return () => clearInterval(timer)
  }, [running, target])
  return count
}

/* ─── Stat item ──────────────────────────────────────── */
function StatItem({ value, prefix, suffix, label, running }: { value: number; prefix: string; suffix: string; label: string; running: boolean }) {
  const count = useCountUp(value, running)
  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber}>{prefix}{count >= 1000 ? count.toLocaleString() : count}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

/* ─── Property card ──────────────────────────────────── */
function PropertyCard({ l }: { l: typeof farmProduce[0] & { pdfUrl?: string } }) {
  // const isAduke = l.id === 'aduke'
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrap}>
        <Image src={l.image} alt={l.title} fill sizes="(max-width:768px) 100vw, 33vw" className={styles.cardImg} />
        <span className={`${styles.cardBadge} ${l.badgeKey === 'red' ? styles.badgeRed : l.badgeKey === 'green' ? styles.badgeGreen : styles.badgeGold}`}>{l.badge}</span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardType}>{l.type}</p>
        <h3 className={styles.cardTitle}>{l.title}</h3>
        <p className={styles.cardLoc}>📍 {l.location}</p>

        <div className={styles.cardMeta}>
          <span>📐 {l.variants}</span>
          <span>✅ Verified</span>
        </div>

        <div className={styles.cardFooter}>
          <div>
            <div className={styles.cardPrice}>{l.price}</div>
            <span className={styles.cardPriceNote}>{/* isAduke ? 'Promo Price' : 'Asking Price' */}</span>
          </div>
          <Link href={l.href} className={styles.cardCta}>View Details</Link>
        </div>
        {l.pdfUrl && (
          <a href={l.pdfUrl} download className={styles.cardDownload}>
            📥 Download Brochure
          </a>
        )}
      </div>
    </div>
  )
}

/* ─── Flier Gallery Modal ────────────────────────────── */
function FlierModal({ title, images, onClose, pdfUrl }: { title: string; images: string[]; onClose: () => void; pdfUrl?: string }) {
  const [activeIdx, setActiveIdx] = useState(0)

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const prev = () => setActiveIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setActiveIdx(i => (i + 1) % images.length)

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${title} fliers`}>
      <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title} – Fliers &amp; Offers</h2>
          <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        {/* Main image */}
        <div className={styles.modalImgWrap}>
          <Image
            src={images[activeIdx]}
            alt={`${title} flier ${activeIdx + 1}`}
            fill
            sizes="(max-width:768px) 100vw, 70vw"
            className={styles.modalImg}
          />
          {images.length > 1 && (
            <>
              <button className={`${styles.modalNav} ${styles.modalNavPrev}`} onClick={prev} aria-label="Previous">‹</button>
              <button className={`${styles.modalNav} ${styles.modalNavNext}`} onClick={next} aria-label="Next">›</button>
            </>
          )}
          <div className={styles.modalCounter}>{activeIdx + 1} / {images.length}</div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className={styles.modalThumbs}>
            {images.map((src, i) => (
              <button
                key={i}
                className={`${styles.modalThumb} ${i === activeIdx ? styles.modalThumbActive : ''}`}
                onClick={() => setActiveIdx(i)}
                aria-label={`View flier ${i + 1}`}
              >
                <Image src={src} alt={`Thumb ${i + 1}`} fill sizes="80px" style={{ objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className={styles.modalFooter}>
          {pdfUrl && (
            <a href={pdfUrl} download className={styles.modalPdfDownload}>
              📥 Download Brochure
            </a>
          )}
          <Link href="/contact" className={styles.modalCta}>Enquire Now →</Link>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────── */

export default function HomeClient({ posts = [] }: { posts?: Post[] }) {
  const [statsOn, setStatsOn] = useState(false)
  const [activeTest, setActiveTest] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [openModal, setOpenModal] = useState<ProjectId | null>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const {
    scrollRef: produceScrollRef,
    scrollByCard: produceScrollByCard,
    startAutoScroll: produceStartAutoScroll,
    stopAutoScroll: produceStopAutoScroll,
  } = useCarousel(styles.produceCard, 40);

  const {
    scrollRef: listingsScrollRef,
    scrollByCard: listingsScrollByCard,
    startAutoScroll: listingsStartAutoScroll,
    stopAutoScroll: listingsStopAutoScroll,
  } = useCarousel(styles.card, 45);

  /* Intersect stats */
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsOn(true); obs.disconnect() } }, { threshold: 0.3 })
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  /* Testimonial auto-advance */
  useEffect(() => {
    const t = setInterval(() => setActiveTest(v => (v + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        {/* Video background */}
        <div className={styles.heroBg} aria-hidden>
          <iframe
            className={styles.heroBgVideo}
            src="https://www.youtube.com/embed/hChiqAQWyEM?autoplay=1&mute=1&loop=1&playlist=hChiqAQWyEM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1"
            title="Agrolocale hero background"
            allow="autoplay; fullscreen"
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden />

        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>🌾 Nigeria&apos;s Innovative Agro-Realty Firm</span>

            <h1 className={styles.heroTitle}>
              Nigeria&apos;s Trusted Bridge for
              <em className={styles.heroTitleAccent}>Farm &amp; Resort Investment</em>
            </h1>
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden>
          <div className={styles.scrollMouse}><div className={styles.scrollDot} /></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── FEATURED ON BANNER ───────────────────────── */}
      <section className={styles.featuredBanner}>
        <div className="container">
          <div className={styles.featuredGrid}>
            <span className={styles.featuredLabel}>As Featured On</span>
            <span className={styles.featuredLogo}>TVC NEWS</span>
            <span className={styles.featuredLogo}>VANGUARD NEWS</span>
          </div>
        </div>
      </section>
      <AgronomicReports />
      {/* ─── 2-YEAR ANNIVERSARY CELEBRATION ───────────────── */}
      <section className={styles.anniversaryPromoSection}>
        <div className="container">
          <div className={styles.anniversaryGrid}>
            <div className={styles.anniversaryImgZone}>
              <div className={styles.anniversaryBadgeOverlay}>
                <Image
                  src="/images/logo_anniversary.png"
                  alt="Agrolocale @ 2 Logo"
                  width={80}
                  height={104}
                  className={styles.anniversaryLogoFloat}
                />
              </div>
              <div className={styles.anniversaryImgMain}>
                <Image
                  src="/images/anniversary.png"
                  alt="Agrolocale Celebrating 2 Years"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div className={styles.anniversaryContent}>
              <span className={styles.anniversaryTag}>🎉 Milestone Celebration</span>
              <h2 className={styles.anniversaryTitle}>
                Celebrating 2 Years of <br />
                <span className={styles.goldText}>Agro-Realty Excellence</span>
              </h2>
              <p className={styles.anniversaryText}>
                We are thrilled to celebrate Agrolocale&apos;s 2-Year Anniversary! Since our launch in 2024, we have served as Nigeria&apos;s trusted bridge for premium agricultural investments, farm resort developments, and land acquisitions.
              </p>
              <p className={styles.anniversaryText}>
                Over the past two years, we have empowered over 250 registered investors, developed thriving farm estate projects, and served hundreds of households nationwide. Thank you for your continued trust.
              </p>
              <div className={styles.anniversaryCtaRow}>
                <Link href="/gallery" className={styles.anniversaryCtaBtn}>
                  Explore Celebration Gallery
                </Link>
                <Link href="/about" className={styles.anniversarySecondaryBtn}>
                  Read Our Story →
                </Link>
              </div>
            </div>
          </div>

          {/* Photos from the Celebration Event */}
          <div className={styles.anniversaryPhotosWrap}>
            <h3 className={styles.anniversaryPhotosTitle}>Moments from our 2-Year Celebration</h3>
            <div className={styles.anniversaryPhotosGrid}>
              {anniversaryEventImages.map((img, i) => (
                <div key={i} className={styles.anniversaryPhotoCard}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className={styles.anniversaryPhoto}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE GROW ─────────────────────────────── */}
      <section className={styles.growSection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTag}>Eco-Resort &amp; Farmlands</p>

            <h2 className={styles.sectionTitle}>
              Invest in Premium eco-developments
            </h2>

            <p className={styles.sectionSub} style={{ margin: '0 auto' }}>
              Experience the perfect synergy of agricultural prosperity, luxury
              eco-resorts, and sustainable farm property investment.
            </p>
            <Link href="/projects" className={styles.viewAll}>View All Projects →</Link>
          </div>

          <div
            className={styles.produceCarouselWrap}
            onMouseEnter={produceStopAutoScroll}
            onMouseLeave={produceStartAutoScroll}
            onTouchStart={produceStopAutoScroll}
          >
            <button
              type="button"
              className={`${styles.produceCarouselBtn} ${styles.produceCarouselBtnPrev}`}
              onClick={() => { produceStopAutoScroll(); produceScrollByCard('left'); }}
              aria-label="Previous project"
            >
              ←
            </button>

            <div className={styles.produceGrid} ref={produceScrollRef}>
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`${styles.produceCard} ${styles.produceCardClickable}`}
                  onClick={() => setOpenModal(project.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} fliers`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setOpenModal(project.id)
                    }
                  }}
                >
                  <div className={styles.produceImgWrap}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width:768px) 100vw, 55vw"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : project.video ? (
                      <div className={styles.produceVideoWrap}>
                        <iframe
                          src={project.video}
                          title={project.alt}
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
                    ) : null}

                    <span className={styles.produceBadgeHot}>
                      {project.badgeIcon} {project.badge}
                    </span>

                    <span className={styles.produceBadgeAvail}>
                      {project.status}
                    </span>

                    <div className={styles.produceViewFlier}>
                      <div className={styles.produceViewFlierIcon}>
                        📸
                      </div>

                      <div className={styles.produceViewFlierText}>
                        View Project Fliers
                      </div>
                    </div>
                  </div>

                  <div className={styles.produceBody}>
                    <h3 className={styles.produceName}>
                      {project.title}
                    </h3>

                    <div className={styles.produceTagRow}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={styles.produceTag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={styles.produceStats}>
                      <div className={styles.produceStatsItem}>
                        <span className={styles.produceStatsIcon}>
                          📍
                        </span>

                        <span>{project.location}</span>
                      </div>

                      <div className={styles.produceStatsItem}>
                        <span className={styles.produceStatsIcon}>
                          ✅
                        </span>

                        <span>{project.status}</span>
                      </div>
                    </div>

                    <div className={styles.produceActionBtn}>
                      <span>Explore Brochure &amp; Fliers</span>

                      <span className={styles.produceActionArrow}>
                        →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.produceCarouselBtn} ${styles.produceCarouselBtnNext}`}
              onClick={() => { produceStopAutoScroll(); produceScrollByCard('right'); }}
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ─── COMMITMENT TO QUALITY ────────────────────── */}
      <section className={styles.qualitySection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTag}>Why Choose Our Produce</p>
            <h2 className={styles.sectionTitle}>Our Commitment to Quality</h2>
          </div>
          <div className={styles.qualityGrid}>
            <div className={styles.qualityCard}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌾</div>
              <h3 className={styles.qualityTitle}>Farm-Fresh Quality & Locally Grown</h3>
              <p className={styles.qualityDesc}>Every produce is nutritious and bursting with natural flavor. Fully traceable from our farm to your table.</p>
            </div>
            <div className={styles.qualityCard}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚫</div>
              <h3 className={styles.qualityTitle}>Zero Harmful Chemicals</h3>
              <p className={styles.qualityDesc}>We grow without synthetic pesticides or artificial fertilisers to ensure your health and safety.</p>
            </div>
            <div className={styles.qualityCard} style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
              <h3 className={styles.qualityTitle}>Restaurant & Food Business Alliance</h3>
              <p className={styles.qualityDesc}>Agrolocale partners directly with chefs, restaurant owners, and more. With no middleman inflating prices, you get the best value for premium produce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ────────────────────────── */}
      <section className={styles.visionMissionHome}>
        <div className="container">
          <div className={styles.homeGrid2}>
            <div className={styles.visionBox}>
              <p className={styles.sectionTag}>Our Vision</p>
              <h2 className={styles.homeSectionTitle}>Global Agro Impact</h2>
              <p className={styles.homeSectionText}>
                To be the go-to company in Africa and the world for everything Agro purchase, investment, research, and technology.
              </p>
            </div>
            <div className={styles.missionBox}>
              <p className={styles.sectionTag}>Our Mission</p>
              <h2 className={styles.homeSectionTitle}>Food Security for All</h2>
              <p className={styles.homeSectionText}>
                To produce as many farmland owners as possible within our premium farm estate developments for food security & sufficiency in the economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────── */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className="container">
          <div className={styles.statsGrid}>
            {homeData.map((s, i) => (
              <StatItem key={i} {...s} running={statsOn} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED LISTINGS ────────────────────────── */}
      <section className={styles.listingsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionTag}>Farm Produce</p>
              <h2 className={styles.sectionTitle}>Featured Produce</h2>
              <p className={styles.sectionSub}>
                Hand-picked premium agricultural products across Nigeria&apos;s most fertile regions.
              </p>
            </div>
            <Link href="/farm-produce" className={styles.viewAll}>View All Produce →</Link>
          </div>

          <div
            className={styles.cardsCarouselWrap}
            onMouseEnter={listingsStopAutoScroll}
            onMouseLeave={listingsStartAutoScroll}
            onTouchStart={listingsStopAutoScroll}
          >
            <button
              type="button"
              className={`${styles.cardsCarouselBtn} ${styles.cardsCarouselBtnPrev}`}
              onClick={() => { listingsStopAutoScroll(); listingsScrollByCard('left'); }}
              aria-label="Previous listing"
            >
              ←
            </button>

            <div className={styles.cardsGridScroll} ref={listingsScrollRef}>
              {[...featuredProduce, ...featuredProduce].map((produce, i) => (
                <PropertyCard key={`${produce.id}-${i}`} l={produce} />
              ))}
            </div>

            <button
              type="button"
              className={`${styles.cardsCarouselBtn} ${styles.cardsCarouselBtnNext}`}
              onClick={() => { listingsStopAutoScroll(); listingsScrollByCard('right'); }}
              aria-label="Next listing"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ─── ELYSIAN FARM SPOTLIGHT VIDEO ────────────── */}
      <section className={styles.elysianVideoSection}>
        <div className={styles.elysianVideoBg} aria-hidden />
        <div className="container">
          <div className={styles.elysianVideoInner}>

            {/* Header */}
            <div className={styles.elysianVideoHeader}>
              <p className={`${styles.sectionTag} ${styles.sectionTagLight}`}>Farm &amp; Resort Spotlight</p>
              <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
                Discover Elysian Farms and Resort
              </h2>
              <p className={styles.elysianVideoSub}>
                Take a virtual tour of one of our flagship properties — a serene, premium-grade farm and resort
                nestled along the Ido-Eruwa Expressway, Ibadan, built for both agricultural investment and leisure.
              </p>
            </div>

            {/* Video frame */}
            <div className={styles.elysianVideoFrame}>
              <iframe
                id="elysian-farm-video"
                src="https://www.youtube.com/embed/Gt0zpaq3-I4?autoplay=1&mute=1&mute=1&rel=0&modestbranding=1"
                title="Elysian Farms and Resort – Property Tour"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allow="autoplay; fullscreen"
                allowFullScreen
                className={styles.elysianIframe}
              />
            </div>

            {/* Meta row */}
            <div className={styles.elysianVideoMeta}>
              <div className={styles.elysianMetaChip}>📍 Ido-Eruwa Expressway, Ibadan</div>
              <div className={styles.elysianMetaChip}>🌾 Farm &amp; Resort</div>
              <div className={styles.elysianMetaChip}>✅ Available on Sale</div>
              <a href="/projects" className={styles.elysianMetaCta}>View Listing Details →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHY AGROLOCALE ──────────────────────────── */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTag}>Why Choose Us</p>
            <h2 className={styles.sectionTitle}>The Agrolocale Advantage</h2>
            <p className={styles.sectionSub} style={{ margin: '0 auto' }}>
              We combine local expertise with modern technology to make agricultural land acquisition simple, safe, and successful.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyItems.map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─────────────────────────────── */}
      <section className={styles.homeValuesSection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTag}>What Drives Us</p>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
          </div>
          <div className={styles.homeValuesGrid}>
            {[
              { icon: '👨‍👩‍👧‍👦', title: 'Family' },
              { icon: '⭐', title: 'Excellence' },
              { icon: '💎', title: 'Quality' },
              { icon: '🙏', title: 'Humility' },
              { icon: '⚖️', title: 'Integrity' },
              { icon: '🤝', title: 'Teamwork' },
              { icon: '💬', title: 'Communication' },
              { icon: '💡', title: 'Innovation' },
              { icon: '📋', title: 'Accountability' },
              { icon: '🚀', title: 'Technology' },
            ].map((v, i) => (
              <div key={i} className={styles.homeValueCard}>
                <span className={styles.homeValueIcon}>{v.icon}</span>
                <h3 className={styles.homeValueTitle}>{v.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ───────────────────────────── */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImgZone}>
              <div className={styles.imgMain}>
                <Image src="/gallery-2.png" alt="Nigerian farmland" fill sizes="50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgSub}>
                <Image src="/gallery-3.png" alt="Agricultural land" fill sizes="30vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>

            <div className={styles.aboutContent}>
              <p className={styles.sectionTag}>Our Story</p>
              <h2 className={styles.sectionTitle}>Nigeria&apos;s Innovative Agro-Realty Firm</h2>
              <p className={styles.aboutText}>
                Since 2024, Agrolocale has been the bridge between profitable farmland investment and ownership, farm resort projects and the investors who need it the most — making land ownership transparent, efficient, and rewarding.
              </p>
              <p className={styles.aboutText}>
                Our certified agro-realty experts conduct rigorous due diligence on every listing — giving you accurate information, clear titles, and fair valuations every time.
              </p>
              <div className={styles.aboutMini}>
                <div><div className={styles.miniNum}>9+</div><div className={styles.miniLbl}>Projects Completed</div></div>
                <div><div className={styles.miniNum}>832+</div><div className={styles.miniLbl}>Registered Investors</div></div>
                <div><div className={styles.miniNum}>350+</div><div className={styles.miniLbl}>Households Served</div></div>
              </div>
              <Link href="/about" className={styles.aboutCta}>Learn More About Us →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER VIDEO ───────────────────────────── */}
      <section className={styles.founderSection}>
        <div className={styles.founderBg} aria-hidden />
        <div className="container">
          <div className={styles.founderGrid}>

            {/* Left: text */}
            <div className={styles.founderText}>
              <p className={`${styles.sectionTag} ${styles.sectionTagLight}`}>Meet Our Founder</p>
              <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
                A Vision Rooted in Nigeria&apos;s Agricultural Future
              </h2>
              <p className={styles.founderPara}>
                Korede Ayeni — founder and CEO of Agrolocale — built this company on a single conviction: that every Nigerian deserves transparent, dignified access to agricultural land and the prosperity that comes with it.
              </p>
              <p className={styles.founderPara}>
                Since launching in 2024, Korede has steered Agrolocale to become the bridge between profitable farmland investment and ownership, farm resort projects and the investors who need it the most. Under his leadership, Agrolocale has grown to serve over <strong>350+ households</strong>, registered <strong>832+ investors</strong>, and successfully completed <strong>6+ projects</strong> — all while keeping food security and community impact at the heart of every decision.
              </p>
              <p className={styles.founderPara}>
                His approach blends deep agricultural knowledge with modern technology, creating a platform that is not just a marketplace — but a movement toward sustainable food production and economic empowerment across Nigeria and beyond.
              </p>
              <div className={styles.founderQuote}>
                <span className={styles.founderQuoteMark}>&quot;</span>
                <p>We are not just selling land. We are creating farmland owners — people who contribute to feeding Africa and building generational wealth for their families.</p>
                <cite className={styles.founderCite}>— Korede Ayeni, Founder &amp; CEO, Agrolocale</cite>
              </div>
            </div>

            {/* Right: video */}
            <div className={styles.founderVideoWrap}>
              <div className={styles.founderVideoFrame}>
                <iframe
                  id="founder-video"
                  src="https://www.youtube.com/embed/CmEZOJe_M6s?rel=0&modestbranding=1"
                  title="Korede Ayeni – Founder & CEO of Agrolocale"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.founderIframe}
                />
              </div>
              <div className={styles.founderVideoMeta}>
                <div className={styles.founderAvatar}>KA</div>
                <div>
                  <div className={styles.founderName}>Korede Ayeni</div>
                  <div className={styles.founderRole}>Founder &amp; CEO · Agrolocale</div>
                </div>
                <a
                  href="https://www.youtube.com/@Agrolocale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.founderYtBtn}
                  aria-label="Agrolocale on YouTube"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1e4530" />
                  </svg>
                  Subscribe on YouTube
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PRODUCE GALLERY ──────────────────────────── */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionCenter} style={{ marginBottom: '2rem' }}>
            <p className={styles.sectionTag}>Farm Produce Gallery</p>
            <h2 className={styles.sectionTitle}>A Showcase of Farm-Fresh Produce</h2>
            <p className={styles.sectionSub} style={{ margin: '0 auto' }}>
              Explore the quality crops cultivated across our partner farms — from fiery habaneros to golden maize and hearty sweet potatoes.
            </p>
          </div>

          {/* Crop tabs */}
          <div className={styles.cropTabs}>
            {cropTabs.map((tab, i) => (
              <button
                key={tab.key}
                className={`${styles.cropTab} ${activeTab === i ? styles.cropTabActive : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image scroll strip */}
          <div className={styles.cropStripWrap}>
            <div className={styles.cropStrip}>
              {[...cropTabs[activeTab].images, ...cropTabs[activeTab].images].map((src, i) => (
                <div key={i} className={styles.cropCard}>
                  <Image
                    src={src}
                    alt={`${cropTabs[activeTab].label} ${i + 1}`}
                    fill
                    sizes="(max-width:640px) 80vw, 300px"
                    className={styles.cropImg}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Anniversary notice */}
          <div className={styles.elysianNotice}>
            <span className={styles.elysianBadge} style={{ background: 'var(--gold-500)', color: 'var(--green-900)' }}>🎉 2 Years Celebration</span>
            <p>
              Agrolocale is proud to celebrate <strong>2 Years of Excellence</strong>. Discover our journey, our milestones, and our vision for the next decade.
            </p>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────── */}
      <section className={styles.testiSection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={`${styles.sectionTag} ${styles.sectionTagLight}`}>What Clients Say</p>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Trusted by Farmers &amp; Investors</h2>
          </div>

          <div className={styles.testiGrid}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${styles.testiCard} ${i === activeTest ? styles.testiActive : ''}`}
                onClick={() => setActiveTest(i)}
              >
                <div className={styles.testiQuote}>&ldquo;</div>
                <p className={styles.testiText}>{t.quote}</p>
                <div className={styles.testiStars}>★★★★★</div>
                <div className={styles.testiAuthor}>
                  <div className={styles.testiAvatar} style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.testiDots}>
            {testimonials.map((_, i) => (
              <button key={i} className={`${styles.testiDot} ${i === activeTest ? styles.dotActive : ''}`} onClick={() => setActiveTest(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST INSIGHTS ─────────────────────────── */}
      <section className={styles.insightsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.sectionTag}>Our Blog</p>
              <h2 className={styles.sectionTitle}>Latest Insights</h2>
              <p className={styles.sectionSub}>
                Stay updated with the latest news, market trends, and expert guides for agricultural investment.
              </p>
            </div>
            <Link href="/blog" className={styles.viewAll}>View All Posts →</Link>
          </div>

          {posts.length > 0 ? (
            <div className={styles.cardsGrid}>
              {[...posts, ...posts].map((post, i) => (
                <Link
                  key={`${post._id}-${i}`}
                  href={`/blog/${post.slug.current}`}
                  className={`${styles.blogCard} ${i >= posts.length ? styles.blogCardDupe : ''}`}
                  aria-hidden={i >= posts.length ? true : undefined}
                  tabIndex={i >= posts.length ? -1 : undefined}
                >
                  <div className={styles.blogImgWrap}>
                    {post.coverImage ? (
                      <Image
                        src={urlFor(post.coverImage).width(600).height(400).url()}
                        alt={post.coverImage.alt || post.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className={styles.blogImg}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', background: '#f5f7f5' }}>🌾</div>
                    )}
                    <span className={styles.blogBadge}>{post.categories?.[0] || 'Article'}</span>
                  </div>
                  <div className={styles.blogCardBody}>
                    <span className={styles.blogDate}>
                      {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt || 'Read the full article...'}</p>
                    <span className={styles.blogReadMore}>Read Article →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>More updates coming soon.</p>
          )}
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} aria-hidden />
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Find Your Perfect Farmland?</h2>
            <p className={styles.ctaSub}>
              Join thousands of farmers and investors who&apos;ve found their ideal agricultural property through Agrolocale.
            </p>
            <div className={styles.ctaBtns}>
              <Link href="/projects" className={styles.ctaPrimary}>Browse Listings</Link>
              <Link href="/contact" className={styles.ctaSecondary}>Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FLIER MODALS ────────────────────────────── */}
      {openModal === 'aduke' && (
        <FlierModal
          title="Aduke Cottages"
          images={adukeFlierImages}
          onClose={() => setOpenModal(null)}
          pdfUrl="/docs/Aduke Brochure.pdf"
        />
      )}
      {openModal === 'elysian' && (
        <FlierModal
          title="Elysian Farms & Resort"
          images={elysianFlierImages}
          onClose={() => setOpenModal(null)}
        />
      )}
    </main>
  )
}