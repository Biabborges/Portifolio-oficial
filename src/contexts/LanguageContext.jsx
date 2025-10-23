import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  pt: {
    // Header
    nav: {
      home: 'Início',
      education: 'Formação',
      experience: 'Experiência',
      portfolio: 'Portfólio',
      contact: 'Contato'
    },
    
    // Apresentação
    presentation: {
      badge: 'Disponível para projetos',
      name: 'Bianca',
      surname: 'Borges Lins',
      role: 'Desenvolvedor Frontend | Engenharia de Software',
      description: 'Transformo ideias em soluções digitais estratégicas. Atuo no desenvolvimento de interfaces funcionais e orientadas à experiência do usuário, conectando design e tecnologia para gerar valor aos negócios. Busco criar produtos digitais que unam estética, desempenho e propósito, contribuindo para resultados consistentes e experiências marcantes.',
      buttons: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        contact: 'Contato'
      },
      experience: {
        label: 'Anos de',
        value: 'Experiência'
      }
    },
    
    // Formação e Tecnologias
    education: {
      title: 'Formação &',
      subtitle: 'Tecnologias',
      academicTitle: 'Formação Acadêmica',
      techTitle: 'Stack Tecnológico',
      mainBadge: 'Principal',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database & Tools'
      },
      stats: {
        technologies: 'Tecnologias',
        projects: 'Projetos',
        experience: 'Anos Exp.'
      },
      items: [
        {
          id: 1,
          titulo: 'Engenharia de Software',
          instituicao: 'Inteli - Instituto de Tecnologia e Liderança',
          periodo: '2023 - 2026',
          tipo: 'Bacharelado',
          destaque: true
        },
        {
          id: 2,
          titulo: 'Liderança',
          instituicao: 'Aspire Institute for Harvard',
          periodo: '2025',
          tipo: 'Curso'
        },
        {
          id: 3,
          titulo: 'Business',
          instituicao: 'SCBS - South Champagne Business School',
          periodo: '2026',
          tipo: 'Intercambio'
        }
      ]
    },
    
    // Experiência
    experience: {
      title: 'Experiência Profissional',
      items: [
        {
          id: 1,
          empresa: 'BTG Pactual',
          cargo: 'Frontend Developer',
          periodo: 'Jul 2025',
          descricao: 'Atuo no desenvolvimento de interfaces modernas e escaláveis para o BTG Empresas. No dia a dia, colaboro com times de produto, design e backend para garantir entregas consistentes e de qualidade, utilizando tecnologias como React, TypeScript e Tailwind, além de boas práticas de UX/UI, versionamento com Git e integração contínua.'
        },
        {
          id: 2,
          empresa: 'Banco PAN',
          cargo: 'Cloud Infrastructure Intern',
          periodo: 'Jan 2025',
          descricao: 'Durante o estágio, participei de iniciativas voltadas à observabilidade, monitoramento e confiabilidade de serviços, aplicando práticas de DevOps e Cloud Engineering para aumentar a disponibilidade e resiliência dos sistemas críticos do banco. Essa experiência me permitiu desenvolver uma visão sistêmica sobre escalabilidade, desempenho e cultura de confiabilidade em ambientes de grande porte do setor financeiro.'
        },
        {
          id: 3,
          empresa: 'CSB',
          cargo: 'Frontend Developer',
          periodo: 'Jun 2024',
          descricao: 'Na VGM, atuei como Frontend Developer no projeto CSB, onde fui responsável pela criação e implementação da interface utilizando React e JavaScript. Além disso, apliquei práticas de TDD (Test-Driven Development) para garantir a qualidade do código. Também contribuí no mapeamento e desenvolvimento do banco de dados, colaborando para a integração eficiente entre frontend e backend.'
        },
        {
          id: 4,
          empresa: 'Grupo Fleury',
          cargo: 'Summer Internship | TI & Digital',
          periodo: 'Jan 2024',
          descricao: 'Durante este estágio de férias, colaborei com minha equipe no desenvolvimento de uma solução digital para o Grupo Fleury, utilizando Grafana e AWS para monitoramento e análise de dados de um produto existente. Foi uma experiência enriquecedora ver como a tecnologia pode ser aplicada de maneira tão impactante na área da saúde.'
        }
      ]
    },
    
    // Portfólio
    portfolio: {
      title: 'Portfólio de Projetos',
      subtitle: 'Confira alguns dos projetos que desenvolvi, combinando tecnologia, design e impacto.',
      buttons: {
        code: 'Código',
        demo: 'Demo'
      },
      items: [
        {
          id: 1,
          nome: 'Aplicação com PLN para Bank of America',
          imagem: '/cora.jpg',
          descricao: 'Este projeto foi o desenvolvimento de uma solução tecnológica para o Bank of America, focada na otimização do processo de acompanhamento de mudanças regulatórias. A solução foi desenvolvida utilizando tecnologias como React, JavaScript e Python, com integração de Processamento de Linguagem Natural (PLN) para automatizar a análise de documentos regulatórios.',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          linkCodigo: 'https://github.com/Biabborges/CORA',
        },
        {
          id: 2,
          nome: 'Aplicação Mobile para a FDC (Fundação Dom Cabral)',
          imagem: '/FDC.jpg',
          descricao: 'O "Dom Connect" é uma aplicação desenvolvida para dispositivos móveis cujo objetivo é facilitar a interação entre os CEOs cadastrados no programa da Fundação Dom Cabral, o CEOs Legacy. Este aplicativo móvel permitirá aos CEOs inserir seus projetos colaborativos, os quais estão vinculados a macro temas.',
          tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS'],
          linkCodigo: 'https://github.com/Biabborges/Dom-Connect',
        },
        {
          id: 3,
          nome: 'CSB Project Management',
          imagem: '/CSB.svg',
          descricao: 'A CSB é uma solução voltada para a gestão e acompanhamento de projetos de desenvolvedores, conectando talentos a empresas de forma inteligente e colaborativa. Com uma interface moderna e intuitiva, permite criar, organizar e monitorar projetos em tempo real, centralizando tarefas, entregas, documentos e discussões.',
          tags: ['React', 'FastAPI', 'PostgreSQL', 'WebSockets'],
        },
      ]
    },
    
    // Footer
    footer: {
      name: 'Bianca Borges Lins',
      role: 'Desenvolvedor Frontend | Engenharia de Software',
      copyright: '© {year} Bianca Lins. Todos os direitos reservados.'
    }
  },
  
  en: {
    // Header
    nav: {
      home: 'Home',
      education: 'Education',
      experience: 'Experience',
      portfolio: 'Portfolio',
      contact: 'Contact'
    },
    
    // Apresentação
    presentation: {
      badge: 'Available for projects',
      name: 'Bianca',
      surname: 'Borges Lins',
      role: 'Frontend Developer | Software Engineering',
      description: 'I transform ideas into strategic digital solutions. I work on developing functional interfaces oriented to user experience, connecting design and technology to generate business value. I seek to create digital products that unite aesthetics, performance and purpose, contributing to consistent results and remarkable experiences.',
      buttons: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        contact: 'Contact'
      },
      experience: {
        label: 'Years of',
        value: 'Experience'
      }
    },
    
    // Formação e Tecnologias
    education: {
      title: 'Education &',
      subtitle: 'Technologies',
      academicTitle: 'Academic Background',
      techTitle: 'Tech Stack',
      mainBadge: 'Main',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database & Tools'
      },
      stats: {
        technologies: 'Technologies',
        projects: 'Projects',
        experience: 'Years Exp.'
      },
      items: [
        {
          id: 1,
          titulo: 'Software Engineering',
          instituicao: 'Inteli - Institute of Technology and Leadership',
          periodo: '2023 - 2026',
          tipo: 'Bachelor',
          destaque: true
        },
        {
          id: 2,
          titulo: 'Leadership',
          instituicao: 'Aspire Institute for Harvard',
          periodo: '2025',
          tipo: 'Course'
        },
        {
          id: 3,
          titulo: 'Business',
          instituicao: 'SCBS - South Champagne Business School',
          periodo: '2026',
          tipo: 'Exchange'
        }
      ]
    },
    
    // Experiência
    experience: {
      title: 'Professional Experience',
      items: [
        {
          id: 1,
          empresa: 'BTG Pactual',
          cargo: 'Frontend Developer',
          periodo: 'Jul 2025',
          descricao: 'I work on developing modern and scalable interfaces for BTG Empresas. On a daily basis, I collaborate with product, design and backend teams to ensure consistent and quality deliveries, using technologies such as React, TypeScript and Tailwind, as well as best practices in UX/UI, versioning with Git and continuous integration.'
        },
        {
          id: 2,
          empresa: 'Banco PAN',
          cargo: 'Cloud Infrastructure Intern',
          periodo: 'Jan 2025',
          descricao: 'During the internship, I participated in initiatives focused on observability, monitoring and service reliability, applying DevOps and Cloud Engineering practices to increase the availability and resilience of the bank\'s critical systems. This experience allowed me to develop a systemic view of scalability, performance and reliability culture in large-scale financial sector environments.'
        },
        {
          id: 3,
          empresa: 'CSB',
          cargo: 'Frontend Developer',
          periodo: 'Jun 2024',
          descricao: 'At VGM, I worked as a Frontend Developer on the CSB project, where I was responsible for creating and implementing the interface using React and JavaScript. Additionally, I applied TDD (Test-Driven Development) practices to ensure code quality. I also contributed to the mapping and development of the database, collaborating for efficient integration between frontend and backend.'
        },
        {
          id: 4,
          empresa: 'Grupo Fleury',
          cargo: 'Summer Internship | IT & Digital',
          periodo: 'Jan 2024',
          descricao: 'During this summer internship, I collaborated with my team in developing a digital solution for Grupo Fleury, using Grafana and AWS for monitoring and data analysis of an existing product. It was an enriching experience to see how technology can be applied in such an impactful way in the healthcare field.'
        }
      ]
    },
    
    // Portfólio
    portfolio: {
      title: 'Project Portfolio',
      subtitle: 'Check out some of the projects I developed, combining technology, design and impact.',
      buttons: {
        code: 'Code',
        demo: 'Demo'
      },
      items: [
        {
          id: 1,
          nome: 'NLP Application for Bank of America',
          imagem: '/cora.jpg',
          descricao: 'This project was the development of a technological solution for Bank of America, focused on optimizing the process of tracking regulatory changes. The solution was developed using technologies such as React, JavaScript and Python, with Natural Language Processing (NLP) integration to automate the analysis of regulatory documents.',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          linkCodigo: 'https://github.com/Biabborges/CORA',
        },
        {
          id: 2,
          nome: 'Mobile Application for FDC (Dom Cabral Foundation)',
          imagem: '/FDC.jpg',
          descricao: '"Dom Connect" is an application developed for mobile devices whose objective is to facilitate interaction between CEOs registered in the Dom Cabral Foundation program, CEOs Legacy. This mobile app will allow CEOs to insert their collaborative projects, which are linked to macro themes.',
          tags: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS'],
          linkCodigo: 'https://github.com/Biabborges/Dom-Connect',
        },
        {
          id: 3,
          nome: 'CSB Project Management',
          imagem: '/CSB.svg',
          descricao: 'CSB is a solution aimed at managing and monitoring developer projects, connecting talents to companies in an intelligent and collaborative way. With a modern and intuitive interface, it allows you to create, organize and monitor projects in real time, centralizing tasks, deliveries, documents and discussions.',
          tags: ['React', 'FastAPI', 'PostgreSQL', 'WebSockets'],
        },
      ]
    },
    
    // Footer
    footer: {
      name: 'Bianca Borges Lins',
      role: 'Frontend Developer | Software Engineering',
      copyright: '© {year} Bianca Lins. All rights reserved.'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
