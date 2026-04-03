import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle } from 'lucide-react';

const PricesPage = () => {
  const categories = [
    {
      name: "Paper & Cardboard",
      items: [
        { name: "Newspaper", price: "₹15", img: "🗞️" },
        { name: "Mixed Paper", price: "₹10", img: "📄" },
        { name: "Cardboard (Corrugated)", price: "₹8", img: "📦" },
        { name: "White Books", price: "₹12", img: "📚" }
      ]
    },
    {
      name: "Plastics",
      items: [
        { name: "PET Bottles", price: "₹12", img: "🚰" },
        { name: "Hard Plastic", price: "₹8", img: "🪣" },
        { name: "Mix Plastic", price: "₹5", img: "🛍️" },
      ]
    },
    {
      name: "Metals",
      items: [
        { name: "Iron / Steel", price: "₹26", img: "⛓️" },
        { name: "Copper", price: "₹450", img: "🥉" },
        { name: "Aluminium", price: "₹110", img: "🥈" },
        { name: "Brass", price: "₹380", img: "🎺" }
      ]
    },
    {
      name: "E-Waste & Others",
      items: [
        { name: "Mixed E-Waste", price: "₹30", img: "💻" },
        { name: "Old Mobiles", price: "₹50 - 500", img: "📱" },
        { name: "Battery", price: "₹65", img: "🔋" }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20 px-4">
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Today's Scrap Rates</h1>
        <p className="text-xl text-primary font-bold">Highest Rates Guaranteed in the Market.</p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-2xl p-4 flex gap-3 items-start mb-10">
        <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-800 dark:text-yellow-400">
          <strong>Disclaimer:</strong> Prices are indicative and meant for bulk retail collection. Final prices are determined by our field agents upon physical verification of the material's quality and exact weight.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">{cat.name}</h2>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {cat.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.img}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="font-extrabold text-lg text-primary">{item.price} <span className="text-xs text-gray-500 font-medium">/ kg</span></span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricesPage;
