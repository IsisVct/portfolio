import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Differentials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
