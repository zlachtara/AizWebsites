'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', service: '', budget: '', message: '' });
      } else {
        setErrorMsg('Wystąpił błąd. Spróbuj ponownie.');
      }
    } catch (err) {
      setErrorMsg('Błąd połączenia. Sprawdź sieć.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section ref={containerRef} className={styles.contact} id="contact">
      <div className={styles.sectionNumber}>
        <span>09</span>
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
              {t.contact.label}
            </motion.span>
            <motion.h2 className={styles.headline} variants={fadeUpVariant}>
              {t.contact.headline}
            </motion.h2>
            <motion.p className={styles.subtext} variants={fadeUpVariant}>
              {t.contact.subtext}
            </motion.p>
            <motion.div className={styles.info} variants={fadeUpVariant}>
              <a
                href="https://www.instagram.com/aiz.websites/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t.contact.instagram} →
              </a>
              <span className={styles.location}>{t.contact.location}</span>
            </motion.div>
            <div className={styles.watermark}>09</div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>{t.contact.form.service}</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">—</option>
                      {t.contact.form.serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.fieldLabel}>{t.contact.form.budget}</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">—</option>
                      {t.contact.form.budgetOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.fieldLabel}>{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={styles.textarea}
                  />
                </div>
                <motion.button
                  type="submit"
                  className={styles.submit}
                  disabled={isSubmitting}
                  whileHover={{ backgroundColor: 'var(--accent-light)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.contact.form.submit} →
                </motion.button>
              </form>
            ) : (
              <motion.div
                className={styles.success}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>{t.contact.form.success}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
