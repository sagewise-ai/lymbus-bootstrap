import React from 'react';
import { 
  X, 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown,
  Clock, 
  Users, 
  MessageSquare, 
  AlertCircle,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Activity,
  BrainCircuit,
  LayoutDashboard,
  Info,
  ArrowDownRight,
  MapPin,
  Building2,
  Phone,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Heart,
  Stethoscope,
  DollarSign
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell,
  PieChart,
  Pie
} from 'recharts';

interface LocationDetailViewProps {
  location: any;
  onClose: () => void;
}

const weeklyData = [
  { day: 'Mon', satisfaction: 82, volume: 450 },
  { day: 'Tue', satisfaction: 85, volume: 510 },
  { day: 'Wed', satisfaction: 88, volume: 480 },
  { day: 'Thu', satisfaction: 90, volume: 420 },
  { day: 'Fri', satisfaction: 84, volume: 550 },
  { day: 'Sat', satisfaction: 78, volume: 300 },
  { day: 'Sun', satisfaction: 80, volume: 250 },
];

const departmentBreakdown = [
  { name: 'Cardiology', score: 92, status: 'Optimal' },
  { name: 'Neurology', score: 88, status: 'Optimal' },
  { name: 'Emergency', score: 65, status: 'Critical' },
  { name: 'Pediatrics', score: 84, status: 'Good' },
];

const sentimentDistribution = [
  { name: 'Positive', value: 68, color: '#10b981' },
  { name: 'Neutral', value: 18, color: '#f59e0b' },
  { name: 'Negative', value: 14, color: '#ef4444' },
];

const sentimentCategories = [
  { name: 'Staff Friendliness', score: 88, change: 4.2, icon: Users },
  { name: 'Wait Time', score: 62, change: -2.1, icon: Clock },
  { name: 'Cleanliness', score: 91, change: 1.8, icon: Sparkles },
  { name: 'Care Quality', score: 85, change: 3.0, icon: Stethoscope },
  { name: 'Billing Experience', score: 58, change: -0.4, icon: DollarSign },
];

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-emerald-600';
  if (score >= 60) return 'text-amber-500';
  return 'text-red-500';
};

const getBarColor = (score: number) => {
  if (score >= 80) return '#10b981';
  if (score >= 60) return '#f59e0b';
  return '#ef4444';
};

const METRIC_DESCRIPTIONS: Record<string, string> = {
  "Experience Score": "Overall patient experience score calculated from all departments in this location.",
  "Response Rate": "The percentage of patients who completed their surveys out of the total requests sent.",
  "Positive Feedback": "Percentage of surveys containing positive or favorable sentiment.",
  "Negative Feedback": "Percentage of surveys containing critical or negative sentiment."
};

const StatCard = ({ title, value, change, positive = true, icon: Icon, colorClass, delay = 0, index = 0 }: any) => {
  const [showInfo, setShowInfo] = React.useState(false);
  const rainbowClasses = ['rainbow-card-blue', 'rainbow-card-green', 'rainbow-card-yellow', 'rainbow-card-red'];

  return (
    <Motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-card p-4 style={{borderRadius: "24px"}} border transition-all position-relative border-brand-border hover:shadow-lg hover:border-brand-blue/20 ${rainbowClasses[index % 4]}`}
    >
      <div className="d-d-flex align-align-items-center gap-2 mb-4">
        <div className={colorClass}>
          <Icon size={16} />
        </div>
        <div className="d-d-flex align-align-items-center gap-1.5 group/info position-position-relative">
          <h4 className="text-xs fw-bold text-brand-dark text-uppercase tracking-wider">{title}</h4>
          <div 
            className="text-brand-gray/40 hover:text-brand-blue transition-colors cursor-help"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <Info size={12} />
          </div>
          
          <AnimatePresence>
            {showInfo && (
              <Motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                className="position-position-absolute bottom-full start-0 mb-2 w-48 p-3 bg-brand-dark text-white leading-relaxed rounded-3 shadow-xl z-50 pe-none" style={{'fontSize':'10px'}}
              >
                {METRIC_DESCRIPTIONS[title] || "Metric details not available."}
                <div className="position-position-absolute top-full left-4 border-8 border-transparent border-t-brand-dark" />
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <p className="fw-bold text-brand-dark leading-tight mb-2" style={{'fontSize':'32px'}}>{value}</p>
      <div className="d-d-flex align-align-items-center gap-1">
        {positive ? <ArrowUpRight size={14} className="text-green-500" /> : <ArrowDownRight size={14} className="text-red-500" />}
        <span className={`style={{color: "12px"}} fw-bold ${positive ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
        <span className="text-brand-gray ml-1" style={{'fontSize':'12px'}}>vs last month</span>
      </div>
    </Motion.div>
  );
};

export const LocationDetailView: React.FC<LocationDetailViewProps> = ({ location, onClose }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-bg min-h-screen pb-20"
    >
      {/* Header */}
      <div className="position-sticky top-0 bg-card border-bottom border-brand-border z-20 px-4 lg:px-8 py-4 d-d-flex align-align-items-center justify-content-between">
        <div className="d-d-flex align-align-items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-brand-bg rounded-3 text-brand-gray transition-all d-d-flex align-align-items-center gap-2 group border border-transparent hover:border-brand-border"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="d-none sm:inline fw-bold text-xs text-uppercase tracking-widest">Dashboard</span>
          </button>
          <div className="h-6 bg-brand-border d-none sm:d-block" style={{'width':'1px'}} />
          <div className="d-d-flex d-flex-column">
            <h2 className="text-lg fw-bold text-brand-dark leading-none">{location.name}</h2>
          </div>
        </div>
        <div className="d-d-flex align-align-items-center gap-3">
          <button onClick={onClose} className="p-2 hover:bg-red-50 hover:text-red-500 text-brand-gray transition-colors border border-transparent hover:border-red-100" style={{'borderRadius':'12px'}}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto">
        {/* KPI Grid */}
        <div className="d-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard 
            title="Experience Score" 
            value={location.rating || "4.5/5"} 
            change="2.4%" 
            icon={Activity} 
            colorClass="text-brand-blue" 
            delay={0.1} 
            index={0}
          />
          <StatCard 
            title="Response Rate" 
            value={location.rate || "75%"} 
            change="1.2%" 
            icon={TrendingUp} 
            colorClass="text-green-500" 
            delay={0.15} 
            index={1}
          />
          <StatCard 
            title="Positive Feedback" 
            value="85%" 
            change="3.2%" 
            positive={true} 
            icon={ThumbsUp} 
            colorClass="text-green-500" 
            delay={0.2} 
            index={2}
          />
          <StatCard 
            title="Negative Feedback" 
            value={location.negatives || "3%"} 
            change="0.5%" 
            positive={false} 
            icon={AlertCircle} 
            colorClass="text-red-500" 
            delay={0.25} 
            index={3}
          />
        </div>

        {/* Charts Section */}
        <div className="d-grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-8 bg-card p-4 border border-brand-border shadow-sm d-d-flex d-flex-column" style={{'borderRadius':'24px'}}>
            <div className="d-d-flex align-align-items-center justify-content-between mb-8">
              <div className="d-d-flex align-align-items-center gap-3">
                <div className="p-2 bg-brand-bg text-brand-blue" style={{'borderRadius':'12px'}}>
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-lg fw-bold text-brand-dark">Facility Activity Trend</h3>
                  <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Patient Volume vs Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="d-flex-fill w-100" style={{'minHeight':'300px'}}>
              {isMounted && (
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSatisfy" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--brand-blue)" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="var(--brand-blue)" stopOpacity={0.01}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }}
                    />
                    <RechartsTooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        backgroundColor: 'var(--card)',
                        padding: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="var(--brand-blue)" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSatisfy)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 d-d-flex">
            <div className="bg-brand-dark p-8 text-white position-position-relative overflow-d-none d-d-flex d-flex-column justify-content-between shadow-xl w-100 group" style={{'borderRadius':'24px'}}>
              <div className="position-position-absolute top-0 end-0 p-12 opacity-10 pe-none group-hover:scale-125 transition-transform duration-700">
                <BrainCircuit size={160} />
              </div>
              <div className="position-position-relative z-10">
                <div className="d-d-flex align-align-items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md d-d-flex align-align-items-center justify-content-center border border-white/10" style={{'borderRadius':'12px'}}>
                    <Sparkles size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="fw-bold text-uppercase" style={{'letterSpacing':'0.2em', 'fontSize':'10px'}}>Lymbus AI</h4>
                    <p className="text-white/40 fw-bold text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Facility Insight</p>
                  </div>
                </div>
                <h3 className="text-2xl fw-bold mb-4 leading-tight">Operational Bottleneck Detected</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-8 fw-medium">
                  Patient satisfaction at <span className="text-brand-blue fw-bold text-decoration-underline">{location.name}</span> is being throttled by high wait times in the Emergency Wing during peak hours (2 PM - 6 PM).
                </p>
              </div>
              
              <div className="position-position-relative z-10">
                <button className="w-100 bg-brand-blue text-white py-4 fw-bold text-xs text-uppercase tracking-widest hover:brightness-110 transition-all d-d-flex align-align-items-center justify-content-center gap-2 d-none" style={{'borderRadius':'16px'}}>
                  <LayoutDashboard size={14} />
                  Optimize Resources
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="d-grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-card border border-brand-border p-4 d-d-flex d-flex-column" style={{'borderRadius':'24px'}}>
            <div className="d-d-flex align-align-items-center justify-content-between mb-6">
              <div className="d-d-flex align-align-items-center gap-3">
                <div className="p-2 bg-blue-50 text-brand-blue" style={{'borderRadius':'12px'}}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg fw-bold text-brand-dark">Department Scores</h3>
                  <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Internal Performance Heatmap</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {departmentBreakdown.map((dept, i) => (
                <div key={i} className="d-d-flex align-align-items-center justify-content-between p-4 bg-brand-bg/40 border border-brand-border/50 hover:bg-brand-bg transition-all group" style={{'borderRadius':'16px'}}>
                  <div className="d-d-flex align-align-items-center gap-4">
                    <div className="w-10 h-10 bg-white border border-brand-border d-d-flex align-align-items-center justify-content-center fw-bold text-brand-blue text-sm" style={{'borderRadius':'12px'}}>
                      {dept.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm fw-bold text-brand-dark">{dept.name}</p>
                      <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>{dept.status}</p>
                    </div>
                  </div>
                  <div className="d-d-flex align-align-items-center gap-4">
                    <div className="text-end">
                      <p className="text-sm fw-bold text-brand-dark">{dept.score}%</p>
                      <div className="w-24 h-1.5 bg-brand-bg rounded-circle mt-1 overflow-d-none">
                        <div className="h-100 bg-brand-blue" style={{ width: `${dept.score}%` }} />
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-brand-gray opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-brand-border p-4 d-d-flex d-flex-column" style={{'borderRadius':'24px'}}>
            <div className="d-d-flex align-align-items-center justify-content-between mb-8">
              <div className="d-d-flex align-align-items-center gap-3">
                <div className="p-2.5 bg-red-50 text-red-500 rounded-circle border border-red-100">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="text-lg fw-bold text-brand-dark">Sentiment Analysis</h3>
                  <p className="text-brand-gray fw-bold text-uppercase" style={{'fontSize':'10px', 'letterSpacing':'0.15em'}}>Key Improvement Areas</p>
                </div>
              </div>
              <div className="d-d-flex align-align-items-center gap-1 px-3 py-1.5 bg-red-50 rounded-circle border border-red-100">
                <ArrowUpRight size={11} className="text-red-500" />
                <span className="fw-bold text-red-500" style={{'fontSize':'11px'}}>Critical</span>
              </div>
            </div>

            <div className="d-flex-fill space-y-6">
              {/* Improvement Areas */}
              {[
                { label: 'Wait Times & Intake', mentions: 24, icon: Clock, color: '#ef4444', bgColor: 'bg-red-500', width: '65%' },
                { label: 'Front Desk Comms', mentions: 12, icon: MessageSquare, color: '#f59e0b', bgColor: 'bg-amber-500', width: '40%' },
                { label: 'Facility Cleanliness', mentions: 4, icon: Sparkles, color: 'var(--brand-blue)', bgColor: 'bg-brand-blue', width: '15%' },
              ].map((area, i) => {
                const AreaIcon = area.icon;
                return (
                  <Motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="space-y-2.5"
                  >
                    <div className="d-d-flex align-align-items-center justify-content-between">
                      <div className="d-d-flex align-align-items-center gap-2.5">
                        <AreaIcon size={16} className="text-brand-dark" />
                        <span className="text-xs fw-bold text-brand-dark text-uppercase" style={{'letterSpacing':'0.1em'}}>{area.label}</span>
                      </div>
                      <span className="fw-bold text-brand-gray text-uppercase" style={{'fontSize':'11px', 'letterSpacing':'0.1em'}}>{area.mentions} Mentions</span>
                    </div>
                    <div className="w-100 h-2 bg-light rounded-circle overflow-d-none">
                      <Motion.div
                        className={`h-100 rounded-full ${area.bgColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: area.width }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </Motion.div>
                );
              })}

              {/* Spacer */}
              <div className="d-flex-fill" />

              {/* Urgent Action Required */}
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-5 bg-red-50 border border-red-100 position-position-relative overflow-d-none" style={{'borderRadius':'16px'}}
              >
                {/* Watermark icon */}
                <div className="position-position-absolute -right-2 -bottom-2 pe-none">
                  <AlertCircle size={80} className="text-red-500" />
                </div>
                <div className="d-d-flex align-align-items-start gap-3.5 position-position-relative z-10">
                  <div className="p-2 bg-red-100 rounded-circle d-flex-flex-shrink-0 mt-0.5">
                    <AlertCircle size={16} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="fw-bold text-red-600 text-uppercase mb-1.5" style={{'fontSize':'11px', 'letterSpacing':'0.15em'}}>Urgent Action Required</h4>
                    <p className="text-red-700/80 leading-relaxed fw-medium" style={{'fontSize':'12px'}}>
                      Wait times have spiked by <span className="fw-bold text-red-600 text-decoration-underline decoration-red-300">40%</span> in Dermatology this week. AI suggests immediate resource reallocation to morning intake desks.
                    </p>
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};