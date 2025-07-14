import React from 'react';
import { ArrowRight, Clock, CheckCircle, Zap, Rocket, Code, Star, Sparkles, Cpu, Database, Wifi, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  currentLang: string;
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const navigate = useNavigate();
  const translations = {
    ar: {
      headline: 'رؤيتك الرقمية، حية في 24 ساعة',
      subheadline: 'مطور ويب مستقل من الجزائر يجمع بين الهوية المحلية والمعايير العالمية',
      cta: 'ابدأ رحلتك الرقمية',
      watchDemo: 'شاهد أعمالي',
      guarantee: '24 ساعة تسليم مضمون',
      features: [
        'تصميم احترافي متجاوب',
        'تسليم فائق السرعة',
        'دعم شخصي مخصص',
        'معايير عالمية'
      ],
      stats: {
        delivery: 'ساعة تسليم',
        projects: 'مشروع مكتمل',
        satisfaction: 'رضا العملاء',
        speed: 'أسرع من المنافسين'
      },
      values: {
        clarity: 'وضوح',
        connectivity: 'اتصال',
        growth: 'نمو'
      }
    },
    en: {
      headline: 'Your Digital Vision, Live in 24 Hours',
      subheadline: 'Freelance web developer from Algeria bridging local identity with global digital standards',
      cta: 'Start Your Digital Journey',
      watchDemo: 'View My Work',
      guarantee: '24-hour delivery guaranteed',
      features: [
        'Professional responsive design',
        'Lightning-fast delivery',
        'Dedicated personal support',
        'Global standards'
      ],
      stats: {
        delivery: 'Hour Delivery',
        projects: 'Projects Completed',
        satisfaction: 'Client Satisfaction',
        speed: 'Faster Than Competitors'
      },
      values: {
        clarity: 'Clarity',
        connectivity: 'Connectivity',
        growth: 'Growth'
      }
    },
    fr: {
      headline: 'Votre Vision Numérique, En Ligne en 24 Heures',
      subheadline: 'Développeur web freelance d\'Algérie alliant identité locale et standards numériques mondiaux',
      cta: 'Commencez Votre Voyage Numérique',
      watchDemo: 'Voir Mon Travail',
      guarantee: 'Livraison en 24h garantie',
      features: [
        'Design professionnel responsive',
        'Livraison ultra-rapide',
        'Support personnel dédié',
        'Standards mondiaux'
      ],
      stats: {
        delivery: 'Heures Livraison',
        projects: 'Projets Terminés',
        satisfaction: 'Satisfaction Client',
        speed: 'Plus Rapide Que Concurrents'
      },
      values: {
        clarity: 'Clarté',
        connectivity: 'Connectivité',
        growth: 'Croissance'
      }
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* No overlays, only animated background visible */}

      {/* Animated Code Rain Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Elements */}
        <div className="absolute top-10 left-10 text-teal-400/20 text-sm font-mono animate-bounce">
          &lt;div&gt;
        </div>
        <div className="absolute top-20 right-20 text-blue-400/20 text-sm font-mono animate-bounce" style={{ animationDelay: '1s' }}>
          &lt;/div&gt;
        </div>
        <div className="absolute top-40 left-1/4 text-green-400/20 text-sm font-mono animate-bounce" style={{ animationDelay: '2s' }}>
          &lt;React&gt;
        </div>
        <div className="absolute top-60 right-1/3 text-purple-400/20 text-sm font-mono animate-bounce" style={{ animationDelay: '0.5s' }}>
          &lt;/React&gt;
        </div>
        <div className="absolute top-80 left-1/2 text-pink-400/20 text-sm font-mono animate-bounce" style={{ animationDelay: '1.5s' }}>
          &lt;TypeScript&gt;
        </div>
        <div className="absolute top-96 right-1/4 text-yellow-400/20 text-sm font-mono animate-bounce" style={{ animationDelay: '0.8s' }}>
          &lt;/TypeScript&gt;
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-32 left-16 w-12 h-12 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-teal-500/20">
          <Cpu className="w-6 h-6 text-teal-400/30 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        
        <div className="absolute top-64 right-24 w-10 h-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-blue-500/20" style={{ animationDelay: '1s' }}>
          <Database className="w-5 h-5 text-blue-400/30 animate-pulse" />
        </div>
        
        <div className="absolute top-96 left-1/3 w-8 h-8 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-green-500/20" style={{ animationDelay: '2s' }}>
          <Wifi className="w-4 h-4 text-green-400/30 animate-pulse" />
        </div>
        
        <div className="absolute top-48 right-1/2 w-14 h-14 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/20" style={{ animationDelay: '1.5s' }}>
          <Shield className="w-7 h-7 text-purple-400/30 animate-bounce" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Star Particles */}
        <div className="absolute top-1/4 left-1/4 text-teal-400/30 animate-ping">
          <Star className="w-4 h-4" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-blue-400/30 animate-ping" style={{ animationDelay: '0.5s' }}>
          <Star className="w-3 h-3" />
        </div>
        <div className="absolute top-2/3 left-1/3 text-green-400/30 animate-ping" style={{ animationDelay: '1s' }}>
          <Star className="w-2 h-2" />
        </div>
        <div className="absolute top-3/4 right-1/4 text-purple-400/30 animate-ping" style={{ animationDelay: '1.5s' }}>
          <Star className="w-3 h-3" />
        </div>
        
        {/* Sparkle Particles */}
        <div className="absolute top-1/6 left-1/6 text-pink-400/30 animate-pulse">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-2/3 right-1/6 text-yellow-400/30 animate-pulse" style={{ animationDelay: '0.8s' }}>
          <Sparkles className="w-2 h-2" />
        </div>
        <div className="absolute top-1/2 left-2/3 text-cyan-400/30 animate-pulse" style={{ animationDelay: '1.2s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Speed Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 rounded-full text-sm font-bold mb-6 animate-bounce border border-teal-500/30 shadow-lg shadow-teal-500/20">
              <Rocket className="w-5 h-5 mr-2" />
              24{currentLang === 'ar' ? ' ساعة تسليم' : currentLang === 'fr' ? 'H Livraison' : 'H Delivery'}
              <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                {t.headline}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.subheadline}
            </p>

            {/* Core Values */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {Object.entries(t.values).map(([key, value], index) => (
                <div key={key} className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-teal-500' : index === 1 ? 'bg-blue-500' : 'bg-green-500'
                  } animate-pulse shadow-lg`} />
                  <span className="text-sm font-medium text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
              <button
                onClick={() => navigate('/contact')}
                className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-3">
                  <span>{t.cta}</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
              
              <button 
                onClick={() => navigate('/work-showcase')}
                className="group px-10 py-5 border-2 border-gray-600 text-gray-300 rounded-2xl font-bold text-lg hover:border-teal-500 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-300"
              >
                {t.watchDemo}
              </button>
            </div>

            {/* Guarantee */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-green-400">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold">{t.guarantee}</span>
            </div>
          </div>

          {/* Right Column - Dynamic Stats & Visual */}
          <div className="relative">
            {/* Floating Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-2xl mx-auto lg:mx-0">
              {/* Card 1 */}
              <div className="flex flex-col items-center justify-center bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700/50 hover:shadow-teal-500/20 transition-all duration-500 group min-h-[180px] min-w-[220px]">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg shadow-teal-500/30">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-1">24</div>
                <div className="text-gray-400 text-base font-medium">{t.stats.delivery}</div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center justify-center bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700/50 hover:shadow-yellow-500/20 transition-all duration-500 group min-h-[180px] min-w-[220px]">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/30">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-black text-white mb-1 text-center">Best Quality Work</div>
                <div className="text-gray-400 text-base font-medium">Guaranteed</div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center justify-center bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700/50 hover:shadow-green-500/20 transition-all duration-500 group min-h-[180px] min-w-[220px]">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 shadow-lg shadow-green-500/30">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-1">100%</div>
                <div className="text-gray-400 text-base font-medium">{t.stats.satisfaction}</div>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col items-center justify-center bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-700/50 hover:shadow-purple-500/20 transition-all duration-500 group min-h-[180px] min-w-[220px]">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-1">5x</div>
                <div className="text-gray-400 text-base font-medium">{t.stats.speed}</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full animate-pulse shadow-lg shadow-teal-500/20" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full animate-pulse shadow-lg shadow-green-500/20" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse shadow-lg shadow-purple-500/20" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-teal-400 rounded-full flex justify-center shadow-lg shadow-teal-500/30">
          <div className="w-2 h-4 bg-teal-400 rounded-full mt-2 animate-pulse shadow-lg shadow-teal-400/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;