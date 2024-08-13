import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';

import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust as needed
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div id="content-wrapper">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
