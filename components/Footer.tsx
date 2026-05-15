'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={styles.logoBold}>Aiz</span>
            <span className={styles.logoThin}>Websites</span>
          </a>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                className={styles.navLink}
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href="https://www.instagram.com/aiz.websites/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagram}
          >
            Instagram
          </a>
        </div>

        <div className={styles.tagline}>
          <p>{t.footer.tagline}</p>
        </div>

        <div className={styles.hr} />

        <div className={styles.bottom}>
          <p className={styles.rights}>{t.footer.rights}</p>
        </div>
      </div>

      <div className={styles.sideText}>
        <span>@aiz.websites</span>
      </div>
    </footer>
  );
}
