import React from 'react';

const PlayStationSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" className="w-full max-w-md">
      {/* Background Circle */}
      <circle cx="200" cy="150" r="140" fill="#f2f2f2"/>
      
      {/* PlayStation Console Body */}
      <rect x="100" y="100" width="200" height="30" rx="5" fill="#1F1F1F"/>
      <rect x="100" y="130" width="200" height="60" rx="2" fill="#2D2D2D"/>
      
      {/* Disc Tray */}
      <rect x="140" y="110" width="120" height="5" rx="1" fill="#111111"/>
      
      {/* Buttons */}
      <circle cx="295" cy="115" r="5" fill="#4285f4"/>
      <circle cx="275" cy="115" r="5" fill="#0F9D58"/>
      <circle cx="255" cy="115" r="5" fill="#F4B400"/>
      <circle cx="235" cy="115" r="5" fill="#DB4437"/>
      
      {/* USB Ports */}
      <rect x="120" y="150" width="15" height="8" rx="1" fill="#111111"/>
      <rect x="145" y="150" width="15" height="8" rx="1" fill="#111111"/>
      
      {/* Power Button and Light */}
      <circle cx="200" cy="160" r="8" fill="#111111"/>
      <circle cx="200" cy="160" r="6" fill="#1F1F1F"/>
      <circle cx="200" cy="160" r="2" fill="#42C6FF"/>
      
      {/* Controller Port Areas */}
      <rect x="120" y="170" width="70" height="10" rx="2" fill="#1A1A1A"/>
      <rect x="210" y="170" width="70" height="10" rx="2" fill="#1A1A1A"/>
      
      {/* Controller Cable */}
      <path d="M185 195 C 180 210, 160 220, 130 230" stroke="#2D2D2D" strokeWidth="3" fill="none"/>
      
      {/* Controller */}
      <ellipse cx="110" cy="240" rx="40" ry="25" fill="#2D2D2D"/>
      <ellipse cx="90" cy="240" rx="12" ry="12" fill="#1A1A1A"/>
      <ellipse cx="130" cy="240" rx="12" ry="12" fill="#1A1A1A"/>
      <rect x="105" y="230" width="10" height="5" rx="1" fill="#1A1A1A"/>
      <rect x="90" y="230" width="8" height="3" rx="1" fill="#111111"/>
      <rect x="122" y="230" width="8" height="3" rx="1" fill="#111111"/>
      
      {/* PlayStation Logo */}
      <text x="160" y="90" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#0070D1">PlayStation</text>
      
      {/* Decorative Elements */}
      <circle cx="50" cy="50" r="15" fill="#0070D1" opacity="0.7"/>
      <circle cx="350" cy="70" r="20" fill="#00A651" opacity="0.7"/>
      <circle cx="330" cy="250" r="25" fill="#5CB7E7" opacity="0.5"/>
      <circle cx="70" cy="270" r="18" fill="#F3CF57" opacity="0.6"/>
      
      {/* Design elements from original mockup */}
      <circle cx="300" cy="100" r="12" fill="#00A651" opacity="0.7"/>
      <rect x="40" y="180" width="16" height="16" fill="#000" transform="rotate(45 48 188)"/>
      <circle cx="320" cy="220" r="4" fill="#00A651" opacity="0.7"/>
    </svg>
  );
};

export default PlayStationSVG;