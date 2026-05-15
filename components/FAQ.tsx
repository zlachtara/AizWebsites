'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './FAQ.module.css';

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.question}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.questionText}>{item.q}</span>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.answerWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={styles.answer}>
              <p>{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.line} />
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className={styles.faq} id="faq">
      <div className={styles.sectionNumber}>
        <span>08</span>
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
            {t.faq.label}
          </motion.span>
          <motion.h2 className={styles.headline} variants={fadeUpVariant}>
            {t.faq.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {t.faq.items.map((item, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <FAQItem item={item} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
