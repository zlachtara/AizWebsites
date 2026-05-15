'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer, scaleInVariant } from '@/lib/animations';
import styles from './Portfolio.module.css';

type FilterKey = 'all' | 'landing' | 'business' | 'ecommerce' | 'portfolio';

const gradients = [
  'linear-gradient(135deg, rgba(74, 90, 56, 0.3) 0%, rgba(17, 17, 9, 0.9) 100%)',
  'linear-gradient(135deg, rgba(200, 184, 122, 0.2) 0%, rgba(17, 17, 9, 0.9) 100%)',
  'linear-gradient(135deg, rgba(138, 154, 106, 0.25) 0%, rgba(17, 17, 9, 0.9) 100%)',
  'linear-gradient(135deg, rgba(100, 90, 70, 0.3) 0%, rgba(17, 17, 9, 0.9) 100%)',
  'linear-gradient(135deg, rgba(74, 90, 56, 0.2) 0%, rgba(17, 17, 9, 0.9) 100%)',
  'linear-gradient(135deg, rgba(200, 216, 168, 0.15) 0%, rgba(17, 17, 9, 0.9) 100%)',
];

export default function Portfolio() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'landing', label: t.portfolio.filters.landing },
    { key: 'business', label: t.portfolio.filters.business },
    { key: 'ecommerce', label: t.portfolio.filters.ecommerce },
    { key: 'portfolio', label: t.portfolio.filters.portfolio },
  ];

  const filteredProjects = activeFilter === 'all'
    ? t.portfolio.projects
    : t.portfolio.projects.filter(p => p.category === activeFilter);

  return (
    <section ref={containerRef} className={styles.portfolio} id="portfolio">
      <div className={styles.sectionNumber}>
        <span>04</span>
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
            {t.portfolio.label}
          </motion.span>
          <motion.h2 className={styles.headline} variants={fadeUpVariant}>
            {t.portfolio.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`${styles.filterBtn} ${activeFilter === filter.key ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className={styles.item}
              variants={scaleInVariant}
              layout
            >
              <motion.div
                className={styles.imageWrapper}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <div
                  className={styles.image}
                  style={{
                    background: gradients[index % gradients.length],
                    backgroundImage:  `url(/images/${project.name.toLowerCase()}.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <motion.div
                  className={styles.overlay}
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1, transition: { duration: 0.3 } },
                  }}
                >
                  <span className={styles.viewProject}>
                    {t.portfolio.viewProject} →
                  </span>
                </motion.div>
              </motion.div>
              <div className={styles.info}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <span className={styles.category}>{project.categoryLabel}</span>
              </div>
              <p className={styles.desc}>{project.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
