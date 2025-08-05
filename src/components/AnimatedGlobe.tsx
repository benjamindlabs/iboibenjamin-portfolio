
import React from 'react';

const AnimatedGlobe = () => {
  return (
    <div className="relative w-96 h-96">
      {/* Globe Container */}
      <div className="relative w-full h-full">
        {/* Globe */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 via-green-800 to-blue-950 animate-spin-slow shadow-2xl">
          {/* Continent overlays */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Africa/Europe silhouette */}
            <div className="absolute top-1/4 right-1/3 w-16 h-20 bg-green-600 rounded-lg transform rotate-12 opacity-80"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-16 bg-yellow-700 rounded-lg transform -rotate-6 opacity-70"></div>
            
            {/* Asia silhouette */}
            <div className="absolute top-1/5 left-1/4 w-20 h-14 bg-green-700 rounded-lg transform rotate-45 opacity-75"></div>
            
            {/* Americas silhouette */}
            <div className="absolute top-1/3 left-1/2 w-8 h-24 bg-green-600 rounded-lg transform -rotate-12 opacity-80"></div>
            <div className="absolute bottom-1/3 left-1/2 w-12 h-16 bg-yellow-600 rounded-lg transform rotate-6 opacity-70"></div>
            
            {/* Cloud patterns */}
            <div className="absolute top-1/6 left-1/3 w-14 h-6 bg-white/20 rounded-full blur-sm"></div>
            <div className="absolute top-2/3 right-1/4 w-18 h-8 bg-white/15 rounded-full blur-sm"></div>
            <div className="absolute bottom-1/4 left-1/6 w-12 h-5 bg-white/10 rounded-full blur-sm"></div>
          </div>
          
          {/* Atmosphere glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>
        </div>
        
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-transparent to-emerald-500/20 blur-xl scale-110"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGlobe;
