import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Camera, Wallet, MapPin, UserCircle } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 z-50 md:hidden flex justify-around items-center px-4 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 group transition-colors ${isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-primary'} transform transition-all duration-200`}>
        <Home className="h-6 w-6" />
        <span className="text-[10px] font-semibold">Home</span>
      </NavLink>
      
      <NavLink to="/scan" className={({ isActive }) => `flex flex-col items-center gap-1 group transition-colors ${isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-primary'} transform transition-all duration-200`}>
        <div className="bg-primary/20 p-2 rounded-full mb-1">
          <Camera className="h-6 w-6 text-primary" />
        </div>
        <span className="text-[10px] font-semibold">Scan</span>
      </NavLink>
      
      <NavLink to="/earnings" className={({ isActive }) => `flex flex-col items-center gap-1 group transition-colors ${isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-primary'} transform transition-all duration-200`}>
        <Wallet className="h-6 w-6" />
        <span className="text-[10px] font-semibold uppercase">Kamai</span>
      </NavLink>
      
      <NavLink to="/nearby" className={({ isActive }) => `flex flex-col items-center gap-1 group transition-colors ${isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-primary'} transform transition-all duration-200`}>
        <MapPin className="h-6 w-6" />
        <span className="text-[10px] font-semibold">Map</span>
      </NavLink>
      
      <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 group transition-colors ${isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-primary'} transform transition-all duration-200`}>
        <UserCircle className="h-6 w-6" />
        <span className="text-[10px] font-semibold">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
