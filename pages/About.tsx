import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Quote, Globe, Target, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../constants.tsx';

const Reveal: React.FC<{ children: React.ReactNode; className?: string; type?: 'up' | 'left' | 'right' }> = ({ children, className = '', type = 'up' }) => {
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
    <div ref={ref} className={`reveal ${revealClass} ${isActive ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO HEADER - TECH BLUE GRADIENT */}
      <div 
        className="py-48 relative overflow-hidden text-center"
        style={{
          background: "linear-gradient(rgba(0, 42, 92, 0.85), rgba(0, 86, 179, 0.8)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 px-8 py-3 rounded-full mb-10">
              <Globe size={18} className="text-[#ff9800]" />
              <span className="text-white font-black tracking-[0.4em] uppercase text-[10px]">The Elite Narrative</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-6 leading-none tracking-tighter">
              Who <br/><span className="text-[#ff9800] italic">We Are.</span>
            </h1>
          </Reveal>
        </div>
      </div>

      {/* 2. SNAPSHOT - INTERACTIVE ORANGE ACCENT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Reveal type="up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="w-16 h-1.5 bg-[#ff9800] rounded-full"></div>
                    <h2 className="text-4xl font-black text-[#001a33] tracking-tight uppercase">About Snapshot</h2>
                  </div>
                  <p className="text-gray-700 text-xl font-medium leading-relaxed">
                    Keshava Elite Projects is an educational technology and innovation organization specializing in STEM Robotics Labs and Center of Excellence (COE) Programs.
                  </p>
                </div>
                <div className="bg-[#ff9800] p-12 rounded-[3rem] shadow-2xl shadow-orange-500/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 mb-4">Core Vision</h4>
                  <p className="text-white font-black text-2xl tracking-tight leading-tight">
                    To create India's most impactful Robotics & STEM innovation ecosystem.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. FOUNDERS' MESSAGES - PROFESSIONAL SEQUENCE */}
      <section className="py-40 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal type="up">
            <div className="max-w-5xl mx-auto text-center">
              <Quote size={80} className="text-[#ff9800] mx-auto mb-10 opacity-20" />
              <h3 className="text-[11px] font-black text-[#0056b3] uppercase tracking-[0.5em] mb-12">Leadership Vision</h3>
              
              {/* Rakesh Veerapaneni Message */}
              <div className="space-y-6 mb-16 border-b border-gray-200 pb-16">
                <p className="text-xl md:text-3xl font-black text-[#001a33] leading-tight tracking-tighter">
                  "At <span className="text-[#ff9800]">Keshava Elite Projects</span>, we believe that innovation shouldn't be a privilege—it should be an opportunity available to every student, regardless of their background or geography."
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed max-w-4xl mx-auto italic">
                  Our mission is to bridge the rural-urban digital divide by bringing world-class Robotics, AI, and STEM education to the grassroots level, empowering the next generation of creators.
                </p>
                <div className="flex flex-col items-center mt-8">
                  <div className="w-20 h-20 bg-[#001a33] rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl mb-4 shadow-xl">RV</div>
                  <p className="text-xl font-black text-[#001a33]">Rakesh Veerapaneni</p>
                  <p className="text-[10px] font-black text-[#ff9800] uppercase tracking-widest">Founder, Keshava Elite Projects</p>
                </div>
              </div>

              {/* Mahesh Kalluri Message */}
              <div className="space-y-6">
                <p className="text-xl md:text-3xl font-black text-[#001a33] leading-tight tracking-tighter">
                  "We believe every student deserves exposure to modern technology and hands-on learning."
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-700 leading-relaxed max-w-4xl mx-auto italic">
                  Through structured programs and dedicated mentorship, Keshava Elite Projects supports schools and institutions in building strong technical foundations. Together, we strive to shape students into capable professionals and contributors to the nation’s technological future.
                </p>
                <div className="flex flex-col items-center mt-8">
                  <div className="w-20 h-20 bg-[#0056b3] rounded-[1.5rem] flex items-center justify-center text-white font-black text-2xl mb-4 shadow-xl">MK</div>
                  <p className="text-xl font-black text-[#001a33]">Mahesh Kalluri</p>
                  <p className="text-[10px] font-black text-[#ff9800] uppercase tracking-widest">Co-Founder & CFO</p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0056b3]/5 -skew-x-12 translate-x-20"></div>
      </section>
      {/* 4. SOCIAL MISSION - FULL WIDTH ORANGE IMPACT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#ff9800] rounded-[4rem] p-16 md:p-24 text-white shadow-3xl relative overflow-hidden group">
            {/* Animated Grid Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
              <div className="max-w-2xl">
                {/* HIGHLIGHTED LABEL: Enhanced with a dark border for clear separation */}
                <div className="inline-flex items-center space-x-3 bg-white/30 backdrop-blur-md px-8 py-3 rounded-full mb-10 border border-[#001a33]/10">
                  <Target size={22} className="text-[#001a33]" />
                  <span className="text-[18px] font-black uppercase tracking-[0.3em] text-[#001a33] drop-shadow-sm">Our Social Mission</span>
                </div>

                {/* UPDATED FONT COLOUR: Deep Navy for high-impact readability */}
                <h3 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-10 text-[#001a33]">
                  Reducing the <br/>Rural-Urban <br/>Digital Divide.
                </h3>

                {/* UPDATED FONT COLOUR: Pure White for a clean, sharp look */}
                <p className="text-white text-xl md:text-2xl font-black leading-relaxed">
                  We are dedicated to empowering government school students with the same tech stack used in top-tier institutions.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                 <Link to="/contact" className="bg-[#001a33] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-[#001a33] transition-all flex items-center justify-center gap-4 group shadow-2xl">
                    Collaborate With Us
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;