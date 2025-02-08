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
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Your events</h2>
        <div className="flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm ${viewMode === 'month' ? 'bg-blue-100 text-blue-800' : 'text-gray-600'}`}>
            Month
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className={`p-4 rounded-lg bg-${event.color}-100 border-l-4 border-${event.color}-500`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium">{event.title}</h3>
              <time className="text-sm text-gray-600">
                {format(parseISO(event.startDate), 'HH:mm a')}
              </time>
            </div>
            <p className="text-sm text-gray-600">{event.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;