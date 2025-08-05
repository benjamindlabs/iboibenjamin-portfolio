
import React from 'react';
import Navigation from '../components/Navigation';
import StarField from '../components/StarField';
import FloatingIcons from '../components/FloatingIcons';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const About = () => {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      <StarField />
      <FloatingIcons />
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 space-y-20">
          <AboutMe />
          <Skills />
          <Experience />
        </div>
      </main>
    </div>
  );
};

export default About;
