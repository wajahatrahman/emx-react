import React from 'react';
import content from '../../data/content.json';
import type { Event, ViewType } from '../../types';

interface CalendarGridProps {
  date: Date;
  events: Event[];
  viewType: ViewType;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({ date, events, viewType }) => {
  const getDaysInQuarter = (date: Date) => {
    const quarterStart = Math.floor(date.getMonth() / 3) * 3;
    const start = new Date(date.getFullYear(), quarterStart, 1);
    const end = new Date(date.getFullYear(), quarterStart + 3, 0);
    return {
      start,
      end,
      totalDays: Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
    };
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const isDateInRange = (date: Date, startDate: string, endDate: string) => {
    const current = date.toISOString().split('T')[0];
    return current >= startDate && current <= endDate;
  };

  const isStartDate = (date: Date, startDate: string) => {
    return date.toISOString().split('T')[0] === startDate;
  };

  const isEndDate = (date: Date, endDate: string) => {
    return date.toISOString().split('T')[0] === endDate;
  };

  const getEventForDate = (date: Date): Event[] => {
    return events.filter(event => 
      isDateInRange(date, event.startDate, event.endDate)
    );
  };

  const getEventStyles = (color: string, isStart: boolean, isEnd: boolean, isMiddle: boolean) => {
    const baseClasses = `bg-${color}-500/20 group-hover:bg-${color}-500/30 border border-${color}-500/50 transition-all duration-200`;
    
    if (isStart && !isEnd) {
      return {
        container: `${baseClasses} absolute inset-2 rounded-l-full`,
        text: `relative z-10 font-medium text-sm text-${color}-200 group-hover:text-${color}-100`,
      };
    } else if (!isStart && isEnd) {
      return {
        container: `${baseClasses} absolute inset-2 rounded-r-full`,
        text: `relative z-10 font-medium text-sm text-${color}-200 group-hover:text-${color}-100`,
      };
    } else if (isMiddle) {
      return {
        container: `${baseClasses} absolute inset-2`,
        text: `relative z-10 font-medium text-sm text-${color}-200 group-hover:text-${color}-100`,
      };
    } else {
      return {
        container: `${baseClasses} absolute inset-2 rounded-full`,
        text: `relative z-10 font-medium text-sm text-${color}-200 group-hover:text-${color}-100`,
      };
    }
  };

  const renderMonthDays = (monthDate: Date) => {
    const daysInMonth = getDaysInMonth(monthDate);
    const firstDay = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    return (
      <>
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const currentDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), i + 1);
          const events = getEventForDate(currentDate);
          const hasEvents = events.length > 0;

          if (hasEvents) {
            const event = events[0];
            const isStart = isStartDate(currentDate, event.startDate);
            const isEnd = isEndDate(currentDate, event.endDate);
            const isMiddle = !isStart && !isEnd;
            const styles = getEventStyles(event.color, isStart, isEnd, isMiddle);

            return (
              <div
                key={i + 1}
                className="aspect-square relative group"
              >
                <div className={`absolute inset-0 flex items-center justify-center cursor-pointer`}>
                  <div className={styles.container} />
                  <span className={styles.text}>
                    {i + 1}
                  </span>
                </div>
                {events.length > 1 && (
                  <div className={`absolute -top-1 -right-1 w-4 h-4 bg-${event.color}-500/30 rounded-full text-xs flex items-center justify-center border border-${event.color}-500/50 text-${event.color}-200`}>
                    {events.length}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              key={i + 1}
              className="aspect-square relative group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative z-10 font-medium text-sm text-gray-300">
                  {i + 1}
                </span>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const renderMonth = (monthDate: Date) => {
    return (
      <div key={monthDate.getMonth()} className="space-y-4">
        <div className="grid grid-cols-7 gap-4">
          {content.calendar.weekDays.map((day) => (
            <div key={day} className="text-center text-gray-400 font-medium">
              {day}
            </div>
          ))}
          {renderMonthDays(monthDate)}
        </div>
      </div>
    );
  };

  const renderQuarter = (date: Date) => {
    const { start } = getDaysInQuarter(date);
    const months = Array.from({ length: 3 }, (_, i) => 
      new Date(start.getFullYear(), start.getMonth() + i, 1)
    );

    return (
      <div className="grid grid-cols-3 gap-8">
        {months.map((month, index) => (
          <div key={index} className="space-y-4">
            <div className="text-center text-lg font-semibold text-gray-300">
              {month.toLocaleString('default', { month: 'long' })}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {content.calendar.weekDays.map((day) => (
                <div key={day} className="text-center text-gray-400 text-xs font-medium">
                  {day}
                </div>
              ))}
              {renderMonthDays(month)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {viewType === 'month' ? renderMonth(date) : renderQuarter(date)}
    </div>
  );
};