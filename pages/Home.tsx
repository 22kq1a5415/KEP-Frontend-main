import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Building2, Rocket, ShieldCheck } from 'lucide-react';

// Counter Component that triggers every time it enters the viewport
const ScrollCounter: React.FC<{ end: number; suffix?: string; label: string }> = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Start animation every time it becomes visible
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      } else {
        // Reset count when it leaves the screen so it can animate again
        setCount(0);
      }
    }, { threshold: 0.1 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={countRef} className="p-8 transition-transform duration-500 hover:scale-110 cursor-default">
      {/* Target Numbers: 5000+ Students, 25+ Institutions */}
      <h3 className="text-6xl font-black text-[#ff9800] mb-3">{count}{suffix}</h3>
      <p className="uppercase tracking-[0.4em] text-[11px] font-bold text-gray-500">{label}</p>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION - EXACT HTML BLUE GRADIENT  */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center pt-[100px]"
        style={{
          background: "linear-gradient(rgba(0, 42, 92, 0.85), rgba(0, 86, 179, 0.8)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
           {/* 1. HERO BRANDING - CALIBRATED TO STOP AT 'S' IN PROJECTS */}
<div className="relative z-20 mb-8">
  <style>{`
    /* Calibrated to stop exactly after the 'S' and return to start */
    @keyframes bracket-move { 0% { left: 0px; } 100% { left: 185px; } }
    @keyframes text-sync { 0% { transform: translateX(0px); } 100% { transform: translateX(-185px); } }
    
    .bracket-red { 
      border-color: #ff0000 !important; 
      border-style: solid !important; 
      position: absolute; 
      width: 14px; 
      height: 14px; 
      filter: drop-shadow(0 0 5px #ff0000);
    }
  `}</style>
  
  <div className="relative inline-block py-2 select-none">
    {/* Visible Shade: Faintly visible ghost text */}
    <div className="text-white/20 blur-[1.2px] font-black uppercase text-[1.1rem] tracking-widest leading-none">
      Keshava Elite Projects
    </div>
    
    {/* Target Scanner: Calibrated width and faster speed for minimal spacing */}
    <div className="absolute top-0 h-full w-[95px] z-30 pointer-events-none" 
         style={{ animation: 'bracket-move 3s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate' }}>
      
      <div className="bracket-red top-0 left-0 border-t-2 border-l-2"></div>
      <div className="bracket-red top-0 right-0 border-t-2 border-r-2"></div>
      <div className="bracket-red bottom-0 left-0 border-b-2 border-l-2"></div>
      <div className="bracket-red bottom-0 right-0 border-b-2 border-r-2"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Full Visibility Text synchronized with movement */}
        <div className="text-white font-black uppercase text-[1.1rem] tracking-widest leading-none whitespace-nowrap pt-2" 
             style={{ width: '400px', animation: 'text-sync 3s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate' }}>
          Keshava Elite Projects
        </div>
      </div>
    </div>
  </div>
</div>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-8 uppercase tracking-tighter">
              Building India’s <span className="text-[#ff9800]">Next Generation</span> of Engineers
            </h1>
            <p className="text-gray-100 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-medium">
              Transforming schools and colleges into technology-driven innovation hubs through STEM Robotics Labs and Center of Excellence (CoE) Programs.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/courses" className="bg-[#ff9800] text-white px-10 py-4 rounded-md font-bold text-lg hover:scale-110 hover:shadow-[0_0_30px_rgba(255,152,0,0.4)] transition-all duration-300">
                Explore Programs
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[#003d80] transition-all duration-300">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT SECTION - WHITE BACKGROUND WITH RE-TRIGGERING ANIMATIONS*/}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <ScrollCounter end={5000} suffix="+" label="Students Trained " />
            <ScrollCounter end={5} suffix="+" label="Partner Institutions" />
            <ScrollCounter end={100} suffix="%" label="NEP 2020 Aligned" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION - WITH HOVER POPUP EFFECTS*/}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0056b3] text-4xl font-black uppercase tracking-tighter mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-[#ff9800] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* STEM Labs Card */}
            <div className="bg-white p-12 rounded-3xl shadow-xl border-b-8 border-[#0056b3] transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:border-[#ff9800] group cursor-pointer">
              <div className="text-[#ff9800] mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-gray-900">STEM Robotics Labs</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Transforming K1–K12 classrooms into innovation labs with hands-on robotics and coding.</p>
            </div>

            {/* COE Card */}
            <div className="bg-white p-12 rounded-3xl shadow-xl border-b-8 border-[#0056b3] transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:border-[#ff9800] group cursor-pointer">
              <div className="text-[#ff9800] mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                <Building2 size={48} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-gray-900">Center of Excellence </h3>
              <p className="text-gray-500 leading-relaxed font-medium">Advanced innovation hubs for colleges focusing on industry projects and research.</p>
            </div>

            {/* Innovation Card */}
            <div className="bg-white p-12 rounded-3xl shadow-xl border-b-8 border-[#0056b3] transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl hover:border-[#ff9800] group cursor-pointer">
              <div className="text-[#ff9800] mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                <Rocket size={48} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase text-gray-900">Innovation Programs</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Bootcamps, hackathons, and national-level robotics competitions for students.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;