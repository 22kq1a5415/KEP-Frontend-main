import React, { useEffect, useRef, useState } from 'react';
import { 
  ShieldCheck, Award, Landmark, GraduationCap, 
  ExternalLink, Globe, Star, CheckCircle, 
  Users, Building2, Trophy, ArrowRight, CheckCircle2,
  Cpu, Zap, Shield, Heart, Flag, Smartphone
} from 'lucide-react';
import { ASSETS } from '../assets.ts';
import { COMPANY_INFO } from '../constants.tsx';

// 1. Reveal Component
const Reveal: React.FC<{ children: React.ReactNode; className?: string; type?: 'up' | 'left' | 'right'; delay?: string }> = ({ children, className = '', type = 'up', delay = '' }) => {
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
    <div ref={ref} className={`reveal ${revealClass} ${isActive ? 'active' : ''} ${delay} ${className}`}>
      {children}
    </div>
  );
};

// 2. Counter Component
const Counter: React.FC<{ target: string; duration?: number }> = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  const numericPart = parseInt(target.replace(/[^0-9]/g, ''), 10);
  const suffix = target.replace(/[0-9,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * numericPart));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, numericPart, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Impact: React.FC = () => {
  const accreditations = [
    { name: "APSSDC Skill AP", logo: ASSETS.LOGOS.APSSDC },
    { name: "MSME India", logo: ASSETS.LOGOS.MSME },
    { name: "Startup India", logo: ASSETS.LOGOS.STARTUP_INDIA },
    { name: "ISO 9001", logo: ASSETS.LOGOS.ISO },
    { name: "AICTE India", logo: ASSETS.LOGOS.AICTE },
    { name: "MCA", logo: ASSETS.LOGOS.MCA },
    { name: "NSDC India", logo: ASSETS.LOGOS.NSDC }
  ];

  const trustedBy = [
    { name: "IIT Madras", logo: ASSETS.LOGOS.IIT_MADRAS },
    { name: "Infosys Springboard", logo: ASSETS.LOGOS.INFOSYS },
    { name: "Great Learning", logo: ASSETS.LOGOS.GREAT_LEARNING },
    { name: "IDPS Narasaraopet", logo: ASSETS.LOGOS.IDPS_NARA },
    { name: "Ugyan Edu tech", logo: ASSETS.LOGOS.UGYAN },
    { name: "Code tree Solutions", logo: ASSETS.LOGOS.CODE_TREE },
    { name: "Flyhii private limited", logo: ASSETS.LOGOS.FLYHII },
    { name: "MAM Colleges", logo: ASSETS.LOGOS.MAM_COLLEGES }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      <style>{`
        @keyframes energy-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes vertical-pulse {
          0% { transform: translateY(100%); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes mission-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 152, 0, 0.1); border-color: rgba(255, 152, 0, 0.1); }
          50% { box-shadow: 0 0 60px rgba(255, 152, 0, 0.3); border-color: rgba(255, 152, 0, 0.4); }
        }
        @keyframes marquee-impact {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes flow-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes flow-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .reveal { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; }
        .reveal-up { transform: translateY(40px); }
        .reveal-up.active { transform: translateY(0); }
        .reveal-left { transform: translateX(-40px); }
        .reveal-left.active { transform: translateX(0); }
        .reveal-right { transform: translateX(40px); }
        .reveal-right.active { transform: translateX(0); }

        .energy-line-h {
          position: absolute;
          height: 1px;
          width: 30%;
          background: linear-gradient(90deg, transparent, #ff9800, transparent);
          box-shadow: 0 0 10px #ff9800;
          animation: energy-flow 8s linear infinite;
        }
        .energy-line-v {
          position: absolute;
          width: 1px;
          height: 40%;
          background: linear-gradient(180deg, transparent, #0056b3, transparent);
          box-shadow: 0 0 10px #0056b3;
          animation: vertical-pulse 12s linear infinite;
        }
        .animate-marquee-impact {
          animation: marquee-impact 35s linear infinite;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        /* Parallel Animated Lines */
        .parallel-container {
          position: absolute;
          width: 100%;
          height: 10px;
          overflow: hidden;
          pointer-events: none;
        }
        .parallel-line {
          position: absolute;
          height: 2px;
          width: 250px;
          opacity: 0.6;
          filter: blur(1px);
        }
        .parallel-line.orange { background: #ff9800; box-shadow: 0 0 8px #ff9800; }
        .parallel-line.blue { background: #0056b3; box-shadow: 0 0 8px #0056b3; }
        
        .animate-right { animation: flow-right 4s linear infinite; }
        .animate-left { animation: flow-left 4s linear infinite; }
      `}</style>

      {/* Hero Tier */}
      <div className="relative py-48 bg-[#001a33] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="energy-line-h top-[20%] left-[-10%]" style={{ animationDelay: '0s' }}></div>
          <div className="energy-line-h top-[60%] left-[-10%]" style={{ animationDelay: '4s' }}></div>
          <div className="energy-line-v left-[15%] top-full" style={{ animationDelay: '1s' }}></div>
          <div className="energy-line-v left-[85%] top-full" style={{ animationDelay: '5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full mb-10 backdrop-blur-md">
              <ShieldCheck size={18} className="text-[#ff9800]" />
              <span className="text-white font-black tracking-[0.4em] uppercase text-[10px]">Institutional Track Record</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
              Verified <br/><span className="text-[#ff9800] italic">Impact.</span>
            </h1>
            <p className="text-gray-400 text-2xl font-medium max-w-4xl mx-auto italic leading-relaxed">
              Standardizing technical excellence across India's premier educational landscape. 
              Over <span className="text-white"><Counter target="5,000+" /></span> Students Trained.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Approved By Section */}
      <section className="relative py-24 bg-gray-50 border-b border-gray-100 overflow-hidden">
        {/* PARALLEL LINES MOVING RIGHT */}
        <div className="parallel-container top-0">
          <div className="parallel-line orange animate-right" style={{ top: '2px', animationDelay: '0s' }}></div>
          <div className="parallel-line blue animate-right" style={{ top: '6px', animationDelay: '1s' }}></div>
          <div className="parallel-line orange animate-right" style={{ top: '4px', animationDelay: '2s', width: '400px' }}></div>
        </div>

        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <ShieldCheck size={14} className="text-blue-600" />
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Compliance & Accreditation</span>
            </div>
            <h3 className="text-4xl font-black text-[#001a33] uppercase tracking-tighter">Approved <span className="text-blue-700 italic">By.</span></h3>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {accreditations.map((brand, i) => (
              <Reveal key={i} type="up" delay={`delay-${i * 100}`}>
                <div className="group transition-all duration-500 hover:scale-110">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    title={brand.name}
                    className="h-16 md:h-20 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numerical Impact Matrix */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Students Trained', value: '5,000+', icon: Users, desc: 'Verified technical skillsets deployed into the global workforce.' },
              { label: 'Institutional Partners', value: '25+', icon: Building2, desc: 'Schools and Colleges enabled with high-end technology labs.' },
              { label: 'NEP 2020 Aligned', value: '100%', icon: ShieldCheck, desc: 'All programs following the latest national education protocols.' }
            ].map((stat, i) => (
              <Reveal key={i} type="up" delay={`delay-${i * 100}`}>
                <div className="p-16 rounded-[3rem] bg-gray-50 border-l-[10px] border-[#0056b3] hover:-translate-y-4 transition-all group h-full shadow-sm hover:shadow-2xl overflow-hidden relative">
                   <div className="bg-[#0056b3] w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-xl relative z-10">
                      <stat.icon size={24} className="text-white" />
                   </div>
                   <h4 className="text-6xl font-black mb-6 tracking-tighter text-[#001a33] relative z-10">
                     <Counter target={stat.value} />
                   </h4>
                   <p className="text-[#ff9800] font-black uppercase text-xs tracking-widest mb-6 relative z-10">{stat.label}</p>
                   <p className="text-gray-500 font-medium leading-relaxed relative z-10">{stat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section (Marquee) */}
      <section className="relative py-32 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-6 mb-20 text-center">
          <Reveal>
             <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mb-4">Strategic Collaborations</h2>
             <h3 className="text-5xl md:text-7xl font-black text-[#001a33] uppercase tracking-tighter">Trusted <span className="text-[#ff9800] italic">By.</span></h3>
          </Reveal>
        </div>

        <div className="relative marquee-mask overflow-hidden w-full h-56 md:h-64 flex items-center">
          <div className="flex animate-marquee-impact gap-12 whitespace-nowrap">
            {[...trustedBy, ...trustedBy, ...trustedBy].map((brand, i) => (
              <div 
                key={i} 
                className="inline-flex items-center justify-center bg-white border border-gray-100 rounded-[3rem] p-10 w-[300px] md:w-[400px] h-40 md:h-52 shadow-sm hover:shadow-xl hover:border-[#ff9800] transition-all duration-500 group flex-shrink-0"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-20 md:max-h-24 object-contain filter grayscale group-hover:filter-none opacity-40 group-hover:opacity-100 transition-all duration-500" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* PARALLEL LINES MOVING LEFT UNDER TRUSTED BY */}
        <div className="parallel-container bottom-0">
          <div className="parallel-line blue animate-left" style={{ bottom: '2px', animationDelay: '0s' }}></div>
          <div className="parallel-line orange animate-left" style={{ bottom: '6px', animationDelay: '1.5s' }}></div>
          <div className="parallel-line blue animate-left" style={{ bottom: '4px', animationDelay: '0.5s', width: '350px' }}></div>
        </div>
      </section>

      {/* Social Mission Section - INTENSIFIED BLUE ENERGY LINES */}
      <section className="py-48 bg-[#001a33] text-white text-center relative overflow-hidden">
        {/* MULTIPLE VERTICAL BLUE ENERGY LINES ACROSS BACKGROUND */}
        <div className="energy-line-v left-[5%] opacity-20" style={{ animationDelay: '1s', height: '60%' }}></div>
        <div className="energy-line-v left-[15%] opacity-40" style={{ animationDelay: '3s', height: '50%' }}></div>
        <div className="energy-line-v left-[25%] opacity-10" style={{ animationDelay: '0s', height: '70%' }}></div>
        <div className="energy-line-v left-[35%] opacity-30" style={{ animationDelay: '5s', height: '40%' }}></div>
        <div className="energy-line-v left-[45%] opacity-20" style={{ animationDelay: '2s', height: '80%' }}></div>
        <div className="energy-line-v left-[55%] opacity-40" style={{ animationDelay: '7s', height: '30%' }}></div>
        <div className="energy-line-v left-[65%] opacity-10" style={{ animationDelay: '4s', height: '90%' }}></div>
        <div className="energy-line-v left-[75%] opacity-30" style={{ animationDelay: '1s', height: '50%' }}></div>
        <div className="energy-line-v left-[85%] opacity-40" style={{ animationDelay: '6s', height: '60%' }}></div>
        <div className="energy-line-v left-[95%] opacity-20" style={{ animationDelay: '8s', height: '40%' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal type="up" className="flex flex-col items-center">
            <div className="inline-flex items-center space-x-3 bg-[#ff9800]/10 border border-[#ff9800]/20 px-6 py-2 rounded-full mb-8 backdrop-blur-md">
              <Heart size={16} className="text-[#ff9800] animate-pulse" />
              <span className="text-[#ff9800] font-black tracking-[0.3em] uppercase text-[10px]">Social Impact Protocol</span>
            </div>

            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-16 leading-none">
              Social <span className="text-[#ff9800] italic">Mission.</span>
            </h2>

            {/* Glowing Mission Card */}
            <div 
              className="max-w-4xl mx-auto bg-white/5 p-16 md:p-24 rounded-[4rem] border border-white/10 backdrop-blur-xl relative group transition-all duration-700 hover:scale-[1.02]"
              style={{ animation: 'mission-glow 4s infinite ease-in-out' }}
            >
              {/* Corner Brackets */}
              <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-[#ff9800]/30 rounded-tl-3xl group-hover:w-16 group-hover:h-16 transition-all"></div>
              <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-[#ff9800]/30 rounded-br-3xl group-hover:w-16 group-hover:h-16 transition-all"></div>

              <p className="text-2xl md:text-4xl font-bold leading-tight text-gray-200 relative z-10">
                <span className="text-[#ff9800] text-6xl font-serif absolute -left-6 -top-4 opacity-50">"</span>
                We are dedicated to <span className="text-white underline decoration-[#ff9800]/50 underline-offset-8">reducing the rural–urban digital divide</span> and empowering government school students with the same tech stack used in top-tier institutions.
                <span className="text-[#ff9800] text-6xl font-serif absolute -right-4 bottom-0 opacity-50 translate-y-6">"</span>
              </p>

              <div className="mt-12 flex items-center justify-center space-x-8 opacity-50 group-hover:opacity-100 transition-opacity">
                 <div className="h-px w-12 bg-white/20"></div>
                 <Flag size={24} className="text-[#ff9800]" />
                 <div className="h-px w-12 bg-white/20"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Impact;