import React from 'react';
import { MapPin } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const CanadianFlag = () => (
  <img 
    src={`${baseUrl}images/Flag_of_Canada.svg`}
    alt="Canadian Flag" 
    width="24" 
    height="16" 
    className="inline-block"
  />
);

export function Footer() {
  return (
    <footer className="bg-black py-6 px-4 border-t border-emerald-900/30">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 text-emerald-400">
        <div className="flex items-center gap-2">
          <CanadianFlag />
          <span>Proudly Canadian</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Kelowna, BC</span>
        </div>
      </div>
    </footer>
  );
}