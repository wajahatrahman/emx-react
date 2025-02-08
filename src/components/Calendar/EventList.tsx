import React from 'react';
import content from '../../data/content.json';
import type { Event, ViewType } from '../../types';

interface EventListProps {
  events: Event[];
  viewType: ViewType;
  currentDate: Date;
}

export const EventList: React.FC<EventListProps> = ({ events, viewType, currentDate }) => {
  const filteredEvents = events.filter(event => {
    const eventStart = new Date(event.startDate);
    const eventEnd = new Date(event.endDate);
    const viewStart = viewType === 'month'
      ? new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
      : new Date(currentDate.getFullYear(), Math.floor(currentDate.getMonth() / 3) * 3, 1);
    const viewEnd = viewType === 'month'
      ? new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
      : new Date(currentDate.getFullYear(), Math.floor(currentDate.getMonth() / 3) * 3 + 3, 0);
    return eventStart <= viewEnd && eventEnd >= viewStart;
  });

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    };

    if (startDate === endDate) {
      return formatDate(start);
    }
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  const getEventStyles = (color: string) => ({
    container: `bg-${color}-900/20 rounded-xl p-4 hover:bg-${color}-900/30 transition-colors cursor-pointer border border-${color}-500/20`,
    date: `inline-block px-3 py-1 rounded-full text-xs bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 mt-2`
  });

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-red-400">{content.calendar.eventList.title}</h3>
        <div className="bg-black/30 px-4 py-1 rounded-full text-sm text-yellow-300 border border-yellow-300/20">
          {content.calendar.viewOptions[viewType]}
        </div>
      </div>
      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <p className="text-gray-400 text-center py-4">{content.calendar.eventList.emptyState}</p>
        ) : (
          filteredEvents.map(event => {
            const styles = getEventStyles(event.color);
            return (
              <div key={event.id} className={styles.container}>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-white">{event.title}</h4>
                    <p className="text-sm text-gray-400">{event.description}</p>
                    <div className={styles.date}>
                      {formatDateRange(event.startDate, event.endDate)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};