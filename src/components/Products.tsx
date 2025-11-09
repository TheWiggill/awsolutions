
interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
}

const baseUrl = import.meta.env.BASE_URL;

const audioGear: Product[] = [
  {
    name: 'NP-50 Stash 2',
    price: '$20 CAD',
    image: `${baseUrl}images/Stash2.jpg`,
    description: 'Storage for 2 NP-50 batteries. Also compatible with D-Li68 / D-Li122 / Klic-7004 / LB-50'
  },
  {
    name: 'NP-50 Stash 4',
    price: '$30 CAD',
    image: `${baseUrl}images/Stash4.jpg`,
    description: 'Storage for 4 NP-50 batteries. Also compatible with D-Li68 / D-Li122 / Klic-7004 / LB-50'
  },
  {
    name: 'NP-50 Stash 8',
    price: '$40 CAD',
    image: `${baseUrl}images/Stash8.jpg`,
<<<<<<< HEAD
    description: 'Storage for 8 NP-50 batteries made of flexible material. Also compatible with D-Li68 / D-Li122 / Klic-7004 / LB-50'
  }
];

const radios: Product[] = [
  {
    name: 'Baofeng UV-16 V2 Pro',
    price: '$80 CAD',
    image: `${baseUrl}images/baofeng.jpg`,
    description: 'USB-C Charging, Waterproof, Programmed to include ALL channels that you need, including RR, Load, Ladd, BCA, FRS/GMRS, Canadian Weather, and more. FM Radio and Flashlight functionality. Dock charger, USB C Cable, Antenna, and belt clip included.'
  },
  {
    name: 'UV-5R Mini Radio',
    price: '$60 CAD',
    image: `${baseUrl}images/5rmini.jpg`,
    description: 'Compact dual-band radio with VHF/UHF/Air Band capabilities. Programmed to include ALL channels that you need, including RR, Load, Ladd, BCA, FRS/GMRS, Canadian Weather, and more. Includes battery, antenna, USB-C charging cable, and belt clip.'
=======
    description: 'Storage for 8 NP-50 batteries. Also compatible with D-Li68 / D-Li122 / Klic-7004 / LB-50'
>>>>>>> parent of add9b12 (Rebrand from AW Solutions to AGW Industries - Update all references, URLs, and paths)
  }
];

export function Products() {
  const renderProductCard = (product: Product, index: number) => (
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
  );

  return (
    <div id="products" className="bg-black py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Products</h2>
        
        {/* Audio Gear Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 text-center mb-8">Audio Gear</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audioGear.map((product, index) => renderProductCard(product, index))}
          </div>
        </div>

        {/* Radios Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 text-center mb-8">Radios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {radios.map((product, index) => renderProductCard(product, index))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-emerald-400 text-lg">
            Please <a href="#contact" className="text-emerald-300 hover:text-emerald-200 underline transition-colors">contact me</a> to place an order. Canada-wide shipping available for $15
          </p>
        </div>
      </div>
    </div>
  );
}