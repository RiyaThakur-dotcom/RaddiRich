import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, X, MapPin, Zap, CheckCircle2 } from 'lucide-react';

const ScanPage = () => {
  const [file, setFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsScanning(true);
    // Simulate AI scan
    setTimeout(() => {
      setIsScanning(false);
      setResult({
        material: "Mixed Plastics & Cardboard",
        weight: "4.5 kg",
        rate: "₹12 / kg (Avg)",
        earning: "₹54",
        nearestBuyer: "Kalu Ram Scrap (0.8 km)"
      });
    }, 3000);
  };

  const resetScan = () => {
    setFile(null);
    setResult(null);
    setIsScanning(false);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">AI Scrap Scanner</h1>
        <p className="text-xl text-primary font-medium">Ek Photo, Aur Paisa Seedha Haath Mein! 📸</p>
      </div>

      <AnimatePresence mode="wait">
        {!isScanning && !result ? (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary transition-colors cursor-pointer text-center group shadow-sm"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
            onClick={() => handleFileDrop({ preventDefault: () => {} })}
          >
            <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Camera className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Tap to Scan or Upload</h3>
            <p className="text-gray-500 dark:text-gray-400">Works seamlessly on mobile camera and desktop file upload.</p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-6 py-3 rounded-xl font-semibold transition-colors">
                <Upload className="h-5 w-5" /> Choose File
              </button>
            </div>
          </motion.div>
        ) : isScanning ? (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-white dark:bg-gray-800 rounded-3xl p-12 text-center shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 rounded-lg"></div>
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-1 bg-primary blur-[2px] shadow-[0_0_15px_rgba(22,163,74,0.8)] z-10"
              />
              <div className="absolute inset-0 bg-primary/10 animate-pulse rounded-lg"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2 flex justify-center items-center gap-3">
              <Zap className="h-6 w-6 text-yellow-500 animate-bounce" />
              Gemini AI Analyzing...
            </h3>
            <p className="text-gray-500 dark:text-gray-400">Detecting material types and estimating weight</p>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Scan Complete!</h3>
              </div>
              <button onClick={resetScan} className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Detected Material</p>
                <p className="font-bold text-lg">{result.material}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Est. Weight</p>
                <p className="font-bold text-lg">{result.weight}</p>
              </div>
              <div className="col-span-2 bg-primary/10 dark:bg-primary/5 p-6 rounded-2xl border border-primary/20 flex justify-between items-center">
                <div>
                  <p className="text-sm text-green-700 dark:text-green-500 font-semibold mb-1">Total Estimated Value</p>
                  <p className="text-4xl font-extrabold text-primary">{result.earning}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Based on Rate</p>
                  <p className="font-bold">{result.rate}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg shadow-green-500/30 transition-colors">
                Schedule Pickup Now
              </button>
              <button className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 py-4 rounded-xl font-bold text-lg transition-colors flex justify-center items-center gap-2">
                <MapPin className="h-5 w-5" /> Visit Nearest Buyer
              </button>
            </div>
            <p className="text-center mt-4 text-sm text-gray-500 flex justify-center items-center gap-1">
              Nearest: <span className="font-semibold text-gray-800 dark:text-gray-300">{result.nearestBuyer}</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScanPage;
