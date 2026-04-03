import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Recycle, TrendingUp, ShieldCheck, Download, Smartphone, Star, Zap, Trash2, IndianRupee, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ticker = () => {
  const prices = [
    { item: 'Newspaper', price: '₹15/kg' },
    { item: 'Plastic Bottles', price: '₹12/kg' },
    { item: 'Cardboard', price: '₹8/kg' },
    { item: 'Iron/Steel', price: '₹26/kg' },
    { item: 'Copper', price: '₹450/kg' },
    { item: 'Aluminium', price: '₹110/kg' },
    { item: 'E-Waste', price: '₹30/kg' },
  ];

  return (
    <div className="w-full bg-green-50 dark:bg-gray-800/50 py-3 overflow-hidden border-y border-green-100 dark:border-gray-800 shadow-inner">
      <div className="flex w-[200%] animate-[marquee_20s_linear_infinite] md:animate-[marquee_30s_linear_infinite]">
        {[...prices, ...prices, ...prices].map((p, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 whitespace-nowrap">
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="font-medium text-gray-700 dark:text-gray-300">{p.item}</span>
            <span className="font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-sm">
              {p.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Ticker section at very top below exact nav */}
      <Ticker />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-28 overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/20 dark:bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6 shadow-sm border border-green-100 dark:border-green-800/30 text-green-700 dark:text-green-400 font-medium text-sm"
          >
            <Zap className="h-4 w-4 text-secondary fill-secondary" />
            <span>Highest scrap rates in your city</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]"
          >
            Dustbin Nahi,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              Ye Tera ATM Hai! 🏧
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 font-medium"
          >
            Turn your everyday household scrap into real cash. We pick it up at your doorstep, weigh it accurately, and pay instantly via UPI.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <Link to="/scan" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <Smartphone className="h-5 w-5" />
              Scan & Earn Now
              <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
            <Link to="/profile" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all flex items-center justify-center gap-2">
              Schedule Pickup
            </Link>
          </motion.div>

          {/* Download App Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">Available on</p>
            <div className="flex gap-4">
              <Link to="/download" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.34-.84 3.73-.78 1.63.07 2.83.69 3.58 1.77-3.01 1.77-2.52 5.5.4 6.7-1.01 2.38-2.61 4.79-4.74 4.41l-1.01-.2v.23zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">Download on the</div>
                  <div className="font-semibold leading-tight">App Store</div>
                </div>
              </Link>
              <Link to="/download" className="flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12l-10.183 10.186c-.23.1-.486.155-.744.155-.956 0-1.733-.777-1.733-1.733V3.392c0-.956.777-1.733 1.733-1.733.258 0 .513.055.744.155zM15.42 13.626l-1.628-1.626 1.628-1.626 3.992 2.302c.983.567.983 1.488 0 2.055l-3.992 2.301-2.45-1.406z M14.606 10.457l-10.372-5.98 9.558 9.56 1.83-1.054-1.016-2.526z M14.606 13.543l1.016-2.526-1.83-1.054-9.558 9.56 10.372-5.98z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight opacity-80">GET IT ON</div>
                  <div className="font-semibold leading-tight">Google Play</div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-700 dark:text-gray-300">
            <Zap className="h-6 w-6 text-blue-500" /> Google AI
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-700 dark:text-gray-300">
            <span className="bg-black text-white px-2 py-0.5 rounded text-sm tracking-widest">AMD</span> Powered
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-700 dark:text-gray-300">
            <Leaf className="h-6 w-6 text-green-500" /> Swachh Bharat
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Teen Simple Steps, <br className="md:hidden" />Paisa Direct Bank Mein!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">No bargaining, no false weights. Only transparent pricing and instant payments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

          {[
            {
              icon: <Smartphone className="h-8 w-8 text-white" />,
              title: "Scan & Estimate",
              desc: "Open your camera, scan the scrap pile, and our AI instantly estimates its weight and value.",
              color: "bg-blue-500"
            },
            {
              icon: <Trash2 className="h-8 w-8 text-white" />,
              title: "Schedule Pickup",
              desc: "Choose a convenient time slot. Our verified collection agent arrives right on time.",
              color: "bg-orange-500"
            },
            {
              icon: <IndianRupee className="h-8 w-8 text-white" />,
              title: "Instant Payment",
              desc: "Electronic weighing guarantees accuracy. Get paid instantly via UPI or bank transfer.",
              color: "bg-primary"
            }
          ].map((step, idx) => (
            <div key={idx} className="relative group perspective">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl z-10"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg ${step.color} shadow-${step.color.split('-')[1]}-500/30 ring-8 ring-${step.color.split('-')[1]}-100 dark:ring-gray-700 transform group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-extrabold text-primary mb-2">5,432+</div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Tons Collected</p>
            </div>
            <div className="text-center border-y md:border-y-0 md:border-x border-gray-200 dark:border-gray-700 py-8 md:py-0">
              <div className="text-5xl md:text-7xl font-extrabold text-secondary mb-2">₹12.5M</div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Paid Out</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-extrabold text-blue-500 mb-2">18,200</div>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Trees Saved</p>
            </div>
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default HomePage;
