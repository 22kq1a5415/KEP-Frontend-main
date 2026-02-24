
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added missing MessageSquare import
import { 
  ClipboardList, 
  HelpCircle, 
  MessageSquare,
  Send, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Radio,
  Calendar,
  Zap,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'leave' | 'doubts'>('overview');
  
  const performanceData = [
    { name: 'Mon', score: 65 }, { name: 'Tue', score: 72 }, { name: 'Wed', score: 68 },
    { name: 'Thu', score: 85 }, { name: 'Fri', score: 90 }, { name: 'Sat', score: 88 }
  ];

  const tasks = [
    { id: '1', title: 'Robotics Kinematics', status: 'pending', trainer: 'Dr. Sarah', due: '2024-04-12' },
    { id: '2', title: 'IoT Prototype Design', status: 'completed', trainer: 'Prof. Mike', due: '2024-04-10' }
  ];

  return (
    <div className="space-y-10">
      {/* 1. Header Protocol */}
      <div className="bg-[#001a33] p-12 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff9800]">System Protocol Active</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
              Welcome Back, <span className="text-[#ff9800]">{user?.name}</span>
            </h1>
            <p className="text-blue-100/60 font-medium max-w-xl">
              Currently connected to <span className="text-white font-bold">Mainframe Node-04</span>. 
              You have 2 pending tasks requiring immediate attention.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex items-center space-x-6">
            <div className="text-center px-4 border-r border-white/10">
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Performance</p>
               <p className="text-3xl font-black text-[#ff9800]">{user?.performance}%</p>
            </div>
            <div className="text-center px-4">
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Live Status</p>
               <div className="flex items-center space-x-2">
                 <Radio size={18} className="text-green-500" />
                 <span className="text-lg font-black uppercase tracking-tighter">Active</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Unified Interface Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: Activity & Performance */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Performance Chart */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
             <div className="flex items-center justify-between mb-10">
               <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter flex items-center gap-3">
                 <TrendingUp className="text-[#0056b3]" /> Skill Progression
               </h3>
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full">Weekly Audit</span>
             </div>
             <div className="h-72">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={performanceData}>
                   <defs>
                     <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#0056b3" stopOpacity={0.2}/>
                       <stop offset="95%" stopColor="#0056b3" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                   <Tooltip />
                   <Area type="monotone" dataKey="score" stroke="#0056b3" strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>
          </div>

          {/* Pending Tasks Section */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter flex items-center gap-3">
                 <ClipboardList className="text-[#ff9800]" /> Assigned Tasks
               </h3>
               <button className="text-[10px] font-black text-[#0056b3] uppercase tracking-widest hover:underline">View All</button>
             </div>
             <div className="space-y-4">
               {tasks.map((task) => (
                 <div key={task.id} className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center justify-between hover:border-[#ff9800]/30 transition-all group">
                    <div className="flex items-center space-x-6">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${task.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-[#ff9800]'}`}>
                          {task.status === 'completed' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                       </div>
                       <div>
                          <h4 className="font-black text-[#001a33] uppercase tracking-tight">{task.title}</h4>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Mentor: {task.trainer}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <button className="bg-white p-3 rounded-xl border border-gray-200 text-gray-400 hover:text-[#0056b3] hover:border-[#0056b3] transition-all">
                          <HelpCircle size={18} />
                       </button>
                       <div className="text-right">
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Due Date</p>
                          <p className="text-sm font-black text-[#001a33]">{task.due}</p>
                       </div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Action Desk */}
        <div className="space-y-10">
           
           {/* Raise Doubt Panel */}
           <div className="bg-[#001a33] p-10 rounded-[3rem] text-white shadow-xl">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                 <MessageSquare className="text-[#ff9800]" /> Mentorship Link
              </h3>
              <p className="text-blue-100/50 text-[10px] font-black uppercase tracking-widest mb-6">Ask or raise a doubt about current task</p>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:ring-2 focus:ring-[#ff9800] outline-none min-h-[120px] placeholder:text-gray-600 mb-6"
                placeholder="Describe your technical bottleneck..."
              ></textarea>
              <button className="w-full bg-[#ff9800] text-[#001a33] py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:scale-105 transition-all">
                Dispatch Query <Send size={14} />
              </button>
           </div>

           {/* Leave Application Panel */}
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter mb-6 flex items-center gap-3">
                 <Calendar className="text-[#0056b3]" /> Absence Protocol
              </h3>
              <form className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Reason for Absence</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm font-bold" placeholder="Medical / Personal" />
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Start</label>
                       <input type="date" className="w-full bg-gray-50 border-none rounded-xl p-4 text-xs font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">End</label>
                       <input type="date" className="w-full bg-gray-50 border-none rounded-xl p-4 text-xs font-bold" />
                    </div>
                 </div>
                 <button type="button" className="w-full border-2 border-[#0056b3] text-[#0056b3] py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#0056b3] hover:text-white transition-all">
                   Submit Request
                 </button>
              </form>
           </div>

           {/* Notifications Feed */}
           <div className="bg-[#fffcf5] p-8 rounded-[3rem] border border-orange-100">
              <h4 className="text-[10px] font-black text-[#ff9800] uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                <AlertCircle size={14} /> Protocol Feed
              </h4>
              <div className="space-y-4">
                 <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#ff9800] mt-1 shrink-0"></div>
                    <p className="text-[11px] font-bold text-gray-600">Your leave request for <span className="text-[#001a33]">2024-04-15</span> has been <span className="text-green-600 font-black">APPROVED</span> by HR.</p>
                 </div>
                 <div className="flex items-start gap-4 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mt-1 shrink-0"></div>
                    <p className="text-[11px] font-bold text-gray-600">New curriculum module added to <span className="text-[#001a33]">Robotics lab</span>.</p>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
