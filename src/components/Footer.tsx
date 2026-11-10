import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const footerLinks = [
  // { href: '/home',     label: 'Home' },
  { href: '/projects', label: 'Find a Land' },
  { href: '/farm-produce', label: 'Farm Produce' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/blog',     label: 'Blog' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Contact' },
]

const currentOfferings = [
  { label: 'Paradiso Farms',                 href: '/projects' },
  { label: 'Aduke Cottages',                href: "https://elysianfarmsandresort.agrolocale.com/#cottages" },
  { label: 'Elysian Farms and Resort',      href: "https://elysianfarmsandresort.agrolocale.com/" },
  { label: 'Garri Go! – Fresh Garri Ijebu', href: '/products/garri-go' },
  { label: "Garri Go Mix! – Fresh & Creamy", href: '/products/garri-go-mix' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>

        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/home" className={styles.logo}>
            <Image
              src="/images/logo_anniversary.png"
              alt="Agrolocale – Celebrating 2 Years"
              width={40}
              height={52}
              className={styles.logoImg}
            />
            <span>Agro<span className={styles.logoAccent}>locale</span></span>
          </Link>
          <p className={styles.tagline}>
            Nigeria&apos;s premier platform for agricultural land discovery and acquisition. Developing farm estate and resort project across the nation.
          </p>
          <div className={styles.socials}>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/19FF9zde4a/" className={styles.social} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@Agrolocale" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--green-900)" />
              </svg>
            </a>
            <a href="https://www.instagram.com/agrolocale/" className={styles.social} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/agrolocale/" className={styles.social} aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/agrolocale"
              className={styles.social}
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@insideagrolocale"
              className={styles.social}
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.52 2.52 0 1 1-2.52-2.52c.23 0 .46.03.68.09v-3.5a6 6 0 1 0 5.29 5.93V8.96a8.27 8.27 0 0 0 4.84 1.56V7.05a4.85 4.85 0 0 1-1.07-.36Z" />
              </svg>
            </a>
            
          </div>
        </div>

        {/* Nav links */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Navigation</h4>
          <ul className={styles.links}>
            {footerLinks.map(l => (
              <li key={l.href}><Link href={l.href} className={styles.link}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Current offerings */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Current Offerings</h4>
          <ul className={styles.links}>
            {currentOfferings.map(t => (
              <li key={t.label}><Link href={t.href} className={styles.link}>{t.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className={styles.linkGroup}>
          <h4 className={styles.groupTitle}>Get In Touch</h4>
          <ul className={styles.contactList}>
            {[
              { icon: '📍', text: 'Ayobola Daodu, Lekki Scheme II, Ajah, Lagos State' },
              { icon: '📞', text: '+234 707 152 3904, +234 901 045 8648' },
              { icon: '✉️', text: 'info@agrolocale.com, customercare@agrolocale.com' },
              { icon: '🕐', text: 'Mon – Thu: 9am – 4pm | Fri: 10am – 4pm' },
            ].map((item, i) => (
              <li key={i} className={styles.contactItem}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>© {year} Agrolocale. All rights reserved.</p>
        <div className={styles.legal}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
            <Link key={t} href="/home" className={styles.legalLink}>{t}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
