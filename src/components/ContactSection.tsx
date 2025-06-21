import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envio do formulário via EmailJS
    emailjs.send(
      'service_2duhr9w',
      'template_4p8vfxr',
      {
        name: formState.name,
        email: formState.email,
        message: formState.message
      },
      'jHbTwT7lNZYfYlVAb'
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch(() => {
      setIsSubmitting(false);
      // Aqui você pode exibir uma mensagem de erro se desejar
    });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3436] dark:text-white mb-4">
            {t('contact.title')} <span className="text-[#6C5CE7]">Zeluc</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-white mb-6">
              💬 {t('contact.form.title')}
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D3436] dark:text-white mb-2">{t('contact.form.success')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('contact.form.successMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent outline-none transition-all dark:bg-gray-800 dark:text-white"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent outline-none transition-all dark:bg-gray-800 dark:text-white"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent outline-none transition-all resize-none dark:bg-gray-800 dark:text-white"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6C5CE7] hover:bg-[#5A4DCB] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    t('contact.form.submit')
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="space-y-8">
            <div className="bg-[#2D3436] dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">📌 {t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-[#00CEC9]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm mb-1">{t('contact.form.email')}</h4>
                    <a href="mailto:contato.zeluc@gmail.com" className="text-[#00CEC9] hover:underline">contato.zeluc@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Instagram className="text-[#00CEC9]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm mb-1">Instagram</h4>
                    <a href="https://instagram.com/zeluc.ag" target="_blank" rel="noopener noreferrer" className="text-[#00CEC9] hover:underline">@zeluc.ag</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Linkedin className="text-[#00CEC9]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/zeluc/" target="_blank" rel="noopener noreferrer" className="text-[#00CEC9] hover:underline">Zeluc</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#6C5CE7]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="text-[#00CEC9]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white/90 text-sm mb-1">WhatsApp</h4>
                    <a 
                      href="https://api.whatsapp.com/send?phone=351913603304&text=Ol%C3%A1%20vim%20pelo%20site%20da%20Zeluc%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20servi%C3%A7os%F0%9F%98%80" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#00CEC9] hover:underline"
                    >
                      {t('contact.info.whatsapp')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-white mb-6">🕒 {t('contact.info.schedule.title')}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.info.schedule.weekdays')}</h4>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.info.schedule.weekend')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('contact.info.schedule.weekendInfo')}</p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-600">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">⏱ {t('contact.info.schedule.response')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('contact.info.schedule.responseInfo')}</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 italic">{t('contact.info.schedule.note')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;