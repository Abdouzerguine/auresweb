import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇩🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 shadow-lg shadow-black/20">
        <Globe className="w-5 h-5 text-gray-300" />
        <span className="text-sm font-bold text-gray-300">{languages.find(lang => lang.code === currentLang)?.name}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-3 w-48 bg-gray-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang, index) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`w-full flex items-center space-x-4 px-6 py-4 text-left hover:bg-gray-800/50 transition-colors ${
              currentLang === lang.code ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400' : 'text-gray-300'
            } ${index === 0 ? 'rounded-t-2xl' : ''} ${index === languages.length - 1 ? 'rounded-b-2xl' : ''}`}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span className="text-sm font-bold">{lang.name}</span>
            {currentLang === lang.code && (
              <div className="ml-auto w-3 h-3 bg-teal-500 rounded-full animate-pulse shadow-lg shadow-teal-500/50" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;