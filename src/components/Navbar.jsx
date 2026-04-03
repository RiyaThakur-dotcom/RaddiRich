import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Recycle, Download, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-50 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              RaddiRich
            </span>
          </div>
          
          <div className="flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
              Home
            </NavLink>
            <NavLink to="/how-it-works" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
              How It Works
            </NavLink>
            <NavLink to="/prices" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
              Prices
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
              About
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/download" className="flex items-center gap-2 px-4 py-2 bg-secondary text-gray-900 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-md">
              <Download className="h-4 w-4" />
              Download App
            </Link>
            <Link to="/profile" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-full font-semibold transition-all hover:bg-primary/10 active:scale-95">
              <User className="h-4 w-4" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
