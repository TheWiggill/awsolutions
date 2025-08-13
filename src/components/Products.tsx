import React from 'react';

interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    name: 'NP-50 Stash 2',
    price: '$299',
    image: '/images/Stash2.jpg',
    description: 'Compact and efficient solution for small-scale operations. Perfect for getting started with reliable performance and easy setup.'
  },
  {
    name: 'NP50 Stash 4',
    price: '$499',
    image: '/images/Stash4.jpg',
    description: 'Mid-range powerhouse with enhanced capacity and advanced features. Ideal for growing businesses that need scalable solutions.'
  },
  {
    name: 'NP50 Stash 8',
    price: '$799',
    image: '/images/Stash8.jpg',
    description: 'Premium high-capacity system with maximum performance and enterprise-grade reliability. Built for demanding professional environments.'
  }
];

export function Products() {
  return (
    <div id="products" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-to-b from-emerald-900/20 to-transparent rounded-2xl border border-emerald-900/30 overflow-hidden group hover:border-emerald-600/50 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-emerald-400">{product.price}</p>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}