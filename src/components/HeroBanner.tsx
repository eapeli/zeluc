import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroBanner: React.FC = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6C5CE7]/90 to-[#2D3436]/80"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            {t('hero.title')}
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
            {t('hero.subtitle')}
          </p>
          
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center bg-[#6C5CE7] hover:bg-[#5A4DCB] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta')}
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;