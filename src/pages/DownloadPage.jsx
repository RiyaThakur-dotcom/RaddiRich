import React from 'react';
import { motion } from 'framer-motion';
import { DownloadCloud, Smartphone } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20 px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-24"
      >
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <DownloadCloud className="w-12 h-12 text-primary absolute animate-bounce" />
          <Smartphone className="w-6 h-6 text-gray-800 dark:text-gray-200 mt-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          App Launching Soon!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The RaddiRich mobile app is currently in beta. You can use this website fully in the meantime, or install it as a PWA from your browser menu.
        </p>
      </motion.div>
    </div>
  );
};

export default DownloadPage;
