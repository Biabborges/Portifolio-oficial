import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Experiencia = () => {
  const { t } = useLanguage();
  
  const experiencias = t.experience.items;
  return (
    <section id="experiencia" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4 font-heading">
            {t.experience.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-accent-light mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:gap-8">
          {experiencias.map((exp) => (
            <div 
              key={exp.id}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 hover:border-accent/30 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-accent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-dark font-heading group-hover:text-primary transition-colors">
                      {exp.cargo}
                    </h3>
                    <p className="text-xl text-primary font-semibold mt-1">
                      {exp.empresa}
                    </p>
                  </div>
                </div>
                <span className="text-accent font-medium bg-accent/10 px-4 py-2 rounded-xl whitespace-nowrap">
                  {exp.periodo}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg ml-16">
                {exp.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
