import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Zap, Rocket, Facebook, Instagram, Youtube } from 'lucide-react';

interface ContactProps {
  currentLang: string;
}

const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const translations = {
    ar: {
      title: 'ابدأ مشروعك الآن',
      subtitle: 'حول فكرتك إلى واقع رقمي في 24 ساعة فقط',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        service: 'نوع الخدمة',
        budget: 'الميزانية',
        timeline: 'الإطار الزمني',
        message: 'تفاصيل المشروع',
        send: 'إرسال الطلب',
        services: [
          'تصميم موقع ويب',
          'تطوير موقع ويب',
          'متجر إلكتروني',
          'تطبيق ويب',
          'تحسين الأداء',
          'صيانة ودعم'
        ],
        budgets: [
          'أقل من 20,000 دج',
          '20,000 - 50,000 دج',
          '50,000 - 100,000 دج',
          'أكثر من 100,000 دج'
        ],
        timelines: [
          '24 ساعة (عاجل)',
          '48 ساعة',
          'أسبوع واحد',
          'أسبوعين'
        ]
      },
      contact: {
        title: 'معلومات الاتصال',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
        hours: 'ساعات العمل'
      },
      info: {
        email: 'contact@auresweb.dz',
        phone: '+213(0)781604556',
        location: 'الجزائر العاصمة، الجزائر',
        hours: 'الأحد - الخميس: 9:00 - 20:00'
      },
      process: {
        title: 'عملية العمل السريعة',
        steps: [
          {
            title: 'التواصل الفوري',
            description: 'رد خلال ساعة واحدة لمناقشة مشروعك',
            time: '1h'
          },
          {
            title: 'التخطيط السريع',
            description: 'خطة مفصلة وتصميم أولي في ساعات',
            time: '3h'
          },
          {
            title: 'التطوير المكثف',
            description: 'تطوير مكثف باستخدام أحدث التقنيات',
            time: '18h'
          },
          {
            title: 'التسليم والدعم',
            description: 'تسليم المشروع مع دعم مجاني',
            time: '2h'
          }
        ]
      },
      guarantee: {
        title: 'ضماناتي',
        items: [
          'تسليم في 24 ساعة',
          'جودة احترافية',
          'دعم مجاني شهر',
          'مراجعات مجانية'
        ]
      }
    },
    en: {
      title: 'Start Your Project Now',
      subtitle: 'Turn your idea into digital reality in just 24 hours',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        service: 'Service Type',
        budget: 'Budget',
        timeline: 'Timeline',
        message: 'Project Details',
        send: 'Send Request',
        services: [
          'Website Design',
          'Website Development',
          'E-commerce Store',
          'Web Application',
          'Performance Optimization',
          'Maintenance & Support'
        ],
        budgets: [
          'Less than $120',
          '$120 - $300',
          '$300 - $600',
          'More than $600'
        ],
        timelines: [
          '24 hours (urgent)',
          '48 hours',
          'One week',
          'Two weeks'
        ]
      },
      contact: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        hours: 'Working Hours'
      },
      info: {
        email: 'contact@auresweb.dz',
        phone: '+213(0)781604556',
        location: 'Algiers, Algeria',
        hours: 'Sunday - Thursday: 9:00 AM - 8:00 PM'
      },
      process: {
        title: 'Fast Work Process',
        steps: [
          {
            title: 'Instant Contact',
            description: 'Response within 1 hour to discuss your project',
            time: '1h'
          },
          {
            title: 'Rapid Planning',
            description: 'Detailed plan and initial design within hours',
            time: '3h'
          },
          {
            title: 'Intensive Development',
            description: 'Intensive development using latest technologies',
            time: '18h'
          },
          {
            title: 'Delivery & Support',
            description: 'Project delivery with free support',
            time: '2h'
          }
        ]
      },
      guarantee: {
        title: 'My Guarantees',
        items: [
          '24-hour delivery',
          'Professional quality',
          'Free 1-month support',
          'Free revisions'
        ]
      }
    },
    fr: {
      title: 'Démarrez Votre Projet Maintenant',
      subtitle: 'Transformez votre idée en réalité numérique en seulement 24 heures',
      form: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        service: 'Type de Service',
        budget: 'Budget',
        timeline: 'Délai',
        message: 'Détails du Projet',
        send: 'Envoyer la Demande',
        services: [
          'Design de Site Web',
          'Développement Web',
          'Boutique E-commerce',
          'Application Web',
          'Optimisation Performance',
          'Maintenance & Support'
        ],
        budgets: [
          'Moins de 120€',
          '120€ - 300€',
          '300€ - 600€',
          'Plus de 600€'
        ],
        timelines: [
          '24 heures (urgent)',
          '48 heures',
          'Une semaine',
          'Deux semaines'
        ]
      },
      contact: {
        title: 'Informations de Contact',
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
        hours: 'Heures de Travail'
      },
      info: {
        email: 'contact@auresweb.dz',
        phone: '+213(0)781604556',
        location: 'Alger, Algérie',
        hours: 'Dimanche - Jeudi: 9h00 - 20h00'
      },
      process: {
        title: 'Processus de Travail Rapide',
        steps: [
          {
            title: 'Contact Instantané',
            description: 'Réponse en 1 heure pour discuter de votre projet',
            time: '1h'
          },
          {
            title: 'Planification Rapide',
            description: 'Plan détaillé et design initial en quelques heures',
            time: '3h'
          },
          {
            title: 'Développement Intensif',
            description: 'Développement intensif avec les dernières technologies',
            time: '18h'
          },
          {
            title: 'Livraison & Support',
            description: 'Livraison du projet avec support gratuit',
            time: '2h'
          }
        ]
      },
      guarantee: {
        title: 'Mes Garanties',
        items: [
          'Livraison en 24h',
          'Qualité professionnelle',
          'Support gratuit 1 mois',
          'Révisions gratuites'
        ]
      }
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900/60 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-500/30" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 rounded-full text-sm font-bold mb-6 border border-teal-500/30">
            <Rocket className="w-5 h-5 mr-2" />
            24{currentLang === 'ar' ? ' ساعة تسليم' : currentLang === 'fr' ? 'H Livraison' : 'H Delivery'}
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="text-center mb-6">
          <a href="https://wa.me/213781604556" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-400 hover:text-green-500 font-bold text-lg">
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp: +213 781 60 45 56
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-3">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 group-hover:border-gray-500"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-3">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 group-hover:border-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-3">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 group-hover:border-gray-500"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="service" className="block text-sm font-bold text-gray-300 mb-3">
                      {t.form.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 group-hover:border-gray-500"
                      required
                    >
                      <option value="">
                        {currentLang === 'ar' ? 'اختر الخدمة' : currentLang === 'fr' ? 'Choisir un service' : 'Select a service'}
                      </option>
                      {t.form.services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-300 mb-3">
                      {t.form.budget}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 group-hover:border-gray-500"
                    >
                      <option value="">
                        {currentLang === 'ar' ? 'اختر الميزانية' : currentLang === 'fr' ? 'Choisir le budget' : 'Select budget'}
                      </option>
                      {t.form.budgets.map((budget, index) => (
                        <option key={index} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-300 mb-3">
                      {t.form.timeline}
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 group-hover:border-gray-500"
                    >
                      <option value="">
                        {currentLang === 'ar' ? 'اختر الإطار الزمني' : currentLang === 'fr' ? 'Choisir le délai' : 'Select timeline'}
                      </option>
                      {t.form.timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-3">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-600 bg-gray-700/50 text-white rounded-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 resize-none group-hover:border-gray-500"
                    placeholder={currentLang === 'ar' ? 'اشرح لي تفاصيل مشروعك...' : currentLang === 'fr' ? 'Expliquez-moi les détails de votre projet...' : 'Tell me about your project details...'}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-6 px-8 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>{t.form.send}</span>
                  <Zap className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Process */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span>{t.contact.title}</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/30">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.contact.email}</h4>
                    <p className="text-gray-300 text-sm">{t.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.contact.phone}</h4>
                    <p className="text-gray-300 text-sm">{t.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.contact.location}</h4>
                    <p className="text-gray-300 text-sm">{t.info.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.contact.hours}</h4>
                    <p className="text-gray-300 text-sm">{t.info.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <h4 className="font-bold text-white text-sm mb-4">
                  {currentLang === 'ar' ? 'تابعني على' : currentLang === 'fr' ? 'Suivez-moi sur' : 'Follow me on'}
                </h4>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com/auresweb05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/auresweb05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@auresweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://tiktok.com/@auresweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/30 hover:shadow-black/50"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Work Process */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <span>{t.process.title}</span>
              </h3>
              
              <div className="space-y-6">
                {t.process.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30">
                        {index + 1}
                      </div>
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                        {step.time}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-3xl p-8 border border-teal-500/30">
              <h4 className="font-bold text-white mb-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span>{t.guarantee.title}</span>
              </h4>
              <div className="space-y-3">
                {t.guarantee.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300 group">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl p-8 border border-teal-500/30">
              <h4 className="font-bold text-white mb-6">
                {currentLang === 'ar' ? 'تواصل سريع' : currentLang === 'fr' ? 'Contact Rapide' : 'Quick Contact'}
              </h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${t.info.email}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors border border-teal-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{currentLang === 'ar' ? 'أرسل إيميل' : currentLang === 'fr' ? 'Envoyer un Email' : 'Send Email'}</span>
                </a>
                <a
                  href={`tel:${t.info.phone}`}
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{currentLang === 'ar' ? 'اتصل بي' : currentLang === 'fr' ? 'Appelez-moi' : 'Call Me'}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors border border-green-500/30">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">{currentLang === 'ar' ? 'واتساب' : currentLang === 'fr' ? 'WhatsApp' : 'WhatsApp'}</span>
                </a>
                
                {/* Social Media Quick Links */}
                <div className="pt-4 border-t border-gray-700/30">
                  <p className="text-xs text-gray-400 mb-3">
                    {currentLang === 'ar' ? 'تابعني على' : currentLang === 'fr' ? 'Suivez-moi sur' : 'Follow me on'}
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="https://facebook.com/auresweb05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/30 transition-colors border border-blue-600/30"
                    >
                      <Facebook className="w-4 h-4 text-blue-400" />
                    </a>
                    <a
                      href="https://instagram.com/auresweb05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-colors border border-pink-500/30"
                    >
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </a>
                    <a
                      href="https://youtube.com/@auresweb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center hover:bg-red-600/30 transition-colors border border-red-600/30"
                    >
                      <Youtube className="w-4 h-4 text-red-400" />
                    </a>
                    <a
                      href="https://tiktok.com/@auresweb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors border border-black/30"
                    >
                      <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;