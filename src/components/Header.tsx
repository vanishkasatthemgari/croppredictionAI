import React from 'react';
import { Sprout } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Sprout size={32} />
            <h1 className="text-2xl font-bold">CropPredict AI</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#dashboard" className="hover:text-green-200 transition-colors">Dashboard</a>
            <a href="#predictions" className="hover:text-green-200 transition-colors">Predictions</a>
            <a href="#reports" className="hover:text-green-200 transition-colors">Reports</a>
          </nav>
        </div>
      </div>
    </header>
  );
};