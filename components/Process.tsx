'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './Process.module.css';

function ProcessStep({ 
  step, 
  index, 
  total 
}: { 
  step: { title: string; desc: string }; 
  index: number; 
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={styles.step}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={styles.stepLeft}>
        <div className={`${styles.node} ${isInView ? styles.active : ''}`}>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        {index < total - 1 && <div className={styles.connector} />}
      </div>
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <p className={styles.stepDesc}>{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className={styles.process} id="process">
      <div className={styles.sectionNumber}>
        <span>05</span>
        <div className={styles.line} />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <motion.div
              className={styles.header}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <motion.span className={styles.label} variants={fadeUpVariant}>
                {t.process.label}
              </motion.span>
              <motion.h2 className={styles.headline} variants={fadeUpVariant}>
                {t.process.headline}
              </motion.h2>
            </motion.div>

            <div className={styles.timeline}>
              {t.process.steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step}
                  index={index}
                  total={t.process.steps.length}
                />
              ))}
            </div>
          </div>

          <motion.div className={styles.right} style={{ y: parallaxY , backgroundImage:  `url(/images/hero-bg.jpg)`,
                    backgroundSize: 'cover', marginBottom: '150px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
