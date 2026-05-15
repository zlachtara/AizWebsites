'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './Services.module.css';

export default function Services() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className={styles.services} id="services">
      <div className={styles.sectionNumber}>
        <span>03</span>
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
            {t.services.label}
          </motion.span>
          <motion.h2 className={styles.headline} variants={fadeUpVariant}>
            {t.services.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.services.items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.row}
              variants={fadeUpVariant}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                className={styles.rowInner}
                variants={{
                  rest: { x: 0, backgroundColor: 'transparent' },
                  hover: { 
                    x: 8, 
                    backgroundColor: 'rgba(138, 154, 106, 0.05)',
                    transition: { duration: 0.3 }
                  },
                }}
              >
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
                <motion.span
                  className={styles.arrow}
                  variants={{
                    rest: { opacity: 0, x: -10 },
                    hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                  }}
                >
                  →
                </motion.span>
              </motion.div>
              <div className={styles.rowLine} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
