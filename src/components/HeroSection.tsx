import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.2]">
              Welcome to Our Platform
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Build something amazing with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Hero illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;