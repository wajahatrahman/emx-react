import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarGrid } from './CalendarGrid';
import { EventList } from './EventList';
import content from '../../data/content.json';
import eventsData from '../../data/events.json';
import type { ViewType } from '../../types';

export const CalendarSection: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1));
  const [viewType, setViewType] = useState<ViewType>('month');

  const navigateDate = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (viewType === 'month') {
        newDate.setMonth(prevDate.getMonth() + (direction === 'next' ? 1 : -1));
      } else {
        newDate.setMonth(prevDate.getMonth() + (direction === 'next' ? 3 : -3));
      }
      return newDate;
    });
  };

  return (
    <section className="py-20 px-4 md:px-8 animated-background">
      <h2 className="text-4xl font-bold text-center mb-16 relative z-10">{content.calendar.title}</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <button 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => navigateDate('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-semibold">
                {viewType === 'month' 
                  ? currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
                  : `Q${Math.floor(currentDate.getMonth() / 3) + 1} ${currentDate.getFullYear()}`
                }
              </h3>
              <select
                className="bg-white/10 text-white px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10"
                value={viewType}
                onChange={(e) => setViewType(e.target.value as ViewType)}
              >
                <option value="month">{content.calendar.viewOptions.month}</option>
                <option value="quarter">{content.calendar.viewOptions.quarter}</option>
              </select>
            </div>
            <button 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => navigateDate('next')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <CalendarGrid 
            date={currentDate}
            events={eventsData.events}
            viewType={viewType}
          />
        </div>

        <div className="lg:col-span-1">
          <EventList 
            events={eventsData.events}
            viewType={viewType}
            currentDate={currentDate}
          />
        </div>
      </div>
    </section>
  );
};