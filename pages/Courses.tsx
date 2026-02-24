import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Clock, ArrowLeft, ArrowRight, ShieldCheck, Zap, 
  ChevronRight, HandCoins, Info, CheckCircle2, Award, Mail
} from 'lucide-react';
import { COURSE_DATA } from '../constants.tsx';
import { Course } from '../types.ts';

// 1. Internal Reveal Component
const Reveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <div ref={ref} className={`reveal reveal-up ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

// 2. Course Modal - FINAL VERSION WITH ABSOLUTE Z-INDEX FIX
const CourseModal: React.FC<{ course: Course | null; onClose: () => void }> = ({ course, onClose }) => {
  const [step, setStep] = useState<'details' | 'payment' | 'processing' | 'success'>('details');
  const [paymentOption, setPaymentOption] = useState<'pre' | 'post'>('pre');

  if (!course) return null;

  const handlePayment = () => {
    setStep('processing');
    setTimeout(() => setStep('success'), 2500);
  };

  const handleBack = () => {
    if (step === 'details') onClose();
    else setStep('details');
  };

  return (
    /* FIXED: Set z-index to 9999 to force it above the main Header.
       Also used fixed inset-0 to cover the entire screen.
    */
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#001a33]/95 backdrop-blur-xl overflow-hidden font-sans">
      <style>{`
        @keyframes mini-pop {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-mini-pop { animation: mini-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
      `}</style>

      {/* Modal Container */}
      <div className="bg-white rounded-[2.5rem] w-full max-w-4xl h-fit max-h-[92vh] overflow-hidden shadow-2xl relative flex flex-col border border-white/20 animate-mini-pop">
        
        {/* Modal Header bar - Restored original structure */}
        <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between bg-white z-30">
          <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#0056b3]">
                 <Info size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#001a33] uppercase tracking-tighter">
                {course.title}
              </h3>
          </div>
          {/* Close Button inside modal */}
          <button onClick={onClose} className="p-2 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content - Shows all points and original font sizes */}
        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar flex-grow bg-white">
           {step === 'details' && (
             <div className="space-y-10">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                 
                 {/* Left Section: Image and Curriculum */}
                 <div className="lg:col-span-7 space-y-10">
                   <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 aspect-video bg-gray-50">
                      <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-[#ff9800] text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">
                        Premium Track
                      </div>
                   </div>
                   
                   <p className="text-lg md:text-xl text-gray-700 font-bold leading-relaxed tracking-tight border-l-4 border-[#ff9800] pl-6 italic">
                     {course.description}
                   </p>

                   {/* ALL 5 POINTS RESTORED */}
                   <div>
                     <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6">Syllabus Curriculum</h4>
                     <div className="grid grid-cols-1 gap-3">
                       {course.modules?.map((module, i) => (
                         <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-[#ff9800]/20 hover:bg-[#fffcf5] transition-all">
                           <div className="w-8 h-8 bg-[#0056b3] text-white rounded flex items-center justify-center text-sm font-black shrink-0">{i + 1}</div>
                           <span className="font-extrabold text-gray-800 text-sm md:text-base tracking-tight">{module}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* Right Section: Price and Technology */}
                 <div className="lg:col-span-5 space-y-6">
                   <div className="bg-[#001a33] p-8 rounded-[2.5rem] text-white shadow-xl">
                      <h4 className="font-black uppercase tracking-widest text-[11px] mb-6 text-[#ff9800]">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {course.features?.map((f, i) => (
                          <span key={i} className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black border border-white/5 uppercase tracking-wider">{f}</span>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-black uppercase text-gray-400">
                         <div className="flex items-center gap-2 font-bold"><Clock size={18} className="text-[#ff9800]" /> Duration</div>
                         <span className="text-white text-base font-black">{course.duration}</span>
                      </div>
                   </div>

                   <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 text-center">
                      <span className="block text-gray-400 font-black text-[11px] uppercase tracking-[0.2em] mb-2">Settlement Amount</span>
                      <p className="text-5xl font-black text-[#001a33] tracking-tighter mb-8 italic">₹{course.fullPrice.toLocaleString()}</p>
                      
                      <button onClick={() => setStep('payment')} className="w-full bg-[#0056b3] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-[#ff9800] transition-all flex items-center justify-center gap-3 group">
                        Initialize Enrollment <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                   </div>
                 </div>
               </div>
             </div>
           )}

           {/* PAYMENT VIEW */}
           {step === 'payment' && (
             <div className="animate-mini-pop py-10 max-w-2xl mx-auto">
                <div className="text-center mb-10">
                   <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter text-[#001a33]">Settlement Model</h3>
                   <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Select Funding Protocol</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                   <button onClick={() => setPaymentOption('pre')} className={`p-8 rounded-[2.5rem] border-4 text-left transition-all ${paymentOption === 'pre' ? 'border-[#ff9800] bg-orange-50/20 shadow-lg' : 'border-gray-100 bg-white hover:border-blue-100'}`}>
                      <Zap size={28} className={paymentOption === 'pre' ? 'text-[#ff9800]' : 'text-gray-300'} />
                      <h4 className="text-2xl font-black mt-4 uppercase tracking-tight text-[#001a33]">Full-Payment</h4>
                      <p className="text-3xl font-black text-[#0056b3] mt-6 leading-none">₹{course.fullPrice.toLocaleString()}</p>
                   </button>
                   <button onClick={() => setPaymentOption('post')} className={`p-8 rounded-[2.5rem] border-4 text-left transition-all ${paymentOption === 'post' ? 'border-[#ff9800] bg-orange-50/20 shadow-lg' : 'border-gray-100 bg-white hover:border-blue-100'}`}>
                      <HandCoins size={28} className={paymentOption === 'post' ? 'text-[#ff9800]' : 'text-gray-300'} />
                      <h4 className="text-2xl font-black mt-4 uppercase tracking-tight text-[#001a33]">Registration</h4>
                      <p className="text-3xl font-black text-[#0056b3] mt-6 leading-none">₹{(course.registrationFee || 0).toLocaleString()}</p>
                   </button>
                </div>
             </div>
           )}

           {step === 'success' && (
             <div className="py-16 text-center max-w-sm mx-auto animate-mini-pop">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle2 size={56} />
                </div>
                <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter text-[#001a33]">Verified</h3>
                <button onClick={onClose} className="w-full bg-[#001a33] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-[#ff9800] transition-all">Close</button>
             </div>
           )}
        </div>

        {/* Footer with BACK button */}
        {step !== 'success' && (
          <div className="px-8 py-5 border-t border-gray-100 bg-gray-50/50 flex flex-col md:flex-row gap-4">
             <button onClick={handleBack} className="flex items-center justify-center gap-2 bg-white text-gray-400 px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest border border-gray-200 hover:bg-gray-100 shadow-sm">
               <ArrowLeft size={16} /> {step === 'details' ? 'Back to Courses' : 'Go Back'}
             </button>
             {step === 'payment' && (
               <button onClick={handlePayment} className="flex-grow bg-[#001a33] text-white py-4 rounded-xl font-black uppercase text-sm tracking-widest shadow-xl hover:bg-[#ff9800] transition-all">
                 Confirm Selection
               </button>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

// 3. Main Page - MINIMIZED FOOTER LAYER
const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredCategories = COURSE_DATA.filter(c => activeFilter === 'All' || c.title === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#001a33] py-24 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <h1 className="text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
              Elite <span className="text-[#ff9800]">Tracks.</span>
            </h1>
            <p className="text-gray-400 text-sm uppercase tracking-[0.4em] font-bold">Industrial Certification Programs</p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10">
        <div className="flex gap-3 mb-16 overflow-x-auto pb-4 justify-center scrollbar-hide">
          {['All', ...COURSE_DATA.map(c => c.title)].map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === f ? 'bg-[#0056b3] text-white shadow-xl' : 'bg-white text-gray-400 shadow-md border border-gray-100'}`}>{f}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
          {filteredCategories.map((cat) => cat.courses.map(course => (
            <Reveal key={course.id}>
              <button 
                onClick={() => setSelectedCourse(course)} 
                className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:border-[#ff9800] hover:shadow-2xl transition-all duration-500 text-left group w-full flex flex-col h-[380px] shadow-sm relative"
              >
                {/* Visual Header (60% Height) */}
                <div className="h-[60%] overflow-hidden relative bg-gray-100">
                   <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/80 to-transparent"></div>
                   <div className="absolute bottom-3 left-5">
                      <span className="text-white text-[7px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-2 py-1.5 rounded-lg border border-white/10">
                        {course.duration}
                      </span>
                   </div>
                </div>

                {/* Minimized Info Section (40% Height) */}
                <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <div className="flex items-center space-x-2 text-[#ff9800] mb-1">
                       <ShieldCheck size={12} />
                       <span className="font-black text-[7px] uppercase tracking-widest">Certified Track</span>
                    </div>
                    <h4 className="text-lg font-black text-[#001a33] group-hover:text-[#0056b3] leading-tight uppercase line-clamp-1">
                      {course.title}
                    </h4>
                  </div>
                  <div className="flex justify-between items-end pt-3 border-t border-gray-50">
                     <div className="text-left">
                        <span className="block text-gray-400 font-bold text-[7px] uppercase tracking-widest">Standard Fee</span>
                        <p className="text-[#0056b3] font-black text-lg leading-none">₹{course.fullPrice.toLocaleString()}</p>
                     </div>
                     <div className="w-8 h-8 bg-[#0056b3] text-white rounded-xl flex items-center justify-center group-hover:bg-[#ff9800] group-hover:rotate-12 transition-all shadow-lg">
                        <ArrowRight size={16} />
                     </div>
                  </div>
                </div>
              </button>
            </Reveal>
          )))}
        </div>
      </div>
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  );
};

export default Courses;