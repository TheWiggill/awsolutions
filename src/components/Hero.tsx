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
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          AW Solutions
        </h1>
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
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTQ3MmEyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI2LDYiLz48L3N2Zz4=')] opacity-20"></div>
    </div>
  );
}