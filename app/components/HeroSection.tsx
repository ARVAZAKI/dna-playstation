"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentGame, setCurrentGame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const games = [
    'FIFA 24',
    'God of War Ragnarök',
    'Gran Turismo 7',
    'Assassin\'s Creed Valhalla',
    'Call of Duty: Modern Warfare',
    'Spider-Man 2',
    'Elden Ring'
  ];

  // Auto-rotate games
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % games.length);
    }, 3000);
    
    // Set visibility for entrance animation
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, []);

  // Custom icons
  const icons = {
    controller: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z" />
        <path d="M14 6h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="M6 14h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
        <path d="M17 20a1 1 0 0 0 0-2v0" />
        <path d="M20 17a1 1 0 0 0-2 0v0" />
      </svg>
    ),
    gamepad: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12"/>
        <line x1="8" y1="10" x2="8" y2="14"/>
        <circle cx="16" cy="12" r="1"/>
        <circle cx="19" cy="9" r="1"/>
        <path d="M21.09 15a9 9 0 0 1-6.63 6.63L12 22l-2.46-.67a9 9 0 0 1-6.63-6.63L2 12l.91-2.46a9 9 0 0 1 6.63-6.63L12 2l2.46.91a9 9 0 0 1 6.63 6.63L22 12Z"/>
      </svg>
    ),
    delivery: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="18" r="2"/>
        <circle cx="18" cy="18" r="2"/>
        <path d="M2.5 18 H5"/>
        <path d="M5 18 L8 4 H13 L15 11 H20.5 L19 18 H5"/>
      </svg>
    ),
    chevronRight: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    ),
    location: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  };

  const features = [
    { icon: icons.controller, text: 'PS3 & PS4' },
    { icon: icons.gamepad, text: 'Game Terbaru' },
    { icon: icons.delivery, text: 'Antar Jemput' },
    { icon: icons.location, text: 'Jatisari, Bekasi' }
  ];

  // PlayStation 5 controller SVG
  const PlayStationController = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 300" className="w-full h-auto max-w-lg">
      <defs>
        <linearGradient id="controllerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <path d="M146,60 Q256,20 366,60 Q446,85 456,150 Q466,215 386,240 Q256,285 126,240 Q46,215 56,150 Q66,85 146,60" fill="url(#controllerGradient)" />
      <ellipse cx="180" cy="125" rx="40" ry="40" fill="#222" />
      <ellipse cx="332" cy="125" rx="40" ry="40" fill="#222" />
      <rect x="155" y="95" width="50" height="60" rx="5" fill="#222" />
      <rect x="307" y="95" width="50" height="60" rx="5" fill="#222" />
      <circle cx="200" cy="160" r="12" fill="#444" />
      <circle cx="230" cy="140" r="12" fill="#444" />
      <circle cx="282" cy="140" r="12" fill="#444" />
      <circle cx="312" cy="160" r="12" fill="#444" />
      <rect x="226" y="75" width="60" height="30" rx="8" fill="#555" />
      <rect x="246" y="190" width="20" height="5" rx="2" fill="#666" />
      <circle cx="194" cy="125" r="25" stroke="#0070f3" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: "3s" }} />
      <circle cx="318" cy="125" r="25" stroke="#f30070" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: "2.5s" }} />
      <circle cx="230" cy="140" r="8" stroke="#70f300" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: "4s" }} />
      <circle cx="282" cy="140" r="8" stroke="#f3aa00" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDuration: "3.5s" }} />
    </svg>
  );

  return (
    <section id='home' className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden min-h-screen pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-full bg-blue-500 opacity-5 animate-pulse"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTMwIDBhMzAgMzAgMCAxIDAgNjAgMCAzMCAzMCAwIDEgMC02MCAweiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMzBtLTI1IDBhMjUgMjUgMCAxIDAgNTAgMCAyNSAyNSAwIDEgMC01MCAweiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold px-4 py-1.5 rounded-full mb-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              RENTAL PLAYSTATION TERPERCAYA
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Navigasi Dunia Gaming
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Keseruan Maksimal
              </span>
            </h1>
            
            <p className="text-lg mb-8 max-w-md text-gray-200">
              Layanan rental PlayStation premium di <strong>Jatisari, Bekasi</strong> membantu gamer menikmati berbagai game terbaru tanpa perlu membeli konsol.
            </p>
            
            {/* Location Badge */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-500 bg-opacity-20 p-2 rounded-full">
                {icons.location}
              </div>
              <span className="text-gray-300 text-sm">Jatisari, Bekasi - Antar jemput tersedia</span>
            </div>
            
            {/* Game Rotation Display */}
            <div className="bg-blue-800 bg-opacity-30 backdrop-blur-sm p-4 rounded-lg mb-8 border border-blue-700 border-opacity-50 shadow-lg animate-float max-w-sm">
              <div className="text-sm text-blue-300 uppercase tracking-wider mb-1 font-semibold">GAME POPULER:</div>
              <div 
                className="font-bold text-lg transition-all duration-500 ease-in-out"
                key={currentGame}
              >
                {games[currentGame]}
              </div>
              <div className="mt-2 w-full bg-blue-900 bg-opacity-50 rounded-full h-1.5">
                <div 
                  className="bg-blue-500 h-1.5 rounded-full animate-progressBar"
                  style={{animationDuration: '3s'}}
                ></div>
              </div>
            </div>
            
            {/* Feature list */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="text-blue-400">{feature.icon}</div>
                  <span className="text-sm text-black font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md active:scale-95"
              >
                <span>Sewa Sekarang</span>
                {icons.chevronRight}
              </button>
              
              <button 
                className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-black px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:bg-opacity-20 active:scale-95"
              >
                Lihat Paket
              </button>
            </div>
          </div>

          {/* Controller section - Hidden on mobile, visible on md and above */}
          <div 
            className={`hidden md:flex md:w-1/2 relative justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className={`transform transition-transform duration-700 relative z-20 ${
                isHovering ? 'scale-105' : 'scale-100'
              }`}
            >
              <PlayStationController />
            </div>
            
            {/* Glowing effect */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse z-10"
            />
            
            {/* Floating PlayStation logo */}
            <div className="absolute -top-8 -right-4 animate-float" style={{animationDuration: '3s'}}>
              <svg width="50" height="40" viewBox="0 0 240 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M197.761 166.464c-2.711 3.405-9.315 5.842-9.315 5.842l-57.872 20.779v-14.795l42.526-15.176c4.8-1.733 5.548-4.194 1.658-5.51-3.884-1.324-10.917-0.988-15.736 0.756l-28.448 10.008v-15.322l1.658-0.517s16.258-5.761 26.063-7.988c9.805-2.221 21.766-2.46 31.085 0.505 10.431 3.154 11.613 7.879 8.902 11.291l-0.493-0.094l-0.012 10.227zM102.027 139.469c-9.805-2.716-22.74-3.039-31.585-0.756-10.767 2.789-12.379 8.638-9.075 11.851 3.304 3.213 9.315 5.761 9.315 5.761l44.653 15.956v-14.978l-32.878-11.753c-4.8-1.711-5.548-4.177-1.664-5.493 3.89-1.316 10.924-0.976 15.724 0.756l18.823 6.503v-14.505c-0.023 0-2.505-1.066-13.307-3.341h-0.006zM104.757 123.696h24.143v-65.613h-24.143v65.613zM236.689 176.61c4.537-5.548 7.455-13.829 8.208-23.103 1.081-13.217-1.594-25.911-7.148-34.408-6.062-9.314-15.964-14.679-26.731-17.578-19.305-5.165-38.853-0.517-61.773 14.162-17.822 11.456-29.609 22.925-40.059 32.232-19.052 16.982-29.766 26.755-49.895 26.755-7.455 0-15.659-1.711-22.383-5.171-5.065-2.716-9.075-6.774-10.419-11.668-1.077-3.884-0.528-7.989 1.37-12.19 3.561-7.768 11.018-14.325 20.718-18.096 13.019-5.093 29.989-4.999 29.989-4.999v-15.863s-20.155-0.988-38.148 5.171c-14.097 4.787-26.231 12.881-33.68 23.103-4.799 6.585-7.972 13.829-8.723 21.68-0.704 7.338 0.858 14.907 4.799 20.961 9.075 13.847 24.922 19.113 36.045 21.334 22.201 4.453 41.847-0.493 67.526-19.101 16.728-12.089 30.32-24.179 40.298-32.444 7.878-6.503 19.17-15.123 33.874-22.103 10.077-4.782 19.999-5.77 22.921-5.77 7.702 0 12.379 2.46 13.979 4.358 1.6 1.898 2.711 4.923 1.371 9.314-2.183 6.986-11.83 14.178-23.426 14.178-5.236 0-8.379-1.711-9.627-2.937-1.805-1.793-2.4-3.213-2.4-3.213l-13.807 6.62c2.057 4.171 7.878 13.146 24.143 13.146 11.024 0 23.403-4.593 32.301-14.348h-0.006z" fill="#0070d1" />
              </svg>
            </div>

            {/* Controller buttons animation */}
            <div 
              className="absolute top-10 -right-4 w-10 h-10 bg-red-500 rounded-full animate-pulse z-30 shadow-lg shadow-red-500/40"
              style={{ animationDelay: "0.5s" }}
            />
            <div 
              className="absolute top-1/3 -left-6 w-8 h-8 bg-blue-500 rounded-full animate-pulse z-30 shadow-lg shadow-blue-500/40"
              style={{ animationDelay: "1s" }}
            />
            <div 
              className="absolute bottom-1/3 left-10 w-6 h-6 bg-green-500 rounded-full animate-pulse z-30 shadow-lg shadow-green-500/40"
              style={{ animationDelay: "1.5s" }}
            />
            <div 
              className="absolute bottom-20 right-10 w-8 h-8 bg-yellow-500 rounded-full animate-pulse z-30 shadow-lg shadow-yellow-500/40"
              style={{ animationDelay: "0.7s" }}
            />
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes progressBar {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-progressBar {
          animation: progressBar 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;