import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#2D3436] dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {t('about.title')} <span className="text-[#00CEC9]">Zeluc</span>
            </h2>
            
            <p className="text-white/90 text-lg mb-6">
              {t('about.description1')}
            </p>
            
            <p className="text-white/90 text-lg mb-6">
              {t('about.description2')}
            </p>

            <p className="text-white/90 text-lg mb-8">
              {t('about.description3')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-[#00CEC9] font-bold text-xl mb-2">{t('about.techDriven.title')}</div>
                <div className="text-white/80">{t('about.techDriven.description')}</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-[#00CEC9] font-bold text-xl mb-2">{t('about.heartLed.title')}</div>
                <div className="text-white/80">{t('about.heartLed.description')}</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipe Zeluc" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436] to-transparent opacity-60"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#6C5CE7] rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#00CEC9] rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;