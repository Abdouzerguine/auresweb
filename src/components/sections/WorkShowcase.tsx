import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface WorkShowcaseProps {
  currentLang: string;
}

const WorkShowcase: React.FC<WorkShowcaseProps> = ({ currentLang }) => {
  const translations = {
    ar: {
      title: 'نماذج أولية من أعمالي',
      subtitle: 'هذه بعض النماذج الأولية (Prototype) لمشاريعي. جميع الصور أدناه هي أمثلة على أعمالي السابقة.',
      viewProject: 'عرض النموذج',
      categories: {
        all: 'الكل',
      },
      featured: 'نموذج مميز'
    },
    en: {
      title: 'Prototypes of My Work',
      subtitle: 'These are some prototypes of my projects. All images below are examples of my previous work.',
      viewProject: 'View Prototype',
      categories: {
        all: 'All',
      },
      featured: 'Featured Prototype'
    },
    fr: {
      title: 'Prototypes de mes projets',
      subtitle: 'Voici quelques prototypes de mes projets. Toutes les images ci-dessous sont des exemples de mes réalisations.',
      viewProject: 'Voir le prototype',
      categories: {
        all: 'Tout',
      },
      featured: 'Prototype en vedette'
    }
  };

  const t = translations[currentLang as keyof typeof translations];

  // Images from public directory (add new images here)
  const works = [
    { image: '/19aa4022-92aa-4288-a684-3b9927607e1a.jpg' },
    { image: '/1e5cb3a8-97bf-4561-a360-2ae3254af760.jpg' },
    { image: '/23adaa5e-953b-465a-889f-d2df7f3bdd3a.jpg' },
    { image: '/3d7406de-59e6-4e25-873a-dba0aa680c5a.jpg' },
    { image: '/5ea6c35e-be89-401b-b68e-56e26a8541b4.jpg' },
    { image: '/6a46d5af-a78a-4062-97de-fa46e8bc0998.jpg' },
    { image: '/896c7f1d-c393-46ff-aeb7-269b850c1dd7.jpg' },
    { image: '/8fa8102f-4729-4dda-a531-db58504db216.jpg' },
    { image: '/9c31366b-b0af-4b7d-8d3e-d49b2fcec291.jpg' },
    { image: '/a0fe3237-2972-498f-9d70-1a6bfc0b5699.jpg' },
    { image: '/a2412d3b-4713-4000-a6ad-4b4f4695bdfa.jpg' },
    { image: '/d8db055a-5fb7-4ae8-9aef-9a3e87bc1087.jpg' },
    { image: '/e2fa63b2-a535-4b83-b11f-9de5e99bffe4.jpg' },
    { image: '/eb47d4d6-8c87-44d0-9ed9-6e77a1f03c17.jpg' },
    { image: '/f2df4b07-4374-4732-a6f4-721e4398b952.jpg' },
    { image: '/fcbce64d-966b-416d-9c8b-22fe841893e1.jpg' },
  ].map((item, idx) => ({
    id: idx + 1,
    title: `${t.title} #${idx + 1}`,
    image: item.image,
      link: '#',
    featured: false,
    category: 'all',
  }));

  return (
    <section className="py-24 bg-gray-900/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        {/* Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id}>
              <div className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-4 border border-gray-700/50 cursor-pointer">
                <div className="relative overflow-hidden h-64 flex items-center justify-center">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white text-lg font-bold">Quick Preview</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{work.title}</h4>
                  <span className="inline-flex items-center px-3 py-2 mt-2 bg-teal-500 text-white rounded-xl font-medium cursor-default">
                    Prototype
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkShowcase; 