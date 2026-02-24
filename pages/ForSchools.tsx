import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Rocket, ShieldCheck, Users, Zap, 
  CheckCircle, Smartphone, Award, GraduationCap, 
  Star, ExternalLink, Settings, Layout, Link as LinkIcon, Terminal 
} from 'lucide-react';
import { ASSETS } from '../constants.tsx';

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

const ForSchools: React.FC = () => {
  // REMOVAL LOGIC: Specifically filtering out by the image links provided
  const schoolPartners = (ASSETS.CLIENTS || []).filter(client => {
    const logoUrl = client.logo || "";
    return (
      !logoUrl.includes("vm0w2Ps7") && // APSSDC
      !logoUrl.includes("4y6KrKQP") && // Micro Small and Medium (MSME)
      !logoUrl.includes("sxqn0NwF") && // NSDC
      !logoUrl.includes("Hxtz9KDZ") && // DPIIT
      client.name !== "Infosys" && 
      client.name !== "Great Learning"
    );
  });
  
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whyChooseUs = [
    {
      title: "Cutting Edge Labs",
      desc: "Transforming classrooms into innovation labs with turnkey STEM & Robotics setups.",
      icon: <Settings />
    },
    {
      title: "Learning Management System",
      desc: "Digital ecosystems including LMS platforms to manage and scale educational excellence.",
      icon: <Layout />
    },
    {
      title: "End-to-End Services",
      desc: "Comprehensive support from hardware kits to teacher training and mentorship.",
      icon: <LinkIcon />
    },
    {
      title: "Future Ready Curriculum",
      desc: "Structured K1–K12 roadmap from block coding to Python.",
      icon: <Terminal />
    }
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      <style>{`
        @keyframes energy-pulse {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes energy-pulse-v {
          0% { transform: translateY(100%); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-200%); opacity: 0; }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes float-boxes {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.2; }
          100% { transform: translateY(-800px) rotate(360deg); opacity: 0; }
        }
        @keyframes marquee-l {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .reveal { opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; }
        .reveal-up { transform: translateY(40px); }
        .reveal-up.active { transform: translateY(0); }
        .reveal-left { transform: translateX(-40px); }
        .reveal-left.active { transform: translateX(0); }
        .reveal-right { transform: translateX(40px); }
        .reveal-right.active { transform: translateX(0); }
        
        .energy-pulse-line {
          position: absolute;
          height: 2px;
          width: 400px;
          background: linear-gradient(90deg, transparent, #ff9800 50%, transparent);
          box-shadow: 0 0 15px #ff9800;
          animation: energy-pulse 6s linear infinite;
          z-index: 1;
        }
        .energy-pulse-v {
          position: absolute;
          width: 1.5px;
          height: 300px;
          background: linear-gradient(180deg, transparent, #0056b3 50%, transparent);
          box-shadow: 0 0 10px #0056b3;
          animation: energy-pulse-v 10s linear infinite;
          z-index: 1;
        }
        .tech-box {
          position: absolute;
          background: rgba(255, 152, 0, 0.1);
          border: 1px solid rgba(255, 152, 0, 0.2);
          bottom: -150px;
          animation: float-boxes 15s infinite linear;
          z-index: 0;
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .animate-marquee-l {
          animation: marquee-l 40s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#f8fbff] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="energy-pulse-line top-[15%]" style={{ animationDuration: '6s', animationDelay: '0s' }}></div>
          <div className="energy-pulse-line top-[30%]" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
          <div className="energy-pulse-line top-[50%]" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
          <div className="energy-pulse-line top-[70%]" style={{ animationDuration: '11s', animationDelay: '1s' }}></div>
          <div className="energy-pulse-line top-[85%]" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>

          <div className="energy-pulse-v left-[10%]" style={{ animationDuration: '12s', animationDelay: '0s' }}></div>
          <div className="energy-pulse-v left-[25%]" style={{ animationDuration: '15s', animationDelay: '3s' }}></div>
          <div className="energy-pulse-v left-[40%]" style={{ animationDuration: '10s', animationDelay: '6s' }}></div>
          <div className="energy-pulse-v left-[60%]" style={{ animationDuration: '14s', animationDelay: '2s' }}></div>
          <div className="energy-pulse-v left-[75%]" style={{ animationDuration: '11s', animationDelay: '5s' }}></div>
          <div className="energy-pulse-v left-[90%]" style={{ animationDuration: '16s', animationDelay: '1s' }}></div>

          <div className="tech-box w-32 h-32 left-[15%] bg-blue-600/5 border-blue-600/10" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
          <div className="tech-box w-48 h-48 left-[55%] bg-[#ff9800]/5 border-[#ff9800]/10" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
          <div className="tech-box w-24 h-24 left-[80%] bg-blue-600/5 border-blue-600/10" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>
          
          <div className="absolute inset-0 opacity-[0.07]" style={{ 
            backgroundImage: 'linear-gradient(#0056b3 0.5px, transparent 0.5px), linear-gradient(90deg, #0056b3 0.5px, transparent 0.5px)', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-24 text-center md:text-left">
          <div className="max-w-5xl">
            <Reveal type="right">
              <div className="inline-flex items-center space-x-3 bg-blue-600/10 border border-blue-600/20 px-6 py-2.5 rounded-full mb-8">
                <Star size={14} className="text-blue-500 fill-current" />
                <span className="text-blue-500 font-black tracking-widest uppercase text-xs">Premium Innovation Partner</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-[1.02] tracking-tight">
                Empower <span className="italic text-blue-700">Young Minds</span> <br/> 
                To Build The <span className="text-[#ff9800]">Future.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-3xl font-medium mx-auto md:mx-0">
                We bring world-class STEM Robotics and AI labs directly to your school.
              </p>
              
              <Link to="/contact" className="bg-blue-700 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-800 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,86,179,0.3)] transition-all shadow-2xl flex items-center w-fit mx-auto md:mx-0 group">
                Book a Lab Demo 
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL NETWORK */}
      <section className="bg-moving-tech py-40 bg-white overflow-hidden text-center relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="energy-pulse-line top-[20%]" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
          <div className="energy-pulse-line top-[50%]" style={{ animationDuration: '10s', animationDelay: '0s' }}></div>
          <div className="energy-pulse-line top-[80%]" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>

          <div className="energy-pulse-v left-[20%]" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
          <div className="energy-pulse-v left-[50%]" style={{ animationDuration: '15s', animationDelay: '0s' }}></div>
          <div className="energy-pulse-v left-[80%]" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-6 mb-24 relative z-10">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">
              Trusted by Leading <br/><span className="text-blue-700">Educational Institutions.</span>
            </h2>
            <p className="text-gray-400 font-black uppercase tracking-[0.5em] text-[10px]">
              Building an Innovation Ecosystem Across India
            </p>
          </Reveal>
        </div>
        
        <div className="relative marquee-mask overflow-hidden z-10">
          <div className="animate-marquee-l flex items-center gap-12 py-12 px-6 w-max">
            {[...schoolPartners, ...schoolPartners, ...schoolPartners].map((client, i) => (
              <div 
                key={i} 
                className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-[3rem] p-12 w-[400px] h-64 shadow-sm flex items-center justify-center group flex-shrink-0 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:border-[#ff9800]"
              >
                 <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-32 object-contain transition-all duration-500" 
                 />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US? */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase">
              Why <span className="text-[#ff9800]">Choose Us?</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {whyChooseUs.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border-l-8 
                    ${activeTab === idx 
                      ? "bg-white shadow-2xl border-[#ff9800] scale-105 -translate-y-2" 
                      : "bg-transparent border-transparent opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                    } hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${activeTab === idx ? "text-[#ff9800]" : "text-gray-400"}`}>
                      {/* DO cast element to any to allow custom props like 'size' on Lucide icons during cloning */}
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">{item.title}</h3>
                  </div>
                  {activeTab === idx && (
                    <p className="text-gray-500 font-medium leading-relaxed animate-reveal-up">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-[#001a33] rounded-[4rem] aspect-square p-12 flex items-center justify-center relative overflow-hidden shadow-3xl hover:scale-[1.02] transition-transform duration-700">
                <div className="relative z-10 text-white text-center">
                  <div className="w-32 h-32 bg-[#ff9800] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce-slow">
                    {/* DO cast element to any to allow custom props like 'size' on Lucide icons during cloning */}
                    {React.cloneElement(whyChooseUs[activeTab].icon as React.ReactElement<any>, { size: 64 })}
                  </div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                    {whyChooseUs[activeTab].title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMPOWER SECTION */}
      <section className="relative py-40 bg-[#001a33] overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="energy-pulse-line top-[15%]" style={{ animationDuration: '4s', animationDelay: '0s' }}></div>
          <div className="energy-pulse-line top-[40%]" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
          <div className="energy-pulse-line top-[70%]" style={{ animationDuration: '5s', animationDelay: '3s' }}></div>
          <div className="tech-box w-20 h-20 left-[10%]" style={{ animationDelay: '0s' }}></div>
          <div className="tech-box w-28 h-28 left-[80%]" style={{ animationDelay: '5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center space-x-3 bg-[#ff9800]/20 border border-[#ff9800]/30 px-6 py-2 rounded-full mb-8">
              <Zap size={16} className="text-[#ff9800]" />
              <span className="text-white font-black tracking-[0.4em] uppercase text-[10px]">Empowering the Future</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter">
              Empowering <br/> <span className="text-[#ff9800]">Government Schools.</span>
            </h2>
            <p className="text-blue-100/70 text-xl font-medium max-w-3xl mx-auto mb-12">
              Reducing the rural-urban digital divide by delivering top-tier robotics tools and building an innovation culture early.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5. ECOSYSTEM CARDS */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(#0056b3 1px, transparent 1px), linear-gradient(90deg, #0056b3 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>

        <style>{`
          @keyframes gentle-float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          .floating-icon {
            animation: gentle-float 4s ease-in-out infinite;
          }
        `}</style>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                icon: <Cpu />, 
                title: "In-Campus Robotics Lab", 
                desc: "Turnkey lab setup with state-of-the-art processors and kits." 
              },
              { 
                icon: <Users />, 
                title: "Teacher Training Program", 
                desc: "Empowering existing staff with skills to lead innovation." 
              },
              { 
                icon: <Rocket />, 
                title: "Olympiad Prep Center", 
                desc: "Dedicated mentoring for World Robotics Olympiad." 
              }
            ].map((f, i) => (
              <Reveal key={i} delay={`delay-${i * 100}`}>
                <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:scale-105 hover:shadow-2xl hover:border-[#ff9800] transition-all h-full group">
                  <div className="bg-white text-blue-700 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 shadow-sm transition-all duration-500 group-hover:bg-[#ff9800] group-hover:text-white group-hover:rotate-[360deg] floating-icon">
                    {/* DO cast element to any to allow custom props like 'size' on Lucide icons during cloning */}
                    {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  
                  <h4 className="text-2xl font-black mb-6 text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForSchools;