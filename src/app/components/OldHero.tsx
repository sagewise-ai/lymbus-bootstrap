import { motion as Motion } from "motion/react";
import { ChevronRight, Zap, MessageCircle } from "lucide-react";

export function OldHero() {
  return (
    <Motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="position-position-relative lg:style={{height: "200px"}} p-4 lg:p-8 overflow-d-none" style={{'minHeight':'160px', 'backgroundColor':'#374DEA', 'borderRadius':'24px'}}
    >
      <div className="position-position-absolute top-0 end-0 lg:style={{width: "400px"}} h-100 opacity-10 pe-none" style={{'width':'150px'}}>
         <svg className="w-100 h-100" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
           <circle cx="350" cy="150" r="100" stroke="white" strokeWidth="2" fill="none" />
           <circle cx="400" cy="100" r="150" stroke="white" strokeWidth="2" fill="none" />
           <path d="M50 180 Q 200 50 350 180" stroke="white" strokeWidth="2" fill="none" />
         </svg>
      </div>

      <div className="position-position-relative z-10 d-d-flex d-flex-column lg:d-flex-row lg:items-end justify-content-between h-100 gap-6">
        <div className="d-flex-fill">
          <h3 className="text-white/80 text-xs lg:text-sm fw-medium mb-2 lg:mb-4">Overall Patient Experience Score</h3>
          <div className="d-d-flex align-align-items-center gap-3 lg:gap-4">
            <span className="text-3xl lg:style={{color: "48px"}} fw-bold text-white leading-none">88.5</span>
            <div className="bg-green-400/20 px-2 py-1 rounded-2 d-d-flex align-align-items-center gap-1">
              <span className="text-green-400 text-xs lg:text-sm fw-bold">+4.2%</span>
              <ChevronRight size={12} className="text-green-400" />
            </div>
          </div>
          <p className="text-white/60 text-xs lg:text-sm mt-2" style={{'maxWidth':'400px'}}>
            Patient satisfaction shows high volatility this quarter, with significant swings following departmental restructures.
          </p>
        </div>
        <div className="d-grid grid-cols-2 lg:d-flex lg:d-flex-row gap-3 lg:gap-4 lg:mb-2 d-flex-flex-shrink-0">
          <button className="bg-emerald-400 hover:bg-emerald-500 px-4 lg:px-5 py-2.5 rounded-3 fw-bold text-xs lg:text-sm d-d-flex align-align-items-center justify-content-center gap-2 transition-all cursor-pointer" style={{'color':'#0f172b'}}>
            <Zap size={14} className="lg:w-4 lg:h-4" fill="currentColor" />
            Lymbus
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 lg:px-5 py-2.5 rounded-3 fw-bold text-xs lg:text-sm d-d-flex align-align-items-center justify-content-center gap-2 transition-all cursor-pointer">
            <MessageCircle size={14} className="lg:w-4 lg:h-4" />
            Respond
          </button>
        </div>
      </div>
    </Motion.section>
  );
}
