import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './habanero.module.css'

export const metadata: Metadata = {
  title: 'Habanero – Fresh, Fiery Farm Pepper | Agrolocale',
  description:
    'Habanero is farm-fresh pepper harvested at peak ripeness and handled under strict quality control from farm to bag. Consistent heat, consistent quality. ₦24,590 / 25 kg — nationwide delivery.',
}

const accountabilityPoints = [
  {
    icon: '🌶️',
    title: 'Hand-Picked at Peak Ripeness',
    desc: 'Every batch of habanero is harvested at the point of peak ripeness, giving you consistent color, heat, and flavor in every bag.',
  },
  {
    icon: '🧊',
    title: 'Cold-Chain Handling',
    desc: 'From the farm to dispatch, our peppers move through a controlled cold-chain process that preserves freshness and slows spoilage — never left to sit and degrade in the sun.',
  },
  {
    icon: '🔍',
    title: 'Sorted & Graded by Hand',
    desc: 'Each bag is hand-sorted to remove damaged, underripe, or overripe peppers before it ever reaches you — no shortcuts, no bulk dumping.',
  },
]

export default function HabaneroPage() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroOverlay} aria-hidden />
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.heroTag}>🌾 Farm-Direct · Nationwide Delivery</span>
              <h1 className={styles.heroTitle}>
                Habanero —{' '}
                <em className={styles.heroAccent}>Real Heat, Real Freshness</em>{' '}
                Straight From The Farm
              </h1>
              <p className={styles.heroSub}>
                Fiery, farm-fresh habanero peppers handled with the same care from harvest to
                delivery. No shortcuts, no guesswork — just consistent quality, batch after batch.
              </p>
              <div className={styles.heroCtas}>
                <a href="#buy" className={styles.ctaBuy}>Buy Habanero Today</a>
                <a href="#accountability" className={styles.ctaLearn}>See What&apos;s Inside ↓</a>
              </div>
            </div>
            <div className={styles.heroImgWrap}>
              {/* <div className={styles.heroBadgeHot}>🔥 Hot Cake</div>
              <div className={styles.heroBadgeStock}>In Stock</div> */}
              <Image
                src="/images/gallery/habanero-3.jpeg"
                alt="Habanero – Fresh Farm Pepper 25 kg"
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
                Buying Pepper Online Feels Like a Gamble. We Know That.
              </h2>
            </div>
            <div className={styles.trustRight}>
              <p className={styles.trustPara}>
                It&apos;s not because fresh produce can&apos;t be sold this way — it&apos;s because too many
                of us have ordered &ldquo;fresh&rdquo; pepper and received something wilted, half-spoiled,
                or nothing like what the photo promised.
              </p>
              <p className={styles.trustPara}>
                A nice product photo doesn&apos;t tell you how the pepper was picked, how it traveled,
                or how many hands it passed through before reaching your door. You open the bag
                hoping for the best — and sometimes it just isn&apos;t.
              </p>
              <p className={styles.trustPara}>
                So you go back to the market stall you already trust — not because it&apos;s perfect,
                but because you know roughly what to expect. That caution isn&apos;t unreasonable.
                It&apos;s earned.
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
              So, why should <span className={styles.questionAccent}>Habanero</span> be any different?
            </h2>
            <p className={styles.questionAnswer}>
              Fair question. We&apos;re not asking you to just trust the label — we&apos;d rather show
              you exactly how our habanero is grown, handled, and delivered, so you can judge for
              yourself.
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
                src="/farm-produce/pepper/pepper.jpg"
                alt="Habanero 25 kg farm-fresh pepper bag"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className={styles.originOverlay} aria-hidden />
              <div className={styles.originPriceBadge}>
                <span className={styles.originPriceAmount}>₦4,000</span>
                <span className={styles.originPriceUnit}>per kg</span>
              </div>
            </div>
            <div className={styles.originContent}>
              <p className={styles.sectionTag}>Why We Grow It This Way</p>
              <h2 className={styles.sectionTitle}>
                Habanero Wasn&apos;t Built to Be Just Another Bag of Pepper
              </h2>
              <p className={styles.originPara}>
                Too much of the pepper sold in bulk gets picked early, handled roughly, and sits
                too long before it reaches a buyer — by then the heat, color, and freshness have
                already faded. We built our habanero line around fixing exactly that: pick at the
                right time, handle it properly, move it fast.
              </p>
              <div className={styles.originCallout}>
                <span className={styles.originCalloutIcon}>🌶️</span>
                <p className={styles.originCalloutText}>
                  What Habanero truly sells is <strong>freshness you can actually taste</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section id="accountability" className={styles.accountSection}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <p className={styles.sectionTagLight}>Our Promise</p>
            <h2 className={styles.sectionTitleLight}>Here&apos;s What Goes Into Every Bag</h2>
            <p className={styles.accountSub}>
              None of this shows on the outside of the bag — but it&apos;s all there in the pepper
              you find when you open it.
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
              <p className={styles.sectionTag}>Building Trust the Right Way</p>
              <h2 className={styles.sectionTitle}>Freshness Isn&apos;t Earned by Saying So</h2>
              <p className={styles.closePara}>
                It&apos;s earned by delivering the same quality bag after bag, order after order.
              </p>
              <p className={styles.closePara}>
                Habanero is still building its name, and we&apos;re not going to pretend otherwise.
                But every order matters right now — it&apos;s the reason we can&apos;t afford to cut
                corners on harvesting, handling, or delivery.
              </p>
              <p className={styles.closePara}>
                Every bag that leaves our farm carries our name on it. That&apos;s not pressure —
                it&apos;s exactly why we keep the standard high.
              </p>
            </div>
            <div className={styles.closeStats}>
              {[
                { num: 'kg', lbl: '' },
                { num: '₦4,000', lbl: 'Current Price' },
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
            <span className={styles.buyTag}>🌶️ Ready to Order?</span>
            <h2 className={styles.buyTitle}>Buy Habanero Today</h2>
            <p className={styles.buySub}>
              Join households and food businesses who&apos;ve made the switch to fresh, reliably
              sourced habanero. Nationwide delivery available.
            </p>
            <div className={styles.buyPrice}>
              <span className={styles.buyPriceAmount}>₦4,000</span>
              <span className={styles.buyPriceUnit}>/ kg</span>
            </div>
            <div className={styles.buyBtns}>
              <Link href="/contact" className={styles.buyPrimary}>Place an Order →</Link>
              <Link href={`https://wa.me/2348081977992?text=${encodeURIComponent(
                  `Hello, I am interested in buying habanero (pepper).`
                )}`}
                className={styles.buySecondary}>Enquire via WhatsApp</Link>
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