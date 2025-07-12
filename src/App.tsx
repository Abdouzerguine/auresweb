import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WorkShowcase from './components/sections/WorkShowcase';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function AppContent() {
  const [currentLang, setCurrentLang] = React.useState('en');
  const location = useLocation();

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  // Convert pathname to section name
  const getActiveSection = () => {
    const path = location.pathname.substring(1);
    if (path === 'work-showcase') return 'work-showcase';
    return path || 'home';
  };

  return (
    <div className="min-h-screen bg-gray-900 relative" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatedBackground />
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={getActiveSection()}
      />
      <main className="relative z-10 pt-16">
        <Routes>
          <Route path="/" element={<Hero currentLang={currentLang} />} />
          <Route path="/services" element={<Services currentLang={currentLang} />} />
          <Route path="/work-showcase" element={<WorkShowcase currentLang={currentLang} />} />
          <Route path="/about" element={<About currentLang={currentLang} />} />
          <Route path="/contact" element={<Contact currentLang={currentLang} />} />
        </Routes>
      </main>
      <Footer currentLang={currentLang} />
      <Chatbot currentLang={currentLang} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;