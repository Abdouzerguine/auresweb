import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface FooterProps {
  currentLang: string;
}

const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const navigate = useNavigate();

  const translations = {
    ar: {
      home: 'الرئيسية',
      services: 'الخدمات',
      'work-showcase': 'معرض أعمالي',
      about: 'من أنا',
      contact: 'اتصل بي',
      rights: 'جميع الحقوق محفوظة',
      madeWith: 'صنع بكل'
    },
    en: {
      home: 'Home',
      services: 'Services',
      'work-showcase': 'Work Showcase',
      about: 'About',
      contact: 'Contact',
      rights: 'All rights reserved',
      madeWith: 'Made with'
    },
    fr: {
      home: 'Accueil',
      services: 'Services',
      'work-showcase': 'Galerie de Projets',
      about: 'À propos',
      contact: 'Contact',
      rights: 'Tous droits réservés',
      madeWith: 'Fait avec'
    }
  };

  const t = translations[currentLang as keyof typeof translations];
  const sections = ['home', 'services', 'work-showcase', 'about', 'contact'];

  const handleNavigation = (section: string) => {
    const path = section === 'home' ? '/' : `/${section}`;
    navigate(path);
  };

  return (
    <footer className="bg-gray-900/50 backdrop-blur-xl border-t border-gray-800/50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src="/aures-logo.png" alt="AuresWeb Logo" className="w-16 h-16 rounded-full shadow-lg bg-transparent object-contain p-1 mr-4" />
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  AuresWeb
                </h2>
                <p className="text-xs text-teal-400 -mt-1 font-medium">24H Delivery</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className="text-gray-300 hover:text-teal-400 transition-colors text-left"
              >
                {t[section as keyof typeof t]}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:contact@auresweb.dz"
              className="block text-gray-300 hover:text-teal-400 transition-colors"
            >
              contact@auresweb.dz
            </a>
            <a
              href="tel:+213XXXXXXXXX"
              className="block text-gray-300 hover:text-teal-400 transition-colors"
            >
              +213 XXX XXX XXX
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400">
            © 2024 AuresWeb. {t.rights}.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            {t.madeWith} <Heart className="w-4 h-4 text-red-500 mx-1" /> by AuresWeb
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;