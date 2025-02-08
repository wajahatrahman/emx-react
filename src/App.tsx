import React from 'react';
import { HeroSection } from './components/Hero/HeroSection';
import { CalendarSection } from './components/Calendar/CalendarSection';
import { TeamSection } from './components/Team/TeamSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="background-logo" aria-hidden="true" />
      <HeroSection />
      <CalendarSection />
      <TeamSection />
    </div>
  );
}

export default App;