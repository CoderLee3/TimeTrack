import { LayoutGrid, ListTodo, PlusCircle } from 'lucide-react';
import { ScreenType } from '../App';

export default function BottomNav({ currentScreen, onNavigate }: { currentScreen: ScreenType, onNavigate: (s: ScreenType) => void }) {
  return (
    <div className="absolute bottom-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 flex justify-around items-center px-2 py-2 pb-6 md:pb-2 z-50 shadow-[0px_-4px_16px_rgba(0,0,0,0.03)]">
      <button 
        onClick={() => onNavigate('dashboard')}
        className={`flex flex-col items-center p-2 transition-colors relative ${currentScreen === 'dashboard' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
      >
        {currentScreen === 'dashboard' && <div className="absolute top-1 w-12 h-8 bg-primary-fixed rounded-full -z-10"></div>}
        <LayoutGrid size={24} strokeWidth={2} className={currentScreen === 'dashboard' ? 'text-on-primary-fixed-variant' : ''} />
        <span className="text-[10px] mt-1 font-medium">仪表盘</span>
      </button>
      <button 
        onClick={() => onNavigate('list')}
        className={`flex flex-col items-center p-2 transition-colors relative ${currentScreen === 'list' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
      >
        {currentScreen === 'list' && <div className="absolute top-1 w-12 h-8 bg-primary-fixed rounded-full -z-10"></div>}
        <ListTodo size={24} strokeWidth={2} className={currentScreen === 'list' ? 'text-on-primary-fixed-variant' : ''} />
        <span className="text-[10px] mt-1 font-medium">事件</span>
      </button>
      <button 
        onClick={() => onNavigate('add')}
        className={`flex flex-col items-center p-2 transition-colors relative ${currentScreen === 'add' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
      >
         {currentScreen === 'add' && <div className="absolute top-1 w-12 h-8 bg-primary-fixed rounded-full -z-10"></div>}
        <PlusCircle size={24} strokeWidth={2} className={currentScreen === 'add' ? 'text-on-primary-fixed-variant' : ''} />
        <span className="text-[10px] mt-1 font-medium">添加</span>
      </button>
    </div>
  );
}
