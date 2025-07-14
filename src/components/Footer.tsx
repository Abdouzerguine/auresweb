import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

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

          {/* Contact Info & Social Media */}
          <div className="space-y-4">
            <a href="https://wa.me/213781604556" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-green-500 font-bold text-lg">
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp: +213 781 60 45 56
            </a>
            <a href="mailto:auresweb05@gmail.com" className="block text-gray-300 hover:text-teal-400 transition-colors text-lg font-medium">
              auresweb05@gmail.com
            </a>
            
            {/* Social Media Links */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">
                {currentLang === 'ar' ? 'تابعني على' : currentLang === 'fr' ? 'Suivez-moi sur' : 'Follow me on'}
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/auresweb05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/30 transition-colors border border-blue-600/30 hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-blue-400" />
                </a>
                <a
                  href="https://instagram.com/auresweb05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-colors border border-pink-500/30 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-pink-400" />
                </a>
                <a
                  href="https://youtube.com/@auresweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center hover:bg-red-600/30 transition-colors border border-red-600/30 hover:scale-110"
                >
                  <Youtube className="w-5 h-5 text-red-400" />
                </a>
                <a
                  href="https://tiktok.com/@auresweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors border border-black/30 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400">
            © 2025 AuresWeb. {t.rights}.
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