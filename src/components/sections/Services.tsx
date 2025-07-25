import React, { useState } from 'react';
import { ShoppingCart, Smartphone, Code, Palette, Globe, Rocket, Target, Info, XCircle, DollarSign } from 'lucide-react';
import Contact from './Contact';
import BudgetSelector from '../BudgetSelector';

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

const Services: React.FC = () => {
  const [showBudgetSelector, setShowBudgetSelector] = useState(false);

  // English, USD, global focus
  const t = {
      title: 'My Services',
    subtitle: 'Modern web solutions for businesses worldwide',
      whySection: {
      title: 'Why Choose Me?',
        dedication: {
        title: 'Personal Dedication',
        description: 'As a solo developer, I provide personal attention to every project, no matter where you are in the world.'
        },
        speed: {
        title: 'Fast Delivery',
        description: 'Get your website or app delivered in record time, wherever your business is located.'
        },
        fresh: {
        title: 'Modern Approach',
        description: 'I combine the latest technologies and design trends to help your business stand out globally.'
        }
      },
      services: [
        // Web Design Offers
        {
          icon: Palette,
          title: 'Basic Web Design',
        description: 'A professional one-page website with responsive design and custom branding. Perfect for startups and small businesses worldwide.',
        features: ['Modern, responsive design', 'Custom branding (logo & colors)', 'Fast delivery (2-3 days)'],
        price: 'From $299',
          popular: false,
          offerType: 'Web Design Offer',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'Advanced Web Design',
        description: 'Multi-page website with custom sections, portfolio, and professional contact forms. Ideal for growing businesses.',
        features: ['Custom sections & portfolio', 'Professional contact forms', 'Fully responsive'],
        price: 'From $499',
          popular: true,
          offerType: 'Web Design Offer',
          categoryKey: 'web-design',
        },
        {
          icon: Palette,
          title: 'Corporate Custom Web Design',
        description: 'Bespoke corporate website with unique interface, custom graphics, and full branding support for established companies.',
        features: ['Unique interface & graphics', 'Full branding support', 'Advanced features'],
        price: 'From $799',
          popular: false,
          offerType: 'Web Design Offer',
          categoryKey: 'web-design',
        },
        // Web Development Offers
        {
          icon: Code,
          title: 'Basic Web Development',
        description: 'Simple website or blog with static or dynamic content and a basic admin panel. Fast performance and worldwide delivery.',
        features: ['Static or dynamic site', 'Basic admin panel', 'Fast performance'],
        price: 'From $349',
          popular: false,
          offerType: 'Web Development Offer',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'Advanced Web Development',
        description: 'Dynamic business website with database integration, custom features, and advanced security.',
          features: ['Database integration', 'Custom features', 'Advanced security'],
        price: 'From $599',
          popular: true,
          offerType: 'Web Development Offer',
          categoryKey: 'web-dev',
        },
        {
          icon: Code,
          title: 'Professional Corporate Web Development',
        description: 'Enterprise web solutions with CMS, API integration, and high performance for large companies.',
        features: ['CMS & API integration', 'High performance', 'For large companies'],
        price: 'From $999',
          popular: false,
          offerType: 'Web Development Offer',
          categoryKey: 'web-dev',
        },
        // E-commerce Offers
        {
          icon: ShoppingCart,
          title: 'Basic E-commerce Store',
        description: 'Simple online store with limited products, manual or online payment, and responsive design.',
        features: ['Limited products', 'Manual or online payment', 'Responsive design'],
        price: 'From $399',
          popular: false,
          offerType: 'E-commerce Offer',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'Integrated E-commerce Store',
        description: 'Full-featured e-commerce store with inventory management, online payment (PayPal, Stripe, etc.), and advanced admin panel.',
          features: ['Inventory management', 'Online payment', 'Advanced admin panel'],
        price: 'From $799',
          popular: true,
          offerType: 'E-commerce Offer',
          categoryKey: 'ecommerce',
        },
        {
          icon: ShoppingCart,
          title: 'Professional Corporate E-commerce',
        description: 'Advanced e-commerce solutions with shipping integration, analytics, and ongoing support.',
        features: ['Shipping integration', 'Analytics & reporting', 'Ongoing support'],
        price: 'From $1299',
          popular: false,
          offerType: 'E-commerce Offer',
          categoryKey: 'ecommerce',
        },
        // Web Application Offers
        {
          icon: Smartphone,
          title: 'Basic Web Application',
        description: 'Interactive web app with essential features and a simple admin panel. Suitable for startups worldwide.',
          features: ['Essential features', 'Simple admin panel', 'Responsive design'],
        price: 'From $699',
          popular: false,
          offerType: 'Web Application Offer',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'Advanced Web Application',
          description: 'Multi-page web app with database integration and advanced interactive features.',
        features: ['Database integration', 'Advanced interactive features', 'Optimized performance'],
        price: 'From $1199',
          popular: true,
          offerType: 'Web Application Offer',
          categoryKey: 'web-app',
        },
        {
          icon: Smartphone,
          title: 'Professional Corporate Web Application',
        description: 'Custom enterprise web app with advanced solutions, high security, and ongoing support.',
        features: ['Advanced solutions', 'High security', 'Ongoing support'],
        price: 'From $1799',
          popular: false,
          offerType: 'Web Application Offer',
          categoryKey: 'web-app',
        },
        // Canva Design & Social Media Offers
        {
          icon: Palette,
          title: 'Social Media Post Design (Canva)',
          description: 'Custom, eye-catching social media posts for Instagram, Facebook, LinkedIn, and more. Designed in Canva for easy editing and reuse.',
          features: ['10 custom posts', 'Branded with your logo/colors', 'Delivered as Canva templates (fully editable)', 'Fast turnaround (2-3 days)'],
          price: 'From $49',
          popular: true,
          offerType: 'Canva Design & Social Media',
          categoryKey: 'canva-design',
        },
        {
          icon: Palette,
          title: 'Short Video Editing (Canva)',
          description: 'Engaging short videos for Reels, TikTok, or Stories, edited in Canva with your branding and message.',
          features: ['Up to 60 seconds per video', 'Text overlays, transitions, music', 'Delivered as MP4 and Canva template', '2 revisions included'],
          price: 'From $39/video',
          popular: false,
          offerType: 'Canva Design & Social Media',
          categoryKey: 'canva-design',
        },
        {
          icon: Palette,
          title: 'Social Media Branding Kit (Canva)',
          description: 'Complete branding kit for your social media presence, including profile picture, cover/banner, highlight icons, and post templates.',
          features: ['Profile & cover images', '5 highlight icons', '3 post templates', 'All delivered as Canva files'],
          price: 'From $59',
          popular: false,
          offerType: 'Canva Design & Social Media',
          categoryKey: 'canva-design',
        },
        {
          icon: Palette,
          title: 'Website + Social Media Bundle',
          description: 'Get a modern website and a full social media kit to launch your brand online.',
          features: ['Website (see web offers)', '10 social media posts', 'Branding kit', 'Discounted bundle price'],
          price: 'From $349',
          popular: false,
          offerType: 'Canva Design & Social Media',
          categoryKey: 'canva-design',
        },
        // Canva Bundles Offers
        {
          icon: Palette,
          title: 'Social Media Post Design',
          description: 'Eye-catching, branded posts for Instagram, Facebook, LinkedIn, and more. Delivered in ready-to-publish formats, tailored to your brand and goals.',
          features: [
            'Custom templates for posts, stories, and ads',
            'Brand colors, fonts, and logo integration',
            'Editable Canva links for future use',
            'Fast turnaround (1-2 days)'
          ],
          price: 'From $25/post',
          popular: false,
          offerType: 'Canva Bundles',
          categoryKey: 'canva-bundles',
        },
        {
          icon: Palette,
          title: 'Video Editing for Social Media',
          description: 'Short-form videos, reels, and stories edited in Canva for maximum engagement. Includes captions, transitions, and brand elements.',
          features: [
            'Up to 60 seconds per video',
            'Animated text, stickers, and effects',
            'Optimized for Instagram, TikTok, YouTube Shorts',
            'Delivered as MP4 and Canva link'
          ],
          price: 'From $40/video',
          popular: false,
          offerType: 'Canva Bundles',
          categoryKey: 'canva-bundles',
        },
        {
          icon: Palette,
          title: 'Branding Kit Creation',
          description: 'Professional Canva branding kits with logos, color palettes, fonts, and templates to ensure a consistent look across all platforms.',
          features: [
            'Logo design (3 concepts)',
            'Color palette & font selection',
            'Social media templates (5 included)',
            'Brand guidelines PDF'
          ],
          price: 'From $120/kit',
          popular: false,
          offerType: 'Canva Bundles',
          categoryKey: 'canva-bundles',
        },
        {
          icon: Palette,
          title: 'Canva Bundles',
          description: 'Save with bundled packages: posts, stories, videos, and branding assets for a cohesive online presence.',
          features: [
            '10 social media posts + 2 videos + branding kit',
            'All editable in Canva',
            'Personalized to your business',
            'Priority delivery'
          ],
          price: 'From $250/bundle',
          popular: false,
          offerType: 'Canva Bundles',
          categoryKey: 'canva-bundles',
        },
      ]
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOffers, setModalOffers] = React.useState<ServiceOffer[]>([]);
  const [modalCategory, setModalCategory] = React.useState<string>('');
  const [modalIndex, setModalIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal-open');
      setModalIndex(0); // Reset to first offer when modal opens
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
              Back to Services
            </button>
          </div>
          
          <BudgetSelector 
            currentLang="en" 
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
                    Order Now →
                  </a>
                </div>
                {/* Details Icon (flashy) */}
                <button
                  onClick={() => openModal(service.categoryKey)}
                  className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-full shadow-lg shadow-teal-500/30 hover:scale-125 transition-transform duration-300 border-2 border-white/20 animate-pulse z-20"
                  title="Offer Details"
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
                Not sure about your budget?
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose your budget range and discover the right services for you
            </p>
            <button 
              onClick={() => setShowBudgetSelector(true)}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center mx-auto"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Select Budget
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-3xl p-12 relative overflow-hidden border border-gray-700/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 animate-pulse" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to start your project?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your professional website in just 24 hours
            </p>
            <button 
              className="px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Now
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <Contact currentLang="en" />

        {/* Modal */}
        {modalOpen && (
          <div className="modal fixed inset-0 z-50 flex items-center justify-center">
            {/* Background */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
            <div className="relative z-10 bg-gray-900 rounded-3xl max-w-3xl w-full shadow-2xl border-2 border-teal-500/30 animate-scale-in p-4 md:p-8 max-h-[90vh] flex flex-col items-center">
              {/* Close Button */}
              <div className="sticky top-0 z-20 flex justify-end bg-gray-900 rounded-t-3xl pt-2 pb-2 w-full">
                <button
                  onClick={closeModal}
                  className="bg-gray-800 hover:bg-red-500/80 transition-colors duration-200 rounded-full p-2 shadow-lg border-2 border-gray-700/50 group"
                  title="Close"
                >
                  <XCircle className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {t.services.find(s => s.categoryKey === modalCategory)?.offerType || modalCategory}
              </h3>
              <div className="flex items-center justify-center w-full gap-4">
                {/* Left Arrow */}
                <button
                  onClick={() => setModalIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={modalIndex === 0}
                  className={`p-2 rounded-full bg-gray-800 hover:bg-teal-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`}
                  aria-label="Previous Offer"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                {/* Offer Card */}
                {modalOffers.length > 0 && (() => {
                  const offer = modalOffers[modalIndex];
                  const Icon = offer.icon;
                  return (
                    <div
                      className={`min-w-[260px] max-w-xs bg-gray-800/70 rounded-2xl p-6 border flex-shrink-0 relative ${
                        offer.popular
                          ? 'border-teal-400 ring-2 ring-teal-400/30 animate-pulse'
                          : 'border-gray-700/50'
                      }`}
                    >
                      {offer.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                          Most Popular
                        </div>
                      )}
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Service Type */}
                      <div className="text-xs font-semibold text-teal-400 text-center mb-1 uppercase tracking-wide">{offer.offerType}</div>
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
                        Order Now
                      </a>
                    </div>
                  );
                })()}
                {/* Right Arrow */}
                <button
                  onClick={() => setModalIndex((prev) => Math.min(prev + 1, modalOffers.length - 1))}
                  disabled={modalIndex === modalOffers.length - 1}
                  className={`p-2 rounded-full bg-gray-800 hover:bg-teal-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed`}
                  aria-label="Next Offer"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              {/* Offer count indicator */}
              <div className="mt-4 text-gray-400 text-sm text-center">
                {modalOffers.length > 1 && (
                  <span>Offer {modalIndex + 1} of {modalOffers.length}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;