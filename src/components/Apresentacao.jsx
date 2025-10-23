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
      {/* Pattern de fundo sutil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #280575 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              {/* Badge minimalista */}
              <div className="inline-flex items-center gap-2 border border-accent/30 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-neutral-dark font-medium">{t.presentation.badge}</span>
              </div>

              {/* Nome grande */}
              <h1 className="text-6xl md:text-7xl font-bold text-neutral-dark font-heading leading-tight">
                {t.presentation.name}<br/>
                <span className="text-primary">{t.presentation.surname}</span>
              </h1>

              {/* Cargo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-xl text-gray-600 font-medium">
                  {t.presentation.role}
                </p>
              </div>

              {/* Descrição */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {t.presentation.description}
              </p>

              {/* Botões de ação */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/biancablins/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 font-medium"
                >
                  <FaLinkedin size={20} />
                  <span>{t.presentation.buttons.linkedin}</span>
                </a>
                <a 
                  href="mailto:contato.biancalins@gmail.com"
                  className="group flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
                >
                  <FaEnvelope size={20} />
                  <span>{t.presentation.buttons.contact}</span>
                </a>
                <a 
                  href="https://wa.me/5511982447186" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 font-medium"
                >
                  <FaWhatsapp size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end ">
            <div className="relative group">
              {/* Círculo decorativo de fundo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Container da imagem */}
              <div className="relative">
                {/* Borda animada */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-accent-light rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                {/* Imagem */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="./src/assets/profile.jpg"
                    alt="Bianca Borges Lins" 
                  />
                </div>

                {/* Badge flutuante */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3+</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{t.presentation.experience.label}</p>
                      <p className="text-sm font-bold text-neutral-dark">{t.presentation.experience.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seta para baixo */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#experiencia" className="text-accent hover:text-primary transition-colors">
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
