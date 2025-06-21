import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const lang = i18n.language.startsWith('en')
    ? 'en'
    : i18n.language.startsWith('es')
    ? 'es'
    : 'pt';

  const projectsData = {
    1: {
      pt: {
        title: 'Redesign site institucional',
        category: 'Web Design',
        client: 'TechCorp Solutions',
        date: 'Janeiro 2024',
        description: 'Redesign completo do site institucional da TechCorp, focando em uma experiência de usuário moderna e conversões otimizadas.',
        challenge: 'O site anterior tinha uma taxa de conversão baixa e não refletia a modernidade da empresa. Era necessário criar uma identidade visual mais forte e melhorar a jornada do usuário.',
        solution: 'Desenvolvemos um novo design responsivo com foco em UX/UI, implementamos um sistema de CMS personalizado e otimizamos toda a estrutura para SEO e performance.',
        results: [
          'Aumento de 150% na taxa de conversão',
          'Redução de 40% na taxa de rejeição',
          'Melhoria de 200% no tempo de carregamento',
          'Aumento de 80% no tráfego orgânico'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        images: [
          'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      en: {
        title: 'Institutional website redesign',
        category: 'Web Design',
        client: 'TechCorp Solutions',
        date: 'January 2024',
        description: 'Complete redesign of TechCorp\'s institutional website, focusing on modern user experience and optimized conversions.',
        challenge: 'The previous website had a low conversion rate and didn\'t reflect the company\'s modernity. A stronger visual identity and improved user journey were needed.',
        solution: 'We developed a new responsive design focused on UX/UI, implemented a custom CMS system, and optimized the entire structure for SEO and performance.',
        results: [
          '150% increase in conversion rate',
          '40% reduction in bounce rate',
          '200% improvement in loading time',
          '80% increase in organic traffic'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        images: [
          'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      es: {
        title: 'Rediseño sitio institucional',
        category: 'Diseño Web',
        client: 'TechCorp Solutions',
        date: 'Enero 2024',
        description: 'Rediseño completo del sitio institucional de TechCorp, enfocado en una experiencia de usuario moderna y conversiones optimizadas.',
        challenge: 'El sitio anterior tenía una baja tasa de conversión y no reflejaba la modernidad de la empresa. Era necesario crear una identidad visual más fuerte y mejorar el recorrido del usuario.',
        solution: 'Desarrollamos un nuevo diseño responsivo enfocado en UX/UI, implementamos un sistema CMS personalizado y optimizamos toda la estructura para SEO y rendimiento.',
        results: [
          'Aumento del 150% en la tasa de conversión',
          'Reducción del 40% en la tasa de rebote',
          'Mejora del 200% en el tiempo de carga',
          'Aumento del 80% en el tráfico orgánico'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        images: [
          'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    2: {
      pt: {
        title: 'Campanha de lançamento',
        category: 'Marketing Digital',
        client: 'StartupX',
        date: 'Fevereiro 2024',
        description: 'Campanha completa de lançamento de produto para startup de tecnologia, incluindo estratégia digital e criação de conteúdo.',
        challenge: 'Lançar um produto inovador em um mercado competitivo, com orçamento limitado e necessidade de gerar buzz rapidamente.',
        solution: 'Criamos uma estratégia de marketing digital integrada, com foco em redes sociais, influenciadores e marketing de conteúdo, além de uma landing page otimizada para conversão.',
        results: [
          '500% de aumento no engajamento',
          '10.000 leads qualificados em 30 dias',
          'ROI de 400% na primeira campanha',
          'Cobertura em 15 veículos de mídia'
        ],
        technologies: ['Facebook Ads', 'Google Ads', 'Instagram', 'LinkedIn', 'Analytics'],
        images: [
          'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      en: {
        title: 'Launch campaign',
        category: 'Digital Marketing',
        client: 'StartupX',
        date: 'February 2024',
        description: 'Complete product launch campaign for a tech startup, including digital strategy and content creation.',
        challenge: 'Launch an innovative product in a competitive market, with limited budget and need to generate buzz quickly.',
        solution: 'We created an integrated digital marketing strategy, focusing on social media, influencers, and content marketing, plus a conversion-optimized landing page.',
        results: [
          '500% increase in engagement',
          '10,000 qualified leads in 30 days',
          '400% ROI on first campaign',
          'Coverage in 15 media outlets'
        ],
        technologies: ['Facebook Ads', 'Google Ads', 'Instagram', 'LinkedIn', 'Analytics'],
        images: [
          'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      es: {
        title: 'Campaña de lanzamiento',
        category: 'Marketing Digital',
        client: 'StartupX',
        date: 'Febrero 2024',
        description: 'Campaña completa de lanzamiento de producto para startup tecnológica, incluyendo estrategia digital y creación de contenido.',
        challenge: 'Lanzar un producto innovador en un mercado competitivo, con presupuesto limitado y necesidad de generar expectación rápidamente.',
        solution: 'Creamos una estrategia de marketing digital integrada, enfocada en redes sociales, influencers y marketing de contenidos, además de una landing page optimizada para conversión.',
        results: [
          '500% de aumento en engagement',
          '10,000 leads calificados en 30 días',
          'ROI del 400% en la primera campaña',
          'Cobertura en 15 medios de comunicación'
        ],
        technologies: ['Facebook Ads', 'Google Ads', 'Instagram', 'LinkedIn', 'Analytics'],
        images: [
          'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    3: {
      pt: {
        title: 'Identidade visual',
        category: 'Branding',
        client: 'EcoLife',
        date: 'Março 2024',
        description: 'Desenvolvimento completo da identidade visual para empresa de produtos sustentáveis, incluindo logo, paleta de cores e manual de marca.',
        challenge: 'Criar uma identidade que transmitisse sustentabilidade e modernidade, diferenciando-se em um mercado saturado de "greenwashing".',
        solution: 'Desenvolvemos uma identidade visual autêntica, com elementos naturais modernizados, paleta de cores terrosas e tipografia limpa, acompanhada de um manual completo de aplicação.',
        results: [
          'Reconhecimento de marca aumentou 300%',
          'Vendas cresceram 180% após rebrand',
          'Engajamento nas redes sociais +250%',
          'Prêmio de melhor identidade visual 2024'
        ],
        technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
        images: [
          'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      en: {
        title: 'Visual identity',
        category: 'Branding',
        client: 'EcoLife',
        date: 'March 2024',
        description: 'Complete visual identity development for sustainable products company, including logo, color palette, and brand manual.',
        challenge: 'Create an identity that conveyed sustainability and modernity, differentiating in a market saturated with "greenwashing".',
        solution: 'We developed an authentic visual identity with modernized natural elements, earthy color palette, and clean typography, accompanied by a complete application manual.',
        results: [
          'Brand recognition increased 300%',
          'Sales grew 180% after rebrand',
          'Social media engagement +250%',
          'Best visual identity award 2024'
        ],
        technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
        images: [
          'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      es: {
        title: 'Identidad visual',
        category: 'Branding',
        client: 'EcoLife',
        date: 'Marzo 2024',
        description: 'Desarrollo completo de identidad visual para empresa de productos sostenibles, incluyendo logo, paleta de colores y manual de marca.',
        challenge: 'Crear una identidad que transmitiera sostenibilidad y modernidad, diferenciándose en un mercado saturado de "greenwashing".',
        solution: 'Desarrollamos una identidad visual auténtica con elementos naturales modernizados, paleta de colores terrosos y tipografía limpia, acompañada de un manual completo de aplicación.',
        results: [
          'Reconocimiento de marca aumentó 300%',
          'Ventas crecieron 180% después del rebrand',
          'Engagement en redes sociales +250%',
          'Premio mejor identidad visual 2024'
        ],
        technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
        images: [
          'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    4: {
      pt: {
        title: 'Gestão de redes sociais',
        category: 'Social Media',
        client: 'FashionTrend',
        date: 'Abril 2024',
        description: 'Gestão completa das redes sociais para marca de moda, incluindo estratégia de conteúdo, produção visual e análise de métricas.',
        challenge: 'Aumentar o engajamento e vendas através das redes sociais em um nicho altamente competitivo e visual.',
        solution: 'Criamos uma estratégia de conteúdo focada em storytelling, produção de conteúdo visual de alta qualidade e campanhas de influenciadores micro e macro.',
        results: [
          'Crescimento de 400% nos seguidores',
          'Taxa de engajamento de 8.5%',
          'Aumento de 300% nas vendas via social',
          '50 parcerias com influenciadores'
        ],
        technologies: ['Instagram', 'TikTok', 'Facebook', 'Pinterest', 'Canva', 'Later'],
        images: [
          'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      en: {
        title: 'Social media management',
        category: 'Social Media',
        client: 'FashionTrend',
        date: 'April 2024',
        description: 'Complete social media management for fashion brand, including content strategy, visual production, and metrics analysis.',
        challenge: 'Increase engagement and sales through social media in a highly competitive and visual niche.',
        solution: 'We created a content strategy focused on storytelling, high-quality visual content production, and micro and macro influencer campaigns.',
        results: [
          '400% growth in followers',
          '8.5% engagement rate',
          '300% increase in social sales',
          '50 influencer partnerships'
        ],
        technologies: ['Instagram', 'TikTok', 'Facebook', 'Pinterest', 'Canva', 'Later'],
        images: [
          'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      es: {
        title: 'Gestión de redes sociales',
        category: 'Redes Sociales',
        client: 'FashionTrend',
        date: 'Abril 2024',
        description: 'Gestión completa de redes sociales para marca de moda, incluyendo estrategia de contenido, producción visual y análisis de métricas.',
        challenge: 'Aumentar el engagement y ventas a través de redes sociales en un nicho altamente competitivo y visual.',
        solution: 'Creamos una estrategia de contenido enfocada en storytelling, producción de contenido visual de alta calidad y campañas con influencers micro y macro.',
        results: [
          'Crecimiento del 400% en seguidores',
          'Tasa de engagement del 8.5%',
          'Aumento del 300% en ventas vía social',
          '50 colaboraciones con influencers'
        ],
        technologies: ['Instagram', 'TikTok', 'Facebook', 'Pinterest', 'Canva', 'Later'],
        images: [
          'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    5: {
      pt: {
        title: 'E-commerce completo',
        category: 'Web Development',
        client: 'SportMax',
        date: 'Maio 2024',
        description: 'Desenvolvimento completo de plataforma e-commerce para loja de artigos esportivos, incluindo sistema de pagamento e gestão de estoque.',
        challenge: 'Criar uma plataforma robusta que suportasse alto volume de transações e integrasse com múltiplos sistemas de pagamento e logística.',
        solution: 'Desenvolvemos uma plataforma customizada com arquitetura escalável, integração com gateways de pagamento, sistema de gestão de estoque em tempo real e painel administrativo completo.',
        results: [
          'Processamento de 1000+ pedidos/dia',
          'Tempo de carregamento < 2 segundos',
          'Taxa de conversão de 4.2%',
          'Integração com 5 sistemas de pagamento'
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
        images: [
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      en: {
        title: 'Complete e-commerce',
        category: 'Web Development',
        client: 'SportMax',
        date: 'May 2024',
        description: 'Complete e-commerce platform development for sports goods store, including payment system and inventory management.',
        challenge: 'Create a robust platform that could handle high transaction volumes and integrate with multiple payment and logistics systems.',
        solution: 'We developed a custom platform with scalable architecture, payment gateway integration, real-time inventory management system, and complete admin panel.',
        results: [
          'Processing 1000+ orders/day',
          'Loading time < 2 seconds',
          '4.2% conversion rate',
          'Integration with 5 payment systems'
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
        images: [
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      es: {
        title: 'E-commerce completo',
        category: 'Desarrollo Web',
        client: 'SportMax',
        date: 'Mayo 2024',
        description: 'Desarrollo completo de plataforma e-commerce para tienda de artículos deportivos, incluyendo sistema de pagos y gestión de inventario.',
        challenge: 'Crear una plataforma robusta que soportara alto volumen de transacciones e integrara con múltiples sistemas de pago y logística.',
        solution: 'Desarrollamos una plataforma personalizada con arquitectura escalable, integración con pasarelas de pago, sistema de gestión de inventario en tiempo real y panel administrativo completo.',
        results: [
          'Procesamiento de 1000+ pedidos/día',
          'Tiempo de carga < 2 segundos',
          'Tasa de conversión del 4.2%',
          'Integración con 5 sistemas de pago'
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
        images: [
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    },
    6: {
      pt: {
        title: 'SEO e tráfego orgânico',
        category: 'SEO',
        client: 'LegalAdvice',
        date: 'Junho 2024',
        description: 'Estratégia completa de SEO para escritório de advocacia, incluindo otimização técnica, criação de conteúdo e link building.',
        challenge: 'Posicionar um escritório de advocacia em um mercado altamente competitivo, com palavras-chave de alto valor comercial.',
        solution: 'Implementamos uma estratégia de SEO técnico, criação de conteúdo jurídico especializado, otimização local e campanha de link building com sites de autoridade.',
        results: [
          'Aumento de 500% no tráfego orgânico',
          '1ª posição para 15 palavras-chave',
          'Aumento de 300% em leads qualificados',
          'Domain Authority cresceu de 25 para 65'
        ],
        technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'WordPress'],
        images: [
          'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      en: {
        title: 'SEO and organic traffic',
        category: 'SEO',
        client: 'LegalAdvice',
        date: 'June 2024',
        description: 'Complete SEO strategy for law firm, including technical optimization, content creation, and link building.',
        challenge: 'Position a law firm in a highly competitive market with high commercial value keywords.',
        solution: 'We implemented a technical SEO strategy, specialized legal content creation, local optimization, and link building campaign with authority sites.',
        results: [
          '500% increase in organic traffic',
          '1st position for 15 keywords',
          '300% increase in qualified leads',
          'Domain Authority grew from 25 to 65'
        ],
        technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'WordPress'],
        images: [
          'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      },
      es: {
        title: 'SEO y tráfico orgánico',
        category: 'SEO',
        client: 'LegalAdvice',
        date: 'Junio 2024',
        description: 'Estrategia completa de SEO para bufete de abogados, incluyendo optimización técnica, creación de contenido y link building.',
        challenge: 'Posicionar un bufete de abogados en un mercado altamente competitivo con palabras clave de alto valor comercial.',
        solution: 'Implementamos una estrategia de SEO técnico, creación de contenido jurídico especializado, optimización local y campaña de link building con sitios de autoridad.',
        results: [
          'Aumento del 500% en tráfico orgánico',
          '1ª posición para 15 palabras clave',
          'Aumento del 300% en leads calificados',
          'Domain Authority creció de 25 a 65'
        ],
        technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'WordPress'],
        images: [
          'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        ]
      }
    }
  };

  const projectId = parseInt(id || '1');
  const project = projectsData[projectId as keyof typeof projectsData]?.[lang];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {t('projectDetail.notFound')}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#6C5CE7] hover:bg-[#5A4DCB] text-white px-6 py-2 rounded-lg transition-colors"
          >
            {t('projectDetail.backHome')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-[#6C5CE7] hover:text-[#5A4DCB] mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          {t('projectDetail.backToPortfolio')}
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                  <Tag size={16} className="mr-1" />
                  {project.category}
                </span>
                <span className="flex items-center">
                  <User size={16} className="mr-1" />
                  {project.client}
                </span>
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {project.date}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {t('projectDetail.description')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {t('projectDetail.challenge')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {t('projectDetail.solution')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.solution}
                </p>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {t('projectDetail.technologies')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#6C5CE7]/10 text-[#6C5CE7] px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {t('projectDetail.results')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
                  >
                    <span className="text-green-800 dark:text-green-300 font-medium">
                      ✓ {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {t('projectDetail.gallery')}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://api.whatsapp.com/send?phone=351913603304&text=Ol%C3%A1%20vim%20pelo%20site%20da%20Zeluc%20e%20gostaria%20de%20um%20projeto%20similar%20a%20este%F0%9F%98%80"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#6C5CE7] hover:bg-[#5A4DCB] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} className="mr-2" />
                {t('projectDetail.contactUs')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;