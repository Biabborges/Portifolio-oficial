import React from 'react';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import FormacaoTecnologias from './components/FormacaoTecnologias';
import Experiencia from './components/Experiencia';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Apresentacao />
        <FormacaoTecnologias />
        <Experiencia />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
