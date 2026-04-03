import React from 'react';
import { motion } from 'framer-motion';
import { User, Gift, Clock, Settings, LogOut, ChevronRight, Award } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="max-w-3xl mx-auto pb-10">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 mt-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 bg-gradient-to-tr from-primary to-secondary rounded-full p-1 relative">
          <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
            <User className="h-12 w-12 text-gray-400" />
          </div>
          <div className="absolute bottom-0 right-0 bg-secondary w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 flex justify-center items-center">
            <Award className="h-3 w-3 text-gray-900" />
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">Ramesh Kumar</h2>
          <p className="text-gray-500">ramesh.k@example.com</p>
          <p className="text-primary font-bold mt-1">Level 1 Recycler 🌿</p>
        </div>
        
        <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full font-semibold transition-colors">
          Edit Profile
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Opening Rewards Portal...')}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-6 text-white shadow-lg cursor-pointer transition-all"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl flex items-center gap-2"><Gift className="h-5 w-5" /> Rewards</h3>
            <ChevronRight className="h-5 w-5 opacity-70" />
          </div>
          <p className="text-yellow-100 text-sm mb-1">Available Points</p>
          <p className="text-4xl font-extrabold">2,450</p>
          <p className="text-xs text-yellow-100 mt-2">Jitna Phenko, Utna Kamao — Seedha UPI Mein! 💸</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Opening Pickup Schedule Details...')}
          className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 shadow-sm cursor-pointer hover:border-primary hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-center mb-4 text-gray-800 dark:text-white">
            <h3 className="font-bold text-xl flex items-center gap-2 text-primary"><Clock className="h-5 w-5" /> Next Pickup</h3>
            <ChevronRight className="h-5 w-5 opacity-70" />
          </div>
          <p className="text-gray-500 text-sm mb-1">Scheduled for</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tomorrow, 10:00 AM</p>
          <p className="text-xs text-green-600 mt-2 font-medium">Agent Assigned: Suresh T.</p>
        </motion.div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
        {[
          { icon: <User />, label: "Account Details", action: "Opening Account Details..." },
          { icon: <Settings />, label: "Settings", action: "Opening App Settings..." },
          { icon: <LogOut className="text-red-500" />, label: "Logout", color: "text-red-500", action: "Logging out..." }
        ].map((item, i) => (
          <button 
            key={i} 
            onClick={() => alert(item.action)}
            className={`flex items-center w-full text-left gap-4 p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer active:bg-gray-100 dark:active:bg-gray-600 transition-all ${i !== 2 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
          >
            <div className={`p-2 rounded-xl bg-gray-100 dark:bg-gray-900 shadow-sm ${item.color || 'text-gray-600 dark:text-gray-400'}`}>
              {item.icon}
            </div>
            <span className={`font-semibold flex-1 text-lg ${item.color || 'text-gray-800 dark:text-gray-200'}`}>{item.label}</span>
            <ChevronRight className="h-5 w-5 text-gray-400 transform group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
