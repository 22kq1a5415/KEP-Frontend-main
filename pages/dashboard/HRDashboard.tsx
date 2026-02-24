
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  Users, 
  MessageSquare, 
  HelpCircle,
  FileText,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Clock,
  ExternalLink,
  Navigation,
  ArrowRight,
  Handshake,
  AlertCircle
} from 'lucide-react';

const HRDashboard: React.FC = () => {
  const leaveRequests = [
    { id: '1', user: 'Trainer Mike', role: 'TRAINER', reason: 'Medical Checkup', duration: '2 Days', date: '2024-04-10' },
    { id: '2', user: 'S-401 Ajay', role: 'STUDENT', reason: 'University Exam', duration: '3 Days', date: '2024-04-12' }
  ];

  const enquiries = [
    { id: 'E-01', from: 'Gitam University', type: 'Partnership', message: 'Interested in CoE Hub setup...', date: '2h ago' },
    { id: 'E-02', from: 'Kalyan R', type: 'General', message: 'LMS account approval pending.', date: '5h ago' }
  ];

  const taskUpdates = [
    { id: 'T1', batch: 'Robotics-A', progress: '85%', status: 'On Track' },
    { id: 'T2', batch: 'IoT-Hub-01', progress: '42%', status: 'At Risk' }
  ];

  return (
    <div className="space-y-10">
      {/* 1. Header Protocol */}
      <div className="bg-[#001a33] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div>
              <div className="flex items-center gap-3 mb-4">
                 <Navigation size={18} className="text-[#ff9800]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Liaison Operations Center</span>
              </div>
              <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Personnel & <span className="text-[#ff9800]">Partner HQ.</span></h1>
              <p className="text-blue-100/60 font-medium max-w-xl">
                Supervising leave protocols for staff and tracking high-priority institutional collaborations.
              </p>
           </div>
           <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-center space-x-10">
              <div className="text-center">
                 <p className="text-[10px] font-black text-[#ff9800] uppercase tracking-widest mb-2">Leave Queue</p>
                 <p className="text-3xl font-black text-white">{leaveRequests.length}</p>
              </div>
              <div className="w-[1px] h-12 bg-white/10"></div>
              <div className="text-center">
                 <p className="text-[10px] font-black text-[#ff9800] uppercase tracking-widest mb-2">Partnerships</p>
                 <p className="text-3xl font-black text-white">12</p>
              </div>
           </div>
        </div>
      </div>

      {/* 2. Operational Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Leave & Task Monitoring */}
        <div className="lg:col-span-2 space-y-10">
           
           {/* Leave Approvals */}
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                 <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter flex items-center gap-3">
                    <ShieldCheck className="text-[#0056b3]" /> Leave Management
                 </h3>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full">System Protocol</span>
              </div>
              <div className="space-y-4">
                 {leaveRequests.map((req) => (
                    <div key={req.id} className="p-6 bg-gray-50 rounded-[2rem] border border-transparent hover:border-blue-100 transition-all flex flex-col md:flex-row justify-between items-center gap-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#001a33] text-white rounded-xl flex items-center justify-center font-black text-xs uppercase">{req.user[0]}</div>
                          <div>
                             <h4 className="font-black text-[#001a33] uppercase tracking-tight">{req.user}</h4>
                             <p className="text-[9px] font-black text-[#ff9800] uppercase tracking-widest">{req.role}</p>
                          </div>
                       </div>
                       <p className="text-xs text-gray-500 font-bold italic truncate flex-1">"{req.reason}"</p>
                       <div className="flex items-center gap-3">
                          <button className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-600 transition-all"><CheckCircle2 size={18} /></button>
                          <button className="bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition-all"><XCircle size={18} /></button>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Task Progress Tracking (HR View) */}
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                 <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter flex items-center gap-3">
                    <TrendingUp className="text-green-600" /> Task Propagation Monitor
                 </h3>
                 <button className="text-[10px] font-black text-[#0056b3] uppercase tracking-widest hover:underline">Full Analytics</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {taskUpdates.map((task) => (
                    <div key={task.id} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 relative group overflow-hidden">
                       <div className="relative z-10">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{task.id} • Batch Pulse</p>
                          <h4 className="text-2xl font-black text-[#001a33] uppercase mb-6">{task.batch}</h4>
                          <div className="flex justify-between items-end">
                             <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                <span className={`px-2 py-1 rounded text-[8px] font-black uppercase ${task.status === 'On Track' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{task.status}</span>
                             </div>
                             <div className="text-right">
                                <p className="text-3xl font-black text-[#001a33]">{task.progress}</p>
                             </div>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-6 overflow-hidden">
                             <div className={`h-full ${task.status === 'On Track' ? 'bg-[#0056b3]' : 'bg-red-500'}`} style={{ width: task.progress }}></div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Column: Enquiries & Financials */}
        <div className="space-y-10">
           
           {/* Partnership Enquiries Desk */}
           <div className="bg-[#001a33] p-10 rounded-[3rem] text-white shadow-xl">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                 <Handshake className="text-[#ff9800]" /> Collaborations
              </h3>
              <div className="space-y-6">
                 {enquiries.map((enq) => (
                    <div key={enq.id} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group">
                       <div className="flex justify-between items-start mb-4">
                          <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${enq.type === 'Partnership' ? 'bg-[#ff9800]/20 text-[#ff9800]' : 'bg-gray-500/20 text-gray-400'}`}>
                             {enq.type}
                          </span>
                          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{enq.date}</p>
                       </div>
                       <h4 className="text-lg font-black uppercase tracking-tight mb-2">{enq.from}</h4>
                       <p className="text-xs text-blue-100/50 italic mb-6 line-clamp-2">"{enq.message}"</p>
                       <button className="w-full bg-[#ff9800] text-[#001a33] py-4 rounded-xl font-black uppercase tracking-widest text-[9px] hover:scale-105 transition-all">Engage Partner</button>
                    </div>
                 ))}
              </div>
           </div>

           {/* Site User Queries (Real-time Feed) */}
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter mb-8 flex items-center gap-3">
                 <AlertCircle className="text-[#0056b3]" /> Site Queries
              </h3>
              <div className="space-y-6">
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#ff9800] mt-2 animate-pulse"></div>
                    <div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Institutional Lead</p>
                       <p className="text-xs font-bold text-[#001a33]">Proposal request from KV Delhi.</p>
                       <p className="text-[8px] font-black text-blue-600 mt-2">Relay to Admin</p>
                    </div>
                 </div>
                 <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-4 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
                    <div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Registration Query</p>
                       <p className="text-xs font-bold text-[#001a33]">Student unable to verify email.</p>
                    </div>
                 </div>
                 <button className="w-full bg-[#001a33] text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#ff9800] transition-all">Audit All Queries</button>
              </div>
           </div>

           {/* Payment Dues Control */}
           <div className="bg-indigo-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                 <CreditCard className="text-[#ff9800]" /> Financial Pulse
              </h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span>Overdue Settlements</span>
                    <span className="text-red-400">₹85,000</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span>Recovery Pending</span>
                    <span className="text-white">14 Students</span>
                 </div>
                 <button className="w-full mt-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">Generate Ledger Report</button>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default HRDashboard;
