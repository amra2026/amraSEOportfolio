import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudy from './components/CaseStudy';
import Skills from './components/Skills';
import FeaturedLinks from './components/FeaturedLinks';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <CaseStudy />
        <Skills />
        <FeaturedLinks />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
