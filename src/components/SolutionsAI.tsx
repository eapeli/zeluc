import React from 'react';
import { useTranslation } from 'react-i18next';

const aiCopy = {
  pt: {
    title: 'Transforme Seu Negócio com Inteligência Artificial de Verdade',
    paragraphs: [
      'Na Zeluc, não apenas acompanhamos a inovação – nós a impulsionamos. Nossas soluções em Inteligência Artificial foram desenvolvidas para empresas que querem escalar com eficiência, reduzir custos operacionais e tomar decisões mais inteligentes e rápidas.',
      '💡 Automação Inteligente\nElimine tarefas repetitivas e libere o potencial da sua equipe. Automatizamos processos com IA para transformar tempo em lucro.',
      '🚀 Fluxos Otimizados\nDesenhamos fluxos de trabalho inteligentes, adaptáveis à sua operação, garantindo mais agilidade, precisão e economia de recursos.',
      '🔗 Integração com IA\nConectamos nossas soluções aos seus sistemas atuais, potencializando o que você já usa com a força da IA — sem complicações.',
      '📊 Análise Preditiva\nAntecipe tendências, entenda o comportamento do seu público e tome decisões embasadas em dados com poder preditivo real.',
      'Por que escolher a Zeluc?',
      '✔️ Tecnologia de ponta com aplicação prática\n✔️ Soluções sob medida para cada tipo de negócio\n✔️ Suporte humano com um toque techy\n✔️ Performance real, comprovada com resultados',
      '👉 Está pronto para colocar a IA a trabalhar por você?\nEntre em contato e descubra como podemos transformar seu negócio com soluções inteligentes.'
    ]
  },
  en: {
    title: 'Unlock Your Business Potential with Real AI Solutions',
    paragraphs: [
      'At Zeluc, we don’t follow innovation — we lead it. Our Artificial Intelligence solutions are crafted for businesses ready to scale efficiently, cut operational costs, and make smarter, faster decisions.',
      '💡 Smart Automation\nFree your team from repetitive tasks. We automate workflows with AI, turning time into profit.',
      '🚀 Optimized Workflows\nWe design intelligent, adaptive workflows tailored to your operations, ensuring speed, precision, and resource efficiency.',
      '🔗 AI Integration\nWe integrate AI into your existing systems, enhancing your current tools with cutting-edge technology — hassle-free.',
      '📊 Predictive Analytics\nStay ahead of the curve. Predict trends, understand user behavior, and make data-driven strategic decisions.',
      'Why Zeluc?',
      '✔️ Cutting-edge tech with real-world application\n✔️ Custom solutions for every business size\n✔️ Human support with a tech-driven approach\n✔️ Real performance backed by measurable results',
      '👉 Ready to put AI to work for your business?\nContact us and discover how we can transform your operations with intelligent solutions.'
    ]
  },
  es: {
    title: 'Impulsa tu Negocio con Soluciones Reales de IA',
    paragraphs: [
      'En Zeluc, no seguimos la innovación — la lideramos. Nuestras soluciones de Inteligencia Artificial están diseñadas para empresas que buscan escalar con eficiencia, reducir costos y tomar decisiones estratégicas más inteligentes.',
      '💡 Automatización Inteligente\nAutomatizamos tareas repetitivas y liberamos el potencial de tu equipo. Menos trabajo manual, más resultados.',
      '🚀 Flujos de Trabajo Optimizados\nCreamos flujos inteligentes y adaptables que se alinean con tus procesos, mejorando velocidad y precisión.',
      '🔗 Integración con IA\nConectamos nuestras soluciones a tus sistemas existentes para potenciar lo que ya usas — sin fricciones.',
      '📊 Análisis Predictivo\nAnticípate al mercado, entiende a tu audiencia y toma decisiones basadas en datos reales con capacidad predictiva.',
      '¿Por qué elegir Zeluc?',
      '✔️ Tecnología avanzada con aplicación real\n✔️ Soluciones personalizadas para tu negocio\n✔️ Soporte humano con enfoque tecnológico\n✔️ Resultados reales y medibles',
      '👉 ¿Listo para hacer que la IA trabaje para ti?\nContáctanos y descubre cómo transformar tu negocio con inteligencia.'
    ]
  }
};

const SolutionsAI: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('en')
    ? 'en'
    : i18n.language.startsWith('es')
    ? 'es'
    : 'pt';
  const copy = aiCopy[lang];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D3436] dark:text-white mb-6">
            {copy.title}
          </h1>
          <div className="space-y-4 text-gray-700 dark:text-gray-200">
            {copy.paragraphs.map((p, idx) => (
              <p key={idx} className="whitespace-pre-line">{p}</p>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.postimg.cc/8jd1Hhwk/Flux-Dev-Crie-uma-imagem-futurista-de-inteligncia-artificial-r-3.jpg"
            alt="AI Futurista"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsAI;
