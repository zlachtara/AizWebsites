'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './CookieBanner.module.css';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('aiz_cookie_consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('aiz_cookie_consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleDecline = () => {
    const declined = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('aiz_cookie_consent', JSON.stringify(declined));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('aiz_cookie_consent', JSON.stringify(preferences));
    setShowModal(false);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Necessary cookies are always enabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showModal && (
          <motion.div
            className={styles.banner}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className={styles.message}>{t.cookies.message}</p>
            <div className={styles.buttons}>
              <button className={styles.btnPrimary} onClick={handleAcceptAll}>
                {t.cookies.acceptAll}
              </button>
              <button className={styles.btnSecondary} onClick={handleDecline}>
                {t.cookies.decline}
              </button>
              <button className={styles.btnSecondary} onClick={() => setShowModal(true)}>
                {t.cookies.preferences}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.modalTitle}>{t.cookies.modal.title}</h3>
              
              <div className={styles.options}>
                <div className={styles.option}>
                  <div className={styles.optionInfo}>
                    <span className={styles.optionName}>{t.cookies.modal.necessary}</span>
                    <span className={styles.optionDesc}>{t.cookies.modal.necessaryDesc}</span>
                  </div>
                  <div className={`${styles.toggle} ${styles.disabled}`}>
                    <div className={`${styles.toggleTrack} ${styles.active}`}>
                      <div className={styles.toggleThumb} />
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.optionInfo}>
                    <span className={styles.optionName}>{t.cookies.modal.analytics}</span>
                    <span className={styles.optionDesc}>{t.cookies.modal.analyticsDesc}</span>
                  </div>
                  <button
                    className={styles.toggle}
                    onClick={() => togglePreference('analytics')}
                    aria-pressed={preferences.analytics}
                  >
                    <div className={`${styles.toggleTrack} ${preferences.analytics ? styles.active : ''}`}>
                      <div className={styles.toggleThumb} />
                    </div>
                  </button>
                </div>

                <div className={styles.option}>
                  <div className={styles.optionInfo}>
                    <span className={styles.optionName}>{t.cookies.modal.marketing}</span>
                    <span className={styles.optionDesc}>{t.cookies.modal.marketingDesc}</span>
                  </div>
                  <button
                    className={styles.toggle}
                    onClick={() => togglePreference('marketing')}
                    aria-pressed={preferences.marketing}
                  >
                    <div className={`${styles.toggleTrack} ${preferences.marketing ? styles.active : ''}`}>
                      <div className={styles.toggleThumb} />
                    </div>
                  </button>
                </div>
              </div>

              <button className={styles.modalSave} onClick={handleSavePreferences}>
                {t.cookies.modal.save}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
