'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check localStorage first
    const stored = localStorage.getItem('aiz_language');
    if (stored === 'en' || stored === 'pl') {
      setLanguage(stored);
      return;
    }

    // Auto-detect from navigator.language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) {
      setLanguage('pl');
    } else {
      setLanguage('en');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('aiz_language', lang);
  };

  const t = translations[language];

  if (!mounted) {
    // Return default language during SSR
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage: handleSetLanguage, t: translations.en }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
