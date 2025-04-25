
import React, { createContext, useContext, useState } from 'react';

type Language = 'sk' | 'en' | 'de' | 'cs';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: { code: Language; name: string; nativeName: string; }[];
  t: (key: string) => string; // Add dummy translation function
}

const languages = [
  { code: 'sk' as Language, name: 'Slovak', nativeName: 'Slovenčina' },
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'de' as Language, name: 'German', nativeName: 'Deutsch' },
  { code: 'cs' as Language, name: 'Czech', nativeName: 'Čeština' },
];

const LanguageContext = createContext<LanguageContextType>({
  language: 'sk',
  setLanguage: () => {},
  languages: languages,
  t: (key) => key // Return the key itself as the "translation"
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  // Dummy translation function that just returns the key
  const t = (key: string): string => {
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
