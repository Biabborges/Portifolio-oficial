import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetos = [
  {
    id: 1,
    nome: 'Aplicação com PLN para Bank of America',
    imagem: './src/assets/cora.jpg',
    descricao: 'Este projeto foi o desenvolvimento de uma solução tecnológica para o Bank of America, focada na otimização do processo de acompanhamento de mudanças regulatórias. A solução foi desenvolvida utilizando tecnologias como React, JavaScript e Python, com integração de Processamento de Linguagem Natural (PLN) para automatizar a análise de documentos regulatórios. O projeto teve como objetivo reduzir o tempo de resposta e aumentar a precisão na interpretação de novos regulamentos e melhorar a eficiência do acompanhamento de compliance.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    linkCodigo: 'https://github.com/Biabborges/CORA',
  },
  {
    id: 2,
    nome: 'Aplicação Mobile para a FDC (Fundação Dom Cabral)',
    imagem: './src/assets/FDC.jpg',
    descricao: 'O "Dom Connect" é uma aplicação desenvolvida para dispositivos móveis cujo objetivo é facilitar a interação entre os CEOs cadastrados no programa da Fundação Dom Cabral, o CEOs Legacy. Este aplicativo móvel permitirá aos CEOs inserir seus projetos colaborativos, os quais estão vinculados a macro temas. Após isso, o projeto será visível para outros CEOs, da mesma maneira que o usuário poderá navegar e demonstrar interesse em outros projetos, fomentando a interação entre esses executivos.',
    tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS'],
    linkCodigo: 'https://github.com/Biabborges/Dom-Connect',
  },
  {
    id: 3,
    nome: 'CSB Project Management',
    imagem: './src/assets/CSB.svg',
    descricao: 'A CSB é uma solução voltada para a gestão e acompanhamento de projetos de desenvolvedores, conectando talentos a empresas de forma inteligente e colaborativa. Com uma interface moderna e intuitiva, permite criar, organizar e monitorar projetos em tempo real, centralizando tarefas, entregas, documentos e discussões. Além disso, possibilita que empresas encontrem equipes ou profissionais ideais para seus projetos, promovendo eficiência, transparência e integração entre times técnicos e corporativos.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'WebSockets'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-neutral via-white to-accent-light/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4 font-heading">
            Portfólio de Projetos
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-accent-light mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi, combinando tecnologia, design e impacto.
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
                  <a 
                    href={projeto.linkCodigo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-accent text-white px-4 py-2 rounded-xl transition-all duration-300 flex-1 justify-center font-medium shadow-md hover:shadow-lg"
                  >
                    <FaGithub size={18} />
                    Código
                  </a>
                  {projeto.linkDemo && (
                    <a 
                      href={projeto.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-xl transition-all duration-300 flex-1 justify-center font-medium"
                    >
                      <FaExternalLinkAlt size={16} />
                      Demo
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
