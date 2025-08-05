
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com/benjamindlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-iboi-a14075379/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://x.com/iboi_benjamin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Twitter size={32} />
          </a>
          <a
            href="https://www.instagram.com/iboi_benjamin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Instagram size={32} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-400 text-lg">
            © 2025 Iboi Benjamin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
