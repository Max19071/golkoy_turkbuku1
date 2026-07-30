import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Language = 'tr' | 'en';

type LanguageContextValue = {
  language: Language;
  isEnglish: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return localStorage.getItem('site-language') === 'en' ? 'en' : 'tr';
  });

  useEffect(() => {
    localStorage.setItem('site-language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        isEnglish: language === 'en',
        toggleLanguage: () => setLanguage((current) => current === 'tr' ? 'en' : 'tr')
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
