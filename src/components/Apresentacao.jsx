import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Apresentacao = () => {
  const { t } = useLanguage();
  return (
    <section 
      id="apresentacao" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral via-white to-accent-light/5 py-20 px-6 relative"
    >
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #280575 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 border border-accent/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-dark font-medium">{t.presentation.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark font-heading leading-tight">
                {t.presentation.name}<br/>
                <span className="text-primary">{t.presentation.surname}</span>
              </h1>

              <div className="flex items-center gap-3">
                <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
                  {t.presentation.role}
                </p>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0">
                {t.presentation.description}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-4 pt-4 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/biancablins/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 md:gap-2 bg-primary text-white px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 font-medium text-xs md:text-base"
                >
                  <FaLinkedin size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>{t.presentation.buttons.linkedin}</span>
                </a>
                <a 
                  href="mailto:contato.biancalins@gmail.com"
                  className="group flex items-center gap-1.5 md:gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 font-medium text-xs md:text-base"
                >
                  <FaEnvelope size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>{t.presentation.buttons.contact}</span>
                </a>
                <a 
                  href="https://wa.me/5511982447186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 md:gap-2 bg-green-500 text-white hover:bg-green-600 px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 font-medium text-xs md:text-base"
                >
                  <FaWhatsapp size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-accent-light rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="./src/assets/profile.jpg"
                    alt="Bianca Borges Lins" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-white rounded-2xl shadow-xl p-3 md:p-4 border border-gray-100">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-base md:text-lg">3+</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t.presentation.experience.label}</p>
                      <p className="text-xs md:text-sm font-bold text-neutral-dark">{t.presentation.experience.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#experiencia" className="text-accent hover:text-primary transition-colors">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
