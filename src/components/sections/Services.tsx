import React, { useState } from 'react';
import { ShoppingCart, Smartphone, Code, Palette, Globe, Rocket, Target, Info, XCircle, DollarSign } from 'lucide-react';
import Contact from './Contact';
import BudgetSelector from '../BudgetSelector';

interface ServicesProps {
  currentLang: string;
}

export interface ServiceOffer {
  icon: React.ComponentType<unknown>;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
  offerType: string;
  categoryKey: string;
}

const Services: React.FC<ServicesProps> = ({ currentLang }) => {
  const [showBudgetSelector, setShowBudgetSelector] = useState(false);
  
  const translations = {
    ar: {
      title: 'خدماتي',
      subtitle: 'حلول ويب متطورة مصممة لنجاح الأعمال الجزائرية',
      whySection: {
        title: 'لماذا AuresWeb؟',
        dedication: {
          title: 'تفاني شخصي',
          description: 'كوني مطور مستقل، أقدم اهتماماً شخصياً لكل مشروع'
        },
        speed: {
          title: 'تسليم 24 ساعة',
          description: 'سرعة لا مثيل لها في السوق الجزائري'
        },
        fresh: {
          title: 'أفكار جديدة',
          description: 'منظور حديث يجمع بين التقاليد والابتكار'
        }
      },
      services: [
        // Web Design Offers
        {
          icon: Palette,
          title: 'تصميم ويب أساسي',
          description: 'موقع تعريفي احترافي بصفحة واحدة مع تصميم متجاوب وهوية بصرية مميزة. مناسب للشركات الناشئة وأصحاب الأعمال الصغيرة.',
          features: ['صفحة رئيسية جذابة', 'تصميم متجاوب', 'تخصيص الألوان والشعار'],
          price: 'ابتداءً من 40,000 دج',
          popular: false,
          offerType: 'عرض تصميم المواقع',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'تصميم ويب متقدم',
          description: 'موقع متعدد الصفحات مع أقسام مخصصة، معرض أعمال، ونماذج تواصل احترافية. مثالي للشركات المتوسطة.',
          features: ['عدة صفحات', 'معرض أعمال', 'نماذج تواصل'],
          price: 'ابتداءً من 70,000 دج',
          popular: true,
          offerType: 'عرض تصميم المواقع',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'تصميم ويب مخصص للشركات',
          description: 'حلول تصميم شاملة مع تطوير واجهات فريدة، رسوميات مخصصة، ودعم كامل للهوية البصرية للشركة.',
          features: ['تصميم مخصص بالكامل', 'رسوميات احترافية', 'دعم الهوية البصرية'],
          price: 'ابتداءً من 120,000 دج',
          popular: false,
          offerType: 'عرض تصميم المواقع',
          categoryKey: 'web-design',
        },
        // Web Development Offers
        {
          icon: Code,
          title: 'تطوير ويب أساسي',
          description: 'تطوير موقع ثابت أو ديناميكي بسيط مع لوحة تحكم أساسية. مناسب للمواقع التعريفية والمدونات.',
          features: ['موقع ثابت أو ديناميكي', 'لوحة تحكم بسيطة', 'أداء سريع'],
          price: 'ابتداءً من 50,000 دج',
          popular: false,
          offerType: 'عرض تطوير المواقع',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'تطوير ويب متقدم',
          description: 'تطوير موقع ديناميكي متعدد الصفحات مع تكامل قواعد البيانات وميزات مخصصة للشركات.',
          features: ['تكامل قواعد البيانات', 'ميزات مخصصة', 'أمان متقدم'],
          price: 'ابتداءً من 90,000 دج',
          popular: true,
          offerType: 'عرض تطوير المواقع',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'تطوير ويب احترافي للشركات',
          description: 'حلول تطوير متكاملة مع أنظمة إدارة محتوى، تكامل API، وأداء عالي للشركات الكبرى.',
          features: ['أنظمة إدارة محتوى', 'تكامل API', 'أداء عالي'],
          price: 'ابتداءً من 150,000 دج',
          popular: false,
          offerType: 'عرض تطوير المواقع',
          categoryKey: 'web-dev',
        },
        // E-commerce Offers
        {
          icon: ShoppingCart,
          title: 'متجر إلكتروني أساسي',
          description: 'متجر إلكتروني بسيط مع منتجات محدودة ودفع يدوي. مناسب للمشاريع الصغيرة.',
          features: ['إضافة منتجات محدودة', 'دفع يدوي', 'تصميم متجاوب'],
          price: 'ابتداءً من 35,000 دج',
          popular: false,
          offerType: 'عرض المتاجر الإلكترونية',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'متجر إلكتروني متكامل',
          description: 'متجر إلكتروني متكامل مع إدارة مخزون، دفع إلكتروني، ولوحة تحكم متقدمة.',
          features: ['إدارة مخزون', 'دفع إلكتروني', 'لوحة تحكم متقدمة'],
          price: 'ابتداءً من 80,000 دج',
          popular: true,
          offerType: 'عرض المتاجر الإلكترونية',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'متجر إلكتروني احترافي للشركات',
          description: 'حلول تجارة إلكترونية متقدمة مع تكامل أنظمة الشحن، تقارير وتحليلات، ودعم فني مستمر.',
          features: ['تكامل أنظمة الشحن', 'تقارير وتحليلات', 'دعم فني مستمر'],
          price: 'ابتداءً من 140,000 دج',
          popular: false,
          offerType: 'عرض المتاجر الإلكترونية',
          categoryKey: 'ecommerce',
        },
        // Web Application Offers
        {
          icon: Smartphone,
          title: 'تطبيق ويب أساسي',
          description: 'تطبيق ويب تفاعلي بميزات أساسية ولوحة تحكم بسيطة. مناسب للمشاريع الناشئة.',
          features: ['ميزات أساسية', 'لوحة تحكم بسيطة', 'تصميم متجاوب'],
          price: 'ابتداءً من 80,000 دج',
          popular: false,
          offerType: 'عرض تطبيقات الويب',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'تطبيق ويب متقدم',
          description: 'تطبيق ويب متعدد الصفحات مع تكامل قواعد البيانات وميزات تفاعلية متقدمة.',
          features: ['تكامل قواعد البيانات', 'ميزات تفاعلية', 'أداء محسن'],
          price: 'ابتداءً من 130,000 دج',
          popular: true,
          offerType: 'عرض تطبيقات الويب',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'تطبيق ويب احترافي للشركات',
          description: 'تطبيق ويب مخصص للشركات مع حلول متقدمة، أمان عالي، ودعم فني مستمر.',
          features: ['حلول متقدمة', 'أمان عالي', 'دعم فني مستمر'],
          price: 'ابتداءً من 200,000 دج',
          popular: false,
          offerType: 'عرض تطبيقات الويب',
          categoryKey: 'web-app',
        },
      ]
    },
    en: {
      title: 'My Services',
      subtitle: 'Cutting-edge web solutions designed for Algerian business success',
      whySection: {
        title: 'Why AuresWeb?',
        dedication: {
          title: 'One-Person Dedication',
          description: 'As a solo developer, I provide personal attention to every project'
        },
        speed: {
          title: 'Unmatched 24h Delivery',
          description: 'Unprecedented speed in the Algerian market'
        },
        fresh: {
          title: 'Fresh Perspectives',
          description: 'Modern approach bridging tradition with innovation'
        }
      },
      services: [
        // Web Design Offers
        {
          icon: Palette,
          title: 'Basic Web Design',
          description: 'A professional one-page website with responsive design and unique branding. Ideal for startups and small businesses.',
          features: ['Attractive homepage', 'Responsive design', 'Custom colors and logo'],
          price: 'From 40,000 DA',
          popular: false,
          offerType: 'Web Design Offer',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'Advanced Web Design',
          description: 'Multi-page website with custom sections, portfolio, and professional contact forms. Perfect for medium-sized companies.',
          features: ['Multiple pages', 'Portfolio', 'Contact forms'],
          price: 'From 70,000 DA',
          popular: true,
          offerType: 'Web Design Offer',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'Corporate Custom Web Design',
          description: 'Comprehensive design solutions with unique interfaces, custom graphics, and full branding support for companies.',
          features: ['Fully custom design', 'Professional graphics', 'Branding support'],
          price: 'From 120,000 DA',
          popular: false,
          offerType: 'Web Design Offer',
          categoryKey: 'web-design',
        },
        // Web Development Offers
        {
          icon: Code,
          title: 'Basic Web Development',
          description: 'Static or simple dynamic website development with a basic admin panel. Suitable for informational sites and blogs.',
          features: ['Static or dynamic site', 'Simple admin panel', 'Fast performance'],
          price: 'From 50,000 DA',
          popular: false,
          offerType: 'Web Development Offer',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'Advanced Web Development',
          description: 'Dynamic multi-page website with database integration and custom features for companies.',
          features: ['Database integration', 'Custom features', 'Advanced security'],
          price: 'From 90,000 DA',
          popular: true,
          offerType: 'Web Development Offer',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'Professional Corporate Web Development',
          description: 'Integrated development solutions with CMS, API integration, and high performance for large companies.',
          features: ['CMS', 'API integration', 'High performance'],
          price: 'From 150,000 DA',
          popular: false,
          offerType: 'Web Development Offer',
          categoryKey: 'web-dev',
        },
        // E-commerce Offers
        {
          icon: ShoppingCart,
          title: 'Basic E-commerce Store',
          description: 'Simple e-commerce store with limited products and manual payment. Ideal for small projects.',
          features: ['Limited products', 'Manual payment', 'Responsive design'],
          price: 'From 35,000 DA',
          popular: false,
          offerType: 'E-commerce Offer',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'Integrated E-commerce Store',
          description: 'Full-featured e-commerce store with inventory management, online payment, and advanced admin panel.',
          features: ['Inventory management', 'Online payment', 'Advanced admin panel'],
          price: 'From 80,000 DA',
          popular: true,
          offerType: 'E-commerce Offer',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'Professional Corporate E-commerce',
          description: 'Advanced e-commerce solutions with shipping integration, analytics, and continuous technical support.',
          features: ['Shipping integration', 'Analytics', 'Continuous support'],
          price: 'From 140,000 DA',
          popular: false,
          offerType: 'E-commerce Offer',
          categoryKey: 'ecommerce',
        },
        // Web Application Offers
        {
          icon: Smartphone,
          title: 'Basic Web Application',
          description: 'Interactive web app with essential features and a simple admin panel. Suitable for startups.',
          features: ['Essential features', 'Simple admin panel', 'Responsive design'],
          price: 'From 80,000 DA',
          popular: false,
          offerType: 'Web Application Offer',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'Advanced Web Application',
          description: 'Multi-page web app with database integration and advanced interactive features.',
          features: ['Database integration', 'Interactive features', 'Optimized performance'],
          price: 'From 130,000 DA',
          popular: true,
          offerType: 'Web Application Offer',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'Professional Corporate Web Application',
          description: 'Custom web app for companies with advanced solutions, high security, and continuous technical support.',
          features: ['Advanced solutions', 'High security', 'Continuous support'],
          price: 'From 200,000 DA',
          popular: false,
          offerType: 'Web Application Offer',
          categoryKey: 'web-app',
        }
      ]
    },
    fr: {
      title: 'Mes Services',
      subtitle: 'Solutions web de pointe conçues pour le succès des entreprises algériennes',
      whySection: {
        title: 'Pourquoi AuresWeb ?',
        dedication: {
          title: 'Dévouement Personnel',
          description: 'En tant que développeur solo, j\'apporte une attention personnelle à chaque projet'
        },
        speed: {
          title: 'Livraison 24h Inégalée',
          description: 'Vitesse sans précédent sur le marché algérien'
        },
        fresh: {
          title: 'Perspectives Fraîches',
          description: 'Approche moderne alliant tradition et innovation'
        }
      },
      services: [
        // Offres de Design Web
        {
          icon: Palette,
          title: 'Conception Web Basique',
          description: 'Site vitrine professionnel d\'une page avec design responsive et identité visuelle unique. Idéal pour les startups et petites entreprises.',
          features: ['Page d\'accueil attrayante', 'Design responsive', 'Personnalisation des couleurs et logo'],
          price: 'À partir de 40 000 DA',
          popular: false,
          offerType: 'Offre Design Web',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'Conception Web Avancée',
          description: 'Site multi-pages avec sections personnalisées, portfolio et formulaires de contact professionnels. Parfait pour les entreprises moyennes.',
          features: ['Pages multiples', 'Portfolio', 'Formulaires de contact'],
          price: 'À partir de 70 000 DA',
          popular: true,
          offerType: 'Offre Design Web',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'Conception Web Sur Mesure Entreprise',
          description: 'Solutions de design complètes avec interfaces uniques, graphismes personnalisés et accompagnement total de l\'identité visuelle.',
          features: ['Design entièrement personnalisé', 'Graphismes professionnels', 'Support identité visuelle'],
          price: 'À partir de 120 000 DA',
          popular: false,
          offerType: 'Offre Design Web',
          categoryKey: 'web-design',
        },
        // Offres de Développement Web
        {
          icon: Code,
          title: 'Développement Web Basique',
          description: 'Développement de site statique ou dynamique simple avec panneau d\'administration basique. Adapté aux sites d\'information et blogs.',
          features: ['Site statique ou dynamique', 'Panneau d\'administration simple', 'Performance rapide'],
          price: 'À partir de 50 000 DA',
          popular: false,
          offerType: 'Offre Développement Web',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'Développement Web Avancé',
          description: 'Site dynamique multi-pages avec intégration base de données et fonctionnalités personnalisées pour entreprises.',
          features: ['Intégration base de données', 'Fonctionnalités personnalisées', 'Sécurité avancée'],
          price: 'À partir de 90 000 DA',
          popular: true,
          offerType: 'Offre Développement Web',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'Développement Web Professionnel Entreprise',
          description: 'Solutions intégrées avec CMS, intégration API et haute performance pour grandes entreprises.',
          features: ['CMS', 'Intégration API', 'Haute performance'],
          price: 'À partir de 150 000 DA',
          popular: false,
          offerType: 'Offre Développement Web',
          categoryKey: 'web-dev',
        },
        // Offres E-commerce
        {
          icon: ShoppingCart,
          title: 'Boutique E-commerce Basique',
          description: 'Boutique simple avec produits limités et paiement manuel. Idéal pour petits projets.',
          features: ['Produits limités', 'Paiement manuel', 'Design responsive'],
          price: 'À partir de 35 000 DA',
          popular: false,
          offerType: 'Offre E-commerce',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'Boutique E-commerce Intégrée',
          description: 'Boutique complète avec gestion de stock, paiement en ligne et panneau d\'administration avancé.',
          features: ['Gestion de stock', 'Paiement en ligne', 'Panneau d\'administration avancé'],
          price: 'À partir de 80 000 DA',
          popular: true,
          offerType: 'Offre E-commerce',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'E-commerce Professionnel Entreprise',
          description: 'Solutions e-commerce avancées avec intégration livraison, analyses et support technique continu.',
          features: ['Intégration livraison', 'Analyses', 'Support continu'],
          price: 'À partir de 140 000 DA',
          popular: false,
          offerType: 'Offre E-commerce',
          categoryKey: 'ecommerce',
        },
        // Offres Applications Web
        {
          icon: Smartphone,
          title: 'Application Web Basique',
          description: 'Application web interactive avec fonctionnalités essentielles et panneau d\'administration simple. Adaptée aux startups.',
          features: ['Fonctionnalités essentielles', 'Panneau d\'administration simple', 'Design responsive'],
          price: 'À partir de 80 000 DA',
          popular: false,
          offerType: 'Offre Application Web',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'Application Web Avancée',
          description: 'Application web multi-pages avec intégration base de données et fonctionnalités interactives avancées.',
          features: ['Intégration base de données', 'Fonctionnalités interactives', 'Performance optimisée'],
          price: 'À partir de 130 000 DA',
          popular: true,
          offerType: 'Offre Application Web',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'Application Web Professionnelle Entreprise',
          description: 'Application web sur mesure pour entreprises avec solutions avancées, sécurité élevée et support technique continu.',
          features: ['Solutions avancées', 'Sécurité élevée', 'Support continu'],
          price: 'À partir de 200 000 DA',
          popular: false,
          offerType: 'Offre Application Web',
          categoryKey: 'web-app',
        }
      ]
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOffers, setModalOffers] = React.useState<ServiceOffer[]>([]);
  const [modalCategory, setModalCategory] = React.useState<string>('');

  React.useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [modalOpen]);

  // Group offers by categoryKey
  const grouped = t.services.reduce((acc: Record<string, ServiceOffer[]>, offer: ServiceOffer) => {
    if (!acc[offer.categoryKey]) acc[offer.categoryKey] = [];
    acc[offer.categoryKey].push(offer);
    return acc;
  }, {});

  // Only show the first (basic) offer for each category
  const mainOffers = Object.values(grouped).map((offers: ServiceOffer[]) => offers[0]);

  // Modal open handler
  const openModal = (categoryKey: string) => {
    setModalOffers(grouped[categoryKey] || []);
    setModalCategory(categoryKey);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleServiceSelect = (service: ServiceOffer) => {
    // Scroll to contact section when a service is selected
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If budget selector is shown, render it instead of the main services
  if (showBudgetSelector) {
    return (
      <section className="relative min-h-screen py-24 bg-gray-900/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => setShowBudgetSelector(false)}
              className="flex items-center text-white hover:text-teal-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {currentLang === 'ar' ? 'العودة للخدمات' : currentLang === 'fr' ? 'Retour aux Services' : 'Back to Services'}
            </button>
          </div>
          
          <BudgetSelector 
            currentLang={currentLang} 
            services={t.services} 
            onServiceSelect={handleServiceSelect}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-24 bg-gray-900/60 overflow-hidden">
      {/* 3D Background removed */}
      {/* Background Elements (old) */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-500/30" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1s' }} />
      </div> */}

      {/* Main Content */}
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

        {/* Why AuresWeb Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">{t.whySection.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t.whySection.dedication.title}</h4>
              <p className="text-gray-300 leading-relaxed">{t.whySection.dedication.description}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t.whySection.speed.title}</h4>
              <p className="text-gray-300 leading-relaxed">{t.whySection.speed.description}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{t.whySection.fresh.title}</h4>
              <p className="text-gray-300 leading-relaxed">{t.whySection.fresh.description}</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainOffers.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={
                  `relative group bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-teal-500/40` +
                  ` ${service.popular ? 'border-teal-500/50 ring-2 ring-teal-500/30' : ''}`
                }
              >
                {/* Flashy Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-gradient-to-r from-teal-500/10 to-blue-500/10 animate-pulse" />
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/30">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse shadow-lg shadow-teal-500/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-teal-400">{service.price}</div>
                  <a href="#contact" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors group-hover:translate-x-1 transition-transform duration-300">
                    {currentLang === 'ar' ? 'اطلب الآن →' : currentLang === 'fr' ? 'Commander →' : 'Order Now →'}
                  </a>
                </div>
                {/* Details Icon (flashy) */}
                <button
                  onClick={() => openModal(service.categoryKey)}
                  className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-full shadow-lg shadow-teal-500/30 hover:scale-125 transition-transform duration-300 border-2 border-white/20 animate-pulse z-20"
                  title={currentLang === 'ar' ? 'تفاصيل الباقات' : currentLang === 'fr' ? 'Détails des offres' : 'Offer Details'}
                >
                  <Info className="w-5 h-5 text-white" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Budget Selector CTA */}
        <div className="text-center bg-gradient-to-r from-blue-800/50 via-blue-700/50 to-blue-800/50 rounded-3xl p-12 relative overflow-hidden border border-blue-700/50 backdrop-blur-sm mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="w-12 h-12 text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">
                {currentLang === 'ar' ? 'لا تعرف ميزانيتك؟' : currentLang === 'fr' ? 'Vous ne connaissez pas votre budget ?' : 'Not sure about your budget?'}
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentLang === 'ar' ? 'اختر نطاق ميزانيتك واكتشف الخدمات المناسبة لك' : currentLang === 'fr' ? 'Choisissez votre fourchette de budget et découvrez les services adaptés' : 'Choose your budget range and discover the right services for you'}
            </p>
            <button 
              onClick={() => setShowBudgetSelector(true)}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              {currentLang === 'ar' ? 'اختر ميزانيتك' : currentLang === 'fr' ? 'Sélectionner Budget' : 'Select Budget'}
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-3xl p-12 relative overflow-hidden border border-gray-700/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 animate-pulse" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">
              {currentLang === 'ar' ? 'جاهز لبدء مشروعك؟' : currentLang === 'fr' ? 'Prêt à démarrer votre projet ?' : 'Ready to start your project?'}
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentLang === 'ar' ? 'احصل على موقعك الاحترافي في 24 ساعة فقط' : currentLang === 'fr' ? 'Obtenez votre site professionnel en seulement 24 heures' : 'Get your professional website in just 24 hours'}
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300">
              {currentLang === 'ar' ? 'ابدأ الآن' : currentLang === 'fr' ? 'Commencer Maintenant' : 'Start Now'}
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <Contact currentLang={currentLang} />

        {/* Modal */}
        {modalOpen && (
          <div className="modal fixed inset-0 z-50 flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
            <div className="relative z-10 bg-gray-900 rounded-3xl max-w-3xl w-full shadow-2xl border-2 border-teal-500/30 animate-scale-in p-4 md:p-8 max-h-[90vh]">
              {/* Close Button */}
              <div className="sticky top-0 z-20 flex justify-end bg-gray-900 rounded-t-3xl pt-2 pb-2">
                <button
                  onClick={closeModal}
                  className="bg-gray-800 hover:bg-red-500/80 transition-colors duration-200 rounded-full p-2 shadow-lg border-2 border-gray-700/50 group"
                  title={currentLang === 'ar' ? 'إغلاق' : currentLang === 'fr' ? 'Fermer' : 'Close'}
                >
                  <XCircle className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {t.services.find(s => s.categoryKey === modalCategory)?.offerType || modalCategory}
              </h3>
              <div className="flex flex-row gap-6 overflow-x-auto pb-2">
                {modalOffers.map((offer, idx) => {
                  const Icon = offer.icon;
                  return (
                    <div
                      key={idx}
                      className={`min-w-[260px] max-w-xs bg-gray-800/70 rounded-2xl p-6 border flex-shrink-0 ${
                        offer.popular
                          ? 'border-teal-400 ring-2 ring-teal-400/30 animate-pulse'
                          : 'border-gray-700/50'
                      }`}
                    >
                      {offer.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          {currentLang === 'ar'
                            ? 'الأكثر طلباً'
                            : currentLang === 'fr'
                            ? 'Populaire'
                            : 'Most Popular'}
                        </div>
                      )}
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 text-center">{offer.title}</h4>
                      <p className="text-gray-300 mb-4 text-sm text-center">{offer.description}</p>
                      <ul className="space-y-2 mb-4">
                        {offer.features.map((f, i) => (
                          <li key={i} className="flex items-center text-xs text-gray-300">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="text-center text-teal-400 font-bold text-base">{offer.price}</div>
                      <a href="#contact" className="block mt-4 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-center transition-colors duration-200">
                        {currentLang === 'ar' ? 'اطلب الآن' : currentLang === 'fr' ? 'Commander' : 'Order Now'}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;