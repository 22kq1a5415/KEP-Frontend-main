import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, Phone, Globe, Send, CheckCircle, MessageSquare, 
  Building2, ShieldCheck, Zap, Handshake, GraduationCap, 
  HelpCircle, MessageCircle, Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../constants.tsx';

// Internal Reveal Component
const Reveal: React.FC<{ children: React.ReactNode; type?: 'up' | 'left' | 'right' }> = ({ children, type = 'up' }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsActive(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const revealClass = type === 'up' ? 'reveal-up' : type === 'left' ? 'reveal-left' : 'reveal-right';
  return (
    <div ref={ref} className={`reveal ${revealClass} ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

const Contact: React.FC = () => {
  const { hash } = useLocation();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '', inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (hash === '#recovery' || hash === '#approval') {
      setFormData(prev => ({ ...prev, inquiryType: 'lms-approval' }));
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type: string) => {
    setFormData(prev => ({ ...prev, inquiryType: type }));
  };

  const inquiryOptions = [
    { value: 'lms-approval', label: 'LMS Account Approval', icon: <ShieldCheck size={32} /> },
    { value: 'stem-lab', label: 'STEM Lab Installation', icon: <Zap size={32} /> },
    { value: 'coe-setup', label: 'CoE Hub Setup', icon: <Building2 size={32} /> },
    { value: 'partnership', label: 'Institutional Partner', icon: <Handshake size={32} /> },
    { value: 'training', label: 'Student Training', icon: <GraduationCap size={32} /> },
    { value: 'general', label: 'General Enquiry', icon: <HelpCircle size={32} /> }
  ];

  return (
    <div className="bg-white overflow-hidden relative">
      <style>{`
        .reveal { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; }
        .reveal-up { transform: translateY(40px); }
        .reveal-up.active { transform: translateY(0); }
        .reveal-left { transform: translateX(-40px); }
        .reveal-left.active { transform: translateX(0); }
        .reveal-right { transform: translateX(40px); }
        .reveal-right.active { transform: translateX(0); }

        /* CALIBRATED TO COVER FULL 'P' - DISTANCE INCREASED TO 240PX */
        @keyframes bracket-scan-kep { 0% { left: 0px; } 100% { left: 240px; } }
        @keyframes text-sync-kep { 0% { transform: translateX(0px); } 100% { transform: translateX(-240px); } }
        
        .bracket-red { 
          border-color: #ff0000 !important; 
          border-style: solid !important; 
          position: absolute; 
          width: 25px; 
          height: 25px; 
          filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.8));
          z-index: 40;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.33); opacity: 1; }
          80%, 100% { transform: scale(1.2); opacity: 0; }
        }
        .whatsapp-pulse {
          position: absolute; width: 100%; height: 100%; border-radius: 50%;
          background-color: #25D366; animation: pulse-ring 2s infinite;
        }
      `}</style>

      {/* WHATSAPP FAB - REPOSITIONED ABOVE FOOTER CONTENT */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.phone.replace(/\D/g, '')}`}
        target="_blank" 
        rel="noopener noreferrer"
        /* FIXED POSITIONING: 
           bottom-32 on mobile and bottom-40 on desktop ensures it sits 
           clearly above the Privacy Protocol and Digital Gateway links.
        */
        className="fixed bottom-32 right-6 md:bottom-40 md:right-10 z-[100] flex items-center justify-center group"
      >
        {/* Attention Pulse Effect */}
        <div className="whatsapp-pulse"></div>
        
        <div className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl relative transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
          {/* Official WhatsApp Style Logo (Solid Fill) */}
          <MessageCircle size={32} fill="currentColor" className="text-white" />
          
          {/* Tooltip Label */}
          <span className="absolute right-full mr-4 bg-[#001a33] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
            Liaison Desk
          </span>
        </div>
      </a>

      {/* Header Tier */}
      <div className="bg-[#001a33] py-48 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center space-x-3 bg-blue-600/10 border border-blue-600/20 px-8 py-3 rounded-full mb-10 backdrop-blur-md">
              <MessageSquare size={18} className="text-[#ff9800]" />
              <span className="text-white font-black tracking-[0.4em] uppercase text-[11px]">Industrial Liaison Desk</span>
            </div>
            
            {/* BRANDING: KEP SCANNER FULL COVERAGE */}
            <div className="relative mb-12 flex justify-center">
              <div className="relative inline-block py-4 select-none">
                
                {/* 1. Base Ghost Text */}
                <div className="text-white/10 font-black uppercase text-7xl md:text-[8rem] tracking-widest leading-none px-12">
                  KEP
                </div>
                
                {/* 2. Target Bracket - Wider box (140px) to ensure 'P' fits inside */}
                <div 
                  className="absolute top-0 h-full w-[140px] z-30 pointer-events-none" 
                  style={{ animation: 'bracket-scan-kep 3.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate' }}
                >
                  <div className="bracket-red top-0 left-0 border-t-4 border-l-4"></div>
                  <div className="bracket-red top-0 right-0 border-t-4 border-r-4"></div>
                  <div className="bracket-red bottom-0 left-0 border-b-4 border-l-4"></div>
                  <div className="bracket-red bottom-0 right-0 border-b-4 border-r-4"></div>
                  
                  {/* 3. Reveal Text synced to bracket movement */}
                  <div className="absolute inset-0 overflow-hidden flex items-center bg-red-600/5 backdrop-blur-[1px]">
                    <div 
                      className="text-white font-black uppercase text-7xl md:text-[8rem] tracking-widest leading-none whitespace-nowrap pl-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                      style={{ width: '500px', animation: 'text-sync-kep 3.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate' }}
                    >
                      KEP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
              <span className="text-[#ff9800] italic">Connectivity.</span>
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <Reveal type="left">
              <div>
                <h2 className="text-5xl font-black text-[#001a33] mb-8 tracking-tight uppercase border-l-8 border-[#ff9800] pl-6">Authorized Channels</h2>
                <p className="text-2xl text-gray-500 font-bold leading-relaxed max-w-lg italic">Direct communication for robotics lab deployments and professional certification programs.</p>
              </div>
            </Reveal>

            <div className="space-y-8">
              {[
                { icon: <Mail size={28} />, label: 'Correspondence', value: COMPANY_INFO.email },
                { icon: <Phone size={28} />, label: 'Liaison Desk', value: COMPANY_INFO.phone },
                { icon: <Globe size={28} />, label: 'Administrative HQ', value: COMPANY_INFO.address }
              ].map((item, i) => (
                <Reveal key={i} type="left">
                  <div className="flex items-start space-x-8 p-12 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group">
                    <div className="w-20 h-20 bg-[#001a33] rounded-2xl flex items-center justify-center text-[#ff9800] shadow-xl">{item.icon}</div>
                    <div>
                      <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">{item.label}</h4>
                      <p className="text-2xl font-black text-[#001a33] tracking-tight">{item.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal type="right">
            <div id="contact-form" className="bg-white p-14 rounded-[4.5rem] border border-gray-100 shadow-xl relative">
              {isSuccess ? (
                <div className="text-center py-20 animate-scale-up">
                  <CheckCircle size={72} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-5xl font-black mb-4 uppercase text-[#001a33]">Signal Received</h3>
                  <button onClick={() => setIsSuccess(false)} className="bg-[#001a33] text-white px-10 py-4 rounded-full font-black text-xs uppercase">New Signal</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input name="name" type="text" required value={formData.name} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-8 py-6 outline-none font-black text-lg placeholder:text-gray-300" placeholder="IDENTITY" />
                    <input name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-8 py-6 outline-none font-black text-lg placeholder:text-gray-300" placeholder="RELAY EMAIL" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {inquiryOptions.map((opt) => (
                      <button key={opt.value} type="button" onClick={() => handleTypeSelect(opt.value)} className={`flex items-center space-x-4 p-6 rounded-2xl border-2 transition-all ${formData.inquiryType === opt.value ? 'bg-[#ff9800] border-[#ff9800] text-white shadow-xl scale-105' : 'bg-gray-50 border-transparent hover:border-gray-200'}`}>
                        <div className={formData.inquiryType === opt.value ? 'text-white' : 'text-[#0056b3]'}>{opt.icon}</div> 
                        <span className="text-[12px] font-black uppercase text-left leading-none">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                  <textarea name="message" rows={5} required value={formData.message} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 rounded-[2.5rem] px-8 py-6 outline-none resize-none font-black text-lg placeholder:text-gray-300" placeholder="SPECIFIC REQUIREMENTS..."></textarea>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#001a33] text-white font-black py-9 rounded-[3rem] flex items-center justify-center space-x-6 hover:bg-[#ff9800] transition-all group shadow-2xl">
                    <span className="text-2xl uppercase tracking-[0.4em]">{isSubmitting ? 'SYNCING...' : 'INITIATE HANDSHAKE'}</span>
                    <Send size={32} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;