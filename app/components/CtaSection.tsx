import Image from 'next/image';
import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Petualangan Gaming Anda?</h2>
          <p className="mb-8">Rasakan pengalaman bermain game terbaik dengan layanan rental PlayStation kami.</p>
          <button className="bg-green-400 text-black px-8 py-3 rounded-md hover:bg-green-500 transition-colors font-medium">
            Sewa Sekarang
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full h-64 md:h-80">
            <Image 
              src="/images/gaming-experience.jpg" 
              alt="Gaming Experience" 
              fill
              className="rounded-lg object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;