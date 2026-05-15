'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className={styles.testimonials}>
      <div className={styles.sectionNumber}>
        <span>07</span>
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
            {t.testimonials.label}
          </motion.span>
          <motion.h2 className={styles.headline} variants={fadeUpVariant}>
            {t.testimonials.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              variants={fadeUpVariant}
            >
              <span className={styles.quoteMark}>&ldquo;</span>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.author}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.location}>{item.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className={styles.rating}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {t.testimonials.rating}
        </motion.p>
      </div>
    </section>
  );
}
