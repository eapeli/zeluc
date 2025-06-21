import React from 'react';
import { Brain, Cpu, Network, Workflow } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AISection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: t('ai.features.automation.title'),
      description: t('ai.features.automation.description')
    },
    {
      icon: Workflow,
      title: t('ai.features.workflow.title'),
      description: t('ai.features.workflow.description')
    },
    {
      icon: Network,
      title: t('ai.features.integration.title'),
      description: t('ai.features.integration.description')
    },
    {
      icon: Cpu,
      title: t('ai.features.analysis.title'),
      description: t('ai.features.analysis.description')
    }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Olá! Vim pelo site da Zeluc e gostaria de saber mais sobre as soluções em IA 🤖');
    window.open(`https://api.whatsapp.com/send?phone=351913603304&text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#2D3436] to-[#6C5CE7] dark:from-gray-900 dark:to-[#6C5CE7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('ai.title')} <span className="text-[#00CEC9]">AI</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('ai.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#00CEC9]/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-[#00CEC9]" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={handleWhatsAppContact}
            className="inline-flex items-center bg-[#00CEC9] hover:bg-[#00BBB7] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('ai.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AISection;