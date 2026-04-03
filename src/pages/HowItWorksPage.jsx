import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Truck, IndianRupee, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {

  return (
    <div className="max-w-7xl mx-auto pb-20">
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">How RaddiRich Works</h1>
        <p className="text-xl text-primary font-bold max-w-2xl mx-auto leading-relaxed">
          From clutter in your home to cash in your bank... all it takes is 3 simple steps.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 -translate-x-1/2 rounded-full" />
        
        {[
          {
            title: "1. Scan Your Scrap using AI",
            desc: "Don't know how much your old newspapers and plastic are worth? Just point our AI-powered camera scanner at your scrap pile. It automatically detects the materials and gives you an instant estimated value based on today's live market rates. No more guessing!",
            icon: <Smartphone className="w-10 h-10 text-blue-500" />,
            color: "blue"
          },
          {
            title: "2. Schedule a Doorstep Pickup",
            desc: "Select a date and time that works best for you. No need to carry heavy loads to the local vendor anymore. Our verified and fully background-checked agents will arrive at your doorstep equipped with digital weighing scales ensuring 100% accurate weight.",
            icon: <Truck className="w-10 h-10 text-orange-500" />,
            color: "orange"
          },
          {
            title: "3. Get Paid Instantly to Bank",
            desc: "Once the weight is confirmed, the money gets transferred directly to your UPI, Paytm, or Bank Account instantly. No bargaining, no change issues, just transparent pricing. You also earn extra RaddiRich reward points for every KG of waste you recycle!",
            icon: <IndianRupee className="w-10 h-10 text-primary" />,
            color: "primary"
          }
        ].map((step, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 mb-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 rounded-full z-10 items-center justify-center shadow-lg"></div>

            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 px-4"
            >
              <div className={`bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 ${
                step.color === 'blue' ? 'border-t-blue-500' :
                step.color === 'orange' ? 'border-t-orange-500' : 'border-t-primary'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/30`}>
                    {step.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
            <div className="w-full md:w-1/2" />
          </div>
        ))}
      </div>

      <div className="text-center mt-12 px-4">
        <Link to="/scan" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-xl hover:bg-green-700 hover:shadow-xl transition-all inline-flex items-center gap-2">
          <Zap className="h-6 w-6" />
          Ready? Scan Your Scrap Now
        </Link>
      </div>
    </div>
  );
};

export default HowItWorksPage;
