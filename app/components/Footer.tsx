"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  // Custom icons - matching with hero section
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
    location: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    social: {
      instagram: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    arrow: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 10 5 5-5 5"/>
        <path d="M4 4v7a4 4 0 0 0 4 4h12"/>
      </svg>
    ),
    chevronRight: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    )
  };

  // PlayStation logo SVG
  const PlayStationLogo = () => (
    <svg width="40" height="32" viewBox="0 0 240 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M197.761 166.464c-2.711 3.405-9.315 5.842-9.315 5.842l-57.872 20.779v-14.795l42.526-15.176c4.8-1.733 5.548-4.194 1.658-5.51-3.884-1.324-10.917-0.988-15.736 0.756l-28.448 10.008v-15.322l1.658-0.517s16.258-5.761 26.063-7.988c9.805-2.221 21.766-2.46 31.085 0.505 10.431 3.154 11.613 7.879 8.902 11.291l-0.493-0.094l-0.012 10.227zM102.027 139.469c-9.805-2.716-22.74-3.039-31.585-0.756-10.767 2.789-12.379 8.638-9.075 11.851 3.304 3.213 9.315 5.761 9.315 5.761l44.653 15.956v-14.978l-32.878-11.753c-4.8-1.711-5.548-4.177-1.664-5.493 3.89-1.316 10.924-0.976 15.724 0.756l18.823 6.503v-14.505c-0.023 0-2.505-1.066-13.307-3.341h-0.006zM104.757 123.696h24.143v-65.613h-24.143v65.613zM236.689 176.61c4.537-5.548 7.455-13.829 8.208-23.103 1.081-13.217-1.594-25.911-7.148-34.408-6.062-9.314-15.964-14.679-26.731-17.578-19.305-5.165-38.853-0.517-61.773 14.162-17.822 11.456-29.609 22.925-40.059 32.232-19.052 16.982-29.766 26.755-49.895 26.755-7.455 0-15.659-1.711-22.383-5.171-5.065-2.716-9.075-6.774-10.419-11.668-1.077-3.884-0.528-7.989 1.37-12.19 3.561-7.768 11.018-14.325 20.718-18.096 13.019-5.093 29.989-4.999 29.989-4.999v-15.863s-20.155-0.988-38.148 5.171c-14.097 4.787-26.231 12.881-33.68 23.103-4.799 6.585-7.972 13.829-8.723 21.68-0.704 7.338 0.858 14.907 4.799 20.961 9.075 13.847 24.922 19.113 36.045 21.334 22.201 4.453 41.847-0.493 67.526-19.101 16.728-12.089 30.32-24.179 40.298-32.444 7.878-6.503 19.17-15.123 33.874-22.103 10.077-4.782 19.999-5.77 22.921-5.77 7.702 0 12.379 2.46 13.979 4.358 1.6 1.898 2.711 4.923 1.371 9.314-2.183 6.986-11.83 14.178-23.426 14.178-5.236 0-8.379-1.711-9.627-2.937-1.805-1.793-2.4-3.213-2.4-3.213l-13.807 6.62c2.057 4.171 7.878 13.146 24.143 13.146 11.024 0 23.403-4.593 32.301-14.348h-0.006z" fill="#0070d1" />
    </svg>
  );

  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white pt-20 pb-10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <PlayStationLogo />
              <div>
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">DNA PlayStation</h2>
                <p className="text-blue-200 text-sm">Rental PlayStation Terpercaya</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md">
              Layanan rental PlayStation premium di Jatisari, Bekasi. Nikmati berbagai game terbaru tanpa perlu membeli konsol dengan layanan antar jemput.
            </p>
            
            <div className="flex items-center space-x-2 text-sm bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 max-w-max">
              <div className="text-blue-400">{icons.location}</div>
              <span className="text-black">Jatisari, Bekasi</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Layanan Kami
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Rental PS3', href: '#' },
                { name: 'Rental PS4', href: '#' },
                { name: 'Main di Tempat', href: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                    <span className="text-blue-500">{icons.chevronRight}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative inline-block">
              Kontak Kami
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-800 bg-opacity-50 rounded-full text-blue-400">{icons.phone}</div>
                  <span className="text-gray-300">0878-4668-1927</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-800 bg-opacity-50 rounded-full text-blue-400">{icons.location}</div>
                  <span className="text-gray-300">Jl. Brantas raya Blok DJ No.10
                  Jatisari, Bekasi</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 DNA PlayStation. Semua hak dilindungi.</p>
          </div>
        </div>
      </div>

      {/* Decorative elements - controller buttons */}
      <div 
        className="absolute bottom-10 left-10 w-6 h-6 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/40 hidden lg:block"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="absolute bottom-20 right-20 w-8 h-8 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/40 hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      />
      <div 
        className="absolute bottom-40 left-40 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/40 hidden lg:block"
        style={{ animationDelay: "0.7s" }}
      />
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;