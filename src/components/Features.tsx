import React from 'react';
import { Paintbrush, Lightbulb, WrenchIcon, FileText } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <div id="services" className="bg-black py-24 px-4">
      <h2 className="text-4xl font-bold text-white text-center mb-16">Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <FeatureCard
          Icon={Paintbrush}
          title="Design"
          description="Creative and intuitive design assistance to bring your vision to life"
        />
        <FeatureCard
          Icon={Lightbulb}
          title="Prototyping"
          description="Rapid prototyping to validate ideas and concepts quickly"
        />
        <FeatureCard
          Icon={WrenchIcon}
          title="Tech Support"
          description="Expert technical support for:\n• Computers\n• Networks\n• Household Electronics\n• Much More"
        />
        <FeatureCard
          Icon={FileText}
          title="Rentals"
          description="Equipment rentals (currently only ozone generators available)"
        />
      </div>
    </div>
  );
}