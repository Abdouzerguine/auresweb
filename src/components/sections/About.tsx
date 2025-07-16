import React from 'react';
import { Heart, Zap, Globe, Target } from 'lucide-react';
import ThreeBackground from '../ThreeBackground';

interface AboutProps {
  currentLang: string;
}

const About: React.FC<AboutProps> = ({ currentLang }) => {
  const translations = {
    ar: {
      title: 'قصة AuresWeb',
      subtitle: 'مطور ويب شغوف يبني حلولاً حديثة لعملاء من جميع أنحاء العالم',
      story: {
        title: 'رحلتي',
        content: 'أنا مطور ويب شغوف أحب تحويل الأفكار إلى مواقع وتطبيقات ويب جميلة وعملية. أركز على تصميمات عصرية متجاوبة تحقق نتائج للأعمال حول العالم. كل مشروع يحصل على كامل اهتمامي وتفانيي لضمان أعلى جودة، أينما كنت.'
      },
      mission: {
        title: 'مهمتي',
        content: 'أؤمن أن كل فكرة تستحق أن تصبح واقعاً رقمياً. مهمتي هي مساعدة العملاء من جميع أنحاء العالم على تحويل رؤاهم إلى مواقع وتطبيقات استثنائية تعكس علامتهم التجارية وتحقق أهدافهم.'
      },
      values: [
        {
          icon: Zap,
          title: 'السرعة',
          description: 'تسليم سريع أينما كنت في العالم'
        },
        {
          icon: Heart,
          title: 'التفاني الشخصي',
          description: 'كل عميل يحصل على كامل اهتمامي ورعايتي'
        },
        {
          icon: Globe,
          title: 'خبرة عالمية',
          description: 'أعمل عن بعد مع عملاء من أي دولة'
        },
        {
          icon: Target,
          title: 'النتائج',
          description: 'كل مشروع مصمم لتحقيق أهدافك التجارية'
        }
      ],
      coreValues: {
        title: 'قيمــي',
        clarity: {
          title: 'الوضوح',
          description: 'تصميمات نظيفة وواضحة تنقل رسالتك بفعالية'
        },
        connectivity: {
          title: 'الاتصال',
          description: 'أساعدك على التواصل مع عملائك حول العالم'
        },
        growth: {
          title: 'النمو',
          description: 'حلول قابلة للتطوير تنمو مع عملك'
        }
      },
      skills: {
        title: 'خبراتي التقنية',
        frontend: 'تطوير الواجهات الأمامية (React, Next.js, إلخ)',
        backend: 'تطوير الخلفية (Node.js, Express, إلخ)',
        tools: 'الأدوات والتقنيات: Figma, Vercel, Stripe, PayPal، والمزيد'
      },
      experience: {
        title: 'لماذا تختارني',
        quality: 'جودة عالية',
        speed: 'تسليم سريع',
        support: 'دعم مستمر',
        innovation: 'حلول حديثة'
      }
    },
    en: {
      title: 'The AuresWeb Story',
      subtitle: 'Passionate web developer building modern solutions for clients worldwide',
      story: {
        title: 'My Journey',
        content: 'I’m a passionate web developer who loves turning ideas into beautiful, functional websites and web apps. I focus on creating modern, responsive designs that deliver results for businesses around the globe. Every project gets my full attention and dedication to ensure the highest quality, no matter where you are.'
      },
      mission: {
        title: 'My Mission',
        content: 'I believe every idea deserves to become a digital reality. My mission is to help clients from all over the world bring their visions to life with exceptional websites and applications that reflect their brand and achieve their business goals.'
      },
      values: [
        {
          icon: Zap,
          title: 'Fast Delivery',
          description: 'Get your project delivered in record time, wherever you are'
        },
        {
          icon: Heart,
          title: 'Personal Dedication',
          description: 'Every client gets my full attention and care'
        },
        {
          icon: Globe,
          title: 'Global Experience',
          description: 'I work remotely with clients from any country'
        },
        {
          icon: Target,
          title: 'Results-Focused',
          description: 'Every project designed to achieve your business goals'
        }
      ],
      coreValues: {
        title: 'My Core Values',
        clarity: {
          title: 'Clarity',
          description: 'Clean, clear designs that communicate your message'
        },
        connectivity: {
          title: 'Connectivity',
          description: 'Helping you connect with your customers worldwide'
        },
        growth: {
          title: 'Growth',
          description: 'Scalable solutions that grow with your business'
        }
      },
      skills: {
        title: 'My Technical Expertise',
        frontend: 'Frontend Development (React, Next.js, etc.)',
        backend: 'Backend Development (Node.js, Express, etc.)',
        tools: 'Tools & Technologies: Figma, Vercel, Stripe, PayPal, and more'
      },
      experience: {
        title: 'Why Choose Me',
        quality: 'Premium Quality',
        speed: 'Fast Delivery',
        support: 'Ongoing Support',
        innovation: 'Modern Solutions'
      }
    },
    fr: {
      title: 'L’histoire d’AuresWeb',
      subtitle: 'Développeur web passionné créant des solutions modernes pour des clients du monde entier',
      story: {
        title: 'Mon parcours',
        content: 'Je suis un développeur web passionné qui aime transformer les idées en sites et applications web beaux et fonctionnels. Je me concentre sur des designs modernes et responsifs qui apportent des résultats aux entreprises partout dans le monde. Chaque projet reçoit toute mon attention et mon engagement pour garantir la meilleure qualité, où que vous soyez.'
      },
      mission: {
        title: 'Ma mission',
        content: 'Je crois que chaque idée mérite de devenir une réalité numérique. Ma mission est d’aider des clients du monde entier à concrétiser leurs visions avec des sites et applications exceptionnels qui reflètent leur marque et atteignent leurs objectifs.'
      },
      values: [
        {
          icon: Zap,
          title: 'Livraison rapide',
          description: 'Recevez votre projet rapidement, où que vous soyez'
        },
        {
          icon: Heart,
          title: 'Dévouement personnel',
          description: 'Chaque client bénéficie de toute mon attention'
        },
        {
          icon: Globe,
          title: 'Expérience internationale',
          description: 'Je travaille à distance avec des clients de tous pays'
        },
        {
          icon: Target,
          title: 'Axé sur les résultats',
          description: 'Chaque projet conçu pour atteindre vos objectifs business'
        }
      ],
      coreValues: {
        title: 'Mes valeurs',
        clarity: {
          title: 'Clarté',
          description: 'Des designs propres et clairs qui communiquent efficacement votre message'
        },
        connectivity: {
          title: 'Connectivité',
          description: 'Vous aider à connecter avec vos clients dans le monde entier'
        },
        growth: {
          title: 'Croissance',
          description: 'Des solutions évolutives qui grandissent avec votre entreprise'
        }
      },
      skills: {
        title: 'Compétences techniques',
        frontend: 'Développement frontend (React, Next.js, etc.)',
        backend: 'Développement backend (Node.js, Express, etc.)',
        tools: 'Outils & technologies : Figma, Vercel, Stripe, PayPal, et plus'
      },
      experience: {
        title: 'Pourquoi me choisir',
        quality: 'Qualité premium',
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