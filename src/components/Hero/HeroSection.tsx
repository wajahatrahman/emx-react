import React, { useState, useEffect } from 'react';
import content from '../../data/content.json';
import { heroImages } from '../../data/images';
import type { HeroImage } from '../../types';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image: HeroImage, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={`${image.url}?auto=format&fit=crop&w=2000&h=1000&q=80`}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="relative z-20 text-center px-4">
        <h1 className={`text-6xl md:text-7xl font-bold mb-6 animate-fade-in transition-colors duration-500 ${
          heroImages[currentSlide].textColor
        }`}>
          {content.hero.title}
        </h1>
        <p className={`text-xl md:text-2xl mb-8 transition-colors duration-500 ${
          heroImages[currentSlide].textColor === 'text-white' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {content.hero.subtitle}
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition duration-300">
          {content.hero.cta}
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};