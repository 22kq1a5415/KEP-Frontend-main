
import React, { useState } from 'react';
import { 
  Search, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  UserPlus, 
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  ArrowRight,
  User as UserIcon,
  Zap,
  Briefcase
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';

const AdminDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for role search results
  const allUsers = [
    { id: 'S-101', name: 'Vikram Singh', role: UserRole.STUDENT, status: 'online', performance: 88, payment: 'PRE', dueDate: '2024-05-10', taskStatus: '2 Pending' },
    { id: 'T-204', name: 'Dr. Sarah Smith', role: UserRole.TRAINER, status: 'online', performance: 95, tasks: '12 Active', students: 45 },
    { id: 'H-502', name: 'Neha Kapoor', role: UserRole.HR, status: 'offline', approvals: '5 Pending', recruitment: '3 Active' },
    { id: 'S-102', name: 'Anita Roy', role: UserRole.STUDENT, status: 'offline', performance: 72, payment: 'POST', dueDate: '2024-04-15', taskStatus: '0 Pending' },
  ];

  const filteredUsers = allUsers.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pendingApprovals = [
    { id: '1', name: 'Arun Kumar', role: 'STUDENT', email: 'arun@example.com', date: '2024-03-28' },
    { id: '2', name: 'Dr. Neha', role: 'TRAINER', email: 'neha@example.com', date: '2024-03-29' }
  ];

  return (
    <div className="space-y-10">
      {/* 1. Global Search Protocol */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 w-full bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 flex items-center px-10">
           <Search size={24} className="text-[#0056b3] mr-6" />
           <input 
             type="text" 
             placeholder="SEARCH GLOBAL ROLES (ID, NAME, ROLE: ADMIN/HR/TRAINER/STUDENT)..."
             className="w-full bg-transparent border-none outline-none font-black uppercase tracking-widest text-xs text-[#001a33] placeholder:text-gray-300"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
           />
           <div className="bg-[#f8fbff] px-6 py-2 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">
             {filteredUsers.length} Results
           </div>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
           <button className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:scale-105 transition-all text-[#0056b3] flex items-center gap-3">
              <UserPlus size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest">New User Approval</span>
           </button>
           <button className="bg-[#001a33] p-6 rounded-[2rem] text-white shadow-xl hover:scale-105 transition-all flex items-center gap-3 group">
              <MessageSquare size={20} className="group-hover:text-[#ff9800]" />
              <span className="text-[10px] font-black uppercase tracking-widest">Global Dispatch</span>
           </button>
        </div>
      </div>

      {/* 2. Search Results Grid (Deep Metrics) */}
      {searchTerm && (
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
          <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter mb-8 flex items-center gap-3">
            <Search className="text-[#0056b3]" /> Results for "{searchTerm}"
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredUsers.map(user => (
              <div key={user.id} className="p-8 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-[#ff9800]/20 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#001a33] text-white rounded-2xl flex items-center justify-center font-black relative">
                      {user.name[0]}
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-50 ${user.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#001a33] uppercase tracking-tight">{user.name}</h4>
                      <p className="text-[10px] font-black text-[#ff9800] uppercase tracking-widest">{user.role} • ID: {user.id}</p>
                    </div>
                  </div>
                  <button className="p-3 bg-white text-gray-400 rounded-xl hover:text-[#0056b3] transition-colors"><Eye size={18} /></button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Performance</p>
                    <p className="text-sm font-black text-[#001a33]">{user.performance ? `${user.performance}%` : 'N/A'}</p>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Payment</p>
                    <p className="text-sm font-black text-[#001a33]">{user.payment || 'SALARY'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Due Date</p>
                    <p className="text-sm font-black text-red-500">{user.dueDate || 'N/A'}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-2">
                   <button className="flex-1 py-3 bg-[#001a33] text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#ff9800] transition-all">Interact</button>
                   <button className="flex-1 py-3 bg-white text-[#001a33] border border-gray-200 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-gray-50">Audit Tasks</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Operational Logic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Triage Queue */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
           <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black text-[#001a33] uppercase tracking-tighter flex items-center gap-3">
                 <ShieldCheck className="text-[#ff9800]" /> Access Triage
              </h3>
              <span className="bg-orange-50 text-[#ff9800] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">2 Pending Approvals</span>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full">
                 <thead>
                    <tr className="text-left border-b border-gray-100">
                       <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Candidate</th>
                       <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol</th>
                       <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Date Initiated</th>
                       <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Command</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-50">
                    {pendingApprovals.map((req) => (
                       <tr key={req.id} className="group hover:bg-gray-50/50 transition-colors">
                          <td className="py-6">
                             <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-black text-xs">{req.name[0]}</div>
                                <div>
                                   <p className="text-sm font-black text-[#001a33] uppercase tracking-tight">{req.name}</p>
                                   <p className="text-[10px] text-gray-400 font-bold">{req.email}</p>
                                </div>
                             </div>
                          </td>
                          <td className="py-6">
                             <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${req.role === 'TRAINER' ? 'bg-indigo-50 text-indigo-600' : 'bg-blue-50 text-blue-600'}`}>
                                {req.role}
                             </span>
                          </td>
                          <td className="py-6">
                             <p className="text-xs font-bold text-gray-500">{req.date}</p>
                          </td>
                          <td className="py-6">
                             <div className="flex items-center justify-center gap-2">
                                <button className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-all" title="Accept Protocol">
                                   <CheckCircle2 size={18} />
                                </button>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Deny Protocol">
                                   <XCircle size={18} />
                                </button>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* System Health / HR & Trainer Performance */}
        <div className="bg-[#001a33] p-10 rounded-[3rem] text-white shadow-xl">
           <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
              <TrendingUp className="text-[#ff9800]" /> Hub Performance
           </h3>
           <div className="space-y-6">
              {[
                { label: 'HR Efficiency', value: '92%', icon: <Briefcase size={16} /> },
                { label: 'Trainer Lead', value: '88%', icon: <Zap size={16} /> },
                { label: 'Student Growth', value: '74%', icon: <Users size={16} /> }
              ].map((m, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                   <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3 text-white/50">
                         {m.icon}
                         <span className="text-[10px] font-black uppercase tracking-widest">{m.label}</span>
                      </div>
                      <span className="text-lg font-black text-[#ff9800]">{m.value}</span>
                   </div>
                   <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#ff9800] h-full" style={{ width: m.value }}></div>
                   </div>
                </div>
              ))}
              <div className="pt-6 border-t border-white/10">
                 <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                    <span className="text-white/40">Financial Due Alerts</span>
                    <span className="text-red-400">08 Critical</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
