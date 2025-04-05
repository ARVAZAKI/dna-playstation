"use client";

import Link from 'next/link';
import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, bgColor, textColor, icon }: ServiceCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className={`${bgColor} p-6 rounded-xl relative overflow-hidden h-72 flex flex-col justify-between ${textColor} 
        transition-all duration-500 shadow-lg hover:shadow-xl transform ${isHovering ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic spotlight effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 rotate-45 blur-2xl ${
          isHovering ? 'opacity-100' : ''
        }`}
        style={{
          transform: isHovering ? 'translateX(200%) rotate(45deg)' : 'translateX(-100%) rotate(45deg)',
          transition: 'transform 1.5s ease-in-out, opacity 0.6s ease-in-out'
        }}
      />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Animated glowing orb */}
      <div 
        className={`absolute w-40 h-40 rounded-full bg-gradient-to-br ${
          bgColor === 'bg-black' ? 'from-blue-600/20 to-indigo-900/30' : 
          bgColor === 'bg-blue-600' ? 'from-blue-400/20 to-indigo-600/30' : 
          'from-blue-300/20 to-indigo-500/30'
        } blur-3xl transition-all duration-700 ${
          isHovering ? 'opacity-100 scale-125' : 'opacity-40 scale-100'
        }`}
        style={{
          right: '-20px',
          bottom: '-20px',
          transformOrigin: 'bottom right'
        }}
      />
      
      {/* Card content */}
      <div className="relative z-10">
        {/* Icon with animated container */}
        <div 
          className={`w-14 h-14 flex items-center justify-center rounded-lg mb-4
            transition-all duration-500 ${
              textColor === 'text-black' 
                ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' 
                : 'bg-gradient-to-br from-blue-400 to-indigo-600 text-white'
            } ${isHovering ? 'scale-110 shadow-lg shadow-blue-500/20' : 'scale-100'}`}
        >
          {icon}
        </div>
        
        <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
          isHovering ? (textColor === 'text-black' ? 'text-blue-700' : 'text-blue-300') : ''
        }`}>
          {title}
        </h3>
        
        <p className={`text-sm ${textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'} 
          transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-80'}`}>
          {description}
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-6 top-6 opacity-10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          {bgColor === 'bg-black' ? (
            <path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3Z" />
          ) : (
            <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
          )}
        </svg>
      </div>
      
      {/* Animated dots */}
      {isHovering && (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-blue-500 opacity-40 animate-ping" style={{ animationDuration: "3s" }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-indigo-500 opacity-30 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }}></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-blue-400 opacity-40 animate-ping" style={{ animationDuration: "4s", animationDelay: "0.5s" }}></div>
        </>
      )}
      
      {/* Bottom line decorative element */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
        textColor === 'text-black' 
          ? 'from-blue-500 to-indigo-500' 
          : 'from-blue-400 to-indigo-600'
      } transition-all duration-500 ${
        isHovering ? 'w-full' : 'w-1/3'
      }`}></div>
            
    </div>
  );
};

export default ServiceCard;