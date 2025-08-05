
import React from 'react';

const StarField = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-px bg-white dark:bg-gray-300 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarField;
