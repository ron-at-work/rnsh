'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && <span className="typewriter-cursor">|</span>}
    </span>
  );
};

const FloatingDot = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div 
      className="absolute w-2 h-2 bg-gray-300 rounded-full animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const AnimatedShape = ({ 
  type, 
  color, 
  size, 
  delay = 0, 
  duration = 3 
}: { 
  type: 'circle' | 'square' | 'rectangle' | 'triangle' | 'star';
  color: string;
  size: number;
  delay?: number;
  duration?: number;
}) => {
  const getShapeStyle = () => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      animation: `bounce ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      opacity: 0.7,
    };

    switch (type) {
      case 'circle':
        return {
          ...baseStyle,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: `3px solid ${color}`,
        };
      case 'square':
        return {
          ...baseStyle,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'transparent',
          border: `3px solid ${color}`,
        };
      case 'rectangle':
        return {
          ...baseStyle,
          width: `${size * 1.5}px`,
          height: `${size}px`,
          backgroundColor: 'transparent',
          border: `3px solid ${color}`,
        };
      case 'triangle':
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${size/2}px solid transparent`,
          borderRight: `${size/2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
          backgroundColor: 'transparent',
        };
      case 'star':
        return {
          ...baseStyle,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'transparent',
          border: `3px solid ${color}`,
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
        };
      default:
        return baseStyle;
    }
  };

  return <div style={getShapeStyle()} />;
};

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`fixed w-2 h-2 bg-gray-400 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
        isVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{
        left: mousePosition.x - 4,
        top: mousePosition.y - 4,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Cursor Follower */}
      <CursorFollower />
      
      {/* Hero Section */}
      <section className="h-[80dvh] flex items-center justify-center relative overflow-hidden">
        {/* Animated Shapes */}
        <div className="absolute inset-0">
          <AnimatedShape type="circle" color="#FF6B6B" size={40} delay={0} duration={2.5} />
          <AnimatedShape type="square" color="#4ECDC4" size={35} delay={0.5} duration={3} />
          <AnimatedShape type="rectangle" color="#45B7D1" size={30} delay={1} duration={2.8} />
          <AnimatedShape type="triangle" color="#96CEB4" size={45} delay={1.5} duration={3.2} />
          <AnimatedShape type="star" color="#FFEAA7" size={38} delay={2} duration={2.7} />
          <AnimatedShape type="circle" color="#DDA0DD" size={32} delay={2.5} duration={3.1} />
          <AnimatedShape type="square" color="#98D8C8" size={42} delay={3} duration={2.9} />
          <AnimatedShape type="rectangle" color="#F7DC6F" size={28} delay={3.5} duration={3.3} />
          <AnimatedShape type="triangle" color="#BB8FCE" size={36} delay={4} duration={2.6} />
          <AnimatedShape type="star" color="#85C1E9" size={40} delay={4.5} duration={3.4} />
        </div>
        
        {/* Background dots */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <FloatingDot key={i} delay={i * 0.4} />
          ))}
        </div>
        
        <div className={`text-center space-y-8 relative z-10 transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900">
              <TypewriterText text="Rounit Sinha" speed={200} />
            </h1>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Web Developer
            </p>
          </div>
          
          <div className="space-y-2 text-gray-500">
            <p className="text-sm">Building digital experiences</p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-xl font-light text-gray-700">Explore</h2>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3 max-w-3xl mx-auto">
            <Link 
              href="/projects" 
              className="group text-center space-y-6 hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">Projects</h3>
                <p className="text-xs text-gray-500 mt-2">Things I&apos;ve built</p>
              </div>
            </Link>
            
            <Link 
              href="/blog" 
              className="group text-center space-y-6 hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">Blog</h3>
                <p className="text-xs text-gray-500 mt-2">Thoughts & ideas</p>
              </div>
            </Link>
            
            <Link 
              href="/about" 
              className="group text-center space-y-6 hover:scale-105 transition-all duration-500 ease-out"
            >
              <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-all duration-300">
                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">About</h3>
                <p className="text-xs text-gray-500 mt-2">My story</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          {/* GitHub Icon */}
          <a 
            href="https://github.com/rounit08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/rounit08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <p className="text-xs text-gray-400">
          Made with ☕
        </p>
      </footer>
    </div>
  );
}