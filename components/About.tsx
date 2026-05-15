'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './About.module.css';

function AnimatedCounter({ value, suffix = '' }: { value: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);
  
  const numericValue = typeof value === 'string' ? parseInt(value) : value;
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function About() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className={styles.about}>
      <div className={styles.sectionNumber}>
        <span>02</span>
        <div className={styles.line} />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Left Column */}
          <motion.div
            className={styles.left}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.span className={styles.label} variants={fadeUpVariant}>
              {t.about.label}
            </motion.span>
            <motion.h2 className={styles.headline} variants={fadeUpVariant}>
              {t.about.headline}
            </motion.h2>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className={styles.right}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p className={styles.paragraph} variants={fadeUpVariant}>
              {t.about.p1}
            </motion.p>
            <motion.p className={styles.paragraph} variants={fadeUpVariant}>
              {t.about.p2}
            </motion.p>
            <motion.p className={styles.paragraph} variants={fadeUpVariant}>
              {t.about.p3}
            </motion.p>

            <motion.div className={styles.stats} variants={fadeUpVariant}>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={50} suffix="+" />
                </span>
                <span className={styles.statLabel}>{t.about.stat1Label}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={100} suffix="%" />
                </span>
                <span className={styles.statLabel}>{t.about.stat2Label}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={24} suffix="h" />
                </span>
                <span className={styles.statLabel}>{t.about.stat3Label}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
