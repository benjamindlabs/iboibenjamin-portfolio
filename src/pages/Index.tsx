
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import TypewriterText from '../components/TypewriterText';
import Globe3D from '../components/Globe3D';
import StarField from '../components/StarField';
import FloatingIcons from '../components/FloatingIcons';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false, // Enable bidirectional animations
      offset: 120,
      delay: 0,
      mirror: true, // Animate elements when scrolling past them again
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      <StarField />
      <FloatingIcons />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1" data-aos="fade-right">
              <div className="space-y-4">
                <p className="text-white dark:text-gray-200 text-lg flex items-center gap-2" data-aos="fade-up" data-aos-delay="100">
                  Hello <span className="animate-bounce">👋</span> I'm
                </p>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white leading-tight" data-aos="fade-up" data-aos-delay="200">
                  Iboi Benjamin
                  <br />
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Oriaifo</span>
                </h1>
                
                <div className="text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="300">
                  <TypewriterText 
                    texts={["front end developer", "full stack developer", "software engineer", "ai engineer"]}
                    delay={500}
                    speed={80}
                    pauseTime={2000}
                  />
                </div>
              </div>
              
              <p className="text-gray-400 dark:text-gray-300 text-lg max-w-md leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                Passionate about building scalable, modern web applications and AI solutions.
              </p>


              {/* Compass/Direction indicator */}
              {/* <div className="flex items-center gap-2 pt-4 md:pt-8" data-aos="fade-up" data-aos-delay="600">
                <div className="w-8 h-8 border-2 border-white dark:border-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">N</span>
                </div>
              </div> */}
            </div>
            
            {/* Right Content - 3D Globe */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-left" data-aos-delay="700">
              <div className="scale-75 sm:scale-90 md:scale-100">
                <Globe3D />
              </div>
            </div>
          </div>
        </div>

        {/* All Sections */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
          <div data-aos="fade-up" data-aos-delay="100">
            <AboutMe />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Skills />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Experience />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <Projects />
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <Contact />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
