import React, { useState, useEffect } from 'react';
import { Search, Briefcase, Rocket, Send, Sparkles, Cpu, Globe, Filter, X, User, Mail, Phone, FileUp, ChevronRight, CheckCircle2, Linkedin, AlertCircle } from 'lucide-react';

const Careers: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeJob, setActiveJob] = useState<string | null>(null);
    const [resumeLink, setResumeLink] = useState('');
    const [fileName, setFileName] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    
    // Toast State for Notifications
    const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
        show: false,
        message: '',
        type: 'success'
    });

    const [formData, setFormData] = useState({
        candidateName: '',
        phone: '',
        email: '',
    });

    const categories = ['All', 'Technical', 'Instructional', 'Management', 'Internship'];

    const jobs = [
        { title: "Robotics Trainer", type: "Full-Time", location: "Andhra Pradesh", category: "Instructional", icon: <Cpu size={28}/> },
        { title: "STEM Instructor", type: "Full-Time", location: "Various Locations", category: "Instructional", icon: <Sparkles size={28}/> },
        { title: "AI & IoT Engineer", type: "Contract", location: "Remote/Hybrid", category: "Technical", icon: <Globe size={28}/> },
        { title: "Curriculum Designer", type: "Full-Time", location: "Management", category: "Management", icon: <Briefcase size={28}/> },
        { title: "Internship Opportunities", type: "Internship", location: "Flexible", category: "Internship", icon: <Rocket size={28}/> }
    ];

    // Auto-hide Toast logic
    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast({ ...toast, show: false }), 5000);
            return () => clearTimeout(timer);
        }
    }, [toast.show]);

    const showToast = (message: string, type: 'success' | 'error' = 'success') => {
        setToast({ show: true, message, type });
    };

    const openApplication = (title: string) => {
        setActiveJob(title);
        setIsModalOpen(true);
        setIsSubmitted(false);
        setFileName(null);
        setUploadProgress(0);
        setIsUploading(false);
        setFormData({ candidateName: '', phone: '', email: '' });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);
            setUploadProgress(100); 
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
        if (!fileInput?.files?.[0]) {
            showToast("RESUME PROTOCOL MANDATORY: Please upload credentials.", 'error');
            return;
        }

        const submissionData = new FormData();
        submissionData.append("candidateName", formData.candidateName);
        submissionData.append("phone", formData.phone);
        submissionData.append("email", formData.email);
        submissionData.append("jobTitle", activeJob || "General Application");
        submissionData.append("linkedinUrl", resumeLink);
        submissionData.append("resume", fileInput.files[0]);

        try {
            setIsUploading(true);
            // Using a placeholder endpoint as per general code structure but kept the user's logic
            const response = await fetch("http://localhost:8080/api/careers/initialize-protocol", {
                method: "POST",
                body: submissionData,
            });

            if (response.ok) {
                setIsSubmitted(true);
                showToast("PROTOCOL INTEGRATED: Email relays dispatched successfully.");
                setTimeout(() => {
                    setIsModalOpen(false);
                    setIsSubmitted(false);
                }, 4500);
            } else {
                // Since this is a frontend demo and the endpoint might not exist, 
                // we'll simulate success for the demo if it fails with connection error
                // but follow user's exact code structure.
                const error = await response.json().catch(() => ({ message: "Unknown error" }));
                showToast(`RELAY ERROR: ${error.message}`, 'error');
            }
        } catch (error) {
            // For the purpose of this demo app, if the local backend is missing, we show error as requested
            showToast("CRITICAL: Backend Liaison unreachable.", 'error');
            
            // SIMULATION FOR UI DEMO (Optional: remove in production)
            // setIsSubmitted(true); 
        } finally {
            setIsUploading(false);
        }
    };

    const filteredJobs = selectedCategory === 'All' ? jobs : jobs.filter(job => job.category === selectedCategory);

    return (
        <div className="bg-[#f0f2f5] overflow-x-hidden relative font-sans text-[#001a33] pt-20">
            <style>{`
                @keyframes bracket-scan-kep { 0% { left: -60px; } 50% { left: 320px; } 100% { left: -60px; } }
                @keyframes text-sync-kep { 0% { transform: translateX(60px); } 50% { transform: translateX(-320px); } 100% { transform: translateX(60px); } }
                @keyframes scanner-line { 0% { top: 0%; } 100% { top: 100%; } }
                @keyframes data-stream { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
                @keyframes toast-in { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
                .bracket-red { border-color: #ff0000 !important; border-style: solid !important; position: absolute; width: 30px; height: 30px; filter: drop-shadow(0 0 12px rgba(255, 0, 0, 0.9)); z-index: 40; }
                .cyber-grid { background-image: linear-gradient(#001a3308 1.5px, transparent 1.5px), linear-gradient(90deg, #001a3308 1.5px, transparent 1.5px); background-size: 60px 60px; }
                .hex-pattern { background-image: url("data:image/svg+xml,%3Csvg width='24' height='42' viewBox='0 0 24 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l12 7 12-7v14l-12 7-12-7V0zm0 28l12 7 12-7v14l-12 7-12-7V28z' fill='%23001a33' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"); }
                .scanner-active::after { content: ''; position: absolute; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, transparent, #ff0000, transparent); box-shadow: 0 0 20px #ff0000; animation: scanner-line 4s linear infinite; opacity: 0; }
                .group:hover .scanner-active::after { opacity: 1; }
                .data-parse-bg { animation: data-stream 2s linear infinite; font-family: monospace; }
                .toast-notify { animation: toast-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
            `}</style>

            {/* TOAST NOTIFICATION COMPONENT */}
            {toast.show && (
                <div className="fixed top-24 left-0 right-0 z-[10000] flex justify-center px-6 pointer-events-none">
                    <div className={`toast-notify pointer-events-auto flex items-center gap-4 px-8 py-4 rounded-2xl shadow-2xl border-l-8 ${toast.type === 'success' ? 'bg-[#001a33] border-[#2E8B57] text-white' : 'bg-white border-[#ff0000] text-[#001a33]'}`}>
                        {toast.type === 'success' ? <CheckCircle2 className="text-[#2E8B57]" size={24} /> : <AlertCircle className="text-[#ff0000]" size={24} />}
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">{toast.type === 'success' ? 'Protocol Success' : 'System Error'}</span>
                            <span className="text-sm font-bold uppercase tracking-wider">{toast.message}</span>
                        </div>
                        <button onClick={() => setToast({ ...toast, show: false })} className="ml-4 hover:rotate-90 transition-transform">
                            <X size={18} className="opacity-40" />
                        </button>
                    </div>
                </div>
            )}

            {/* HERO SECTION */}
            <div className="bg-[#001a33] py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="relative mb-16 flex justify-center">
                        <div className="relative inline-block py-6 select-none">
                            <div className="text-white/5 font-black uppercase text-8xl md:text-[10rem] tracking-[0.2em] px-12">KEP</div>
                            <div className="absolute top-0 h-full w-[220px] z-30 pointer-events-none" style={{ animation: 'bracket-scan-kep 7s cubic-bezier(0.45, 0, 0.55, 1) infinite' }}>
                                <div className="bracket-red top-0 left-0 border-t-4 border-l-4"></div>
                                <div className="bracket-red top-0 right-0 border-t-4 border-r-4"></div>
                                <div className="bracket-red bottom-0 left-0 border-b-4 border-l-4"></div>
                                <div className="bracket-red bottom-0 right-0 border-b-4 border-r-4"></div>
                                <div className="absolute inset-0 overflow-hidden flex items-center bg-red-600/10 backdrop-blur-[2px]">
                                    <div className="text-white font-black uppercase text-8xl md:text-[10rem] tracking-[0.2em] whitespace-nowrap pl-12" style={{ width: '900px', animation: 'text-sync-kep 7s cubic-bezier(0.45, 0, 0.55, 1) infinite' }}>KEP</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-[7.5rem] font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase font-sans">
                        BUILD THE <span className="text-[#ff9800] italic">FUTURE.</span>
                    </h1>
                </div>
            </div>

            {/* JOB LISTINGS */}
            <div className="relative cyber-grid pb-40 px-6">
                <div className="container mx-auto max-w-6xl py-24">
                    <div className="bg-white p-10 rounded-[3.5rem] mb-24 shadow-2xl border border-gray-100 transform -translate-y-24 relative z-20">
                         <div className="flex flex-col md:flex-row gap-8 mb-10">
                            <div className="flex-grow flex items-center px-8 bg-gray-50 rounded-3xl border border-gray-200 focus-within:ring-4 focus-within:ring-[#ff9800]/20 transition-all">
                                <Search size={24} className="text-[#ff9800] mr-4" />
                                <input type="text" placeholder="SEARCH OPEN PROTOCOLS..." className="bg-transparent w-full py-6 text-sm font-bold tracking-widest uppercase focus:outline-none text-[#001a33]" />
                            </div>
                            <button className="bg-[#001a33] text-white px-12 py-6 rounded-3xl font-black uppercase text-sm tracking-[0.2em] hover:bg-[#ff9800] transition-all">Verify Role</button>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            <Filter size={20} className="text-gray-400 mr-2" />
                            {categories.map((cat) => (
                                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${selectedCategory === cat ? "bg-[#001a33] text-white border-[#001a33]" : "bg-white text-gray-500 border-gray-100 hover:border-[#ff9800] hover:text-[#ff9800]"}`}>{cat}</button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        {filteredJobs.map((job) => (
                            <div key={job.title} className="group relative bg-white rounded-[4rem] border-2 border-transparent hover:border-[#ff9800]/30 p-12 flex flex-col md:flex-row justify-between items-center transition-all duration-700 shadow-xl">
                                <div className="absolute inset-0 hex-pattern opacity-100 group-hover:opacity-40 transition-opacity"></div>
                                <div className="scanner-active absolute inset-0 pointer-events-none"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center w-full justify-between gap-10">
                                    <div className="flex items-center space-x-10 text-center md:text-left">
                                        <div className="w-24 h-24 bg-[#001a33]/5 rounded-[2.5rem] flex items-center justify-center text-[#001a33] group-hover:bg-[#001a33] group-hover:text-white transition-all duration-700 shadow-inner">{job.icon}</div>
                                        <h3 className="text-4xl font-black text-[#001a33] uppercase tracking-tight">{job.title}</h3>
                                    </div>
                                    <button onClick={() => openApplication(job.title)} className="w-full md:w-auto bg-[#001a33] text-white px-14 py-7 rounded-[2rem] font-black uppercase text-xs tracking-[0.4em] hover:bg-[#ff0000] transition-all flex items-center justify-center gap-4 shadow-xl">
                                        INITIALIZE <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* APPLICATION MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-10">
                    <div className="absolute inset-0 bg-[#001a33]/60 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
                    <div className="bg-white w-full max-w-2xl max-h-[95vh] rounded-[4rem] relative z-[5001] overflow-hidden shadow-2xl border border-white/20 flex flex-col animate-in zoom-in-95 duration-300">
                        
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-y-auto custom-scrollbar">
                                <div className="bg-gradient-to-r from-[#001a33] to-[#003366] p-12 text-white relative shrink-0">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="absolute top-10 right-10 text-white/30 hover:text-[#ff9800] transition-colors"><X size={36} /></button>
                                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Initialize Protocol</h2>
                                    <p className="text-sm font-black text-[#ff9800] tracking-[0.4em] uppercase">Target: {activeJob}</p>
                                </div>

                                <div className="p-12 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">Candidate Name</label>
                                            <div className="flex items-center bg-gray-50 rounded-2xl p-5 border-2 border-gray-100 focus-within:border-[#ff9800] transition-all">
                                                <User size={22} className="text-[#ff9800] mr-4"/>
                                                <input required value={formData.candidateName} onChange={(e)=>setFormData({...formData, candidateName: e.target.value})} className="bg-transparent w-full text-base font-bold text-[#001a33] focus:outline-none" placeholder="FULL NAME"/>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">Contact Phone</label>
                                            <div className="flex items-center bg-gray-50 rounded-2xl p-5 border-2 border-gray-100 focus-within:border-[#ff9800] transition-all">
                                                <Phone size={22} className="text-[#ff9800] mr-4"/>
                                                <input required value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="bg-transparent w-full text-base font-bold text-[#001a33] focus:outline-none" placeholder="+91 XXXX"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">Email Relay</label>
                                        <div className="flex items-center bg-gray-50 rounded-2xl p-5 border-2 border-gray-100 focus-within:border-[#ff9800] transition-all">
                                            <Mail size={22} className="text-[#ff9800] mr-4"/>
                                            <input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="bg-transparent w-full text-base font-bold text-[#001a33] focus:outline-none" placeholder="EMAIL@KESHAVELITE.COM"/>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest font-sans">Protocol Credentials (Mandatory)</label>
                                        <div className="relative">
                                            <input type="file" id="resume-upload" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
                                            <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] bg-gray-50 cursor-pointer hover:border-[#ff9800] hover:bg-[#ff9800]/5 transition-all">
                                                <FileUp size={32} className="text-[#ff9800] mb-3" />
                                                <p className="text-sm font-bold text-[#001a33]">{fileName ? fileName : "UPLOAD RESUME PROTOCOL"}</p>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase text-gray-400 ml-4 tracking-widest">LinkedIn Profile (Optional)</label>
                                        <div className="flex items-center gap-4">
                                            <div className="flex-grow flex items-center bg-gray-50 rounded-2xl p-5 border-2 border-gray-100 focus-within:border-[#ff9800] transition-all">
                                                <Linkedin size={22} className="text-[#ff9800] mr-4"/><input className="bg-transparent w-full text-base font-bold text-[#001a33] focus:outline-none" placeholder="URL PROTOCOL" value={resumeLink} onChange={(e) => setResumeLink(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" disabled={!fileName || isUploading} className={`w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.5em] text-sm transition-all shadow-xl mt-4 ${!fileName || isUploading ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#001a33] text-white hover:bg-[#ff0000]'}`}>
                                        {isUploading ? "DISPATCHING..." : "RELAY PROTOCOL NOW"}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="relative h-[600px] overflow-hidden flex flex-col items-center justify-center p-16 bg-[#001a33]">
                                <div className="absolute inset-0 opacity-10 data-parse-bg text-[#ff9800] text-[12px] leading-tight select-none">{Array(60).fill("KEP_AI_PARSING_SUCCESS_").join(" ")}</div>
                                <div className="relative z-10 text-center space-y-10 animate-in zoom-in duration-700">
                                    <div className="flex justify-center"><div className="bg-[#2E8B57]/30 p-10 rounded-full border-4 border-[#2E8B57] relative"><CheckCircle2 size={120} className="text-[#2E8B57]" /></div></div>
                                    <h2 className="text-5xl font-black text-white uppercase tracking-tighter font-sans">RELAY SUCCESS</h2>
                                    <div className="text-xs font-black uppercase tracking-[0.6em] text-[#ff9800] animate-pulse">CONNECTION TERMINATED</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
