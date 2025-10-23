import React from 'react';
import { FaGraduationCap, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFastapi, SiPostgresql, SiMongodb, SiRedis } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';

const tecnologias = [
  {
    categoria: 'Frontend',
    items: [
      { nome: 'React', icon: FaReact, nivel: 95, cor: 'from-cyan-400 to-blue-500' },
      { nome: 'TypeScript', icon: SiTypescript, nivel: 90, cor: 'from-blue-600 to-blue-400' },
      { nome: 'Tailwind CSS', icon: SiTailwindcss, nivel: 92, cor: 'from-cyan-500 to-teal-400' }
    ]
  },
  {
    categoria: 'Backend',
    items: [
      { nome: 'Node.js', icon: FaNodeJs, nivel: 88, cor: 'from-green-600 to-green-400' },
      { nome: 'Python', icon: FaPython, nivel: 85, cor: 'from-blue-500 to-yellow-400' },
      { nome: 'FastAPI', icon: SiFastapi, nivel: 82, cor: 'from-teal-500 to-green-400' }
    ]
  },
  {
    categoria: 'Database & Tools',
    items: [
      { nome: 'PostgreSQL', icon: SiPostgresql, nivel: 87, cor: 'from-blue-700 to-blue-500' },
      { nome: 'MongoDB', icon: SiMongodb, nivel: 83, cor: 'from-green-600 to-green-400' },
      { nome: 'Docker', icon: FaDocker, nivel: 80, cor: 'from-blue-500 to-cyan-400' }
    ]
  }
];

const FormacaoTecnologias = () => {
  const { t } = useLanguage();
  
  const formacoes = t.education.items;
  return (
    <section id="formacao" className="py-20 px-6 bg-gradient-to-b from-white to-neutral/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark mb-4 font-heading">
            {t.education.title} <span className="text-primary">{t.education.subtitle}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="w-8 md:w-12 h-[2px] bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-dark font-heading">
                {t.education.academicTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {formacoes.map((formacao) => (
                <div 
                  key={formacao.id}
                  className={`group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                    formacao.destaque 
                      ? 'border-2 border-primary/20 shadow-lg shadow-primary/5' 
                      : 'border border-gray-100 hover:border-accent/30'
                  }`}
                >
                  {formacao.destaque && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        {t.education.mainBadge}
                      </span>
                    </div>
                  )}

                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-primary to-accent rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-neutral-dark mb-1 group-hover:text-primary transition-colors">
                        {formacao.titulo}
                      </h4>
                      <p className="text-sm sm:text-base text-primary font-medium">
                        {formacao.instituicao}
                      </p>
                    </div>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                      {formacao.tipo}
                    </span>
                  </div>
                  
                  <p className="text-gray-500 text-sm">
                    {formacao.periodo}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center">
                <FaDatabase className="text-white text-xl" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-dark font-heading">
                {t.education.techTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {tecnologias.map((grupo, index) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
                    {grupo.categoria}
                  </h4>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {grupo.items.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="group relative"
                      >
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-primary hover:shadow-md transition-all duration-300 cursor-default">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.cor} flex items-center justify-center flex-shrink-0`}>
                            <tech.icon className="text-white text-lg" />
                          </div>
                          <span className="font-medium text-neutral-dark text-sm">
                            {tech.nome}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl p-4 sm:p-6 border-2 border-primary/20">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-[2px] bg-gradient-to-r from-primary to-accent"></div>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">9+</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{t.education.stats.technologies}</p>
                </div>
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-[2px] bg-gradient-to-r from-accent to-accent-light"></div>
                  <p className="text-2xl sm:text-3xl font-bold text-accent">15+</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{t.education.stats.projects}</p>
                </div>
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-[2px] bg-gradient-to-r from-accent-light to-primary"></div>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">3+</p>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{t.education.stats.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormacaoTecnologias;
