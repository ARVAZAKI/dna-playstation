"use client";

import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Custom icons
  const icons = {
    ps3: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
        <path d="M16 12a4 4 0 0 1-8 0" />
      </svg>
    ),
    ps4: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <circle cx="16" cy="12" r="2" />
      </svg>
    ),
    games: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    party: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.21 13.89L7 23l9-9-8.99-9L7 13.89" />
        <path d="M14.92 14.92L17 23l.07-9 9.93-.07-9-9 7 7-10.08 3.07" />
      </svg>
    ),
    accessories: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z" />
        <path d="M14 6h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="M6 14h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
        <path d="M17 18a1 1 0 0 0 0 2" />
        <path d="M19 17a1 1 0 0 0-2 0" />
      </svg>
    ),
    tournament: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  };

  // Service items with updated structure (no image paths)
  const services = [
    {
      id: 1,
      title: "Rental PS3",
      description: "Nikmati koleksi game PS3 klasik dengan harga terjangkau. Termasuk 2 stik controller.",
      category: "console",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      icon: icons.ps3
    },
    {
      id: 2,
      title: "Rental PS4",
      description: "PlayStation 4 dengan performa tinggi dan koleksi game terbaru. Pengalaman gaming next-gen.",
      category: "console",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      icon: icons.ps4
    },
    {
      id: 3,
      title: "Main di lokasi",
      description: "deksripsi",
      category: "games",
      bgColor: "bg-black",
      textColor: "text-white",
      icon: icons.games
    },
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'Semua' },
  ];

  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section 
      id="services-section" 
      className="relative py-20 bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10 animate-pulse"
            style={{ 
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
              background: i % 2 === 0 ? 
                'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0.3) 70%)' : 
                'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(79,70,229,0.3) 70%)',
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTMwIDBhMzAgMzAgMCAxIDAgNjAgMCAzMCAzMCAwIDEgMC02MCAweiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMzBtLTI1IDBhMjUgMjUgMCAxIDAgNTAgMCAyNSAyNSAwIDEgMC01MCAweiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Enhanced badge with glow effect */}
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-30 rounded-full"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold px-4 py-1.5 rounded-full mb-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              LAYANAN KAMI
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-300">
            Pengalaman Gaming Terbaik
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mt-4"></div>
          
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Di DNA PlayStation, kami menawarkan berbagai layanan rental PlayStation premium untuk memenuhi kebutuhan gaming Anda
          </p>
        </div>

        {/* Category filters with enhanced visual effects */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                  : 'bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20'
              }`}
            >
              {selectedCategory === category.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-indigo-600/60 rounded-full blur animate-pulse opacity-60"></span>
              )}
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '400ms' }}>
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="transform transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description}
                bgColor={service.bgColor} 
                textColor={service.textColor} 
                icon={service.icon}
              />
            </div>
          ))}
        </div>        
      </div>
      
      {/* Decorative controller icon with enhanced animation */}
      <div className="absolute -bottom-10 -right-10 text-blue-500 opacity-10 animate-float hidden lg:block" style={{animationDuration: "3s"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0">
          <path d="M6 12h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2Z" />
          <path d="M14 6h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
          <path d="M6 14h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
          <path d="M17 20a1 1 0 0 0 0-2v0" />
          <path d="M20 17a1 1 0 0 0-2 0v0" />
        </svg>
      </div>
      
      {/* PlayStation logo decorative element */}
      <div className="absolute top-20 -left-10 text-indigo-500 opacity-5 animate-pulse hidden lg:block" style={{animationDuration: "4s"}}>
        <svg width="120" height="96" viewBox="0 0 240 210" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.761 166.464c-2.711 3.405-9.315 5.842-9.315 5.842l-57.872 20.779v-14.795l42.526-15.176c4.8-1.733 5.548-4.194 1.658-5.51-3.884-1.324-10.917-0.988-15.736 0.756l-28.448 10.008v-15.322l1.658-0.517s16.258-5.761 26.063-7.988c9.805-2.221 21.766-2.46 31.085 0.505 10.431 3.154 11.613 7.879 8.902 11.291l-0.493-0.094l-0.012 10.227zM102.027 139.469c-9.805-2.716-22.74-3.039-31.585-0.756-10.767 2.789-12.379 8.638-9.075 11.851 3.304 3.213 9.315 5.761 9.315 5.761l44.653 15.956v-14.978l-32.878-11.753c-4.8-1.711-5.548-4.177-1.664-5.493 3.89-1.316 10.924-0.976 15.724 0.756l18.823 6.503v-14.505c-0.023 0-2.505-1.066-13.307-3.341h-0.006zM104.757 123.696h24.143v-65.613h-24.143v65.613zM236.689 176.61c4.537-5.548 7.455-13.829 8.208-23.103 1.081-13.217-1.594-25.911-7.148-34.408-6.062-9.314-15.964-14.679-26.731-17.578-19.305-5.165-38.853-0.517-61.773 14.162-17.822 11.456-29.609 22.925-40.059 32.232-19.052 16.982-29.766 26.755-49.895 26.755-7.455 0-15.659-1.711-22.383-5.171-5.065-2.716-9.075-6.774-10.419-11.668-1.077-3.884-0.528-7.989 1.37-12.19 3.561-7.768 11.018-14.325 20.718-18.096 13.019-5.093 29.989-4.999 29.989-4.999v-15.863s-20.155-0.988-38.148 5.171c-14.097 4.787-26.231 12.881-33.68 23.103-4.799 6.585-7.972 13.829-8.723 21.68-0.704 7.338 0.858 14.907 4.799 20.961 9.075 13.847 24.922 19.113 36.045 21.334 22.201 4.453 41.847-0.493 67.526-19.101 16.728-12.089 30.32-24.179 40.298-32.444 7.878-6.503 19.17-15.123 33.874-22.103 10.077-4.782 19.999-5.77 22.921-5.77 7.702 0 12.379 2.46 13.979 4.358 1.6 1.898 2.711 4.923 1.371 9.314-2.183 6.986-11.83 14.178-23.426 14.178-5.236 0-8.379-1.711-9.627-2.937-1.805-1.793-2.4-3.213-2.4-3.213l-13.807 6.62c2.057 4.171 7.878 13.146 24.143 13.146 11.024 0 23.403-4.593 32.301-14.348h-0.006z" />
        </svg>
      </div>
      
      {/* Enhanced animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;