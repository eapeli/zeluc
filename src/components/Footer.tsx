import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterStatus, setNewsletterStatus] = React.useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    emailjs.send(
      'service_2duhr9w',
      'template_4p8vfxr',
      {
        email: newsletterEmail,
        name: 'Newsletter',
        message: 'Inscrição na newsletter do site Zeluc.'
      },
      'jHbTwT7lNZYfYlVAb'
    )
      .then(() => {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      })
      .catch(() => {
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus('idle'), 4000);
      });
  };

  return (
    <footer className="bg-[#2D3436] text-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="https://i.postimg.cc/Xp7gn0qw/logo-zeluc-2.png"
                alt="Zeluc"
                className="h-10 w-auto mr-2"
              />
              <span className="text-white text-xl font-semibold">Zeluc</span>
            </div>
            <p className="text-white/70 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#6C5CE7]/20 hover:bg-[#6C5CE7]/40 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} className="text-[#00CEC9]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#6C5CE7]/20 hover:bg-[#6C5CE7]/40 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} className="text-[#00CEC9]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#6C5CE7]/20 hover:bg-[#6C5CE7]/40 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={18} className="text-[#00CEC9]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#6C5CE7]/20 hover:bg-[#6C5CE7]/40 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} className="text-[#00CEC9]" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200"
                >
                  {t('nav.portfolio')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200">
                  {t('footer.services.webDev')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200">
                  {t('footer.services.socialMedia')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200">
                  {t('footer.services.marketing')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00CEC9] transition-colors duration-200">
                  {t('footer.services.branding')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{t('footer.newsletter.title')}</h3>
            <p className="text-white/70 mb-4">
              {t('footer.newsletter.description')}
            </p>
            <form className="mb-4" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="px-4 py-2 rounded-l-lg w-full bg-white/10 text-white border border-white/20 focus:outline-none focus:border-[#00CEC9]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#00CEC9] hover:bg-[#00BBB7] text-white px-4 rounded-r-lg transition-colors duration-300"
                  disabled={newsletterStatus === 'loading'}
                >
                  <Send size={18} />
                </button>
              </div>
              {newsletterStatus === 'success' && (
                <span className="block text-green-400 mt-2 font-semibold">Inscrito com sucesso!</span>
              )}
              {newsletterStatus === 'error' && (
                <span className="block text-red-400 mt-2 font-semibold">Erro ao inscrever, tente novamente.</span>
              )}
            </form>
            <p className="text-white/60 text-sm">
              {t('footer.newsletter.privacy')}
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center md:flex md:justify-between">
          <p className="text-white/60 mb-2 md:mb-0">
            {t('footer.rights')}
          </p>
          <div className="text-white/60">
            <a href="#" className="hover:text-[#00CEC9] transition-colors mr-4">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-[#00CEC9] transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;