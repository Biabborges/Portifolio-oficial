import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  
  const projetos = t.portfolio.items;
  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-neutral via-white to-accent-light/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4 font-heading">
            {t.portfolio.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-accent-light mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div 
              key={projeto.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] border border-gray-100 hover:border-accent/50"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={projeto.imagem} 
                  alt={projeto.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-dark mb-3 font-heading group-hover:text-primary transition-colors">
                  {projeto.nome}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {projeto.linkCodigo && (
                    <a 
                      href={projeto.linkCodigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent text-white px-4 py-2 rounded-xl transition-all duration-300 flex-1 justify-center font-medium shadow-md hover:shadow-lg"
                    >
                      <FaGithub size={18} />
                      {t.portfolio.buttons.code}
                    </a>
                  )}
                  {projeto.linkDemo && (
                    <a 
                      href={projeto.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-xl transition-all duration-300 flex-1 justify-center font-medium"
                    >
                      <FaExternalLinkAlt size={16} />
                      {t.portfolio.buttons.demo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
