import React, { useEffect, useRef, useState } from 'react';
import { 
  Monitor, Cpu, BookOpen, Settings, Zap, Cloud, ShieldCheck, 
  Target, ArrowRight, Globe, Layers, BarChart, Layout, 
  Binary, Rocket, Smartphone, Bot, Award, Info, X 
} from 'lucide-react';

// 1. REVEAL COMPONENT
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: string }> = ({ children, className = '', delay = '' }) => {
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

  return (
    <div ref={ref} className={`reveal reveal-up ${isActive ? 'active' : ''} ${delay} ${className}`}>
      {children}
    </div>
  );
};

// 2. REFINED MODAL COMPONENT - COMPACT & PROFESSIONAL
const ServiceModal: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  data: { title: string; subtitle: string; popupContent: string; outcome?: string } | null 
}> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#001a33]/80 backdrop-blur-md animate-in fade-in duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      {/* Compact Modal Box: max-w-3xl and max-h-85vh for professional look */}
      <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 animate-in zoom-in-95 duration-300 flex flex-col border border-white/20">
        
        {/* Fixed Header with Close Button */}
        <div className="p-6 md:p-8 border-b border-gray-50 flex justify-between items-center bg-white">
          <div>
            <h4 className="text-[#ff9800] font-black uppercase tracking-[0.4em] text-[10px] mb-1">{data.subtitle}</h4>
            <h2 className="text-2xl md:text-3xl font-black text-[#001a33] tracking-tight">{data.title}</h2>
          </div>
          <button onClick={onClose} className="text-[#001a33] hover:text-[#ff9800] transition-all hover:rotate-90 p-2">
            <X size={32} strokeWidth={3} />
          </button>
        </div>
        
        {/* Scrollable Content Area */}
        <div className="p-8 md:p-12 overflow-y-auto">
          <div className="space-y-8">
            <div>
              <p className="text-[#0056b3] font-black uppercase tracking-widest text-[9px] mb-4 opacity-60">Detailed Technical Overview</p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                {data.popupContent}
              </p>
            </div>

            {data.outcome && (
              <div className="bg-[#fffcf5] p-8 rounded-[2rem] border-l-[10px] border-[#ff9800] shadow-sm">
                <p className="text-[11px] font-black text-[#ff9800] uppercase tracking-[0.4em] mb-3">Industrial Impact</p>
                <p className="text-[#001a33] font-bold italic text-base md:text-lg leading-snug">"{data.outcome}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Accent */}
        <div className="h-2 bg-[#ff9800] w-full mt-auto"></div>
      </div>
    </div>
  );
};

// 3. SERVICE SECTION - UPDATED BULLET POINT FONT SIZE
const ServiceSection: React.FC<{ 
  id: string; title: string; subtitle: string; description: string; 
  popupContent: string; items: string[]; icon: React.ReactNode; image: string; 
  outcome?: string; reverse?: boolean; bgColor?: string;
  onExplore: (data: any) => void;
}> = ({ id, title, subtitle, description, popupContent, items, icon, image, outcome, reverse, bgColor = "bg-white", onExplore }) => (
  <section id={id} className={`py-32 scroll-mt-20 ${bgColor} border-b border-gray-100/50`}>
    <div className="container mx-auto px-6">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <Reveal className={reverse ? 'lg:order-2' : ''}>
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 text-[#0056b3] shadow-xl transition-all duration-500 hover:scale-110 hover:rotate-12 group border border-gray-50">
            <div className="group-hover:text-[#ff9800] transition-colors">{icon}</div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#001a33] mb-4 tracking-tighter leading-none">{title}</h2>
          <h3 className="text-xl md:text-2xl text-[#0056b3] font-black mb-8 uppercase tracking-[0.2em]">{subtitle}</h3>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed font-medium">{description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-5 bg-white rounded-2xl border border-gray-100 group hover:border-[#ff9800] hover:-translate-y-1 transition-all shadow-sm">
                <div className="w-2.5 h-2.5 bg-[#ff9800] rounded-full group-hover:scale-150 transition-transform"></div>
                {/* UPDATED FONT SIZE: text-sm on mobile, text-lg on desktop */}
                <span className="text-sm md:text-lg font-bold text-gray-700 uppercase tracking-wide leading-none">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onExplore({ title, subtitle, popupContent, outcome })} 
            className="group flex items-center space-x-4 bg-[#001a33] text-white px-10 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm hover:bg-[#ff9800] transition-all hover:scale-105 shadow-2xl"
          >
            <span>Explore Info</span>
            <Info size={24} className="group-hover:rotate-12 transition-transform" />
          </button>
        </Reveal>
        <Reveal className={reverse ? 'lg:order-1' : ''}>
          <div className="relative group">
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[10px] border-white">
              <img src={image} alt={title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-[#0056b3]/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<any>(null);

  return (
    <div className="bg-white overflow-hidden">
      <ServiceModal isOpen={!!activeService} onClose={() => setActiveService(null)} data={activeService} />
      
      {/* HERO SECTION */}
      <div className="py-48 text-center relative overflow-hidden" style={{ background: "linear-gradient(rgba(0, 42, 92, 0.85), rgba(0, 86, 179, 0.8)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full mb-10">
              <Layers size={18} className="text-[#ff9800]" />
              <span className="text-white font-black tracking-[0.4em] uppercase text-[12px]">Technical Service Catalog</span>
            </div>
            <h1 className="text-6xl md:text-[9rem] font-black text-white mb-8 leading-none tracking-tighter">Industrial <br/><span className="text-[#ff9800] italic">Solutions.</span></h1>
          </Reveal>
        </div>
      </div>

      <ServiceSection 
        id="stem-labs" 
        icon={<Settings size={48} />} 
        title="STEM Labs" 
        subtitle="Innovation for Schools" 
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
        description="Transforming K1–K12 classrooms into innovation labs with turnkey robotics and AI kits." 
        popupContent="Our STEM Labs provide a complete ecosystem including 3D printers, custom-built AI processing units, and modular robotics kits. We don't just provide equipment; we provide a future-proof environment where rural and urban students build real-world automation solutions from day one."
        outcome="Students learn by building — developing problem-solving and technical thinking early." 
        /* RESTORED ALL POINTS */
        items={["Complete Lab Setup", "Age-wise Curriculum", "Robotics & AI Tools", "Teacher Training", "Student Events", "Mentorship Support"]} 
        bgColor="bg-white" 
        onExplore={setActiveService} 
      />

      <ServiceSection 
        id="CoE" 
        icon={<Cpu size={48} />} 
        title="CoE Hubs" 
        subtitle="Universities" 
        image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200" 
        reverse 
        description="Advanced Innovation Hubs for Colleges focusing on real-world industry and research projects." 
        popupContent="The Center of Excellence (CoE) acts as a bridge between engineering academics and industrial 4.0 standards. In this hub, students engage with SLAM navigation, Digital Twin technology, and Cloud-connected IoT systems to prepare them for global technical leadership roles."
        outcome="Bridges the gap between classroom education and industry expectations through project-based learning." 
        /* RESTORED ALL POINTS */
        items={["Autonomous Robotics", "SLAM & Navigation", "Vision Systems", "Drone Tech", "AI & ML", "IoT Systems", "Digital Twin", "Industry 4.0"]} 
        bgColor="bg-gray-50" 
        onExplore={setActiveService} 
      />

      <ServiceSection 
        id="saas" 
        icon={<Cloud size={48} />} 
        title="SaaS Products" 
        subtitle="Digital Ecosystems" 
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
        description="Next-generation software solutions including Learning Management Platforms and Smart Campus Dashboards." 
        popupContent="Our SaaS division develops proprietary campus management tools that leverage AI analytics to track student technical progress in real-time. From integrated LMS to centralized dashboard controls, we provide institutions with the digital infrastructure to manage innovation at scale."
        outcome="Enables smart campus management and real-time technical progress tracking for entire institutions." 
        /* RESTORED ALL POINTS */
        items={["LMS Platforms", "Smart Campus", "AI-Based Analytics", "Admin Dashboards"]} 
        bgColor="bg-white" 
        onExplore={setActiveService} 
      />

      <section id="k12" className="py-32 bg-[#001a33] scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal className="text-center max-w-5xl mx-auto mb-24">
             <div className="w-24 h-24 bg-[#ff9800] text-white rounded-3xl flex items-center justify-center mb-10 mx-auto shadow-2xl transition-transform hover:rotate-12">
               <Bot size={48} />
             </div>
             <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">STEM & AI Robotics <br/><span className="text-[#ff9800]">for K1 – K12</span></h2>
             <p className="text-2xl md:text-4xl text-blue-100/60 font-medium leading-relaxed">Structured STEM, AI, and Robotics education designed for every grade level.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Block Coding to Python", icon: <Binary /> },
              { title: "Robotics Construction", icon: <Settings /> },
              { title: "AI & Computer Vision", icon: <Target /> },
              { title: "IoT Mini Projects", icon: <Smartphone /> },
              { title: "National Competitions", icon: <Award /> },
              { title: "Project Portfolios", icon: <Rocket /> }
            ].map((f, i) => (
              <Reveal key={i} className="bg-white/5 backdrop-blur-sm p-16 rounded-[4.5rem] border border-white/10 hover:bg-white/10 hover:border-[#ff9800] transition-all h-full group">
                <div className="w-16 h-16 bg-[#ff9800] text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all">{f.icon}</div>
                <h4 className="text-3xl font-black mb-6 text-white tracking-tight leading-none">{f.title}</h4>
                <p className="text-xl text-blue-100/50 font-medium leading-relaxed">Nurturing technical achievements for future credentials.</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
