import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-b from-emerald-900/20 to-transparent p-8 rounded-2xl border border-emerald-900/30">
      <div className="bg-emerald-600/20 p-3 rounded-lg w-fit mb-6">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="text-gray-400">
        {description.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}