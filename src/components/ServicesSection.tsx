import React from 'react';
import { Video, Monitor, Instagram, PieChart, Cpu, Rocket, Printer, Palette, Megaphone, BookOpen, Lightbulb, FileText } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.items.videoEditing'),
      description: t('services.items.videoEditingDesc'),
      icon: Video
    },
    {
      title: t('services.items.websites'),
      description: t('services.items.websitesDesc'),
      icon: Monitor
    },
    {
      title: t('services.items.socialMedia'),
      description: t('services.items.socialMediaDesc'),
      icon: Instagram
    },
    {
      title: t('services.items.seo'),
      description: t('services.items.seoDesc'),
      icon: PieChart
    },
    {
      title: t('services.items.ai'),
      description: t('services.items.aiDesc'),
      icon: Cpu
    },
    {
      title: t('services.items.launches'),
      description: t('services.items.launchesDesc'),
      icon: Rocket
    },
    {
      title: t('services.items.print'),
      description: t('services.items.printDesc'),
      icon: Printer
    },
    {
      title: t('services.items.branding'),
      description: t('services.items.brandingDesc'),
      icon: Palette
    },
    {
      title: t('services.items.advertising'),
      description: t('services.items.advertisingDesc'),
      icon: Megaphone
    },
    {
      title: t('services.items.ebooks'),
      description: t('services.items.ebooksDesc'),
      icon: BookOpen
    },
    {
      title: t('services.items.events'),
      description: t('services.items.eventsDesc'),
      icon: Lightbulb
    },
    {
      title: t('services.items.digital'),
      description: t('services.items.digitalDesc'),
      icon: FileText
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] dark:text-white mb-4">
            {t('services.title')} <span className="text-[#6C5CE7]">{t('services.subtitle')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://api.whatsapp.com/send?phone=351913603304&text=Ol%C3%A1%20vim%20pelo%20site%20da%20Zeluc%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%F0%9F%98%80"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#6C5CE7] hover:bg-[#5A4DCB] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('services.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;