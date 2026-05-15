'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { staggerContainer, wordRevealVariant } from '@/lib/animations';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className={styles.hero} id="gallery">
      {/* Parallax Background */}
      <motion.div className={styles.background} style={{ y: backgroundY }}>
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.gradient} />
        <div className={styles.gradientOverlay} />
      </motion.div>

      {/* Section Number */}
      <div className={styles.sectionNumber}>
        <span>01</span>
        <div className={styles.line} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.headline}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.wordWrap}>
            <motion.span className={styles.line1} variants={wordRevealVariant}>
              {t.hero.line1}
            </motion.span>
          </div>
          <div className={styles.wordWrap}>
            <motion.span className={styles.line2} variants={wordRevealVariant}>
              {t.hero.line2}
            </motion.span>
          </div>
          <div className={styles.wordWrap}>
            <motion.span className={styles.line3} variants={wordRevealVariant}>
              {t.hero.line3}
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {t.hero.subtext}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.button
            className={styles.ctaPrimary}
            onClick={() => scrollToSection('#portfolio')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.hero.cta1}
            <span className={styles.arrow}>→</span>
          </motion.button>
          <motion.button
            className={styles.ctaSecondary}
            onClick={() => scrollToSection('#contact')}
            whileHover={{ x: 4 }}
          >
            {t.hero.cta2}
            <motion.span
              className={styles.arrowAnimated}
              initial={{ x: 0 }}
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Watermark */}
      <div className={styles.watermark}>AIZ</div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>{t.hero.scroll}</span>
      </motion.div>
    </section>
  );
}
