
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { BRAND_NAME, TAGLINE } from '../constants';
import { Mail, Lock, ShieldCheck, ChevronRight } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.STUDENT);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email || 'demo@user.com', role);
      navigate(`/dashboard/${role.toLowerCase()}`);
    } catch (err) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border">
        {/* Left Side: Branding */}
        <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link to="/" className="flex items-center space-x-3 mb-12">
              <div className="w-16 h-12 bg-white text-primary rounded-xl flex items-center justify-center font-black text-xl">KEP</div>
              <span className="font-bold text-xl">{BRAND_NAME}</span>
            </Link>
            <h1 className="text-4xl font-black mb-6 leading-tight">Welcome to the Future of STEM</h1>
            <p className="text-blue-100 text-lg leading-relaxed">{TAGLINE}</p>
          </div>
          
          <div className="relative z-10 pt-12">
            <div className="flex items-center space-x-2 text-sm font-bold opacity-80">
              <ShieldCheck size={18} />
              <span>Secure Role-Based Access</span>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-12">
          <div className="max-w-sm mx-auto">
            <h2 className="text-3xl font-black text-dark mb-2">Login</h2>
            <p className="text-gray-500 mb-10">Access your personalized elite learning portal.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Login Role</label>
                <div className="grid grid-cols-2 gap-3">
                  {[UserRole.STUDENT, UserRole.TRAINER, UserRole.HR, UserRole.ADMIN].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all ${role === r ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-light border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 bg-light border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all font-medium"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-gray-500 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-primary font-bold hover:underline">Forgot?</a>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-accent text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-accent/20 hover:bg-orange-600 transition-all flex items-center justify-center space-x-2"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In Now'}</span>
                {!loading && <ChevronRight size={20} />}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500 font-medium">
              Don't have an account? <Link to="/contact" className="text-primary font-bold">Inquire Enrollment</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
