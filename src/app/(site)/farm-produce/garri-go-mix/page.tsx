import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './garri-go-mix.module.css'

export const metadata: Metadata = {
  title: 'Garri Go Mix – Garri, Milk, Sugar & Groundnut, Ready in One Bottle | Agrolocale',
  description:
    'Garri Go Mix is garri, milk, sugar, and groundnut, pre-mixed in perfect proportion and bottled for the busiest mornings. No measuring, no mess — just shake, pour, and eat. Available in 330 ml and 500 ml — nationwide delivery.',
}

const accountabilityPoints = [
  {
    icon: '⚖️',
    title: 'Perfectly Balanced, Every Bottle',
    desc: 'Garri, milk, sugar, and groundnut go in at the same fixed ratio every single time — so bottle #1 tastes exactly like bottle #100.',
  },
  {
    icon: '🌿',
    title: 'Real Ingredients, Nothing Hidden',
    desc: 'Just garri, milk, sugar, and groundnut — the same combination you would mix yourself, minus the guesswork and the mess.',
  },
  {
    icon: '🏭',
    title: 'Sealed for Freshness',
    desc: 'Every bottle is sealed under controlled conditions we manage directly, so what you open is exactly what left our facility — no shortcuts, no outsourced quality.',
  },
]

// NOTE: swap in dedicated lifestyle/product shots per size if available —
// the two existing product photos are used below.
const sizeOptions = [
  { size: '330 ml', label: 'Grab & Go', price: '₦2000', image: '/farm-produce/garri-go-mix/garri_go_mix_330ml.jpeg' },
  { size: '500 ml', label: 'Family Size', price: '₦2,800', image: '/farm-produce/garri-go-mix/garri_go_mix_500ml.jpeg' },
]

export default function GarriGoMixPage() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroOverlay} aria-hidden />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.heroTag}>🥣 Garri · Milk · Sugar · Groundnut — All In One</span>
              <h1 className={styles.heroTitle}>
                Garri Go Mix —{' '}
                <em className={styles.heroAccent}>Breakfast, Bottled</em>{' '}
                for Whenever Life Moves Fast
              </h1>
              <p className={styles.heroSub}>
                No more juggling four separate bowls before you can eat. Garri Go Mix combines
                garri, milk, sugar, and groundnut — pre-measured, pre-mixed, and sealed in one
                bottle. Shake it, pour it, enjoy it. Anywhere, anytime.
              </p>
              <div className={styles.heroCtas}>
                <a href="#sizes" className={styles.ctaBuy}>Choose Your Size</a>
                <a href="#accountability" className={styles.ctaLearn}>See What&apos;s Inside ↓</a>
              </div>
            </div>
            <div className={styles.heroImgWrap}>
              {/* <div className={styles.heroBadgeHot}>🔥 Hot Cake</div>
              <div className={styles.heroBadgeStock}>In Stock</div> */}
              <Image
                // src="/farm-produce/garri_go_mix_500ml.jpeg"
                src="/farm-produce/garri-go-mix/garri-mix-6.jpg"
                alt="Garri Go Mix – garri, milk, sugar and groundnut in one bottle"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.heroImg}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INTRO */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustLeft}>
              <p className={styles.sectionTag}>The Honest Truth</p>
              <h2 className={styles.sectionTitle}>
                You Already Know How to Make This. We Just Saved You the Hassle.
              </h2>
            </div>
            <div className={styles.trustRight}>
              <p className={styles.trustPara}>
                Garri with milk, sugar, and groundnut isn&apos;t a new idea — it&apos;s a breakfast
                millions of us grew up on. The problem was never the combination. It was doing it
                at 6am, half-awake, juggling four different containers and hoping you didn&apos;t
                over-pour the sugar again.
              </p>
              <p className={styles.trustPara}>
                Or you&apos;re out the door, at school, at work, on a bus with no bowl, no spoon of
                milk, no groundnut in sight — and breakfast just doesn&apos;t happen. You promise
                yourself you&apos;ll prep it the night before. You rarely do.
              </p>
              <p className={styles.trustPara}>
                So the combination gets skipped more often than it should, not because you don&apos;t
                want it, but because putting it together every single time is more friction than
                a busy morning can afford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RHETORICAL QUESTION */}
      <section className={styles.questionSection}>
        <div className="container">
          <div className={styles.questionCard}>
            <div className={styles.questionMark}>&ldquo;</div>
            <h2 className={styles.questionText}>
              So why not just <span className={styles.questionAccent}>bottle the whole thing</span>?
            </h2>
            <p className={styles.questionAnswer}>
              That&apos;s exactly what we did. Garri Go Mix takes the classic combination you already
              love — garri, milk, sugar, and groundnut — and gets it right every time, so you don&apos;t
              have to measure a thing.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className={styles.originSection}>
        <div className="container">
          <div className={styles.originGrid}>
            <div className={styles.originImgWrap}>
              <Image
                src="/farm-produce/garri-go-mix/garri-mix.jpg"
                alt="Garri Go Mix 330 ml bottle"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className={styles.originOverlay} aria-hidden />
              <div className={styles.originPriceBadge}>
                <span className={styles.originPriceAmount}>₦2,000</span>
                <span className={styles.originPriceUnit}>per bottle</span>
              </div>
            </div>
            <div className={styles.originContent}>
              <p className={styles.sectionTag}>Why We Built This</p>
              <h2 className={styles.sectionTitle}>
                Four Ingredients. One Bottle. Zero Prep.
              </h2>
              <p className={styles.originPara}>
                We built Garri Go Mix because we noticed the same thing kept happening — people
                loved garri with milk, sugar, and groundnut, but rarely had the time or the
                ingredients on hand to put it together properly. So we did the mixing for you,
                at a ratio we tested and locked in, so every bottle tastes the way it should.
              </p>
              <p className={styles.originPara}>
                No sachets of milk to dig for. No sugar bowl to raid. No groundnut to hunt down
                in the kitchen cupboard. Just one bottle that already has everything in it.
              </p>
              <div className={styles.originCallout}>
                <span className={styles.originCalloutIcon}>🥣</span>
                <p className={styles.originCalloutText}>
                  What Garri Go Mix truly sells is <strong>convenience, without compromise</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIZES — pictorial pack picker */}
      <section id="sizes" className={styles.sizesSection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTag}>Pick Your Bottle</p>
            <h2 className={styles.sectionTitle}>Garri Go Mix Comes in 2 Sizes</h2>
            <p className={styles.sizesSub}>
              Grab the 330 ml for a quick one, or go for the 500 ml when the whole household is
              hungry.
            </p>
          </div>

          <div className={styles.sizesGrid}>
            {sizeOptions.map((opt) => (
              <div key={opt.size} className={styles.sizeCard}>
                <div className={styles.sizeImgWrap}>
                  <Image
                    src={opt.image}
                    alt={`Garri Go Mix – ${opt.size} bottle`}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.sizeImg}
                  />
                  <span className={styles.sizeBadge}>{opt.size}</span>
                </div>
                <div className={styles.sizeBody}>
                  <p className={styles.sizeLabel}>{opt.label}</p>
                  <div className={styles.sizePrice}>{opt.price}</div>
                  <Link
                    href={`https://wa.me/2348081977992?text=${encodeURIComponent(
                      `Hello, I am interested in buying the ${opt.size} bottle of Garri Go Mix (${opt.price}).`
                    )}`}
                    className={styles.sizeBtn}
                  >
                    Order {opt.size} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section id="accountability" className={styles.accountSection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTagLight}>What&apos;s Actually Inside</p>
            <h2 className={styles.sectionTitleLight}>Four Ingredients, Nothing More</h2>
            <p className={styles.accountSub}>
              No fillers, no strange additions — just garri, milk, sugar, and groundnut, mixed the
              way you&apos;d want it if you had the time to do it yourself.
            </p>
          </div>
          <div className={styles.accountGrid}>
            {accountabilityPoints.map((point, i) => (
              <div key={i} className={styles.accountCard}>
                <div className={styles.accountIcon}>{point.icon}</div>
                <h3 className={styles.accountTitle}>{point.title}</h3>
                <p className={styles.accountDesc}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CLOSE */}
      <section className={styles.closeSection}>
        <div className="container">
          <div className={styles.closeGrid}>
            <div className={styles.closeLeft}>
              <p className={styles.sectionTag}>Built for Real Mornings</p>
              <h2 className={styles.sectionTitle}>The Best Snack Is the One You Actually Have Time For</h2>
              <p className={styles.closePara}>
                Garri Go Mix isn&apos;t trying to reinvent breakfast — it&apos;s trying to make sure the
                one you already love actually happens, even on your busiest day.
              </p>
              <p className={styles.closePara}>
                Toss a bottle in your bag on the way to work. Keep one at your desk. Hand one to
                the kids before school. However it fits into your day, it&apos;s ready the moment
                you are.
              </p>
              <p className={styles.closePara}>
                Every bottle we seal is a promise that the mix inside is exactly what it should
                be — because a shortcut on ratio is a shortcut on the reason people love this
                combination in the first place.
              </p>
            </div>
            <div className={styles.closeStats}>
              {[
                { num: '4', lbl: 'Simple Ingredients' },
                { num: '2', lbl: 'Bottle Sizes' },
                { num: '🚚', lbl: 'Nationwide Delivery' },
                { num: '✅', lbl: 'Quality Guaranteed' },
              ].map((s, i) => (
                <div key={i} className={styles.closeStat}>
                  <span className={styles.closeStatNum}>{s.num}</span>
                  <span className={styles.closeStatLbl}>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUY CTA */}
      <section id="buy" className={styles.buySection}>
        <div className={styles.buyGlow} aria-hidden />
        <div className="container">
          <div className={styles.buyContent}>
            <span className={styles.buyTag}>🥣 Ready to Order?</span>
            <h2 className={styles.buyTitle}>Buy Garri Go Mix Today</h2>
            <p className={styles.buySub}>
              Join the households, students, and busy professionals who&apos;ve made breakfast
              one step instead of four. Nationwide delivery available.
            </p>
            <div className={styles.buyPrice}>
              <span className={styles.buyPriceAmount}>
                <span className={styles.buyPriceUnit}>From </span>
                ₦2,000
              </span>
              <span className={styles.buyPriceUnit}>· 330 ml & 500 ml bottles</span>
            </div>
            <div className={styles.buyBtns}>
              <a href="#sizes" className={styles.buyPrimary}>Choose Your Size ↑</a>
              <Link href={`https://wa.me/2348081977992?text=${encodeURIComponent(
                  `Hello, I am interested in buying Garri Go Mix.`
                )}`} className={styles.buySecondary}>Enquire via WhatsApp</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className={styles.backSection}>
        <div className="container">
          <Link href="/projects" className={styles.backLink}>← Back to All Listings</Link>
        </div>
      </section>
    </main>
  )
}