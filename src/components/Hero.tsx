import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/e81c9d_f36a887513e14998a2013ac6062c6271~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/e81c9d_f36a887513e14998a2013ac6062c6271~mv2.jpg')`,
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1a472a_0%,#000000_100%)] opacity-90"></div>
      
      <div className="relative z-10 text-center px-4">
<<<<<<< HEAD
        <div className="flex flex-col items-start justify-center gap-4 mb-4 md:flex-row md:items-center md:justify-center">
          <img 
            src="images/sidehectortrans.png" 
            alt="Hector Solutions Logo" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight font-ancizar-serif text-left md:text-center">
            HECTOR SOLUTIONS
          </h1>
        </div>
        <p className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide">
          Design • Manufacturing • Tech • Rentals
        </p>
=======
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          AW Solutions
        </h1>
>>>>>>> parent of add9b12 (Rebrand from AW Solutions to AGW Industries - Update all references, URLs, and paths)
        <p className="text-xl md:text-2xl text-emerald-400 mb-8">
          Let's make it happen
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProducts}
            className="bg-transparent hover:bg-emerald-900/20 text-emerald-400 border border-emerald-600 px-8 py-3 rounded-full flex items-center gap-2 justify-center transition-all"
          >
            Products
            <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollToServices}
            className="bg-transparent hover:bg-emerald-900/20 text-emerald-400 border border-emerald-600 px-8 py-3 rounded-full flex items-center gap-2 justify-center transition-all"
          >
            Services
            <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full flex items-center gap-2 justify-center transition-all"
          >
            Get in Touch
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
<<<<<<< HEAD

        {/* Proudly Canadian Section */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center gap-2 text-emerald-400 mb-2">
            <img 
              src="/awsolutions/images/Flag_of_Canada.svg" 
              alt="Canadian Flag" 
              width="24" 
              height="16" 
              className="inline-block"
            />
            <span className="text-lg font-semibold">Proudly Canadian</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Kelowna, BC</span>
          </div>
        </div>
=======
>>>>>>> parent of add9b12 (Rebrand from AW Solutions to AGW Industries - Update all references, URLs, and paths)
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTQ3MmEyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2LDYiLz48L3N2Zz4=')] opacity-20"></div>
    </div>
  );
}