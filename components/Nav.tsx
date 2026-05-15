'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Nav.module.css';

export default function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          {/* Side Text */}
          <div className={styles.sideText}>
            <span>{t.nav.sideText}</span>
          </div>

          {/* Logo */}
          <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={styles.logoBold}>Aiz</span>
            <span className={styles.logoThin}>Websites</span>
          </a>

          {/* Desktop Nav Links */}
          <div className={styles.links}>
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                className={styles.link}
                onClick={() => scrollToSection(link.href)}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <span>{link.label}</span>
                <motion.span
                  className={styles.underline}
                  variants={{
                    rest: { scaleX: 0, originX: 0 },
                    hover: { scaleX: 1, transition: { duration: 0.3 } },
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right Section */}
          <div className={styles.right}>
            {/* Language Toggle */}
            <div className={styles.langToggle}>
              <button
                className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <span className={styles.langDivider}>|</span>
              <button
                className={`${styles.langBtn} ${language === 'pl' ? styles.active : ''}`}
                onClick={() => setLanguage('pl')}
              >
                PL
              </button>
            </div>

            {/* Book a Call Button */}
            <motion.a
              href="https://www.instagram.com/aiz.websites/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              whileHover={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
              transition={{ duration: 0.3 }}
            >
              {t.nav.bookCall}
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.open : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileOpen ? styles.open : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileInner}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  className={styles.mobileLink}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                className={styles.mobileLang}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  className={`${styles.mobileLangBtn} ${language === 'en' ? styles.active : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  English
                </button>
                <button
                  className={`${styles.mobileLangBtn} ${language === 'pl' ? styles.active : ''}`}
                  onClick={() => setLanguage('pl')}
                >
                  Polski
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
