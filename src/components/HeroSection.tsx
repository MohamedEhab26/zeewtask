import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import EditableText from './EditableText';
import { generateRandomContent } from '../utils/contentGenerator';

const HeroSection: React.FC = () => {
  const [content, setContent] = useState({
    headline: "Design beautiful experiences with our intelligent platform",
    subheadline: "Transform your ideas into stunning visuals with the power of AI. No design experience required.",
    ctaText: "Get Started Free",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  });

  const handleRegenerate = () => {
    const newContent = generateRandomContent();
    
    const heroContent = document.getElementById('hero-content');
    if (heroContent) {
      heroContent.classList.add('opacity-0');
      setTimeout(() => {
        setContent(newContent);
        heroContent.classList.remove('opacity-0');
      }, 300);
    } else {
      setContent(newContent);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div 
        id="hero-content"
        className="flex flex-col lg:flex-row items-center justify-between gap-12 transition-opacity duration-300"
      >
        <div className="flex-1 space-y-8 max-w-2xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-fuchsia-700 leading-[1.2] pb-2">
              <EditableText
                value={content.headline}
                onChange={(newText) => setContent({...content, headline: newText})}
              />
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed drop-shadow-sm">
              <EditableText
                value={content.subheadline}
                onChange={(newText) => setContent({...content, subheadline: newText})}
              />
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-lg shadow-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 hover:shadow-xl hover:-translate-y-0.5">
              <EditableText
                value={content.ctaText}
                onChange={(newText) => setContent({...content, ctaText: newText})}
              />
            </button>
            
            <button 
              onClick={handleRegenerate}
              className="group px-6 py-4 bg-white/50 backdrop-blur-sm border border-violet-200 text-gray-700 font-medium rounded-lg hover:bg-white/80 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-fuchsia-500 group-hover:animate-pulse" />
              <span>Regenerate with AI</span>
            </button>
          </div>

          <div className="text-sm text-gray-500 italic">
            <p>Click on any text to edit it directly</p>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] h-[300px] md:h-[400px] ring-1 ring-violet-200 animate-float">
            <img
              src={content.imageUrl}
              alt="Hero illustration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;