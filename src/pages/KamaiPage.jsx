import React from 'react';
import { Wallet, TrendingUp, History, ArrowRight, IndianRupee } from 'lucide-react';
import { motion } from 'framer-motion';

const KamaiPage = () => {
  const transactions = [
    { id: 1, date: "Oct 24, 2026", type: "Mixed Scrap", weight: "12 kg", amount: "₹185", status: "Paid via UPI" },
    { id: 2, date: "Sep 15, 2026", type: "Old Books", weight: "8 kg", amount: "₹120", status: "Added to Wallet" },
    { id: 3, date: "Aug 02, 2026", type: "E-Waste", weight: "2.5 kg", amount: "₹350", status: "Paid via PayTM" },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">Kamai Dashboard</h1>
        <p className="text-xl text-secondary dark:text-yellow-400 font-medium">Tu Soch Raha Tha Kachra Hai — Ye Toh Khazana Hai! 💎</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Total Earnings Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-primary to-green-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Wallet className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <p className="text-green-100 font-medium text-lg mb-2">Total Earnings</p>
            <h2 className="text-6xl font-extrabold mb-6">₹655</h2>
            <div className="flex gap-4">
              <button className="flex-1 bg-white text-primary py-3 rounded-xl font-bold hover:shadow-lg transition-transform hover:-translate-y-1">
                Withdraw UPI
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Graph Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700" // Use CSS generated bars for graph
        >
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Total Collected</p>
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <TrendingUp className="h-4 w-4" /> 22.5 KG
            </span>
          </div>
          
          <div className="h-32 flex items-end justify-between gap-2 mt-4">
            {[40, 20, 60, 30, 80, 50, 100].map((height, i) => (
              <div key={i} className="w-full bg-gray-100 dark:bg-gray-700 rounded-t-lg relative group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary rounded-t-lg transition-colors"
                ></motion.div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium px-1">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </motion.div>
      </div>

      {/* Transaction History */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <History className="h-6 w-6 text-gray-500" />
          <h3 className="text-2xl font-bold">Recent Transactions</h3>
        </div>
        
        <div className="space-y-4">
          {transactions.map((t) => (
            <div key={t.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-colors">
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 dark:text-white">{t.type} <span className="text-sm font-medium text-gray-500">({t.weight})</span></span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{t.date} • <span className="text-green-600 dark:text-green-400">{t.status}</span></span>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-xl text-primary">{t.amount}</span>
              </div>
            </div>
          ))}
          
          <button className="w-full py-4 text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors flex items-center justify-center gap-2">
            View All History <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default KamaiPage;
