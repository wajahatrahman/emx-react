import React from 'react';
import { Event } from '../types';
import { format, parseISO } from 'date-fns';

interface EventListProps {
  events: Event[];
  selectedDate: Date;
  viewMode: 'month' | 'quarter';
}

const EventList: React.FC<EventListProps> = ({ events, selectedDate, viewMode }) => {
  const filteredEvents = events.filter(event => {
    const eventDate = parseISO(event.startDate);
    if (viewMode === 'month') {
      return eventDate.getMonth() === selectedDate.getMonth() &&
             eventDate.getFullYear() === selectedDate.getFullYear();
    } else {
      const quarter = Math.floor(selectedDate.getMonth() / 3);
      const eventQuarter = Math.floor(eventDate.getMonth() / 3);
      return eventQuarter === quarter && eventDate.getFullYear() === selectedDate.getFullYear();
    }
  });

  return (
    <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Your events
        </h2>
        <div className="flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm ${viewMode === 'month' ? 'bg-purple-500/20 text-purple-300 backdrop-blur-sm' : 'text-gray-400'}`}>
            Month
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className={`
              p-4 rounded-lg border border-gray-700/50
              bg-gradient-to-r from-gray-800/50 to-gray-800/30
              hover:from-${event.color}-500/20 hover:to-gray-800/30
              backdrop-blur-sm
              transition-all duration-300 group
            `}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-100 group-hover:text-white transition-colors">
                {event.title}
              </h3>
              <time className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {format(parseISO(event.startDate), 'HH:mm a')}
              </time>
            </div>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {event.subtitle}
            </p>
            <div className={`h-1 w-16 rounded-full bg-${event.color}-500/50 mt-3`} />
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No events scheduled
          </div>
        )}
      </div>
    </div>
  );
}

export default EventList;