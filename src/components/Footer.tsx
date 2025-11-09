import React from 'react';
import { MapPin } from 'lucide-react';

const CanadianFlag = () => (
<<<<<<< HEAD
  <img 
    src="/awsolutions/images/Flag_of_Canada.svg" 
    alt="Canadian Flag" 
    width="24" 
    height="16" 
    className="inline-block"
  />
=======
  <svg width="20" height="15" viewBox="0 0 20 15" className="inline-block">
    <rect width="20" height="15" fill="#FF0000"/>
    <rect x="6" y="0" width="8" height="15" fill="#FFFFFF"/>
    <path d="M10 3L11 6H14L11.5 8L12.5 11L10 9L7.5 11L8.5 8L6 6H9L10 3Z" fill="#FF0000"/>
  </svg>
>>>>>>> parent of add9b12 (Rebrand from AW Solutions to AGW Industries - Update all references, URLs, and paths)
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