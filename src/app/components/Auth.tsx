import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ChevronLeft, 
  Activity, 
  ShieldCheck, 
  Stethoscope,
  Heart,
  Eye,
  EyeOff
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type AuthMode = 'login' | 'signup' | 'forgot-password';

interface AuthProps {
  onLogin: () => void;
}

const VALUE_PROPS = [
  {
    title: "Advancing Healthcare with AI Insights.",
    description: "Empower your clinical decision-making with real-time benchmarking and predictive analysis.",
    image: "https://images.unsplash.com/photo-1578496479763-c21c718af028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NzA3MDIzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: "AI Insights."
  },
  {
    title: "Seamless Clinical Integration.",
    description: "Connect your existing medical data sources for a unified view of patient outcomes and metrics.",
    image: "https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB1c2luZyUyMHRhYmxldCUyMGNsaW5pYyUyMGhvc3BpdGFsfGVufDF8fHx8MTc3MDcyMzUwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: "Clinical Integration."
  },
  {
    title: "HIPAA-Compliant Security & Privacy.",
    description: "Built on enterprise-grade infrastructure to ensure patient data remains private and secure at all times.",
    image: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZGlnaXRhbCUyMGhlYWx0aCUyMHRlY2hub2xvZ3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNzAyNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: "Security & Privacy."
  }
];

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VALUE_PROPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMode = (newMode: AuthMode) => {
    setMode(newMode);
    setShowPassword(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (mode === 'login' || mode === 'signup') {
        onLogin();
      } else {
        setMode('login');
      }
    }, 1500);
  };

  const formVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-brand-bg d-d-flex align-align-items-center justify-content-center p-4 sm:p-4 lg:p-8 font-sans">
      <div className="w-100 bg-card shadow-2xl border border-brand-border overflow-d-none d-d-flex d-flex-column md:d-flex-row" style={{'maxWidth':'1100px', 'borderRadius':'24px', 'minHeight':'700px'}}>
        
        {/* Left Side: Value Proposition Carousel */}
        <div className="w-100 md:w-1/2 position-position-relative bg-brand-dark d-d-flex d-flex-column justify-content-between p-12 overflow-d-none border-bottom md:border-b-0 md:border-r border-brand-border">
          {/* Background Images with Crossfade */}
          <div className="position-position-absolute top-0 bottom-0 start-0 end-0 z-0 overflow-d-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.25, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="position-position-absolute top-0 bottom-0 start-0 end-0 grayscale mix-blend-overlay"
              >
                <ImageWithFallback 
                  src={VALUE_PROPS[currentSlide].image} 
                  alt="Clinical Environment"
                  className="object-fit-cover w-100 h-100"
                />
              </motion.div>
            </AnimatePresence>
            <div className="position-position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-to-br from-brand-dark/80 via-brand-dark/60 to-transparent z-1" />
          </div>

          <div className="position-position-relative z-10">
            <div className="d-d-flex align-align-items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-4 bg-brand-blue d-d-flex align-align-items-center justify-content-center text-white shadow-lg shadow-brand-blue/30">
                <Activity size={28} />
              </div>
              <div>
                <h1 className="text-2xl fw-bold text-white tracking-tight leading-none">Lymbus AI</h1>
                <span className="fw-bold text-brand-blue text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Medical Intelligence</span>
              </div>
            </div>

            <div className="mt-16" style={{'height':'200px'}}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl fw-bold text-white" style={{'lineHeight':'1.1', 'maxWidth':'340px'}}>
                    {VALUE_PROPS[currentSlide].title.includes(VALUE_PROPS[currentSlide].highlight) ? (
                      <>
                        {VALUE_PROPS[currentSlide].title.split(VALUE_PROPS[currentSlide].highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="text-brand-blue">{VALUE_PROPS[currentSlide].highlight}</span>
                            )}
                          </span>
                        ))}
                      </>
                    ) : (
                      VALUE_PROPS[currentSlide].title
                    )}
                  </h2>
                  <p className="text-gray-300 text-lg fw-medium leading-relaxed" style={{'maxWidth':'380px'}}>
                    {VALUE_PROPS[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Slide Indicators */}
            <div className="d-d-flex gap-2 mt-8">
              {VALUE_PROPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-brand-blue' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>

          <div className="position-position-relative z-10 d-d-flex d-flex-wrap gap-4 mt-auto">
            {[
              { icon: ShieldCheck, label: 'HIPAA Compliant' },
              { icon: Stethoscope, label: 'Clinical Accuracy' },
              { icon: Heart, label: 'Patient Centric' }
            ].map((feature, i) => (
              <div key={i} className="d-d-flex align-align-items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 py-2 px-4 rounded-circle shadow-sm">
                <feature.icon size={16} className="text-brand-blue" />
                <span className="fw-bold text-white text-uppercase tracking-wide" style={{'fontSize':'11px'}}>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Forms */}
        <div className="w-100 md:w-1/2 bg-white d-d-flex d-flex-column justify-content-center p-8 sm:p-12 lg:p-16 position-position-relative">
          <AnimatePresence mode="wait">
            {mode === 'login' && (
              <motion.div
                key="login"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-100 mx-auto" style={{'maxWidth':'400px'}}
              >
                <div className="mb-10">
                  <h3 className="text-3xl fw-bold text-brand-dark mb-3">Welcome Back</h3>
                  <p className="text-brand-gray fw-medium">Please enter your credentials to access the clinical dashboard.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">Work Email</label>
                    <div className="position-position-relative group">
                      <div className="position-position-absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-100 h-14 pl-12 pr-4 bg-brand-bg border border-brand-border rounded-4 text-brand-dark fw-medium placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        placeholder="doctor@hospital.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="d-d-flex justify-content-between align-align-items-center mb-1">
                      <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">Password</label>
                      <button 
                        type="button"
                        onClick={() => toggleMode('forgot-password')}
                        className="text-xs fw-bold text-brand-blue hover:underline underline-offset-4"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="position-position-relative group">
                      <div className="position-position-absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        className="w-100 h-14 pl-12 pr-12 bg-brand-bg border border-brand-border rounded-4 text-brand-dark fw-medium placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        placeholder="••••••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="position-position-absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-blue transition-colors focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-100 h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-4 fw-bold shadow-xl shadow-brand-blue/20 d-d-flex align-align-items-center justify-content-center gap-2 group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-circle animate-spin" />
                    ) : (
                      <>
                        Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-top border-brand-border text-center">
                  <p className="text-sm text-brand-gray fw-medium">
                    New to Lymbus AI? {' '}
                    <button 
                      onClick={() => toggleMode('signup')}
                      className="text-brand-blue fw-bold hover:underline underline-offset-4"
                    >
                      Request access
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {mode === 'signup' && (
              <motion.div
                key="signup"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-100 mx-auto" style={{'maxWidth':'400px'}}
              >
                <div className="mb-10">
                  <h3 className="text-3xl fw-bold text-brand-dark mb-3">Create Account</h3>
                  <p className="text-brand-gray fw-medium">Join our network of healthcare professionals for data-driven excellence.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="d-grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">First Name</label>
                      <div className="position-position-relative group">
                        <div className="position-position-absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                          <User size={16} />
                        </div>
                        <input 
                          type="text" 
                          required
                          className="w-100 h-12 pl-10 pr-4 bg-brand-bg border border-brand-border rounded-3 text-brand-dark fw-medium focus:outline-none focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-100 h-12 px-4 bg-brand-bg border border-brand-border rounded-3 text-brand-dark fw-medium focus:outline-none focus:border-brand-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">Work Email</label>
                    <div className="position-position-relative group">
                      <div className="position-position-absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-100 h-12 pl-12 pr-4 bg-brand-bg border border-brand-border rounded-3 text-brand-dark fw-medium focus:outline-none focus:border-brand-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">Password</label>
                    <div className="position-position-relative group">
                      <div className="position-position-absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Lock size={18} />
                      </div>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        className="w-100 h-12 pl-12 pr-12 bg-brand-bg border border-brand-border rounded-3 text-brand-dark fw-medium focus:outline-none focus:border-brand-blue transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="position-position-absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-blue transition-colors focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="d-d-flex align-align-items-start gap-3 py-2">
                    <input type="checkbox" required className="mt-1 accent-brand-blue" id="terms" />
                    <label htmlFor="terms" className="text-brand-gray fw-medium leading-relaxed" style={{'fontSize':'11px'}}>
                      I agree to the <button type="button" className="text-brand-blue fw-bold">Terms of Service</button> and <button type="button" className="text-brand-blue fw-bold">Data Privacy Protocol</button> (HIPAA compliant).
                    </label>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-100 h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-4 fw-bold shadow-xl shadow-brand-blue/20 d-d-flex align-align-items-center justify-content-center gap-2 group transition-all disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-circle animate-spin" />
                    ) : (
                      <>
                        Create Account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-top border-brand-border text-center">
                  <p className="text-sm text-brand-gray fw-medium">
                    Already have an account? {' '}
                    <button 
                      onClick={() => toggleMode('login')}
                      className="text-brand-blue fw-bold hover:underline underline-offset-4"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </motion.div>
            )}

            {mode === 'forgot-password' && (
              <motion.div
                key="forgot"
                variants={formVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-100 mx-auto" style={{'maxWidth':'400px'}}
              >
                <button 
                  onClick={() => toggleMode('login')}
                  className="d-d-flex align-align-items-center gap-2 text-brand-gray fw-bold text-xs text-uppercase tracking-widest mb-8 hover:text-brand-blue transition-colors group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Login
                </button>

                <div className="mb-10">
                  <h3 className="text-3xl fw-bold text-brand-dark mb-3">Reset Password</h3>
                  <p className="text-brand-gray fw-medium">Enter your email and we'll send you instructions to reset your clinical account access.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs fw-bold text-brand-gray text-uppercase tracking-widest d-d-block ml-1">Work Email</label>
                    <div className="position-position-relative group">
                      <div className="position-position-absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray group-focus-within:text-brand-blue transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        required
                        className="w-100 h-14 pl-12 pr-4 bg-brand-bg border border-brand-border rounded-4 text-brand-dark fw-medium focus:outline-none focus:border-brand-blue transition-all"
                        placeholder="doctor@hospital.com"
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-100 h-14 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-4 fw-bold shadow-xl shadow-brand-blue/20 d-d-flex align-align-items-center justify-content-center gap-2 group transition-all disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-circle animate-spin" />
                    ) : (
                      <>
                        Send Reset Link <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-12 p-4 bg-brand-bg/50 border border-brand-border rounded-4">
                  <p className="text-xs text-brand-gray fw-medium text-center leading-relaxed">
                    Note: For security reasons, if an account exists with this email, you will receive reset instructions within 2-5 minutes.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Branding */}
          <div className="position-position-absolute bottom-8 left-1/2 -translate-x-1/2 text-center w-100 px-8 pe-none">
            <p className="fw-bold text-brand-gray/40 text-uppercase" style={{'fontSize':'10px', 'letterSpacing':'0.2em'}}>
              Lymbus AI © 2026 • Secure Infrastructure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
