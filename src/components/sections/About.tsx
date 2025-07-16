import React from 'react';
import { Heart, Zap, Globe, Target } from 'lucide-react';
import ThreeBackground from '../ThreeBackground';

interface AboutProps {
  currentLang: string;
}

const About: React.FC<AboutProps> = ({ currentLang }) => {
  const translations = {
    ar: {
      title: 'عن المحرر',
      subtitle: 'شريكك الإبداعي للنجاح الرقمي',
      story: {
        title: 'قصتي',
        content: 'أنا محرر رقمي شغوف بتحويل الأفكار إلى محتوى بصري ملهم وتجارب رقمية مؤثرة. أركز على تقديم حلول عصرية تساعد العلامات التجارية والمبدعين على التألق عبر الإنترنت. كل مشروع ينال كامل اهتمامي الإبداعي لضمان نتائج استثنائية.'
      },
      mission: {
        title: 'رسالتي',
        content: 'رسالتي هي مساعدتك في تحويل رؤيتك إلى واقع رقمي مميز من خلال التصميم والتحرير والحلول الرقمية التي تعكس علامتك وتحقق أهدافك.'
      },
      values: [
        { icon: Zap, title: 'إبداع متجدد', description: 'حلول مبتكرة لكل مشروع' },
        { icon: Heart, title: 'تفانٍ شخصي', description: 'كل عميل يحظى باهتمامي الكامل' },
        { icon: Globe, title: 'انتشار عالمي', description: 'أعمل مع عملاء من جميع أنحاء العالم' },
        { icon: Target, title: 'تركيز على النتائج', description: 'كل مشروع مصمم لتحقيق أهدافك' }
      ],
      coreValues: {
        title: 'قيمــي',
        clarity: { title: 'الوضوح', description: 'تصاميم ومحتوى ينقل رسالتك بفعالية' },
        connectivity: { title: 'الاتصال', description: 'أساعدك على التواصل مع جمهورك في كل مكان' },
        growth: { title: 'النمو', description: 'حلول تنمو مع طموحاتك' }
      },
      skills: {
        title: 'مهاراتي الإبداعية',
        frontend: 'تصميم وتحرير (Canva, Figma, Adobe)',
        backend: 'إنشاء محتوى رقمي',
        tools: 'العلامة التجارية، وسائل التواصل، السرد البصري'
      },
      experience: {
        title: 'لماذا تختارني',
        quality: 'جودة إبداعية',
        speed: 'تسليم سريع',
        support: 'دعم مستمر',
        innovation: 'حلول عصرية'
      }
    },
    en: {
      title: 'About the Editor',
      subtitle: 'Your Creative Partner for Digital Success',
      story: {
        title: 'My Story',
        content: 'I’m a passionate digital editor dedicated to transforming ideas into captivating visuals and compelling content. My focus is on delivering modern, impactful solutions that help brands and creators shine online. Every project receives my full creative attention and care, ensuring results that stand out.'
      },
      mission: {
        title: 'My Mission',
        content: 'My mission is to help you bring your vision to life with exceptional design, editing, and digital solutions that reflect your unique brand and achieve your goals.'
      },
      values: [
        { icon: Zap, title: 'Creative Excellence', description: 'Innovative solutions for every project' },
        { icon: Heart, title: 'Personal Dedication', description: 'Every client gets my full creative attention' },
        { icon: Globe, title: 'Global Reach', description: 'Working with clients worldwide' },
        { icon: Target, title: 'Results-Focused', description: 'Every project designed to achieve your goals' }
      ],
      coreValues: {
        title: 'My Core Values',
        clarity: { title: 'Clarity', description: 'Designs and content that communicate your message' },
        connectivity: { title: 'Connectivity', description: 'Helping you connect with your audience everywhere' },
        growth: { title: 'Growth', description: 'Solutions that grow with your ambitions' }
      },
      skills: {
        title: 'My Creative Skills',
        frontend: 'Design & Editing (Canva, Figma, Adobe)',
        backend: 'Content Creation',
        tools: 'Branding, Social Media, Visual Storytelling'
      },
      experience: {
        title: 'Why Choose Me',
        quality: 'Creative Quality',
        speed: 'Fast Delivery',
        support: 'Ongoing Support',
        innovation: 'Modern Solutions'
      }
    },
    fr: {
      title: 'À propos de l’éditeur',
      subtitle: 'Votre partenaire créatif pour la réussite digitale',
      story: {
        title: 'Mon histoire',
        content: 'Je suis un éditeur numérique passionné, dédié à transformer les idées en visuels captivants et en contenus percutants. Je me concentre sur des solutions modernes et impactantes qui aident les marques et créateurs à briller en ligne. Chaque projet reçoit toute mon attention créative pour garantir des résultats remarquables.'
      },
      mission: {
        title: 'Ma mission',
        content: 'Ma mission est de vous aider à concrétiser votre vision grâce à des solutions de design, d’édition et digitales exceptionnelles qui reflètent votre marque et atteignent vos objectifs.'
      },
      values: [
        { icon: Zap, title: 'Excellence créative', description: 'Des solutions innovantes pour chaque projet' },
        { icon: Heart, title: 'Dévouement personnel', description: 'Chaque client bénéficie de toute mon attention créative' },
        { icon: Globe, title: 'Portée mondiale', description: 'Je travaille avec des clients du monde entier' },
        { icon: Target, title: 'Axé sur les résultats', description: 'Chaque projet conçu pour atteindre vos objectifs' }
      ],
      coreValues: {
        title: 'Mes valeurs',
        clarity: { title: 'Clarté', description: 'Des designs et contenus qui transmettent votre message' },
        connectivity: { title: 'Connectivité', description: 'Vous aider à connecter avec votre audience partout' },
        growth: { title: 'Croissance', description: 'Des solutions qui évoluent avec vos ambitions' }
      },
      skills: {
        title: 'Mes compétences créatives',
        frontend: 'Design & Édition (Canva, Figma, Adobe)',
        backend: 'Création de contenu',
        tools: 'Branding, réseaux sociaux, storytelling visuel'
      },
      experience: {
        title: 'Pourquoi me choisir',
        quality: 'Qualité créative',
        speed: 'Livraison rapide',
        support: 'Support continu',
        innovation: 'Solutions modernes'
      }
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  const skills = {
    frontend: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    tools: ['Git', 'Figma', 'VS Code', 'Netlify', 'Vercel']
  };

  return (
    <section className="relative min-h-screen py-24 bg-gray-900/60 overflow-hidden">
      {/* 3D Background removed */}
      {/* Background Elements (old) */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-500/30" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-500/30" style={{ animationDelay: '2s' }} />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-teal-500/20 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  {/* <Rocket className="w-6 h-6 text-white" /> */}
                </div>
                <h3 className="text-2xl font-bold text-white">{t.story.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.story.content}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-blue-500/20 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  {/* <Target className="w-6 h-6 text-white" /> */}
                </div>
                <h3 className="text-2xl font-bold text-white">{t.mission.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {t.mission.content}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-teal-500/30 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.coreValues.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-500 border border-teal-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-teal-500 rounded-full" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t.coreValues.clarity.title}</h4>
              <p className="text-gray-300 leading-relaxed">{t.coreValues.clarity.description}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 border border-blue-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t.coreValues.connectivity.title}</h4>
              <p className="text-gray-300 leading-relaxed">{t.coreValues.connectivity.description}</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500 border border-green-500/30">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t.coreValues.growth.title}</h4>
              <p className="text-gray-300 leading-relaxed">{t.coreValues.growth.description}</p>
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-8">
              {t.skills.title}
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-white mb-4 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50" />
                  <span>{t.skills.frontend}</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 border border-teal-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
                  <span>{t.skills.backend}</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 border border-blue-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-4 flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                  <span>{t.skills.tools}</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-8">
              {t.experience.title}
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-teal-500/30">
                <div className="flex justify-center mb-2">
                  {/* <Star className="w-8 h-8 text-teal-400" /> */}
                </div>
                <div className="text-gray-300 text-sm font-medium">{t.experience.quality}</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-blue-500/30">
                <div className="flex justify-center mb-2">
                  {/* <Clock className="w-8 h-8 text-blue-400" /> */}
                </div>
                <div className="text-gray-300 text-sm font-medium">{t.experience.speed}</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-green-500/30">
                <div className="flex justify-center mb-2">
                  {/* <Wrench className="w-8 h-8 text-green-400" /> */}
                </div>
                <div className="text-gray-300 text-sm font-medium">{t.experience.support}</div>
              </div>

              <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-purple-500/30">
                <div className="flex justify-center mb-2">
                  {/* <Sparkles className="w-8 h-8 text-purple-400" /> */}
                </div>
                <div className="text-gray-300 text-sm font-medium">{t.experience.innovation}</div>
              </div>
            </div>

            {/* Personal Touch */}
            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <p className="text-gray-300 text-center italic text-lg">
                {currentLang === 'ar' ? '"أحول الأحلام إلى مواقع ويب استثنائية"' : 
                 currentLang === 'fr' ? '"Je transforme les rêves en sites web exceptionnels"' : 
                 '"I turn dreams into exceptional websites"'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;