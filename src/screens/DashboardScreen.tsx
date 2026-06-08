import { Search, TrendingUp, Briefcase, Home } from 'lucide-react';

export default function DashboardScreen({ onNavigate }: { onNavigate: (screen: string, id?: string) => void }) {
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
      
      <div className="px-4 py-2 mt-2 flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-on-surface mb-1.5 tracking-tight">你好，用户！</h1>
          <p className="text-[15px] text-on-surface-variant font-medium">准备好记录你的一天了吗？</p>
        </div>
        
        {/* Weekly Progress Card */}
        <div className="bg-surface-container-lowest border border-surface-container-highest shadow-[0px_4px_16px_rgba(0,0,0,0.03)] rounded-3xl p-5 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
             <h2 className="text-[18px] font-bold text-on-surface">本周</h2>
             <div className="flex items-center gap-1 bg-primary-fixed/60 text-primary px-2.5 py-1 rounded-full">
               <TrendingUp size={14} strokeWidth={2.5} />
               <span className="text-[13px] font-bold">+12%</span>
             </div>
          </div>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-[40px] font-bold text-primary leading-none tracking-tight">42</span>
            <span className="text-[14px] text-on-surface-variant font-medium">个已记录事件</span>
          </div>
          
          <div>
             <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden mb-2">
               <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
             </div>
             <div className="text-right text-[12px] font-medium text-on-surface-variant">
               目标： 60 个事件
             </div>
          </div>
        </div>
        
        {/* Categories Grid */}
        <div>
          <h3 className="text-[18px] font-bold text-on-surface mb-3">分类</h3>
          <div className="grid grid-cols-2 gap-3">
             {/* Work */}
             <div onClick={() => onNavigate('list', '工作')} className="bg-surface-container-lowest border border-surface-container-highest shadow-sm rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:bg-surface-container-high transition-colors">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                 <Briefcase size={20} className="text-blue-600" />
               </div>
               <div>
                 <p className="text-[15px] font-semibold text-on-surface mb-0.5">工作</p>
                 <p className="text-[13px] text-on-surface-variant">18 个事件</p>
               </div>
             </div>
             
             {/* Life */}
             <div onClick={() => onNavigate('list', '生活')} className="bg-surface-container-lowest border border-surface-container-highest shadow-sm rounded-2xl p-4 flex flex-col gap-3 cursor-pointer hover:bg-surface-container-high transition-colors">
               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                 <Home size={20} className="text-slate-600" />
               </div>
               <div>
                 <p className="text-[15px] font-semibold text-on-surface mb-0.5">生活</p>
                 <p className="text-[13px] text-on-surface-variant">12 个事件</p>
               </div>
             </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div>
          <div className="flex justify-between items-end mb-3">
             <h3 className="text-[18px] font-bold text-on-surface">最近活动</h3>
             <button className="text-[13px] font-semibold text-primary hover:underline">查看全部</button>
          </div>
          
          <div className="bg-surface-container-lowest border border-surface-container-highest shadow-[0px_4px_16px_rgba(0,0,0,0.02)] rounded-3xl p-5 py-6">
            <div className="flex flex-col relative">
              {/* Timeline Line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-surface-container-highest"></div>
              
              {/* Event 1 */}
              <div className="flex items-start gap-4 mb-6 relative">
                 <div className="w-[12px] h-[12px] rounded-full bg-primary relative z-10 mt-1.5 shrink-0 border-2 border-surface-container-lowest"></div>
                 <div className="flex-1 flex justify-between items-start">
                   <div>
                     <h4 className="text-[15px] font-bold text-on-surface mb-0.5">团队站会</h4>
                     <p className="text-[13px] text-on-surface-variant font-medium">工作 • 30m</p>
                   </div>
                   <span className="text-[13px] text-on-surface-variant font-medium">10:00 AM</span>
                 </div>
              </div>
              
              {/* Event 2 */}
              <div className="flex items-start gap-4 mb-6 relative">
                 <div className="w-[12px] h-[12px] rounded-full bg-primary relative z-10 mt-1.5 shrink-0 border-2 border-surface-container-lowest"></div>
                 <div className="flex-1 flex justify-between items-start">
                   <div>
                     <h4 className="text-[15px] font-bold text-on-surface mb-0.5">晨跑</h4>
                     <p className="text-[13px] text-on-surface-variant font-medium">健康 • 45m</p>
                   </div>
                   <span className="text-[13px] text-on-surface-variant font-medium">7:30 AM</span>
                 </div>
              </div>
              
              {/* Event 3 */}
              <div className="flex items-start gap-4 relative">
                 <div className="w-[12px] h-[12px] rounded-full bg-primary relative z-10 mt-1.5 shrink-0 border-2 border-surface-container-lowest"></div>
                 <div className="flex-1 flex justify-between items-start">
                   <div>
                     <h4 className="text-[15px] font-bold text-on-surface mb-0.5">超市购物</h4>
                     <p className="text-[13px] text-on-surface-variant font-medium">生活 • 1h</p>
                   </div>
                   <span className="text-[13px] text-on-surface-variant font-medium">昨天</span>
                 </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
