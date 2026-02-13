import React, { useState, useMemo } from 'react';
import { 
  ChevronLeft, 
  Search, 
  Settings, 
  Eye, 
  Share2, 
  Plus, 
  MoreVertical, 
  Trash2, 
  Copy, 
  CheckCircle2, 
  HelpCircle,
  Star,
  Image as ImageIcon,
  ChevronDown,
  GripVertical,
  ArrowLeft,
  X,
  Layout,
  Zap,
  Check,
  ChevronRight,
  Monitor,
  Calendar,
  Layers,
  Sparkles,
  Smartphone,
  CircleDot,
  CheckSquare,
  Type,
  AlignLeft,
  Activity
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';

interface Question {
  id: string;
  type: 'rating' | 'nps' | 'likert' | 'radio' | 'text' | 'checkbox' | 'paragraph';
  title: string;
  required: boolean;
  options?: string[];
  properties?: {
    range?: number;
    [key: string]: any;
  };
}

const questionTypes = [
  { id: 'rating', label: 'Rating Scale', icon: Star, desc: 'Star rating 1-5 or 1-10' },
  { id: 'nps', label: 'NPS Scale', icon: Activity, desc: 'Net Promoter Score 0-10' },
  { id: 'likert', label: 'Likert Scale', icon: Layers, desc: 'Agreement scale' },
  { id: 'radio', label: 'Radio Button', icon: CircleDot, desc: 'Single choice' },
  { id: 'checkbox', label: 'Checkbox', icon: CheckSquare, desc: 'Multiple choice' },
  { id: 'text', label: 'Short Text', icon: Type, desc: 'Brief answer' },
  { id: 'paragraph', label: 'Paragraph', icon: AlignLeft, desc: 'Detailed response' },
] as const;

const QuickAddToolbar = ({ onAdd, isAlwaysVisible = false }: { onAdd: (type: Question['type']) => void, isAlwaysVisible?: boolean }) => {
  return (
    <div className={cn(
      "w-100 group/toolbar position-relative transition-all duration-300",
      isAlwaysVisible ? "py-8" : "h-12 d-flex align-items-center justify-content-center opacity-0 hover:opacity-100 z-50 hover:h-20"
    )}>
      <div className={cn(
        "w-100 h-px position-relative transition-colors",
        isAlwaysVisible ? "bg-brand-border border-t border-dashed" : "bg-brand-blue/10 group-hover/toolbar:bg-brand-blue/30"
      )}>
        <div className={cn(
          "position-absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 d-flex align-items-center gap-1.5 bg-white p-2 rounded-full border border-brand-border shadow-xl transition-all duration-300",
          !isAlwaysVisible && "scale-90 group-hover/toolbar:scale-100 border-brand-blue/20"
        )}>
           {questionTypes.map(type => (
             <button 
               key={type.id}
               onClick={(e) => {
                 e.stopPropagation();
                 onAdd(type.id);
               }}
               className="w-9 h-9 bg-brand-bg hover:bg-brand-blue hover:text-white rounded-circle d-d-flex align-align-items-center justify-content-center text-brand-gray transition-all border border-brand-border group position-position-relative"
               title={type.label}
             >
               <type.icon size={16} />
               <span className="position-position-absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-dark text-white fw-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pe-none" style={{'fontSize':'8px'}}>
                  {type.label.toUpperCase()}
               </span>
             </button>
           ))}
        </div>
      </div>
    </div>
  );
};

export const FormBuilderClassic = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'configure' | 'preview'>('details');
  const [formName, setFormName] = useState('Patient Satisfaction Survey');
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      type: 'nps',
      title: 'How likely are you to recommend our hospital to a friend or family member?',
      required: true,
      properties: { range: 10 }
    },
    {
      id: '2',
      type: 'rating',
      title: 'How would you rate the cleanliness of your room?',
      required: true,
      properties: { range: 5 }
    },
    {
      id: '3',
      type: 'radio',
      title: 'Which department did you visit today?',
      required: true,
      options: ['Outpatient (OPD)', 'Inpatient (IPD)', 'Emergency (ER)', 'Radiology']
    }
  ]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>('1');

  const selectedQuestion = useMemo(() => 
    questions.find(q => q.id === selectedQuestionId),
  [questions, selectedQuestionId]);

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q));
  };

  const addQuestion = (type: Question['type'] = 'text', index?: number) => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: type,
      title: 'Untitled question',
      required: false,
      options: type === 'radio' || type === 'checkbox' || type === 'likert' ? ['Option 1', 'Option 2'] : undefined,
      properties: type === 'nps' ? { range: 10 } : type === 'rating' ? { range: 5 } : type === 'likert' ? { range: 5 } : {}
    };
    
    setQuestions(prev => {
      if (typeof index === 'number') {
        const next = [...prev];
        next.splice(index, 0, newQuestion);
        return next;
      }
      return [...prev, newQuestion];
    });
    setSelectedQuestionId(newQuestion.id);
  };

  const deleteQuestion = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
    if (selectedQuestionId === id) setSelectedQuestionId(null);
  };

  const renderPreview = () => (
    <div className="d-flex-fill w-100 d-d-flex align-align-items-center justify-content-center p-4 lg:p-8 overflow-d-none animate-in zoom-in-95 duration-500">
      <div className="position-position-relative h-100 w-100 bg-brand-dark p-4 shadow-2xl border-brand-dark overflow-d-none d-d-flex d-flex-column" style={{'maxHeight':'820px', 'maxWidth':'380px', 'borderRadius':'60px', 'borderColor':'8px'}}>
        {/* Notch */}
        <div className="position-position-absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-brand-dark z-20 d-d-flex align-align-items-center justify-content-center">
          <div className="w-12 h-1 bg-white/10 rounded-circle" />
        </div>

        {/* Screen */}
        <div className="d-flex-fill bg-white overflow-y-auto no-scrollbar pt-10 pb-10 px-5" style={{'borderRadius':'40px'}}>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl fw-bold text-brand-dark leading-tight">{formName}</h2>
              <div className="w-12 h-1 bg-brand-blue rounded-circle" />
            </div>

            <div className="space-y-10">
              {questions.map((q, i) => (
                <div key={q.id} className="space-y-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="d-d-flex align-align-items-start gap-3">
                    <span className="w-6 h-6 rounded-3 bg-brand-bg d-d-flex align-align-items-center justify-content-center fw-bold text-brand-blue d-flex-flex-shrink-0 mt-1" style={{'fontSize':'10px'}}>{i + 1}</span>
                    <p className="text-base fw-bold text-brand-dark leading-snug">{q.title}</p>
                  </div>

                  {q.type === 'nps' && (
                    <div className="space-y-3">
                      <div className="d-d-flex d-flex-wrap gap-1 justify-content-center">
                        {Array.from({ length: (q.properties?.range || 10) + 1 }).map((_, n) => (
                          <button key={n} className="w-7 h-7 rounded-3 border border-brand-border d-d-flex align-align-items-center justify-content-center fw-bold hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all" style={{'fontSize':'10px'}}>
                            {n}
                          </button>
                        ))}
                      </div>
                      <div className="d-d-flex justify-content-between fw-bold text-uppercase tracking-widest text-brand-gray px-1" style={{'fontSize':'8px'}}>
                        <span>Not Likely</span>
                        <span>Very Likely</span>
                      </div>
                    </div>
                  )}

                  {q.type === 'rating' && (
                    <div className="d-d-flex align-align-items-center justify-content-between px-2">
                      {Array.from({ length: q.properties?.range || 5 }).map((_, n) => (
                        <button key={n} className="w-10 h-10 rounded-3 bg-brand-bg border border-brand-border d-d-flex align-align-items-center justify-content-center text-brand-gray/30 hover:bg-brand-blue/5 hover:border-brand-blue/20 transition-all">
                          <Star size={20} />
                        </button>
                      ))}
                    </div>
                  )}

                  {q.type === 'likert' && (
                    <div className="space-y-4">
                      <div className="d-d-flex align-align-items-center justify-content-between gap-1.5">
                        {Array.from({ length: q.properties?.range || 5 }).map((_, n) => (
                          <button 
                            key={n} 
                            className="d-flex-fill h-12 rounded-3 bg-brand-bg border border-brand-border d-d-flex d-flex-column align-align-items-center justify-content-center gap-1 hover:bg-brand-blue/5 hover:border-brand-blue transition-all group"
                          >
                            <span className="text-xs fw-bold text-brand-dark group-hover:text-brand-blue">{n + 1}</span>
                          </button>
                        ))}
                      </div>
                      <div className="d-d-flex justify-content-between px-1 gap-4">
                        <span className="fw-bold text-brand-gray text-uppercase tracking-widest leading-tight text-start" style={{'fontSize':'8px', 'maxWidth':'60px'}}>Strongly Disagree</span>
                        <span className="fw-bold text-brand-gray text-uppercase tracking-widest leading-tight text-end" style={{'fontSize':'8px', 'maxWidth':'60px'}}>Strongly Agree</span>
                      </div>
                    </div>
                  )}

                  {(q.type === 'text' || q.type === 'paragraph') && (
                    <div className="position-position-relative">
                      {q.type === 'text' ? (
                        <input 
                          type="text"
                          placeholder="Short answer..."
                          className="w-100 bg-brand-bg/50 border border-brand-border rounded-3 px-4 py-2 text-sm focus:outline-none placeholder:text-brand-gray/30"
                          readOnly
                        />
                      ) : (
                        <textarea 
                          placeholder="Detailed feedback..."
                          className="w-100 h-32 bg-brand-bg/50 border border-brand-border rounded-4 p-4 text-sm focus:outline-none placeholder:text-brand-gray/30 resize-none"
                          readOnly
                        />
                      )}
                    </div>
                  )}

                  {(q.type === 'radio' || q.type === 'checkbox') && (
                    <div className="space-y-2">
                      {(q.options || ['Option 1', 'Option 2']).map((opt, idx) => (
                        <button key={idx} className="w-100 p-4 rounded-4 bg-white border border-brand-border d-d-flex align-align-items-center justify-content-between group hover:border-brand-blue transition-all text-start">
                          <span className="text-sm fw-bold text-brand-dark">{opt}</span>
                          <div className={cn(
                            "w-5 h-5 border-2 border-brand-border group-hover:border-brand-blue transition-colors",
                            q.type === 'radio' ? "rounded-full" : "rounded-md"
                          )} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="w-100 py-4 bg-brand-blue text-white fw-bold text-sm text-uppercase tracking-widest shadow-xl shadow-brand-blue/20 mt-12" style={{'borderRadius':'20px'}}>
              Submit Feedback
            </button>

            <div className="d-d-flex d-flex-column align-align-items-center gap-2 py-8 opacity-40">
              <div className="d-d-flex align-align-items-center gap-2">
                <div className="w-6 h-6 bg-brand-blue rounded-3 d-d-flex align-align-items-center justify-content-center text-white">
                  <span className="fw-bold" style={{'fontSize':'10px'}}>L</span>
                </div>
                <span className="fw-bold text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Powered by Lymbus AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Home Bar */}
        <div className="h-1.5 w-32 bg-white/20 rounded-circle position-position-absolute bottom-2 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );

  return (
    <div className="w-100 h-100 d-d-flex d-flex-column overflow-d-none bg-brand-bg/30">
      <div className="d-flex-fill d-d-flex overflow-d-none">
        {/* Main Content Area */}
        <div className="d-flex-fill overflow-y-auto p-4 lg:p-8 d-d-flex d-flex-column align-align-items-center no-scrollbar">
          {/* Tab Switcher */}
          <div className="bg-white p-1 border border-brand-border d-d-flex gap-1 mb-8 shadow-sm d-flex-flex-shrink-0 z-10" style={{'borderRadius':'20px'}}>
            {[
              { id: 'details', label: 'Details', icon: Layout },
              { id: 'configure', label: 'Configure', icon: Settings },
              { id: 'preview', label: 'Preview & Share', icon: Eye },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "d-flex align-items-center gap-2 px-5 py-2 style={{borderRadius: "16px"}} style={{color: "10px"}} fw-bold transition-all uppercase tracking-widest",
                  activeTab === tab.id 
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                    : "text-brand-gray hover:bg-brand-bg hover:text-brand-dark"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'preview' ? (
            renderPreview()
          ) : (
            <div className="w-100 max-w-4xl space-y-4 pb-20">
              {/* Form Name Card */}
              <div className="bg-white border border-brand-border p-4 lg:p-8 shadow-sm group focus-within:ring-2 focus-within:ring-brand-blue/10 transition-all mb-4" style={{'borderRadius':'24px'}}>
                <label className="fw-bold text-brand-gray text-uppercase mb-3 d-d-block opacity-60" style={{'fontSize':'10px', 'letterSpacing':'0.2em'}}>
                  Form Name
                </label>
                <input 
                  type="text" 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Untitled form"
                  className="w-100 text-xl fw-bold text-brand-dark bg-brand-bg/30 border border-brand-border rounded-3 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-blue/20 focus:bg-white transition-all placeholder:text-brand-gray/30"
                />
              </div>

              {/* Questions List */}
              <div className="d-d-flex d-flex-column">
                {questions.map((q, idx) => {
                  const isActive = selectedQuestionId === q.id;
                  const activeType = questionTypes.find(t => t.id === q.type) || questionTypes[0];
                  return (
                    <div key={q.id} className="d-d-flex d-flex-column">
                      {/* Hover inserter between questions */}
                      {idx > 0 && (
                        <QuickAddToolbar onAdd={(type) => addQuestion(type, idx)} />
                      )}
                      
                      <Motion.div 
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={() => setSelectedQuestionId(q.id)}
                        className={cn(
                          "group bg-white style={{borderRadius: "24px"}} border transition-all position-relative",
                          isActive 
                            ? "border-brand-blue shadow-xl scale-[1.005] z-30" 
                            : "border-brand-border hover:border-brand-blue/30 cursor-pointer shadow-sm hover:shadow-md z-10 hover:z-20"
                        )}
                      >
                        <div className="p-4 lg:p-8">
                          <div className="d-d-flex align-align-items-start gap-4">
                            <div className="mt-4 d-none sm:d-flex d-flex-column gap-1 cursor-grab active:cursor-grabbing text-brand-gray/20 group-hover:text-brand-gray/40 transition-colors">
                              <GripVertical size={20} />
                            </div>
                            
                            <div className="d-flex-fill space-y-6">
                              <div className="d-d-flex d-flex-column lg:d-flex-row lg:align-items-center justify-content-between gap-4">
                                <input 
                                  type="text"
                                  value={q.title}
                                  onChange={(e) => updateQuestion(q.id, { title: e.target.value })}
                                  className={cn(
                                    "d-flex-grow-1 bg-brand-bg/50 border border-brand-border rounded-3 px-4 py-2 text-sm fw-bold text-brand-dark focus:outline-none focus:bg-white transition-all",
                                    isActive ? "bg-brand-bg/20" : ""
                                  )}
                                  placeholder="Untitled question"
                                />
                                
                                <div className="d-d-flex align-align-items-center gap-2 align-self-end lg:self-auto">
                                  <button className="p-2.5 bg-brand-bg rounded-3 text-brand-gray hover:bg-brand-blue/10 hover:text-brand-blue transition-colors border border-brand-border">
                                    <ImageIcon size={18} />
                                  </button>
                                  
                                  <div className="position-position-relative group/type-menu">
                                    <button className="d-d-flex align-align-items-center gap-2 px-4 py-2.5 bg-brand-bg border border-brand-border rounded-3 fw-bold text-uppercase tracking-widest text-brand-gray hover:bg-white transition-all" style={{'fontSize':'10px'}}>
                                      <activeType.icon size={14} className="text-brand-blue" />
                                      {activeType.label}
                                      <ChevronDown size={14} />
                                    </button>
                                    
                                    {/* Type Selector Dropdown */}
                                    <div className="position-position-absolute end-0 top-full mt-2 w-56 bg-white rounded-3 shadow-xl border border-brand-border opacity-0 invisible group-hover/type-menu:opacity-100 group-hover/type-menu:visible transition-all duration-200">
                                      <div className="p-2 d-grid grid-cols-1 gap-1">
                                        {questionTypes.map((type) => (
                                          <button
                                            key={type.id}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              updateQuestion(q.id, { 
                                                type: type.id,
                                                options: type.id === 'radio' || type.id === 'checkbox' || type.id === 'likert' ? (q.options || ['Option 1', 'Option 2']) : undefined,
                                                properties: type.id === 'nps' ? { range: 10 } : type.id === 'rating' ? { range: 5 } : type.id === 'likert' ? { range: 5 } : {}
                                              });
                                            }}
                                            className={cn(
                                              "d-flex align-items-center gap-3 w-100 px-3 py-2.5 rounded-3 text-start transition-all",
                                              q.type === type.id 
                                                ? "bg-brand-blue/5 text-brand-blue" 
                                                : "hover:bg-brand-bg text-brand-gray hover:text-brand-dark"
                                            )}
                                          >
                                            <type.icon size={16} />
                                            <div className="d-d-flex d-flex-column">
                                              <span className="fw-bold text-uppercase tracking-widest" style={{'fontSize':'10px'}}>{type.label}</span>
                                              <span className="fw-bold opacity-50" style={{'fontSize':'8px'}}>{type.desc}</span>
                                            </div>
                                            {q.type === type.id && <Check size={14} className="ml-auto" />}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="py-2">
                                 {q.type === 'nps' && (
                                   <div className="space-y-3">
                                     <div className="d-d-flex gap-1">
                                       {Array.from({ length: (q.properties?.range || 10) + 1 }).map((_, i) => (
                                         <div key={i} className="d-flex-fill h-10 bg-brand-bg rounded-3 border border-brand-border d-d-flex align-align-items-center justify-content-center fw-bold text-brand-gray/40" style={{'fontSize':'10px'}}>{i}</div>
                                       ))}
                                     </div>
                                     <div className="d-d-flex justify-content-between px-1">
                                        <span className="fw-bold text-brand-gray/30 text-uppercase tracking-widest" style={{'fontSize':'8px'}}>Not Likely</span>
                                        <span className="fw-bold text-brand-gray/30 text-uppercase tracking-widest" style={{'fontSize':'8px'}}>Very Likely</span>
                                     </div>
                                   </div>
                                 )}
                                 {q.type === 'rating' && (
                                   <div className="d-d-flex gap-2">
                                     {Array.from({ length: q.properties?.range || 5 }).map((_, i) => (
                                       <Star key={i} size={24} className="text-brand-gray/20" />
                                     ))}
                                   </div>
                                 )}
                                 {q.type === 'likert' && (
                                   <div className="space-y-3">
                                     <div className="d-d-flex gap-2">
                                       {Array.from({ length: q.properties?.range || 5 }).map((_, i) => (
                                         <div key={i} className="d-flex-fill h-12 bg-brand-bg rounded-3 border border-brand-border d-d-flex align-align-items-center justify-content-center fw-bold text-brand-gray/40" style={{'fontSize':'10px'}}>{i + 1}</div>
                                       ))}
                                     </div>
                                     <div className="d-d-flex justify-content-between px-1">
                                        <span className="fw-bold text-brand-gray/30 text-uppercase tracking-widest" style={{'fontSize':'8px'}}>Strongly Disagree</span>
                                        <span className="fw-bold text-brand-gray/30 text-uppercase tracking-widest" style={{'fontSize':'8px'}}>Strongly Agree</span>
                                     </div>
                                   </div>
                                 )}
                                 {(q.type === 'radio' || q.type === 'checkbox') && (
                                   <div className="space-y-2">
                                     {(q.options || ['Option 1', 'Option 2']).map((opt, i) => (
                                       <div key={i} className="d-d-flex align-align-items-center gap-3 animate-in fade-in slide-in-from-left-2" style={{ animationDelay: `${i * 50}ms` }}>
                                         <div className={cn("w-4 h-4 border border-brand-border", q.type === 'radio' ? "rounded-full" : "rounded")} />
                                         <span className="text-sm fw-medium text-brand-dark">{opt}</span>
                                       </div>
                                     ))}
                                   </div>
                                 )}
                                 {q.type === 'text' && (
                                   <div className="h-10 w-100 bg-brand-bg/50 border border-dashed border-brand-border rounded-3 d-d-flex align-align-items-center px-4 fw-bold text-brand-gray/30 text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Short answer text...</div>
                                 )}
                                 {q.type === 'paragraph' && (
                                   <div className="h-20 w-100 bg-brand-bg/50 border border-dashed border-brand-border rounded-3 d-d-flex align-align-items-center px-4 py-2 fw-bold text-brand-gray/30 text-uppercase tracking-widest align-align-items-start" style={{'fontSize':'10px'}}>Long answer text...</div>
                                 )}
                              </div>

                              {isActive && (
                                <Motion.div 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="pt-6 mt-4 border-top border-brand-border d-d-flex align-align-items-center justify-content-between overflow-d-none"
                                >
                                  <div className="d-d-flex align-align-items-center gap-4 lg:gap-6">
                                    <button className="d-d-flex align-align-items-center gap-2 fw-bold text-brand-gray hover:text-brand-blue transition-colors text-uppercase tracking-widest" style={{'fontSize':'10px'}}>
                                      <Copy size={14} /> <span className="d-none sm:inline">Duplicate</span>
                                    </button>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        deleteQuestion(q.id);
                                      }}
                                      className="d-d-flex align-align-items-center gap-2 fw-bold text-red-500 hover:text-red-600 transition-colors text-uppercase tracking-widest" style={{'fontSize':'10px'}}
                                    >
                                      <Trash2 size={14} /> <span className="d-none sm:inline">Delete</span>
                                    </button>
                                  </div>

                                  <div className="d-d-flex align-align-items-center gap-3">
                                    <span className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Required</span>
                                    <button 
                                      onClick={() => updateQuestion(q.id, { required: !q.required })}
                                      className={cn(
                                        "w-9 h-5 rounded-full position-relative transition-all duration-300",
                                        q.required ? "bg-brand-blue shadow-sm shadow-brand-blue/30" : "bg-brand-bg border border-brand-border"
                                      )}
                                    >
                                      <div className={cn(
                                        "position-absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm",
                                        q.required ? "right-1" : "left-1"
                                      )} />
                                    </button>
                                  </div>
                                </Motion.div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Add Question Button - Bottom (Always Visible) */}
              <div className="pt-8 pb-12">
                <QuickAddToolbar onAdd={(type) => addQuestion(type)} isAlwaysVisible={true} />
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Properties */}
        <aside className={cn(
          "w-80 bg-white border-l border-brand-border d-flex d-flex-column flex-shrink-0 d-none xl:d-flex shadostyle={{width: "-4px_0_24px_rgba(0,0,0,0.02)"}} transition-all",
          activeTab === 'preview' && "w-0 border-l-0 opacity-0 invisible overflow-d-none"
        )}>
          <div className="p-4 border-bottom border-brand-border bg-white/50">
            <h3 className="text-xs fw-bold text-brand-dark text-uppercase tracking-widest d-d-flex align-align-items-center gap-2">
              <Sparkles size={16} className="text-brand-blue" />
              {selectedQuestion ? `${selectedQuestion.type.toUpperCase()} Properties` : 'Context Properties'}
            </h3>
          </div>
          
          <div className="d-flex-fill overflow-y-auto p-4 space-y-8 scrollbar-hide">
            {selectedQuestion ? (
              <>
                <div className="space-y-4">
                  <label className="fw-bold text-brand-gray text-uppercase tracking-widest d-d-block opacity-60" style={{'fontSize':'10px'}}>Question Text</label>
                  <textarea 
                    value={selectedQuestion.title}
                    onChange={(e) => updateQuestion(selectedQuestion.id, { title: e.target.value })}
                    className="w-100 bg-brand-bg/50 border border-brand-border rounded-3 px-4 py-2 text-sm fw-bold text-brand-dark focus:bg-white focus:ring-1 focus:ring-brand-blue/20 transition-all outline-none resize-none h-24"
                  />
                </div>

                {(selectedQuestion.type === 'rating' || selectedQuestion.type === 'nps' || selectedQuestion.type === 'likert') && (
                  <div className="space-y-4">
                    <label className="fw-bold text-brand-gray text-uppercase tracking-widest d-d-block opacity-60" style={{'fontSize':'10px'}}>Range Max</label>
                    <div className="position-position-relative">
                      <select 
                        value={selectedQuestion.properties?.range || (selectedQuestion.type === 'nps' ? 10 : 5)}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          updateQuestion(selectedQuestion.id, { 
                            properties: { ...selectedQuestion.properties, range: val } 
                          });
                        }}
                        className="w-100 bg-brand-bg/50 border border-brand-border rounded-3 px-4 py-2 text-sm fw-bold text-brand-dark appearance-none outline-none focus:ring-1 focus:ring-brand-blue/30 transition-all cursor-pointer"
                      >
                        {[3, 4, 5, 7, 10].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <ChevronDown size={16} className="position-position-absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pe-none" />
                    </div>
                  </div>
                )}

                {(selectedQuestion.type === 'radio' || selectedQuestion.type === 'checkbox') && (
                  <div className="space-y-4">
                    <div className="d-d-flex align-align-items-center justify-content-between mb-2">
                      <label className="fw-bold text-brand-gray text-uppercase tracking-widest d-d-block opacity-60" style={{'fontSize':'10px'}}>Choices</label>
                      <button 
                        onClick={() => {
                          const newOpts = [...(selectedQuestion.options || []), `Option ${(selectedQuestion.options?.length || 0) + 1}`];
                          updateQuestion(selectedQuestion.id, { options: newOpts });
                        }}
                        className="fw-bold text-brand-blue text-uppercase tracking-widest hover:underline" style={{'fontSize':'10px'}}
                      >
                        Add Choice
                      </button>
                    </div>
                    <div className="space-y-2">
                       {(selectedQuestion.options || []).map((opt, i) => (
                         <div key={i} className="d-d-flex align-align-items-center gap-2 group/choice animate-in slide-in-from-right-2" style={{ animationDelay: `${i * 50}ms` }}>
                           <input 
                             type="text"
                             value={opt}
                             onChange={(e) => {
                               const newOpts = [...(selectedQuestion.options || [])];
                               newOpts[i] = e.target.value;
                               updateQuestion(selectedQuestion.id, { options: newOpts });
                             }}
                             className="d-flex-fill bg-brand-bg/30 border border-brand-border rounded-3 px-3 py-2 text-xs fw-bold text-brand-dark focus:bg-white transition-all outline-none"
                           />
                           <button 
                             onClick={() => {
                               const newOpts = (selectedQuestion.options || []).filter((_, idx) => idx !== i);
                               updateQuestion(selectedQuestion.id, { options: newOpts });
                             }}
                             className="p-2 text-brand-gray/30 hover:text-red-400 hover:bg-red-50 rounded-3 transition-all"
                           >
                             <Trash2 size={14} />
                           </button>
                         </div>
                       ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="d-d-flex d-flex-column align-align-items-center justify-content-center h-100 text-center py-20 px-8">
                <div className="w-20 h-20 bg-brand-bg rounded-circle d-d-flex align-align-items-center justify-content-center text-brand-gray/20 mb-6 border border-brand-border/50 animate-pulse">
                  <HelpCircle size={40} />
                </div>
                <h4 className="text-sm fw-bold text-brand-dark mb-2 text-uppercase tracking-tight">Focus Context</h4>
                <p className="text-xs text-brand-gray leading-relaxed fw-medium">Select any element on the canvas to edit its properties, validation rules, and logic branching.</p>
              </div>
            )}
          </div>

          <div className="p-4 border-top border-brand-border bg-white d-d-flex d-flex-column gap-3">
            <button 
              onClick={() => {
                toast.success('Opening Advanced Settings...');
              }}
              className="w-100 py-2 border border-brand-border rounded-3 fw-bold text-uppercase tracking-widest text-brand-gray hover:bg-brand-bg hover:text-brand-dark transition-all d-d-flex align-align-items-center justify-content-center gap-2" style={{'fontSize':'10px'}}
            >
              <Settings size={14} />
              Advanced Config
            </button>
            <div className="d-d-flex gap-3">
              <button 
                onClick={onBack}
                className="d-flex-fill py-2 border border-brand-border rounded-3 fw-bold text-uppercase tracking-widest text-brand-gray hover:bg-brand-bg transition-all" style={{'fontSize':'10px'}}
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  toast.success('Form saved successfully');
                  onBack();
                }}
                className="d-flex-fill py-2 bg-brand-blue text-white rounded-3 fw-bold text-uppercase tracking-widest shadow-lg shadow-brand-blue/30 hover:bg-brand-blue/90 transition-all d-d-flex align-align-items-center justify-content-center gap-2" style={{'fontSize':'10px'}}
              >
                <Check size={14} />
                Save Form
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
