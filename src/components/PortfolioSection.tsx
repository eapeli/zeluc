import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Títulos multilíngues para os projetos
const projectTitles = {
  1: {
    pt: 'Redesign site institucional',
    en: 'Institutional website redesign',
    es: 'Rediseño sitio institucional'
  },
  2: {
    pt: 'Campanha de lançamento',
    en: 'Launch campaign',
    es: 'Campaña de lanzamiento'
  },
  3: {
    pt: 'Identidade visual',
    en: 'Visual identity',
    es: 'Identidad visual'
  },
  4: {
    pt: 'Gestão de redes sociais',
    en: 'Social media management',
    es: 'Gestión de redes sociais'
  },
  5: {
    pt: 'E-commerce completo',
    en: 'Complete e-commerce',
    es: 'E-commerce completo'
  },
  6: {
    pt: 'SEO e tráfego orgânico',
    en: 'SEO and organic traffic',
    es: 'SEO y tráfico orgânico'
  }
};

const serviceDescriptions = {
  webDesign: {
    pt: {
      title: 'Web Design',
      description: `Transformamos ideias em interfaces inteligentes e impactantes.
Mais do que estética, o design do seu site precisa guiar o usuário, transmitir confiança e comunicar sua marca com clareza. Desenvolvemos layouts responsivos, com foco em experiência do usuário (UX) e usabilidade (UI), criando ambientes digitais que encantam visualmente e convertem de verdade. Cada projeto é pensado para refletir a identidade da sua marca, entregar fluidez na navegação e se adaptar a todos os dispositivos.`
    },
    en: {
      title: 'Web Design',
      description: `We turn ideas into smart, impactful digital interfaces.
More than just looks, your website's design must guide users, build trust, and clearly express your brand. We craft responsive layouts focused on user experience (UX) and usability (UI), creating digital environments that are both visually engaging and highly functional. Each design reflects your brand's essence and adapts seamlessly across all devices.`
    },
    es: {
      title: 'Diseño Web',
      description: `Transformamos ideas en interfaces inteligentes e impactantes.
Más que estética, el diseño de tu sitio debe guiar al usuario, transmitir confianza y comunicar tu marca con claridad. Creamos interfaces responsivas, centradas en la experiencia del usuario (UX) y la usabilidad (UI), generando espacios digitales visualmente atractivos y altamente funcionales.`
    }
  },
  marketing: {
    pt: {
      title: 'Marketing Digital',
      description: `Estratégia, dados e criatividade para acelerar seus resultados online.
Nossa abordagem combina análise de dados, performance e storytelling para criar campanhas que realmente funcionam. Atuamos em todas as frentes do marketing digital — desde mídia paga e automação até funis de conversão e inbound marketing — com foco total em atrair, engajar e fidelizar o seu público. Cada ação é pensada para gerar ROI real e crescimento sustentável.`
    },
    en: {
      title: 'Digital Marketing',
      description: `Strategy, data, and creativity to accelerate your online growth.
We combine data analysis, performance metrics, and storytelling to build campaigns that truly deliver. From paid media and automation to conversion funnels and inbound marketing, we create custom strategies designed to attract, engage, and retain your audience. Every action is driven by ROI and sustainable growth.`
    },
    es: {
      title: 'Marketing Digital',
      description: `Estrategia, datos y creatividad para acelerar tus resultados online.
Combinamos análisis de datos, performance y storytelling para desarrollar campañas que realmente funcionan. Trabajamos en todas las áreas del marketing digital — publicidad pagada, automatización, embudos de conversión y marketing de contenidos — con el objetivo de atraer, enganchar y fidelizar a tu audiencia.`
    }
  },
  branding: {
    pt: {
      title: 'Branding',
      description: `Construímos marcas com propósito, posicionamento e personalidade.
Branding vai além de um logo bonito — é a forma como sua empresa se comunica, se diferencia e permanece na mente das pessoas. Desenvolvemos identidades visuais completas, com estratégia de posicionamento, naming, voz da marca e manual de identidade, criando conexões genuínas entre a sua empresa e seu público. Marcas que nascem para durar.`
    },
    en: {
      title: 'Branding',
      description: `We build brands with purpose, positioning, and personality.
Branding is more than a great logo — it's how your business communicates, stands out, and remains top-of-mind. We develop complete brand identities, including positioning strategy, naming, brand voice, and visual systems, forming real connections between your brand and your audience.`
    },
    es: {
      title: 'Branding',
      description: `Creamos marcas con propósito, posicionamiento y personalidad.
El branding va más allá de un buen logotipo. Es cómo tu empresa se comunica, se diferencia y permanece en la mente de las personas. Desarrollamos identidades visuales completas, con estrategia de posicionamento, naming, tono de voz y manual de identidad.`
    }
  },
  social: {
    pt: {
      title: 'Social Media',
      description: `Presença digital que engaja, posiciona e impulsiona sua marca.
Nas redes sociais, cada detalhe comunica. Criamos estratégias de conteúdo alinhadas ao posicionamento da sua marca, com calendários editoriais, produção visual, copy criativa e análise de métricas. Mais do que curtidas, buscamos criar comunidades ativas e engajadas que geram valor e aumentam sua autoridade no ambiente digital.`
    },
    en: {
      title: 'Social Media',
      description: `A digital presence that connects, engages, and amplifies your brand.
Every post tells a story. We build powerful social media strategies aligned with your brand's tone and goals, including content planning, creative design, copywriting, and performance tracking. Our focus is not just on likes — it's on building engaged communities and digital authority.`
    },
    es: {
      title: 'Social Media',
      description: `Presencia digital que posiciona, conecta e impulsa tu marca.
En las redes sociales, cada detalhe comunica. Creamos estrategias de conteúdo alineadas con el posicionamiento de tu marca: calendarios editoriales, diseño gráfico, redacción creativa y análisis de métricas.`
    }
  },
  development: {
    pt: {
      title: 'Web Development',
      description: `Desenvolvimento web robusto, escalável e orientado a resultados.
Do front-end ao back-end, desenvolvemos soluções digitais com alto desempenho, segurança e usabilidade. Utilizamos as tecnologias mais atuais para criar sites institucionais, e-commerces e sistemas sob medida, sempre com foco em performance, SEO técnico e integração com outras plataformas. Um código limpo que entrega valor real.`
    },
    en: {
      title: 'Web Development',
      description: `Robust, scalable web development focused on performance.
We create high-performance digital solutions, from front-end experiences to back-end infrastructure. Whether it's corporate websites, e-commerce platforms, or custom systems, our code is clean, modern, and SEO-ready.`
    },
    es: {
      title: 'Desarrollo Web',
      description: `Desarrollo web sólido, escalable y orientado a resultados.
Desarrollamos soluciones digitales de alta performance y seguridad, desde el front-end hasta el back-end. Sitios institucionales, tiendas online o sistemas a medida — todos construidos con tecnología moderna, buen SEO técnico e integraciones eficientes.`
    }
  },
  seo: {
    pt: {
      title: 'SEO',
      description: `Domine as primeiras posições do Google com estratégias avançadas de SEO.
Estar bem posicionado nos motores de busca não é sorte — é estratégia. Realizamos auditorias completas, definimos palavras-chave relevantes e aplicamos técnicas on-page e off-page para aumentar sua visibilidade orgânica, autoridade e tráfego qualificado. SEO técnico, conteúdo otimizado e link building inteligente para resultados duradouros.`
    },
    en: {
      title: 'SEO',
      description: `Own the top spots on Google with advanced SEO strategies.
Ranking high isn't luck — it's strategy. We perform in-depth audits, keyword analysis, on-page and off-page optimization, and smart link building. The result: greater visibility, qualified traffic, and long-lasting organic growth.`
    },
    es: {
      title: 'SEO',
      description: `Domina los primeros lugares de Google con estrategias avanzadas de SEO.
Estar entre los primeros no es cuestión de suerte, sino de estrategia. Hacemos auditorías técnicas, análisis de palabras clave, optimización on-page y off-page, y construimos enlaces de calidad.`
    }
  }
};

const ctaTexts = {
  pt: 'Saiba mais',
  en: 'Learn more',
  es: 'Saber más'
};

const serviceKeys = {
  webDesign: 'webDesign',
  marketing: 'marketing',
  branding: 'branding',
  social: 'social',
  development: 'development',
  seo: 'seo'
};

const PortfolioSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(t('portfolio.categories.all'));

  const projects = [
    {
      id: 1,
      title: 'Redesign site institucional',
      category: t('portfolio.categories.webDesign'),
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'Campanha de lançamento',
      category: t('portfolio.categories.marketing'),
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Identidade visual',
      category: t('portfolio.categories.branding'),
      image: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'Gestão de redes sociais',
      category: t('portfolio.categories.social'),
      image: 'https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      title: 'E-commerce completo',
      category: t('portfolio.categories.development'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      title: 'SEO e tráfego orgânico',
      category: t('portfolio.categories.seo'),
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const categories = [
    t('portfolio.categories.all'),
    t('portfolio.categories.webDesign'),
    t('portfolio.categories.marketing'),
    t('portfolio.categories.branding'),
    t('portfolio.categories.social'),
    t('portfolio.categories.development'),
    t('portfolio.categories.seo')
  ];

  const filteredProjects = activeFilter === t('portfolio.categories.all')
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Função para obter a chave do serviço
  const getServiceKey = (category: string) => {
    const key = Object.keys(serviceKeys).find(sk =>
      t(`portfolio.categories.${sk}`) === category
    );
    return key || '';
  };

  // Idioma atual
  const lang = i18n.language.startsWith('en')
    ? 'en'
    : i18n.language.startsWith('es')
    ? 'es'
    : 'pt';

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-[#2D3436] dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('portfolio.title')} <span className="text-[#00CEC9]">{t('portfolio.subtitle')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#00CEC9] text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {activeFilter === t('portfolio.categories.all') ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => {
              const lang = i18n.language.startsWith('en')
                ? 'en'
                : i18n.language.startsWith('es')
                ? 'es'
                : 'pt';
              return (
                <div key={project.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436] to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-[#6C5CE7]/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                    <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {projectTitles[project.id as keyof typeof projectTitles][lang]}
                    </h3>
                    <span className="text-white/80 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {project.category}
                    </span>
                    <button 
                      onClick={() => handleViewProject(project.id)}
                      className="flex items-center text-white border border-white/30 hover:border-white rounded-full py-2 px-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                    >
                      {t('portfolio.viewProject')} <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          (() => {
            const serviceKey = getServiceKey(activeFilter);
            const service = serviceDescriptions[serviceKey as keyof typeof serviceDescriptions]?.[lang];
            if (!service) return null;
            return (
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="relative">
                  <img 
                    src={filteredProjects[0]?.image}
                    alt={filteredProjects[0]?.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=351913603304&text=Ol%C3%A1%20vim%20pelo%20site%20da%20Zeluc%20e%20gostaria%20de%20um%20projeto%20similar%20a%20este%F0%9F%98%80"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#00CEC9] hover:bg-[#00b8a9] text-white font-medium px-6 py-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00CEC9]"
                  >
                    {ctaTexts[lang]} <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            );
          })()
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;