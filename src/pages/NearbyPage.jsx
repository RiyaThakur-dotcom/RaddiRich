import React, { useState } from 'react';
import { Map, Navigation, Star, MapPin, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NearbyPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Plastic', 'Paper', 'Metal', 'Electronics'];
  
  const buyers = [
    { id: 1, name: "Kalu Ram Scrap Dealers", distance: "0.8 km", rating: 4.8, types: ['Plastic', 'Paper', 'Metal'], address: "Shop 4, Main Market, Sector 12" },
    { id: 2, name: "Green Earth Recycling", distance: "1.2 km", rating: 4.5, types: ['Electronics', 'Plastic'], address: "Plot 22, Industrial Area" },
    { id: 3, name: "Sharma Raddi Wala", distance: "2.5 km", rating: 4.2, types: ['Paper', 'Metal'], address: "Street 8, Model Town" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="text-center mb-6 shrink-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Find Buyers</h1>
        <p className="text-lg text-primary font-medium">Tera Nearest Buyer Bas 2 Minute Door Hai! 📍</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1 overflow-hidden">
        {/* Sidebar / List */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 overflow-y-auto pr-2 pb-20 md:pb-0">
          
          {/* Search & Filter */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 shrink-0">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search location or buyer..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <Filter className="h-5 w-5 text-gray-500 shrink-0" />
              {filters.map(f => (
                <button 
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === f 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          {buyers.map((buyer, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={buyer.id} 
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{buyer.name}</h3>
                <span className="flex items-center gap-1 text-sm font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded">
                  <Star className="h-3 w-3 fill-current" /> {buyer.rating}
                </span>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                <MapPin className="h-4 w-4" /> {buyer.distance} • {buyer.address}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {buyer.types.map(t => (
                  <span key={t} className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <button className="w-full py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl font-semibold transition-colors flex justify-center items-center gap-2">
                <Navigation className="h-4 w-4" /> Get Directions
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mock Map Area */}
        <div className="hidden md:flex flex-1 bg-gray-200 dark:bg-gray-800 rounded-3xl relative overflow-hidden border border-gray-300 dark:border-gray-600 shadow-inner group items-center justify-center">
          {/* Add a stylized grid background to simulate a map */}
          <div className="absolute inset-0 pattern-grid-lg text-primary/10"></div>
          
          <div className="relative z-10 flex flex-col items-center opacity-50 group-hover:opacity-100 transition-opacity">
            <Map className="h-20 w-20 text-gray-400 mb-4" />
            <p className="text-gray-500 font-medium">Google Maps API Integration Pending</p>
            <p className="text-sm text-gray-400">Map will display available buyers nearby.</p>
          </div>

          {/* Dummy Map Pins */}
          <div className="absolute top-1/4 left-1/3">
            <div className="relative">
              <MapPin className="h-10 w-10 text-primary drop-shadow-md absolute -bottom-5 -left-5" />
              <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded shadow text-xs font-bold whitespace-nowrap -mt-6">Kalu Ram</div>
            </div>
          </div>
          
          <div className="absolute top-1/2 right-1/4">
            <div className="relative">
              <MapPin className="h-10 w-10 text-primary drop-shadow-md absolute -bottom-5 -left-5 opacity-70" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NearbyPage;
