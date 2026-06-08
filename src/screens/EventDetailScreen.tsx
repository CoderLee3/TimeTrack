import { ArrowLeft, Calendar, Clock, MapPin, Check } from 'lucide-react';
import { useState } from 'react';
import { events } from '../data';

export default function EventDetailScreen({ onNavigate, eventId }: { onNavigate: (s: string) => void, eventId?: string | null }) {
  const [shareChecked, setShareChecked] = useState(true);
  
  const foundEvent = events.find(e => e.id === eventId);
  const event = foundEvent ? {
    ...foundEvent,
    location: foundEvent.location || '默认地点',
    category: foundEvent.category || '未分类'
  } : {
    title: '项目同步会议',
    category: '工作',
    date: '2023年10月25日 (周三)',
    time: '14:00 - 15:00 (1小时)',
    location: '线上会议室 A',
    description: '讨论Q3产品路线图与开发进度'
  };

  return (
    <div className="flex flex-col h-full bg-surface relative min-h-screen">
      <header className="flex justify-between items-center px-3 py-3 sticky top-0 bg-surface z-20">
        <button onClick={() => onNavigate('list')} className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-primary">事件详情</h1>
        <div className="w-10"></div>
      </header>

      <div className="px-4 py-2 flex flex-col gap-4 pb-32">
        {/* Shared By */}
        <div className="flex items-center gap-4 bg-surface-container-lowest shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-highest rounded-2xl p-4">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
            alt="Avatar" 
            className="w-12 h-12 rounded-full object-cover border-2 border-surface-container-high"
          />
          <div>
            <p className="text-xs font-medium text-on-surface-variant mb-0.5">分享自</p>
            <p className="text-base font-semibold text-on-surface">张伟 (项目经理)</p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-surface-container-lowest shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-surface-container-highest rounded-2xl p-5 flex flex-col gap-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-[20px] font-semibold text-on-surface leading-tight mb-1">{event.title}</h2>
              <p className="text-[14px] text-secondary">{event.description}</p>
            </div>
             <span className="bg-primary-fixed text-primary-container text-xs font-medium px-3.5 py-1.5 rounded-full shrink-0">{event.category}</span>
          </div>
          
          <hr className="border-outline-variant/30" />
          
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3 text-on-surface">
              <Calendar className="text-secondary opacity-80" size={20} />
              <span className="text-[15px]">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface">
              <Clock className="text-secondary opacity-80" size={20} />
              <span className="text-[15px]">{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface">
              <MapPin className="text-secondary opacity-80" size={20} />
              <span className="text-[15px]">{event.location}</span>
            </div>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-between py-2 mt-2 px-1">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center">
              <input type="checkbox" checked={shareChecked} onChange={(e) => setShareChecked(e.target.checked)} className="peer sr-only" />
              <div className="w-[22px] h-[22px] border-2 border-on-surface-variant/30 rounded bg-surface flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all group-hover:border-primary">
                {shareChecked && <Check size={16} strokeWidth={3} className="text-white transition-opacity" />}
              </div>
            </div>
            <span className="text-[15px] font-medium text-on-surface">接受后公开分享</span>
          </label>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest p-4 flex gap-3 z-50 rounded-t-2xl pb-6 md:pb-4 border-t border-outline-variant/20 shadow-[0px_-4px_24px_rgba(0,0,0,0.06)] md:absolute max-w-md md:left-1/2 md:-translate-x-1/2">
        <button onClick={() => onNavigate('list')} className="flex-1 py-3 px-4 rounded-full border border-outline text-on-surface text-[15px] font-semibold hover:bg-surface-container-low transition-colors active:scale-[0.98]">
          拒绝
        </button>
        <button onClick={() => onNavigate('list')} className="flex-1 py-3 px-4 rounded-full bg-primary text-on-primary text-[15px] font-semibold hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98]">
          接受并添加
        </button>
      </div>
    </div>
  );
}
