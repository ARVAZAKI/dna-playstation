"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovering, setIsHovering] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Handle section detection for active nav item
    const handleSectionDetection = () => {
      const sections = ['home', 'layanan', 'harga'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Fix: Type casting for TypeScript compatibility
          const offsetTop = (element as HTMLElement).offsetTop;
          const offsetHeight = (element as HTMLElement).offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionDetection);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionDetection);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Layanan', href: '#services-section' },
    { name: 'Harga', href: '#harga' },
  ];

  // Smooth scroll to section helper
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Fix: Type casting for TypeScript compatibility
      const offsetTop = (element as HTMLElement).offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  // Fixed wiggle animation for logo - using simple tween instead of spring with multiple keyframes
  const wiggleAnimation = {
    wiggle: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut" // Using easeInOut instead of spring
      }
    },
    rest: {
      rotate: 0
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo with enhanced animation */}
          <Link href="#home">
            <motion.div 
              className="relative cursor-pointer" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="url(#blue-gradient)" 
                  className="w-8 h-8 mr-2"
                  strokeWidth="2"
                  animate={isHovering ? "wiggle" : "rest"}
                  variants={wiggleAnimation}
                >
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <path d="M6 12h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z" />
                  <path d="M14 6h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                  <path d="M6 14h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
                  <motion.path 
                    d="M17 20a1 1 0 0 0 0-2v0" 
                    animate={{ 
                      scale: isHovering ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ 
                      repeat: isHovering ? Infinity : 0,
                      duration: 1,
                      ease: "easeInOut" // Using easeInOut instead of default
                    }}
                  />
                  <motion.path 
                    d="M20 17a1 1 0 0 0-2 0v0" 
                    animate={{ 
                      scale: isHovering ? [1, 1.2, 1] : 1 
                    }}
                    transition={{ 
                      repeat: isHovering ? Infinity : 0,
                      duration: 1,
                      delay: 0.3,
                      ease: "easeInOut" // Using easeInOut instead of default
                    }}
                  />
                </motion.svg>
                DNA PlayStation
              </div>
              
              {/* Animated underline effect */}
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: isHovering ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation with improved interactions */}
        <motion.nav 
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              <motion.div
                className="relative text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={activeSection === item.href.replace('#', '') ? 'text-blue-600' : ''}>
                  {item.name}
                </span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === item.href.replace('#', '') ? "100%" : "0%" 
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </motion.nav>

        {/* Enhanced CTA Button */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-md transition-all duration-300 shadow-lg flex items-center space-x-2 overflow-hidden relative group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="z-10 flex items-center space-x-2"
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span>Pesan Sekarang</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button with animations */}
        <motion.div 
          className="md:hidden flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <motion.path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.g initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0 }}
                  />
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 12h16" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 18h16" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </motion.g>
              )}
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Mobile Menu with animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-md shadow-xl absolute w-full overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-6 py-4 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link 
                    href={item.href}
                    className={`block py-3 text-lg ${
                      activeSection === item.href.replace('#', '') 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-800'
                    } hover:text-blue-600 font-medium border-b border-gray-100`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="flex items-center space-x-2">
                      <span>{item.name}</span>
                      {activeSection === item.href.replace('#', '') && (
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <polyline points="20 6 9 17 4 12"/>
                        </motion.svg>
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <button 
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pesan Sekarang
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;