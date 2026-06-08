import { Search, Briefcase, FileText, PlaneTakeoff, Users, Home, ArrowLeft } from 'lucide-react';
import { events } from '../data';

const iconMap: Record<string, any> = {
  briefcase: Briefcase,
  file: FileText,
  plane: PlaneTakeoff,
  users: Users,
  home: Home
};

export default function EventListScreen({ onNavigate, category }: { onNavigate: (s: string, id?: string) => void, category?: string | null }) {
  const filteredEvents = category ? events.filter(e => e.category === category) : events;
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = [];
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="flex flex-col h-full bg-surface pb-24">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 sticky top-0 bg-surface z-20">
        {category ? (
          <button onClick={() => onNavigate('dashboard')} className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 -ml-2">
            <ArrowLeft size={24} />
          </button>
        ) : (
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border border-outline-variant/50 bg-surface-container-highest shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-lg font-bold text-primary tracking-tight">{category ? `${category} 事件` : 'TimeTrack'}</h1>
        <button className="p-2 text-on-surface -mr-2">
          <Search size={24} />
        </button>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-2 bg-surface">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
          <input 
            type="text" 
            placeholder="搜索事件..." 
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary transition-colors shadow-sm placeholder:text-on-surface-variant/60"
          />
        </div>
      </div>

      {/* List */}
      <div className="px-4 pb-6 mt-4">
        {Object.entries(groupedEvents).map(([date, dayEvents], groupIdx) => (
          <div key={date} className="mb-6">
            <h2 className="text-xs font-medium text-on-surface-variant mb-4">{date}</h2>
            <div className="flex flex-col gap-0 relative">
              {dayEvents.map((event, idx) => {
                const Icon = iconMap[event.icon] || Briefcase;
                const isLastInGroup = idx === dayEvents.length - 1;
                return (
                  <div key={event.id} className="flex group cursor-pointer" onClick={() => onNavigate('detail', event.id)}>
                    {/* Timeline Left */}
                    <div className="flex flex-col items-center mr-4 relative">
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center z-10 shrink-0">
                        <Icon size={22} className="text-on-primary-fixed-variant" />
                      </div>
                      {!isLastInGroup && (
                        <div className="w-px h-[calc(100%-1rem)] bg-outline-variant/60 absolute top-12" />
                      )}
                    </div>
                    {/* Card Right */}
                    <div className="flex-1 pb-6 relative -top-1">
                      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.03)] border border-surface-container-highest group-hover:shadow-[0px_4px_16px_rgba(0,0,0,0.06)] transition-shadow">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-base font-semibold text-on-surface">{event.title}</h3>
                          <span className="text-xs text-on-surface-variant font-medium mt-1">{event.time}</span>
                        </div>
                        <p className="text-sm text-secondary mt-1 leading-relaxed">{event.description}</p>
                        {event.category && (
                          <div className="mt-3 flex">
                            <span className="text-[11px] font-medium bg-primary-fixed/60 text-primary px-3 py-1 rounded-full">
                              {event.category}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
