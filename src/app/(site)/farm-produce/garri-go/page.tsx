import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './garri-go.module.css'

export const metadata: Metadata = {
  title: 'Garri Go – Fresh & Crispy Premium Garri | Agrolocale',
  description:
    'Garri Go is premium garri made from the finest quality cassava with a strict fermentation process. Consistent, accountable, and delicious. Available in 1.5 kg, 3 kg, and 25 kg — nationwide delivery.',
}

const accountabilityPoints = [
  {
    icon: '🌿',
    title: 'Finest Quality Cassava',
    desc: 'Our premium garri is made from the finest quality cassava, ensuring a delicious and nutritious product in every bag.',
  },
  {
    icon: '⏱️',
    title: 'Strict Fermentation Timeline',
    desc: 'Our fermentation process follows a fixed, non-negotiable timeline. It is never shortened to speed up production or meet high demand.',
  },
  {
    icon: '🏭',
    title: 'Controlled Processing',
    desc: 'The drying and processing happen under controlled conditions that we manage directly — no shortcuts, no outsourced quality.',
  },
]

// NOTE: all three sizes currently share one product photo. Swap in a
// dedicated image per size (e.g. /products/garri-1.5kg.jpeg) once available.
const sizeOptions = [
  { size: '1.5 kg', label: 'Trial Pack', price: '₦2,000', image: '/farm-produce/garri-go/garri-go.jpg' },
  { size: '2 kg', label: 'Household Pack', price: '₦3,000', image: '/farm-produce/garri-go/garri-go-3.jpg' },
  { size: '25 kg', label: 'Bulk / Reseller Pack', price: '₦24,600', image: '/farm-produce/garri-go/garri-go-25kg.jpeg' },
]

export default function GarriGoPage() {
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
                Garri Go —{' '}
                <em className={styles.heroAccent}>Satisfy Your Cravings</em>{' '}
                On The Go
              </h1>
              <p className={styles.heroSub}>
                A new kind of garri built on one thing: accountability. From cassava to your table,
                every step is controlled, consistent, and deliberate.
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
                src="/farm-produce/garri-go/garri-go-25kg.jpeg"
                alt="Garri Go – Fresh & Crispy Premium Garri"
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
                New Products Face a Big Challenge. We Know That.
              </h2>
            </div>
            <div className={styles.trustRight}>
              <p className={styles.trustPara}>
                That challenge is earning trust. It&apos;s not because new products are bad, but because
                we have all been disappointed too many times.
              </p>
              <p className={styles.trustPara}>
                An attractive packaging no longer guarantees what&apos;s inside the bag will be good.
                We&apos;ve all seen it before. You buy a product, hoping for the best — but then it turns
                out strange, or there&apos;s an odd smell you can&apos;t quite place but can&apos;t ignore.
              </p>
              <p className={styles.trustPara}>
                So you go back to the product you used before — not because it was perfect, but
                because at least you knew what to expect. This skepticism isn&apos;t a flaw. It&apos;s
                hard-earned wisdom from experience.
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
              So, why should <span className={styles.questionAccent}>Garri Go</span> be any different?
            </h2>
            <p className={styles.questionAnswer}>
              That&apos;s a fair question. The honest answer is — we don&apos;t expect you to take our word for
              it. Instead, we want to show you what&apos;s behind Garri Go so you can decide for yourself.
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
                src="/farm-produce/garri-go/garri-go-4.jpg"
                alt="Garri Go premium garri bag"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className={styles.originOverlay} aria-hidden />
              <div className={styles.originPriceBadge}>
                <span className={styles.originPriceAmount}>From ₦2,000</span>
                <span className={styles.originPriceUnit}>3 sizes available</span>
              </div>
            </div>
            <div className={styles.originContent}>
              <p className={styles.sectionTag}>Why We Built This</p>
              <h2 className={styles.sectionTitle}>
                Garri Go Wasn&apos;t Launched to Slap a Brand on Cheap Bulk Garri
              </h2>
              <p className={styles.originPara}>
                We launched it because we were frustrated by the same inconsistencies you&apos;ve
                experienced. The problem wasn&apos;t garri itself — it was the lack of a proper system to
                produce it consistently, and hold themselves accountable to that system every time.
              </p>
              <div className={styles.originCallout}>
                <span className={styles.originCalloutIcon}>📋</span>
                <p className={styles.originCalloutText}>
                  What Garri Go truly sells is <strong>accountability</strong>.
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
            <p className={styles.sectionTag}>Pick Your Pack</p>
            <h2 className={styles.sectionTitle}>Garri Go Comes in 3 Sizes</h2>
            <p className={styles.sizesSub}>
              Whether you&apos;re trying it for the first time or stocking up for the household,
              there&apos;s a pack size for you.
            </p>
          </div>

          <div className={styles.sizesGrid}>
            {sizeOptions.map((opt) => (
              <div key={opt.size} className={styles.sizeCard}>
                <div className={styles.sizeImgWrap}>
                  <Image
                    src={opt.image}
                    alt={`Garri Go – ${opt.size} bag`}
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
                      `Hello, I am interested in buying the ${opt.size} pack of Garri Go (${opt.price}).`
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
            <p className={styles.sectionTagLight}>Our Promise</p>
            <h2 className={styles.sectionTitleLight}>Here&apos;s What Accountability Looks Like</h2>
            <p className={styles.accountSub}>
              None of this shows on the outside of the bag — but it&apos;s all there in what you find
              when you open it.
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
              <h2 className={styles.sectionTitle}>Trust Isn&apos;t Earned by Asking for It</h2>
              <p className={styles.closePara}>
                It&apos;s earned by delivering quality again and again, without fail.
              </p>
              <p className={styles.closePara}>
                Garri Go is a new product, and we don&apos;t pretend otherwise. But new doesn&apos;t mean
                unproven. It means we&apos;re in a phase where every customer counts — where cutting
                corners would destroy everything we are building.
              </p>
              <p className={styles.closePara}>
                Every bag we send out is our reputation on the line. That&apos;s not a burden — it&apos;s our
                greatest motivation.
              </p>
            </div>
            <div className={styles.closeStats}>
              {[
                { num: '3', lbl: 'Pack Sizes' },
                { num: '🚚', lbl: 'Nationwide Delivery' },
                { num: '✅', lbl: 'Quality Guaranteed' },
                { num: '🌾', lbl: 'Farm-Direct' },
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
            <span className={styles.buyTag}>🌾 Ready to Order?</span>
            <h2 className={styles.buyTitle}>Buy Garri Go Today</h2>
            <p className={styles.buySub}>
              Join households and food businesses who&apos;ve made the switch to consistent, accountable
              garri. Nationwide delivery available.
            </p>
            <div className={styles.buyPrice}>
              <span className={styles.buyPriceAmount}>From ₦4,000</span>
              <span className={styles.buyPriceUnit}>· 1.5 kg, 3 kg & 25 kg packs</span>
            </div>
            <div className={styles.buyBtns}>
              <a href="#sizes" className={styles.buyPrimary}>Choose Your Size ↑</a>
              <Link href={`https://wa.me/2348081977992?text=${encodeURIComponent(
                  `Hello, I am interested in buying garri go.`
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