
import React, { useState } from 'react';
import { 
  Zap, 
  Users, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Search,
  CheckCircle2,
  MoreVertical,
  Plus,
  Send,
  UserX
} from 'lucide-react';

const TrainerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'batches' | 'doubts'>('batches');

  const doubts = [
    { id: '1', student: 'Rohan Sharma', task: 'Kinematics-04', query: 'The inverse transformation logic failing at singularity...', timestamp: '10m ago' },
    { id: '2', student: 'Priya Das', task: 'IoT-Hub', query: 'MQTT broker connection timeout on NodeMCU.', timestamp: '1h ago' }
  ];

  const students = [
    { id: 'S-401', name: 'Ajay V', status: 'online', performance: '92%', lastTask: 'Success' },
    { id: 'S-402', name: 'Mira K', status: 'offline', performance: '78%', lastTask: 'Pending' },
    { id: 'S-403', name: 'Zayn R', status: 'online', performance: '85%', lastTask: 'Success' }
  ];

  return (
    <div className="space-y-10">
      {/* 1. Trainer Context Header */}
      <div className="bg-gradient-to-r from-[#0056b3] to-[#001a33] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div>
              <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Mentorship Hub</h1>
              <p className="text-blue-100/70 font-medium max-w-lg italic">
                Overseeing <span className="text-white font-black">2 Active Batches</span> and <span className="text-[#ff9800] font-black">45 Students</span>. 
                2 queries require resolution in the Doubt Protocol.
              </p>
           </div>
           <div className="flex gap-4">
              <button className="bg-[#ff9800] text-[#001a33] px-10 py-5 rounded-[1.5rem] font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-3">
                 <Plus size={18} /> Deploy New Task
              </button>
           </div>
        </div>
      </div>

      {/* 2. Operational Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Student Presence & Tracking */}
        <div className="lg:col-span-2 space-y-10">
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                 <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter flex items-center gap-3">
                    <Users className="text-[#0056b3]" /> Live Student Grid
                 </h3>
                 <div className="flex bg-gray-50 rounded-xl px-4 py-2 border border-gray-100 items-center">
                    <Search size={16} className="text-gray-400 mr-3" />
                    <input type="text" placeholder="Locate student..." className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest outline-none" />
                 </div>
              </div>
              <div className="space-y-4">
                 {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-blue-100 transition-all">
                       <div className="flex items-center gap-6">
                          <div className="relative">
                             <div className="w-14 h-14 bg-[#001a33] text-white rounded-2xl flex items-center justify-center font-black text-xs uppercase">{student.name[0]}</div>
                             <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${student.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                          </div>
                          <div>
                             <h4 className="font-black text-[#001a33] uppercase tracking-tight">{student.name}</h4>
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ID: {student.id}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-12 text-center">
                          <div>
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Performance</p>
                             <p className="text-sm font-black text-[#001a33]">{student.performance}</p>
                          </div>
                          <div>
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                             <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${student.lastTask === 'Success' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-[#ff9800]'}`}>
                                {student.lastTask}
                             </span>
                          </div>
                          <button className="text-gray-400 hover:text-[#001a33] p-2">
                             <MoreVertical size={20} />
                          </button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Doubt Resolution Protocol */}
        <div className="space-y-10">
           <div className="bg-[#001a33] p-10 rounded-[3rem] text-white shadow-xl">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                 <MessageSquare className="text-[#ff9800]" /> Doubt Protocol
              </h3>
              <div className="space-y-6">
                 {doubts.map((doubt) => (
                    <div key={doubt.id} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group">
                       <div className="flex justify-between items-start mb-4">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{doubt.timestamp}</p>
                          <span className="bg-[#ff9800]/20 text-[#ff9800] px-2 py-1 rounded-md text-[8px] font-black uppercase">Open</span>
                       </div>
                       <h4 className="font-black text-white uppercase tracking-tight mb-2">{doubt.student}</h4>
                       <p className="text-[10px] text-[#ff9800] font-black uppercase tracking-widest mb-4">Task: {doubt.task}</p>
                       <p className="text-xs text-blue-100/50 italic mb-6 line-clamp-2">"{doubt.query}"</p>
                       <button className="w-full bg-white text-[#001a33] py-3 rounded-xl font-black uppercase tracking-widest text-[9px] flex items-center justify-center gap-2 group-hover:bg-[#ff9800] transition-colors">
                          Initiate Solution <Send size={12} />
                       </button>
                    </div>
                 ))}
              </div>
           </div>

           {/* Quick Actions / Attendance Status */}
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-[#0056b3]" /> Presence Monitor
              </h3>
              <div className="space-y-6">
                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       <p className="text-xs font-black uppercase tracking-widest text-[#001a33]">Present Today</p>
                    </div>
                    <span className="font-black text-[#001a33]">42</span>
                 </div>
                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <p className="text-xs font-black uppercase tracking-widest text-[#001a33]">Absent Today</p>
                    </div>
                    <span className="font-black text-[#001a33]">03</span>
                 </div>
                 <button className="w-full mt-4 py-4 bg-[#001a33] text-white rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-[#ff9800] transition-all">Mark Roll Protocol</button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default TrainerDashboard;
