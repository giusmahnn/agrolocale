import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './yam-tuber.module.css'

export const metadata: Metadata = {
  title: 'Yam Tuber – Fresh & Nutritious Farm Yam | Agrolocale',
  description:
    'Farm-fresh yam tubers harvested and handled with care from farm to delivery. Consistent quality, no shortcuts. ₦24,590 / 25 kg — nationwide delivery.',
}

const accountabilityPoints = [
  {
    icon: '🍠',
    title: 'Harvested at the Right Maturity',
    desc: 'Every batch is dug up at the right point of maturity, giving you firm, well-formed tubers instead of ones pulled too early or left too long in the ground.',
  },
  {
    icon: '🧊',
    title: 'Careful Post-Harvest Handling',
    desc: 'From the farm to dispatch, our yam tubers are handled to avoid cuts and bruising — never dumped or dragged in ways that shorten shelf life or invite rot.',
  },
  {
    icon: '🔍',
    title: 'Sorted & Graded by Hand',
    desc: 'Each batch is hand-sorted to remove damaged, diseased, or undersized tubers before it ever reaches you — no shortcuts, no bulk dumping.',
  },
]

export default function YamPage() {
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
                Yam Tuber —{' '}
                <em className={styles.heroAccent}>Fresh & Nutritious</em>{' '}
                From Farm to Table
              </h1>
              <p className={styles.heroSub}>
                Yam tubers handled with the same care from harvest to delivery, so they reach you
                firm and ready to cook. No shortcuts, no guesswork — just consistent quality,
                batch after batch.
              </p>
              <div className={styles.heroCtas}>
                <a href="#buy" className={styles.ctaBuy}>Buy Yam Tuber Today</a>
                <a href="#accountability" className={styles.ctaLearn}>See What&apos;s Inside ↓</a>
              </div>
            </div>
            <div className={styles.heroImgWrap}>
              {/* <div className={styles.heroBadgeHot}>🔥 Hot Cake</div>
              <div className={styles.heroBadgeStock}>In Stock</div> */}
              <Image
                src="/farm-produce/yam.jpg"
                alt="Yam Tuber – Fresh & Nutritious Farm Yam 25 kg"
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
                Buying Yam Online Feels Like a Gamble. We Know That.
              </h2>
            </div>
            <div className={styles.trustRight}>
              <p className={styles.trustPara}>
                It&apos;s not because fresh produce can&apos;t be sold this way — it&apos;s because too many
                of us have ordered &ldquo;fresh&rdquo; yam and received something soft, rotten at the
                core, or nothing like what the photo promised.
              </p>
              <p className={styles.trustPara}>
                A nice product photo doesn&apos;t tell you how the tuber was harvested, how it
                traveled, or how many hands it passed through before reaching your door. You cut
                it open hoping for the best — and sometimes it just isn&apos;t.
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
              So, why should <span className={styles.questionAccent}>Yam Tuber</span> be any different?
            </h2>
            <p className={styles.questionAnswer}>
              Fair question. We&apos;re not asking you to just trust the label — we&apos;d rather show
              you exactly how our yam is grown, handled, and delivered, so you can judge for
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
                src="/farm-produce/yam.jpg"
                alt="Yam Tuber 25 kg farm-fresh bag"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className={styles.originOverlay} aria-hidden />
              <div className={styles.originPriceBadge}>
                <span className={styles.originPriceAmount}>₦24,590</span>
                <span className={styles.originPriceUnit}>per 25 kg bag</span>
              </div>
            </div>
            <div className={styles.originContent}>
              <p className={styles.sectionTag}>Why We Grow It This Way</p>
              <h2 className={styles.sectionTitle}>
                Yam Tuber Wasn&apos;t Built to Be Just Another Sack of Produce
              </h2>
              <p className={styles.originPara}>
                Too many tubers sold in bulk get dug up before they&apos;re fully matured, or left too
                long and handled roughly on the way to market — by then rot has already started
                setting in from the inside. We built our yam line around fixing exactly that:
                harvest at the right maturity, handle it properly, move it fast.
              </p>
              <div className={styles.originCallout}>
                <span className={styles.originCalloutIcon}>🍠</span>
                <p className={styles.originCalloutText}>
                  What Yam Tuber truly sells is <strong>freshness you can actually taste</strong>.
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
            <h2 className={styles.sectionTitleLight}>Here&apos;s What Goes Into Every Tuber</h2>
            <p className={styles.accountSub}>
              None of this shows on the outside of the tuber — but it&apos;s all there in the yam
              you find when you cut it open.
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
                It&apos;s earned by delivering the same quality tuber after tuber, order after order.
              </p>
              <p className={styles.closePara}>
                Our yam line is still building its name, and we&apos;re not going to pretend
                otherwise. But every order matters right now — it&apos;s the reason we can&apos;t afford to
                cut corners on harvesting, handling, or delivery.
              </p>
              <p className={styles.closePara}>
                Every tuber that leaves our farm carries our name on it. That&apos;s not pressure —
                it&apos;s exactly why we keep the standard high.
              </p>
            </div>
            <div className={styles.closeStats}>
              {[
                { num: '25 kg', lbl: 'Per Bag' },
                { num: '₦24,590', lbl: 'Current Price' },
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
            <span className={styles.buyTag}>🍠 Ready to Order?</span>
            <h2 className={styles.buyTitle}>Buy Yam Tuber Today</h2>
            <p className={styles.buySub}>
              Join households and food businesses who&apos;ve made the switch to fresh, reliably
              sourced yam. Nationwide delivery available.
            </p>
            <div className={styles.buyPrice}>
              <span className={styles.buyPriceAmount}>₦24,590</span>
              <span className={styles.buyPriceUnit}>/ 25 kg bag</span>
            </div>
            <div className={styles.buyBtns}>
              <Link href="/contact" className={styles.buyPrimary}>Place an Order →</Link>
              <Link href={`https://wa.me/2348081977992?text=${encodeURIComponent(
                `Hello, I am interested in buying yam tuber.`
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