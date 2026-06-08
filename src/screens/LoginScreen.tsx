import { Clock, User, Lock, Mail } from 'lucide-react';
import { useState } from 'react';

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex flex-col h-full bg-surface items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm bg-surface-container-lowest shadow-[0px_8px_24px_rgba(0,0,0,0.08)] rounded-[32px] p-8 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Clock size={40} className="text-primary" strokeWidth={2.5} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-on-surface mb-2">欢迎回来</h1>
        <p className="text-[14px] text-on-surface-variant mb-8 text-center">登录以继续记录您的精彩时光</p>

        {/* Form */}
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email/Username field */}
          <div>
            <label className="block text-[13px] font-medium text-on-surface mb-2">电子邮箱 / 用户名</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入您的邮箱或用户名" 
                className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl pl-11 pr-4 py-3.5 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-outline/70"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label className="block text-[13px] font-medium text-on-surface mb-2">密码</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="输入您的密码" 
                className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl pl-11 pr-4 py-3.5 text-[15px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-outline/70"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button type="button" className="text-[13px] font-semibold text-primary hover:underline">
              忘记密码?
            </button>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full py-3.5 mt-2 rounded-xl bg-primary text-on-primary text-[16px] font-bold hover:bg-primary-container transition-colors shadow-sm active:scale-[0.98]"
          >
            登录
          </button>
        </form>

        {/* Divider */}
        <div className="w-full flex items-center gap-3 my-6">
          <div className="h-px bg-outline-variant/40 flex-1"></div>
          <span className="text-[12px] text-on-surface-variant font-medium">或者使用以下方式登录</span>
          <div className="h-px bg-outline-variant/40 flex-1"></div>
        </div>

        {/* Third-party Login */}
        <div className="w-full mb-8">
          <button 
            type="button" 
            onClick={() => onLogin()}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-outline-variant/60 text-on-surface font-semibold hover:bg-surface-container-low transition-colors"
          >
            <Mail size={18} className="text-blue-500" />
            <span>QQ邮箱登录</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-[14px] text-on-surface-variant">
          还没有账号？ <button type="button" className="text-primary font-bold hover:underline">立即注册</button>
        </div>
      </div>
    </div>
  );
}
