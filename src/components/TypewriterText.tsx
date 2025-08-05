
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  speed?: number;
  pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  texts, 
  delay = 500, 
  speed = 80,
  pauseTime = 2000
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < currentText.length) {
        setDisplayText(prev => prev + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isDeleting, texts, speed, pauseTime]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-gray-400 dark:text-gray-300">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
        |
      </span>
    </span>
  );
};

export default TypewriterText;
