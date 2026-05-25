
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-emerald-400 text-xl font-bold hover:text-emerald-300 transition-colors"
          >
            Iboi Benjamin
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu - simplified */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-emerald-400 transition-colors text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-emerald-400 transition-colors text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-emerald-400 transition-colors text-sm"
              >
                Contact
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
