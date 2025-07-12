import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const translations = {
    ar: {
      home: 'الرئيسية',
      services: 'الخدمات',
      'work-showcase': 'معرض أعمالي',
      about: 'من أنا',
      contact: 'اتصل بي'
    },
    en: {
      home: 'Home',
      services: 'Services',
      'work-showcase': 'Work Showcase',
      about: 'About',
      contact: 'Contact'
    },
    fr: {
      home: 'Accueil',
      services: 'Services',
      'work-showcase': 'Galerie de Projets',
      about: 'À propos',
      contact: 'Contact'
    }
  };

  const t = translations[currentLang as keyof typeof translations];
  const sections = ['home', 'services', 'work-showcase', 'about', 'contact'];

  const handleNavigation = (section: string) => {
    const path = section === 'home' ? '/' : `/${section}`;
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/20 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src="/aures-logo.png" alt="AuresWeb Logo" className="w-16 h-16 rounded-full shadow-lg bg-transparent object-contain p-1 mr-4" />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AuresWeb
              </h1>
              <p className="text-xs text-teal-400 -mt-1 font-medium">24H Delivery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === section 
                    ? 'text-teal-400 bg-teal-500/10 shadow-lg shadow-teal-500/20' 
                    : 'text-gray-300 hover:text-teal-400 hover:bg-gray-800/50'
                }`}
              >
                {t[section as keyof typeof t]}
                {activeSection === section && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-500 rounded-full animate-pulse shadow-lg shadow-teal-500/50" />
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700/50"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-gray-300" /> : <Menu className="w-5 h-5 text-gray-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-800/50 bg-gray-900/20 backdrop-blur-lg">
            <nav className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 border-l-4 border-teal-500 shadow-lg shadow-teal-500/20' 
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-teal-400'
                  }`}
                >
                  {t[section as keyof typeof t]}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;