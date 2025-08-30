import React, { useState } from 'react';

const LanguageToggle: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // Here you would typically implement the logic to change the language of the app
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <div className="lang-toggle">
      <span
        id="lang-en"
        className={language === 'en' ? 'active' : ''}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </span>{' '}
      |{' '}
      <span
        id="lang-so"
        className={language === 'so' ? 'active' : ''}
        onClick={() => handleLanguageChange('so')}
      >
        SO
      </span> |{' '}
      <span
        id="lang-ar"
        className={language === 'ar' ? 'active' : ''}
        onClick={() => handleLanguageChange('ar')}
      >
        AR
      </span>
    </div>
  );
};

export default LanguageToggle;
