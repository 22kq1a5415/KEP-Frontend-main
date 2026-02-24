
import React, { useState } from 'react';
import { X, Mail, Lock, User, ShieldCheck, ChevronRight, UserCheck, Briefcase, Zap, ShieldAlert } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
  const { login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email || 'guest@example.com', role);
    onClose();
  };

  const roleIcons = {
    [UserRole.STUDENT]: <User size={16} />,
    [UserRole.TRAINER]: <Zap size={16} />,
    [UserRole.HR]: <Briefcase size={16} />,
    [UserRole.ADMIN]: <ShieldAlert size={16} />,
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-xl rounded-[3rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors z-10">
          <X size={28} />
        </button>
        
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side Branding */}
          <div className="md:w-1/3 bg-[#001a33] p-10 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-16 h-12 bg-[#ff9800] rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-xl text-[#001a33]">KEP</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">Access <br/><span className="text-[#ff9800]">Portal.</span></h3>
             </div>
             <div className="relative z-10 mt-10">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50 mb-4">Authorized Roles</p>
                <div className="space-y-2">
                   {Object.values(UserRole).map((r) => (
                      <div key={r} className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest ${role === r ? 'text-[#ff9800]' : 'text-white/30'}`}>
                         <div className={`w-1.5 h-1.5 rounded-full ${role === r ? 'bg-[#ff9800] animate-pulse' : 'bg-white/10'}`}></div>
                         {r}
                      </div>
                   ))}
                </div>
             </div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ff9800]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-2/3 p-10 md:p-14">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-[#001a33] uppercase tracking-tighter mb-2">
                {isLogin ? 'Initiate Access' : 'Create Account'}
              </h2>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Select your designated authority level</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.values(UserRole).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex items-center justify-center gap-3 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border-2 transition-all ${role === r ? 'border-[#ff9800] bg-orange-50 text-[#ff9800] shadow-lg scale-[1.02]' : 'border-gray-50 text-gray-400 hover:border-gray-200'}`}
                  >
                    {roleIcons[r]}
                    {r}
                  </button>
                ))}
              </div>

              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff9800] transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="AUTHORIZATION EMAIL" 
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-[1.5rem] border-none focus:ring-2 focus:ring-[#ff9800] text-sm font-bold uppercase tracking-wider outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff9800] transition-colors" size={20} />
                <input 
                  type="password" 
                  placeholder="SECURITY KEY" 
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-[1.5rem] border-none focus:ring-2 focus:ring-[#ff9800] text-sm font-bold uppercase tracking-wider outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="w-full bg-[#001a33] text-white py-6 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-xs shadow-xl hover:bg-[#ff9800] transition-all flex items-center justify-center gap-4 group">
                {isLogin ? 'Establish Handshake' : 'Initialize Protocol'} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-10 text-center">
              <button onClick={() => setIsLogin(!isLogin)} className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-[#0056b3] transition-colors">
                {isLogin ? 'New User? Initialize Account' : 'Existing User? Sign In'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
