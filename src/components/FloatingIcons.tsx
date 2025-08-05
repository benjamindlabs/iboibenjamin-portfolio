
import React from 'react';

const FloatingIcons = () => {
  const icons = [
    { name: 'HTML5', color: '#E34F26', position: { top: '10%', left: '15%' }, delay: 0 },
    { name: 'CSS3', color: '#1572B6', position: { top: '20%', right: '20%' }, delay: 1 },
    { name: 'JS', color: '#F7DF1E', position: { top: '60%', left: '10%' }, delay: 2 },
    { name: 'React', color: '#61DAFB', position: { top: '70%', right: '15%' }, delay: 3 },
    { name: 'Node', color: '#339933', position: { top: '40%', left: '5%' }, delay: 4 },
    { name: 'TS', color: '#3178C6', position: { top: '15%', right: '10%' }, delay: 5 },
    { name: 'PHP', color: '#777BB4', position: { top: '80%', left: '20%' }, delay: 6 },
    { name: 'Git', color: '#F05032', position: { top: '30%', right: '5%' }, delay: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute opacity-20 dark:opacity-10 animate-pulse"
          style={{
            ...icon.position,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold animate-bounce"
            style={{ 
              backgroundColor: icon.color,
              animationDelay: `${icon.delay * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {icon.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
