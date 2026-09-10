import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 transition-colors duration-200">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Certifications />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
