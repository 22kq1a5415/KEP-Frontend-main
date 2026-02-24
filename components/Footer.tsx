import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Linkedin, Instagram, Youtube, 
  Facebook, ShieldCheck, Globe, ChevronUp 
} from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../constants.tsx';
import Logo from './Logo.tsx';

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED: Social Links with your specific URLs
  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: "https://www.linkedin.com/company/keshava-elite-projects/" 
    },
    { 
      Icon: Instagram, 
      href: "https://share.google/QTYzOQBTaPEKd7P7f" 
    },
    { 
      Icon: Youtube, 
      href: "#" 
    },
    { 
      Icon: Facebook, 
      href: "#" 
    }
  ];

  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          
          {/* 1. BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center space-x-5 group">
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <Logo className="h-full w-full object-contain filter brightness-110 drop-shadow-[0_0_12px_rgba(212,175,55,0.2)]" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-[0.9] py-1">
                  <span className="bg-gradient-to-br from-[#D4AF37] via-[#C5A028] to-[#2E8B57] bg-clip-text text-transparent filter contrast-125 brightness-110">
                    KESHAVA ELITE
                    <br />
                    PROJECTS
                  </span>
                </h3>
                <p className="text-[11px] text-[#ff9800] font-black uppercase tracking-[0.2em] flex items-center mt-2">
                  <ShieldCheck size={14} className="mr-2" /> Authorized Entity
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed opacity-80 max-w-xs italic">
              Empowering Future Innovators Through Robotics & STEM Excellence.
            </p>
          </div>

          {/* 2. NAVIGATION */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-[0.3em] mb-10 border-l-4 border-[#ff9800] pl-4">Navigation</h4>
            <ul className="space-y-5">
              {NAVIGATION_LINKS.filter(l => !l.children).map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-xl font-bold hover:text-[#ff9800] hover:pl-3 transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-[0.3em] mb-10 border-l-4 border-[#ff9800] pl-4">Contact Us</h4>
            <ul className="space-y-8">
              <li className="flex items-center space-x-5 group cursor-pointer">
                <div className="transition-transform group-hover:scale-125 group-hover:rotate-12 bg-white/5 p-3 rounded-xl">
                  <Mail size={24} className="text-[#ff9800]" />
                </div>
                <span className="text-xl font-bold group-hover:text-white transition-colors">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-center space-x-5 group cursor-pointer">
                <div className="transition-transform group-hover:scale-125 group-hover:rotate-12 bg-white/5 p-3 rounded-xl">
                  <Phone size={24} className="text-[#ff9800]" />
                </div>
                <span className="text-xl font-bold group-hover:text-white transition-colors">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-5 group cursor-pointer">
                <div className="transition-transform group-hover:translate-y-[-5px] bg-white/5 p-3 rounded-xl">
                  <MapPin size={24} className="text-[#ff9800]" />
                </div>
                <span className="text-lg font-bold leading-relaxed group-hover:text-white">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* 4. SOCIAL HUB - UPDATED WITH EXTERNAL LINKS */}
          <div>
            <h4 className="text-white font-black uppercase text-sm tracking-[0.3em] mb-10 border-l-4 border-[#ff9800] pl-4">Social Hub</h4>
            <div className="flex gap-5">
              {socialLinks.map(({ Icon, href }, i) => (
                <a 
                  key={i}
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center 
                             border border-white/10 transition-all duration-500
                             hover:bg-[#ff9800] hover:text-white 
                             hover:scale-110 hover:rotate-[360deg] shadow-lg hover:shadow-[#ff9800]/40"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM TIER */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[12px] font-black uppercase tracking-[0.4em] text-gray-400">
          <p className="hover:text-white transition-colors duration-300 cursor-default">
            © 2022 - 2026 Keshava Elite Projects Pvt. Ltd.
          </p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-[#ff9800] transition-colors duration-300">
              Privacy Protocol
            </Link>
            <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-inner transition-all hover:bg-white/10">
               <Globe size={14} className="text-[#ff9800] animate-pulse" />
               <span className="text-[11px] md:text-sm text-gray-300 tracking-widest font-bold">
                 Digital Gateway: India
               </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;