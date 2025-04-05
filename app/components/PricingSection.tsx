"use client";

import React, { useState, useEffect } from 'react';

// Define types for the duration states
type RentalDuration = "day" | "week" | "month";
type OnsiteDuration = "hour" | "halfDay" | "fullDay";

// Define interfaces for our pricing plans
interface BasePricingPlan {
  id: number;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  color: string;
  hoverColor: string;
  features: string[];
  popular?: boolean;
}

interface RentalPlan extends BasePricingPlan {
  priceDay: number;
  priceWeek: number;
  priceMonth: number;
  duration: RentalDuration;
  setDuration: React.Dispatch<React.SetStateAction<RentalDuration>>;
}

interface OnsitePlan extends BasePricingPlan {
  priceHour: number;
  priceHalfDay: number;
  priceFullDay: number;
  duration: OnsiteDuration;
  setDuration: React.Dispatch<React.SetStateAction<OnsiteDuration>>;
}

type PricingPlan = RentalPlan | OnsitePlan;

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<number>(1);
  const [durationPS3, setDurationPS3] = useState<RentalDuration>("day");
  const [durationPS4, setDurationPS4] = useState<RentalDuration>("day");
  const [durationOnsite, setDurationOnsite] = useState<OnsiteDuration>("hour");
  
  useEffect(() => {
    // Set visibility for entrance animation with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Custom icons
  const icons = {
    check: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    controller: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="12" x2="10" y2="12"/>
        <line x1="8" y1="10" x2="8" y2="14"/>
        <circle cx="16" cy="12" r="1"/>
        <circle cx="19" cy="9" r="1"/>
        <path d="M21.09 15a9 9 0 0 1-6.63 6.63L12 22l-2.46-.67a9 9 0 0 1-6.63-6.63L2 12l.91-2.46a9 9 0 0 1 6.63-6.63L12 2l2.46.91a9 9 0 0 1 6.63 6.63L22 12Z"/>
      </svg>
    ),
    ps3: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="7" width="12" height="10" rx="2" ry="2"/>
        <path d="M10 7V5c0-1.1.9-2 2-2s2 .9 2 2v2"/>
        <path d="M9 17v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2"/>
        <text x="11" y="14" style={{fontSize: "7px", fontWeight: "bold"}}>3</text>
      </svg>
    ),
    ps4: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="7" width="12" height="10" rx="2" ry="2"/>
        <path d="M10 7V5c0-1.1.9-2 2-2s2 .9 2 2v2"/>
        <path d="M9 17v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2"/>
        <text x="11" y="14" style={{fontSize: "7px", fontWeight: "bold"}}>4</text>
      </svg>
    ),
    location: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  };

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      title: "PlayStation 3",
      icon: icons.ps3,
      priceDay: 50000,
      priceWeek: 300000,
      priceMonth: 1000000,
      tagline: "Gaming Klasik",
      color: "from-blue-600 to-indigo-600",
      hoverColor: "hover:from-blue-500 hover:to-indigo-500",
      features: [
        "Unit PS3 + 2 Stick Controller",
        "HDMI Cable Included",
        "Antar Jemput (S&K berlaku)",
        "Teknisi Support"
      ],
      duration: durationPS3,
      setDuration: setDurationPS3
    },
    {
      id: 2,
      title: "PlayStation 4",
      icon: icons.ps4,
      priceDay: 65000,
      priceWeek: 400000,
      priceMonth: 1500000,
      tagline: "Gaming Premium",
      color: "from-indigo-600 to-purple-600",
      hoverColor: "hover:from-indigo-500 hover:to-purple-500",
      features: [
        "Unit PS4 + 2 Stick Controller",
        "HDMI Cable Included",
        "Antar Jemput (S&K berlaku)",
      ],
      duration: durationPS4,
      setDuration: setDurationPS4,
      popular: true
    },
    {
      id: 3,
      title: "Main Di Tempat",
      icon: icons.location,
      priceHour: 5000,
      priceHalfDay: 25000,
      priceFullDay: 45000,
      tagline: "Gaming Center",
      color: "from-purple-600 to-pink-600",
      hoverColor: "hover:from-purple-500 hover:to-pink-500",
      features: [
        "Ruangan Nyaman & AC",
        "PS3 atau PS4 + 2 Stick",
        "Akses Game Lengkap",
        "Wifi Ngebut"
      ],
      duration: durationOnsite,
      setDuration: setDurationOnsite
    }
  ];

  // Format price in IDR
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID').format(price);
  };

  // Type guard to check if a plan is a rental plan
  const isRentalPlan = (plan: PricingPlan): plan is RentalPlan => {
    return (plan as RentalPlan).priceDay !== undefined;
  };

  // Get price based on duration
  const getPrice = (plan: PricingPlan): number => {
    if (!isRentalPlan(plan)) {
      // This is an onsite plan
      if (plan.duration === "hour") return plan.priceHour;
      if (plan.duration === "halfDay") return plan.priceHalfDay;
      return plan.priceFullDay;
    } else {
      // This is a rental plan
      if (plan.duration === "day") return plan.priceDay;
      if (plan.duration === "week") return plan.priceWeek;
      return plan.priceMonth;
    }
  };

  // Get price label based on duration
  const getPriceLabel = (plan: PricingPlan): string => {
    if (!isRentalPlan(plan)) {
      if (plan.duration === "hour") return "/jam";
      if (plan.duration === "halfDay") return "/4 jam";
      return "/8 jam";
    } else {
      if (plan.duration === "day") return "/hari";
      if (plan.duration === "week") return "/minggu";
      return "/bulan";
    }
  };

  return (
    <section id='harga' className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 px-6 overflow-hidden">
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

      <div className="container mx-auto relative z-20">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4 hover:scale-105 transition-transform duration-300 shadow-lg">
            PRICING TERBAIK
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Harga Sewa PlayStation
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Nikmati gaming premium dengan harga terjangkau. Berbagai pilihan durasi tersedia sesuai kebutuhan Anda.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-700 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } ${activeCard === plan.id ? 'md:scale-105 z-10' : 'z-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(plan.id)}
            >
              {/* Popular tag */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold py-1.5 px-3 rounded-bl-lg shadow-lg animate-pulse">
                    POPULER
                  </div>
                </div>
              )}
              
              {/* Card content */}
              <div className="p-6 md:p-8">
                {/* Card header */}
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white">
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.title}</h3>
                    <p className="text-sm text-gray-400">{plan.tagline}</p>
                  </div>
                </div>
                
                {/* Price - Modified with "Start From" text */}
                <div className="mt-6 mb-8">
                  <p className="text-sm text-gray-400 mb-1">Mulai dari</p>
                  <div className="flex items-end mb-2">
                    <span className="text-lg text-gray-400">Rp</span>
                    <span className="text-4xl font-bold mx-1 text-white">{formatPrice(getPrice(plan))}</span>
                    <span className="text-gray-400">{getPriceLabel(plan)}</span>
                  </div>

                  {/* Duration selector */}
                  <div className="flex items-center space-x-2 mt-4 p-1 bg-gray-800 bg-opacity-50 rounded-xl">
                    {!isRentalPlan(plan) ? (
                      <>
                        <button 
                          onClick={() => plan.setDuration("hour")}
                          className={`text-xs py-1.5 px-3 rounded-lg transition-all ${
                            plan.duration === "hour" ? `bg-gradient-to-r ${plan.color} text-white` : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Per Jam
                        </button>
                        <button 
                          onClick={() => plan.setDuration("halfDay")}
                          className={`text-xs py-1.5 px-3 rounded-lg transition-all ${
                            plan.duration === "halfDay" ? `bg-gradient-to-r ${plan.color} text-white` : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          4 Jam
                        </button>
                        <button 
                          onClick={() => plan.setDuration("fullDay")}
                          className={`text-xs py-1.5 px-3 rounded-lg transition-all ${
                            plan.duration === "fullDay" ? `bg-gradient-to-r ${plan.color} text-white` : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          8 Jam
                        </button>
                      </>
                    ) : (
                      <>
                        <button 
                          onClick={() => plan.setDuration("day")}
                          className={`text-xs py-1.5 px-3 rounded-lg transition-all ${
                            plan.duration === "day" ? `bg-gradient-to-r ${plan.color} text-white` : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Harian
                        </button>
                        <button 
                          onClick={() => plan.setDuration("week")}
                          className={`text-xs py-1.5 px-3 rounded-lg transition-all ${
                            plan.duration === "week" ? `bg-gradient-to-r ${plan.color} text-white` : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Mingguan
                        </button>
                        <button 
                          onClick={() => plan.setDuration("month")}
                          className={`text-xs py-1.5 px-3 rounded-lg transition-all ${
                            plan.duration === "month" ? `bg-gradient-to-r ${plan.color} text-white` : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Bulanan
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="mr-2 text-green-400">{icons.check}</div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${plan.color} ${plan.hoverColor} text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-md flex items-center justify-center`}>
                  <span>{!isRentalPlan(plan) ? 'Reservasi Sekarang' : 'Sewa Sekarang'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
              
              {/* Animated border */}
              <div className={`absolute inset-0 border border-transparent ${activeCard === plan.id ? `bg-gradient-to-r ${plan.color} opacity-50` : 'opacity-0'} rounded-2xl -z-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-12 text-center text-sm text-gray-400 max-w-3xl mx-auto">
          <p>* Antar jemput gratis untuk area Jatisari, Bekasi. Area lain dikenakan biaya tambahan sesuai jarak.</p>
          <p className="mt-2">Teknisi support tersedia untuk membantu setup dan troubleshooting.</p>
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
        
        @keyframes pulseBorder {
          0%, 100% { border-color: rgba(255,255,255,0.1); }
          50% { border-color: rgba(255,255,255,0.3); }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;