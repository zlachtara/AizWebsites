'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './Pricing.module.css';

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function Pricing() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className={styles.pricing} id="pricing">
      <div className={styles.sectionNumber}>
        <span>06</span>
        <div className={styles.line} />
      </div>

      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className={styles.label} variants={fadeUpVariant}>
            {t.pricing.label}
          </motion.span>
          <motion.h2 className={styles.headline} variants={fadeUpVariant}>
            {t.pricing.headline}
          </motion.h2>
          <motion.p className={styles.subheadline} variants={fadeUpVariant}>
            {t.pricing.subheadline}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
              variants={fadeUpVariant}
            >
              {plan.popular && (
                <span className={styles.badge}>{t.pricing.mostPopular}</span>
              )}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <span className={styles.price}>{plan.price}</span>
              </div>
              <div className={styles.features}>
                {plan.features.map((feature, i) => (
                  <div key={i} className={styles.feature}>
                    <span className={styles.featureDot}>—</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className={styles.cta}
                whileHover={{ 
                  backgroundColor: 'var(--accent)', 
                  color: 'var(--bg)',
                  borderColor: 'var(--accent)'
                }}
                transition={{ duration: 0.3 }}
                onClick={() => scrollToSection('#contact')}
              >
                {t.pricing.getStarted}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className={styles.customNote}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {t.pricing.customNote}
        </motion.p>
      </div>
    </section>
  );
}
