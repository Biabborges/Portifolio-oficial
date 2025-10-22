import React from 'react';
import Header from './components/Header';
import Apresentacao from './components/Apresentacao';
import Experiencia from './components/Experiencia';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Apresentacao />
        <Experiencia />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
