import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gradient-to-br from-primary via-primary-light to-accent text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-lighter rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
              {t.footer.name}
            </h3>
            <p className="text-sm sm:text-base text-accent-light">
              {t.footer.role}
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a 
              href="https://www.linkedin.com/in/biancaborges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl hover:text-accent-light transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/biabborges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl hover:text-accent-light transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:bianca@email.com"
              className="text-2xl sm:text-3xl hover:text-accent-light transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://wa.me/5511982447186"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl hover:text-accent-light transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 my-6 md:my-8"></div>

        <div className="text-center text-white/80">
          <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
            {t.footer.copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
