'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Marquee.module.css';

export default function Marquee() {
  const { t } = useLanguage();
  
  const text = t.marquee;
  // Powtórzenie tekstu wystarczy 3-4 razy, by uzyskać płynne przejście
  const repeated = text.repeat(4);

  return (
    <section className={styles.marquee}>
      <div className={styles.track}>
        <div className={styles.content}>
          <span>{repeated}</span>
          <span>{repeated}</span>
        </div>
      </div>
    </section>
  );
}