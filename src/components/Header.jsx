import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { nome: 'Início', link: '#apresentacao' },
    { nome: 'Experiência', link: '#experiencia' },
    { nome: 'Portfólio', link: '#portfolio' },
    { nome: 'Contato', link: '#footer' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#apresentacao" className="text-2xl font-bold text-primary font-heading hover:text-accent transition-colors">
            BB<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link}
                  className="text-neutral-dark hover:text-primary transition-colors font-medium text-lg relative group"
                >
                  {item.nome}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary text-2xl focus:outline-none hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-4 border-t border-accent/20 pt-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link}
                  onClick={handleMenuClick}
                  className="block text-neutral-dark hover:text-primary transition-colors font-medium text-lg"
                >
                  {item.nome}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
