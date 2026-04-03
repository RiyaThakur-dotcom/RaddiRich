import React from 'react';
import { Leaf, Recycle, Globe, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Hero */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">About RaddiRich</h1>
        <p className="text-2xl text-primary font-bold mb-4 font-serif italic">"Hum Woh Nahi Jo Kachra Uthate Hain — Hum Woh Hain Jo Zindagi Badlate Hain! 🌱"</p>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We are revolutionizing waste management in India by making recycling accessible, profitable, and technologically advanced for every household.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-20 px-4">
        <motion.div whileHover={{ y: -5 }} className="bg-primary/10 rounded-3xl p-8 border border-primary/20">
          <Target className="h-12 w-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            To build a circular economy where every piece of recyclable material is tracked, valued, and re-integrated into production lines, giving value back to the community.
          </p>
        </motion.div>
        
        <motion.div whileHover={{ y: -5 }} className="bg-secondary/10 rounded-3xl p-8 border border-secondary/20">
          <Globe className="h-12 w-12 text-yellow-600 dark:text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            A zero-waste India by 2035, empowered by localized tech-driven collection networks that transform waste management from an informal sector to a highly respected profession.
          </p>
        </motion.div>
      </div>

      {/* Team */}
      <div className="mb-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">The Minds Behind RaddiRich</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Riya Thakur", role: "Founder & CEO", init: "RT" }
          ].map((member, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 w-64 transform transition hover:-translate-y-2">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-gray-500">
                {member.init}
              </div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Partners Outline */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 text-center border-y border-gray-200 dark:border-gray-800 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
          {/* Example Partner Logos using text/icons for mockup */}
          <div className="flex items-center gap-2 font-black text-2xl text-gray-800 dark:text-gray-200"><Recycle className="h-8 w-8 text-green-500"/> EcoTech</div>
          <div className="flex items-center gap-2 font-black text-2xl text-gray-800 dark:text-gray-200"><Users className="h-8 w-8 text-blue-500"/> Swachh Bharat</div>
          <div className="flex items-center gap-2 font-black text-2xl text-gray-800 dark:text-gray-200"><Leaf className="h-8 w-8 text-green-700"/> Green NGO</div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
