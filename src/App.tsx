import React, { useState } from 'react';
import Calendar from './components/Calendar';
import EventList from './components/EventList';
import eventData from './data/events.json';
import { ViewMode } from './types';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode] = useState<ViewMode>('month');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Event Calendar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Calendar
              currentDate={currentDate}
              events={eventData.events}
              onDateChange={setCurrentDate}
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <div>
            <EventList
              events={eventData.events}
              selectedDate={selectedDate}
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;