import { ArrowLeft, Search, Camera, Briefcase, Home, Save } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 'work', label: '工作', icon: Briefcase },
  { id: 'life', label: '生活', icon: Home },
];

export default function AddEventScreen({ onNavigate }: { onNavigate: (s: string) => void }) {
  const [selectedCat, setSelectedCat] = useState('work');

  const todayStr = new Date().toISOString().split('T')[0];
  const getCurrentTimeStr = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState(getCurrentTimeStr());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (newDate === todayStr && time < getCurrentTimeStr()) {
      setTime(getCurrentTimeStr());
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newTime = e.target.value;
    if (date === todayStr && newTime < getCurrentTimeStr()) {
      newTime = getCurrentTimeStr();
    }
    setTime(newTime);
  };

  return (
    <div className="flex flex-col h-full bg-surface pb-32">
      <header className="flex justify-between items-center px-4 py-3 sticky top-0 bg-surface z-20 overflow-hidden">
        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border border-outline-variant/50 bg-surface-container-highest shrink-0">
           <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
            alt="Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-lg font-bold text-primary tracking-tight">TimeTrack</h1>
        <button className="p-2 text-on-surface shrink-0">
          <Search size={24} />
        </button>
      </header>

      <div className="px-4 py-2 mt-4">
        <h1 className="text-3xl font-bold text-on-surface mb-2 tracking-tight">记录事件</h1>
        <p className="text-[15px] text-on-surface-variant mb-6">快速高效地记录新活动。</p>

        <div className="bg-surface-container-lowest border border-surface-container-highest shadow-[0px_4px_16px_rgba(0,0,0,0.03)] rounded-3xl p-5 flex flex-col gap-6 relative z-10">
          
          {/* Title Input */}
          <div>
            <label className="block text-[13px] font-medium text-on-surface-variant mb-2">事件标题</label>
            <input 
              type="text" 
              placeholder="例如：客户会议" 
              className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-outline/70"
            />
          </div>

          {/* Categories */}
          <div>
             <label className="block text-[13px] font-medium text-on-surface-variant mb-2">分类</label>
             <div className="flex gap-2.5 overflow-x-auto pb-2 no-scrollbar -mx-1 px-1">
               {categories.map(c => {
                 const isSelected = selectedCat === c.id;
                 const Icon = c.icon;
                 return (
                   <button 
                    key={c.id} 
                    onClick={() => setSelectedCat(c.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full shrink-0 border transition-all ${
                      isSelected 
                        ? 'bg-primary border-primary text-white shadow-md shadow-primary/20' 
                        : 'bg-surface-container-lowest border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                   >
                     <Icon size={16} />
                     <span className="text-sm font-medium">{c.label}</span>
                   </button>
                 )
               })}
             </div>
          </div>

          {/* Date & Time */}
          <div className="flex gap-3">
             <div className="flex-1">
               <label className="block text-[13px] font-medium text-on-surface-variant mb-2">日期</label>
               <input 
                  type="date" 
                  value={date}
                  min={todayStr}
                  onChange={handleDateChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-3 py-3.5 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface"
                />
             </div>
             <div className="flex-1">
               <label className="block text-[13px] font-medium text-on-surface-variant mb-2">时间</label>
               <input 
                  type="time" 
                  value={time}
                  min={date === todayStr ? getCurrentTimeStr() : undefined}
                  onChange={handleTimeChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-3 py-3.5 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-on-surface"
                />
             </div>
          </div>

          {/* Notes */}
          <div>
             <label className="block text-[13px] font-medium text-on-surface-variant mb-2">备注</label>
             <textarea 
               rows={3}
               placeholder="为这条记录添加备注..."
               className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface placeholder:text-outline/70 resize-none"
             ></textarea>
          </div>

          {/* Add Photo */}
          <button className="w-full border-2 border-dashed border-outline-variant/60 rounded-2xl py-4 flex flex-col items-center justify-center gap-2 text-on-surface hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
            <Camera size={22} className="text-secondary" />
            <span className="text-[13px] font-medium text-on-surface-variant">添加照片</span>
          </button>
        </div>
      </div>

       <div className="fixed bottom-[88px] left-0 w-full px-4 z-40 md:absolute max-w-md md:left-1/2 md:-translate-x-1/2">
          <button onClick={() => onNavigate('list')} className="w-full py-4 rounded-full bg-primary text-on-primary text-[16px] font-semibold hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98]">
            <Save size={20} />
            保存事件
          </button>
       </div>
    </div>
  );
}
