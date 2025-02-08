import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Event } from '../types';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';

interface CalendarProps {
  currentDate: Date;
  events: Event[];
  onDateChange: (date: Date) => void;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  events,
  onDateChange,
  selectedDate,
  onSelectDate,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventForDate = (date: Date) => {
    return events.find(event => isSameDay(parseISO(event.startDate), date));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          onClick={() => onDateChange(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">{format(currentDate, 'MMMM yyyy')}</h2>
        <button
          onClick={() => onDateChange(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium">
            {day}
          </div>
        ))}
        {days.map((day, dayIdx) => {
          const event = getEventForDate(day);
          return (
            <button
              key={day.toString()}
              onClick={() => onSelectDate(day)}
              className={`
                relative h-14 bg-white p-1 text-sm
                ${!isSameMonth(day, currentDate) ? 'text-gray-400' : ''}
                ${isSameDay(day, selectedDate) ? 'bg-blue-50' : ''}
              `}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
              {event && (
                <div
                  className={`absolute bottom-1 left-1 right-1 h-1 rounded-full bg-${event.color}-500`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;