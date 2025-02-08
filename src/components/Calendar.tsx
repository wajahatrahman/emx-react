import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Event } from '../types';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO, isWithinInterval } from 'date-fns';

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
    return events.find(event => {
      const eventStart = parseISO(event.startDate);
      const eventEnd = parseISO(event.endDate);
      return isWithinInterval(date, { start: eventStart, end: eventEnd });
    });
  };

  const hasEventNextDay = (date: Date, event: Event) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const eventEnd = parseISO(event.endDate);
    return nextDay <= eventEnd;
  };

  const hasEventPrevDay = (date: Date, event: Event) => {
    const prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    const eventStart = parseISO(event.startDate);
    return prevDay >= eventStart;
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50">
      <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
        <button
          onClick={() => onDateChange(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
          className="p-2 hover:bg-gray-700/50 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => onDateChange(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
          className="p-2 hover:bg-gray-700/50 rounded-full text-gray-400 hover:text-gray-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-400">
            {day}
          </div>
        ))}
        {days.map((day) => {
          const event = getEventForDate(day);
          const isToday = isSameDay(day, new Date());
          return (
            <button
              key={day.toString()}
              onClick={() => onSelectDate(day)}
              className={`
                relative h-14 p-1 text-sm flex items-center justify-center
                ${!isSameMonth(day, currentDate) ? 'text-gray-600' : 'text-gray-300'}
                hover:bg-gray-700/30 transition-colors
              `}
            >
              {event && (
                <>
                  {hasEventPrevDay(day, event) && (
                    <div className={`absolute left-0 w-1/2 h-1.5 bg-${event.color}-500/30`} />
                  )}
                  {hasEventNextDay(day, event) && (
                    <div className={`absolute right-0 w-1/2 h-1.5 bg-${event.color}-500/30`} />
                  )}
                </>
              )}
              <div className={`
                w-9 h-9 flex items-center justify-center rounded-full
                ${event ? `bg-${event.color}-500/90 text-white font-medium backdrop-blur-sm` : ''}
                ${isSameDay(day, selectedDate) && !event ? 'bg-purple-500/20 text-purple-300' : ''}
                ${isToday ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-gray-800/50' : ''}
                relative z-10 transition-all duration-200
                hover:scale-110
              `}>
                <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;