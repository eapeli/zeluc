import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt', icon: 'https://i.postimg.cc/rzTJY4LZ/brasil-1.png' },
    { code: 'en', icon: 'https://i.postimg.cc/3WZBMw88/estados-unidos.png' },
    { code: 'es', icon: 'https://i.postimg.cc/H8T9Jq21/mundo.png' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
      >
        <img src={currentLanguage.icon} alt={currentLanguage.code} className="w-6 h-6" />
        <ChevronDown size={14} className={`text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center ${
                i18n.language === lang.code
                  ? 'bg-gray-100 dark:bg-gray-700'
                  : ''
              }`}
            >
              <img src={lang.icon} alt={lang.code} className="w-6 h-6" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;