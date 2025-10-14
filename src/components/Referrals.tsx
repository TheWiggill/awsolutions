import React from 'react';
import { Users, Camera, Home } from 'lucide-react';

export function Referrals() {
  return (
    <div id="referrals" className="bg-gradient-to-b from-black to-gray-900 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="bg-emerald-600/20 p-4 rounded-2xl w-fit mx-auto mb-6">
            <Users className="w-12 h-12 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted Partners
          </h2>
          <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
            I'm proud to recommend these exceptional local businesses. 
            When you need their services, tell them I sent you!
          </p>
        </div>

        {/* Referrals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Shannon's Housesitting */}
          <div className="bg-gradient-to-b from-emerald-900/20 to-transparent rounded-3xl border border-emerald-900/30 p-8 hover:border-emerald-600/50 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-600/20 p-3 rounded-2xl">
                <Home className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Shannon's Housesitting
                </h3>
                <p className="text-gray-300 text-lg">
                  Professional house and pet sitting services
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Need your house or pets minded? Shannon provides reliable, trustworthy 
              house and pet sitting services in the Kelowna area.
            </p>
            
            <div className="flex items-center justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Contact Shannon
              </button>
            </div>
          </div>

          {/* Kelowna Drone Photography */}
          <div className="bg-gradient-to-b from-emerald-900/20 to-transparent rounded-3xl border border-emerald-900/30 p-8 hover:border-emerald-600/50 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-600/20 p-3 rounded-2xl">
                <Camera className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Kelowna Drone Photography
                </h3>
                <p className="text-gray-300 text-lg">
                  Professional photography & drone footage
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Need a photographer or drone footage for your property (or anything else)? 
              Matt at Kelowna Drone delivers stunning aerial and ground photography.
            </p>
            
            <div className="flex items-center justify-center">
              <a
                href="https://www.mattblairphotography.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors cursor-pointer border border-emerald-600 px-4 py-2 rounded-full hover:bg-emerald-900/20"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
