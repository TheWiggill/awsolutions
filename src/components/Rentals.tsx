import React from 'react';
import { Zap, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export function Rentals() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="rentals" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Equipment Rentals
          </h1>
          <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
            Ozone generator available for rent in Kelowna, BC
          </p>
        </div>

        {/* Main Rental Item */}
        <div className="bg-gradient-to-b from-emerald-900/20 to-transparent rounded-3xl border border-emerald-900/30 p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Details */}
            <div>
              <div className="bg-emerald-600/20 p-4 rounded-2xl w-fit mb-6">
                <Zap className="w-12 h-12 text-emerald-400" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Ozone Generator
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Ozone generator for effective odor removal, air purification, and sanitization. 
                Perfect for homes, offices, vehicles, and commercial spaces.
              </p>
              
              {/* Price and duration */}
              <div className="bg-emerald-900/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-emerald-400" />
                    <span className="text-white font-semibold">Rental Duration</span>
                  </div>
                  <span className="text-2xl font-bold text-emerald-400">48 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-emerald-400" />
                    <span className="text-white font-semibold">Rental Rate</span>
                  </div>
                  <span className="text-3xl font-bold text-emerald-400">$30 CAD</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-gray-400">Refundable deposit required: $50 CAD</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 justify-center transition-all text-lg font-semibold group"
              >
                Rent Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Features and benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Equipment</h4>
                    <p className="text-gray-400 text-sm">Ozone generating unit</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Safety Instructions</h4>
                    <p className="text-gray-400 text-sm">Instructions and safety guidelines included</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Pickup & Return</h4>
                    <p className="text-gray-400 text-sm">Convenient pickup and return.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Support</h4>
                    <p className="text-gray-400 text-sm">Technical support available during your rental period</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ozone Generator Image */}
            <div className="mt-8 text-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/Ozone.png`}
                alt="Ozone Generator" 
                className="w-48 h-auto mx-auto rounded-2xl border border-emerald-900/30"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-b from-emerald-900/10 to-transparent rounded-2xl border border-emerald-900/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Perfect For</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Removing smoke odors</li>
              <li>• Eliminating pet smells</li>
              <li>• Air purification</li>
              <li>• Mold remediation</li>
              <li>• Vehicle deodorizing</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-b from-emerald-900/10 to-transparent rounded-2xl border border-emerald-900/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">Rental Process</h3>
            <ol className="text-gray-300 space-y-2">
              <li>1. Contact me to check availability</li>
              <li>2. Schedule pickup</li>
              <li>3. Receive equipment and instructions</li>
              <li>4. Return after 48 hours</li>
            </ol>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-emerald-400 text-lg mb-6">
            Ready to get started? Contact us to reserve your ozone generator today.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-transparent hover:bg-emerald-900/20 text-emerald-400 border border-emerald-600 px-8 py-3 rounded-full flex items-center gap-2 justify-center transition-all mx-auto"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
