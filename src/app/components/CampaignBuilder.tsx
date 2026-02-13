import React, { useState, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Database, 
  Upload, 
  MousePointer2, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Zap, 
  Target,
  Plus,
  Trash2,
  Smartphone,
  Mail,
  ArrowLeft,
  Settings2,
  Eye,
  Layout,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';
import { ConfirmationModal } from './ConfirmationModal';

interface CampaignBuilderProps {
  onBack: () => void;
}

const forms = [
  { id: 'form-1', name: 'Q1 Patient Satisfaction', questions: 5 },
  { id: 'form-2', name: 'Post-Visit Feedback', questions: 8 },
  { id: 'form-3', name: 'Telehealth Quality Survey', questions: 12 },
  { id: 'form-4', name: 'Annual Wellness Intake', questions: 15 },
  { id: 'form-5', name: 'Medication Adherence', questions: 6 },
];

type Step = 'audience' | 'content' | 'schedule' | 'review';

export const CampaignBuilder: React.FC<CampaignBuilderProps> = ({ onBack }) => {
  const [activeStep, setActiveStep] = useState<Step>('audience');
  const [activePreview, setActivePreview] = useState<'sms' | 'email'>('sms');
  const [formSearch, setFormSearch] = useState('');
  
  // Confirmation Modal State
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmLabel: string;
    onConfirm: () => void;
    variant: 'danger' | 'warning' | 'info';
  }>({
    isOpen: false,
    title: '',
    message: '',
    confirmLabel: '',
    onConfirm: () => {},
    variant: 'danger'
  });

  const openConfirm = (config: Partial<typeof confirmModal>) => {
    setConfirmModal(prev => ({
      ...prev,
      ...config,
      isOpen: true
    }));
  };
  
  const [data, setData] = useState({
    name: 'New Outreach Campaign',
    type: 'Clinical',
    channels: ['sms'] as string[],
    source: 'database',
    smsContent: 'Hi [Patient Name], please fill out this survey: [Form Link]',
    emailSubject: 'Your recent visit feedback',
    emailContent: 'Dear [Patient Name], thank you for choosing Lymbus Health. \n\nWe value your feedback. Please take a moment to complete our survey:\n\n[Form Link]',
    formId: 'form-1',
    scheduleType: 'now',
    interval: 'None',
    startDate: '2026-02-09',
    endDate: '2026-02-16'
  });

  const steps: { id: Step; label: string; icon: any }[] = [
    { id: 'audience', label: '1. Audience', icon: Target },
    { id: 'content', label: '2. Content', icon: Layout },
    { id: 'schedule', label: '3. Schedule', icon: Calendar },
    { id: 'review', label: '4. Review', icon: Eye },
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1].id);
    } else {
      openConfirm({
        title: 'Launch Campaign',
        message: 'Are you sure you want to launch this campaign? This will immediately start sending outreach to the selected audience.',
        confirmLabel: 'Launch Now',
        variant: 'info',
        onConfirm: () => {
          toast.success('Campaign launched successfully!');
          onBack();
        }
      });
    }
  };

  const handleDiscard = () => {
    openConfirm({
      title: 'Discard Campaign',
      message: 'Are you sure you want to discard this campaign? All progress will be permanently lost.',
      confirmLabel: 'Discard',
      variant: 'danger',
      onConfirm: onBack
    });
  };

  const handlePrev = () => {
    const currentIndex = steps.findIndex(s => s.id === activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1].id);
    }
  };

  const [dbConfig, setDbConfig] = useState({ host: 'db.lymbus-health.internal', port: '5432', name: 'patient_records_prod', username: '', password: '' });
  const [isTestingConnection, setIsTestingConnection] = useState(false);
  const [dbConnected, setDbConnected] = useState(true);
  const [manualRecipients, setManualRecipients] = useState<{name: string, contact: string}[]>([]);
  const [newRecipient, setNewRecipient] = useState({ name: '', contact: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const renderAudienceStep = () => (
    <div className="space-y-4 max-w-2xl mx-auto">
      {/* Identity & Channels - Condensed Single Row */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-4 border border-brand-border shadow-sm">
          <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block mb-1.5 opacity-60" style={{'fontSize':'9px'}}>Campaign Name</label>
          <input 
            type="text" 
            className="w-100 h-9 bg-brand-bg/40 border border-brand-border rounded-3 px-3 text-xs fw-bold focus:ring-1 focus:ring-brand-blue/20 outline-none"
            value={data.name}
            onChange={e => setData({...data, name: e.target.value})}
          />
        </div>
        <div className="bg-white p-4 rounded-4 border border-brand-border shadow-sm d-d-flex align-align-items-center justify-content-between">
          <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block opacity-60" style={{'fontSize':'9px'}}>Outreach Channels</label>
          <div className="d-d-flex gap-2">
            {[
              { id: 'sms', icon: Smartphone, label: 'SMS' },
              { id: 'email', icon: Mail, label: 'Email' }
            ].map(ch => (
              <button 
                key={ch.id}
                onClick={() => {
                  const newChannels = data.channels.includes(ch.id) 
                    ? data.channels.filter(c => c !== ch.id)
                    : [...data.channels, ch.id];
                  if (newChannels.length > 0) setData({...data, channels: newChannels});
                }}
                className={cn(
                  "d-flex align-items-center gap-1.5 px-3 py-1.5 rounded-3 border-2 transition-all",
                  data.channels.includes(ch.id) ? "bg-brand-blue/5 border-brand-blue text-brand-blue" : "bg-brand-bg/30 border-brand-border text-brand-gray"
                )}
              >
                <ch.icon size={12} />
                <span className="fw-bold text-uppercase tracking-tight" style={{'fontSize':'9px'}}>{ch.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Data Source Selection */}
      <div className="bg-white p-5 rounded-4 border border-brand-border shadow-sm">
        <h3 className="fw-bold text-uppercase tracking-widest text-brand-gray mb-3 text-center" style={{'fontSize':'9px'}}>Select Data Source</h3>
        <div className="d-grid grid-cols-3 gap-2">
          {[
            { id: 'database', label: 'EHR DB', icon: Database },
            { id: 'upload', label: 'Upload', icon: Upload },
            { id: 'manual', label: 'Manual', icon: Plus }
          ].map(source => (
            <button 
              key={source.id}
              onClick={() => setData({...data, source: source.id})}
              className={cn(
                "py-2 px-3 rounded-3 border-2 transition-all d-flex align-items-center justify-content-center gap-2",
                data.source === source.id ? "bg-white border-brand-blue shadow-md shadow-brand-blue/5" : "bg-brand-bg/30 border-brand-border hover:border-brand-blue/20"
              )}
            >
              <source.icon size={14} className={data.source === source.id ? "text-brand-blue" : "text-brand-gray"} />
              <p className="fw-bold text-brand-dark text-uppercase tracking-tight" style={{'fontSize':'10px'}}>{source.label}</p>
            </button>
          ))}
        </div>

        {/* Dynamic Compact Config */}
        <div className="mt-4 pt-4 border-top border-brand-border">
          {data.source === 'database' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-top-2">
              <div className="d-grid grid-cols-12 gap-3">
                <div className="col-span-8">
                  <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block mb-1 opacity-60" style={{'fontSize':'9px'}}>Host <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="e.g., localhost or db.example.com" 
                    className="w-100 h-9 bg-brand-bg/30 border border-brand-border rounded-3 px-3 fw-bold outline-none focus:ring-1 focus:ring-brand-blue/30" style={{'fontSize':'10px'}} 
                    value={dbConfig.host} 
                    onChange={e => setDbConfig({...dbConfig, host: e.target.value})} 
                  />
                </div>
                <div className="col-span-4">
                  <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block mb-1 opacity-60" style={{'fontSize':'9px'}}>Port</label>
                  <input 
                    type="text" 
                    placeholder="5432" 
                    className="w-100 h-9 bg-brand-bg/30 border border-brand-border rounded-3 px-3 fw-bold outline-none focus:ring-1 focus:ring-brand-blue/30" style={{'fontSize':'10px'}} 
                    value={dbConfig.port} 
                    onChange={e => setDbConfig({...dbConfig, port: e.target.value})} 
                  />
                </div>
              </div>

              <div>
                <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block mb-1 opacity-60" style={{'fontSize':'9px'}}>Database Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  placeholder="Enter database name" 
                  className="w-100 h-9 bg-brand-bg/30 border border-brand-border rounded-3 px-3 fw-bold outline-none focus:ring-1 focus:ring-brand-blue/30" style={{'fontSize':'10px'}} 
                  value={dbConfig.name} 
                  onChange={e => setDbConfig({...dbConfig, name: e.target.value})} 
                />
              </div>

              <div className="d-grid grid-cols-2 gap-3">
                <div>
                  <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block mb-1 opacity-60" style={{'fontSize':'9px'}}>Username <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Database username" 
                    className="w-100 h-9 bg-brand-bg/30 border border-brand-border rounded-3 px-3 fw-bold outline-none focus:ring-1 focus:ring-brand-blue/30" style={{'fontSize':'10px'}} 
                    value={dbConfig.username} 
                    onChange={e => setDbConfig({...dbConfig, username: e.target.value})} 
                  />
                </div>
                <div>
                  <label className="fw-bold text-uppercase tracking-widest text-brand-dark d-d-block mb-1 opacity-60" style={{'fontSize':'9px'}}>Password</label>
                  <input 
                    type="password" 
                    placeholder="Database password" 
                    className="w-100 h-9 bg-brand-bg/30 border border-brand-border rounded-3 px-3 fw-bold outline-none focus:ring-1 focus:ring-brand-blue/30" style={{'fontSize':'10px'}} 
                    value={dbConfig.password} 
                    onChange={e => setDbConfig({...dbConfig, password: e.target.value})} 
                  />
                </div>
              </div>

              <div className="d-d-flex align-align-items-center gap-4 pt-2">
                <button 
                  onClick={() => { 
                    setIsTestingConnection(true); 
                    setTimeout(() => { 
                      setIsTestingConnection(false); 
                      setDbConnected(true); 
                      toast.success('Connection Successful'); 
                    }, 1200); 
                  }}
                  className="px-5 py-2 bg-brand-blue text-white rounded-3 fw-bold text-uppercase tracking-widest shadow shadow-brand-blue/10 active:scale-95 transition-all" style={{'fontSize':'10px'}}
                  disabled={isTestingConnection}
                >
                  {isTestingConnection ? 'Testing...' : 'Test Connection'}
                </button>
                {dbConnected && (
                  <div className="d-d-flex align-align-items-center gap-1.5 animate-in fade-in slide-in-from-left-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="fw-bold text-emerald-600 text-uppercase tracking-tight" style={{'fontSize':'9px'}}>5,590 Records Verified</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {data.source === 'upload' && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-brand-border rounded-3 p-4 d-d-flex align-align-items-center justify-content-center gap-3 bg-brand-bg/20 cursor-pointer group"
            >
              <input type="file" ref={fileInputRef} className="d-none" />
              <Upload size={16} className="text-brand-gray group-hover:text-brand-blue" />
              <span className="fw-bold text-brand-dark text-uppercase tracking-tight" style={{'fontSize':'10px'}}>Drop list here or browse</span>
            </div>
          )}

          {data.source === 'manual' && (
            <div className="space-y-4">
              <div className="d-d-flex gap-2">
                <input 
                  type="text" 
                  placeholder="PATIENT NAME" 
                  className="d-flex-fill h-10 bg-brand-bg/40 border border-brand-border rounded-3 px-4 fw-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" style={{'fontSize':'10px'}} 
                  value={newRecipient.name} 
                  onChange={e => setNewRecipient({...newRecipient, name: e.target.value})} 
                />
                <input 
                  type="text" 
                  placeholder="CONTACT (SMS/EMAIL)" 
                  className="d-flex-fill h-10 bg-brand-bg/40 border border-brand-border rounded-3 px-4 fw-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" style={{'fontSize':'10px'}} 
                  value={newRecipient.contact} 
                  onChange={e => setNewRecipient({...newRecipient, contact: e.target.value})} 
                />
                <button 
                  onClick={() => { if (newRecipient.name && newRecipient.contact) { setManualRecipients([...manualRecipients, newRecipient]); setNewRecipient({ name: '', contact: '' }); } }} 
                  className="px-5 bg-brand-blue text-white rounded-3 fw-bold text-uppercase tracking-widest shadow shadow-brand-blue/10 active:scale-95 transition-all" style={{'fontSize':'10px'}}
                >
                  Add
                </button>
              </div>
              {manualRecipients.length > 0 && (
                <div className="border border-brand-border rounded-4 overflow-d-none bg-white overflow-y-auto custom-scrollbar shadow-inner" style={{'maxHeight':'320px'}}>
                   {manualRecipients.map((r, i) => (
                     <div key={i} className="d-d-flex align-align-items-center justify-content-between px-4 py-2.5 border-bottom border-brand-border last:border-0 hover:bg-brand-bg/20 transition-colors group">
                        <div className="d-d-flex align-align-items-center gap-3">
                          <span className="fw-bold text-brand-dark text-uppercase tracking-tight" style={{'fontSize':'10px'}}>{r.name}</span>
                        </div>
                        <div className="d-d-flex align-align-items-center gap-4">
                          <span className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>{r.contact}</span>
                          <button 
                            onClick={() => {
                              openConfirm({
                                title: 'Remove Recipient',
                                message: `Are you sure you want to remove ${r.name} from the recipient list?`,
                                confirmLabel: 'Remove',
                                variant: 'danger',
                                onConfirm: () => setManualRecipients(manualRecipients.filter((_, idx) => idx !== i))
                              });
                            }} 
                            className="text-brand-gray/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                     </div>
                   ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderContentStep = () => (
    <div className="space-y-6">
      {/* Form Picker */}
      <div className="bg-white rounded-4 border border-brand-border overflow-d-none shadow-sm">
        <div className="px-5 py-4 bg-brand-bg/20 border-bottom border-brand-border d-d-flex align-align-items-center justify-content-between">
           <div className="d-d-flex align-align-items-center gap-2">
              <FileText size={16} className="text-brand-blue" />
              <span className="fw-bold text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Link Experience Form</span>
           </div>
           <div className="position-position-relative">
              <Search className="position-position-absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" size={12} />
              <input 
                type="text" 
                placeholder="SEARCH FORMS..." 
                className="pl-9 pr-3 h-8 bg-white border border-brand-border rounded-3 fw-bold tracking-widest focus:outline-none focus:ring-1 focus:ring-brand-blue/30" style={{'fontSize':'10px'}} 
                value={formSearch}
                onChange={e => setFormSearch(e.target.value)}
              />
           </div>
        </div>
        <div className="p-4">
           <div className="d-grid grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto custom-scrollbar pr-2" style={{'maxHeight':'160px'}}>
              {forms.filter(f => f.name.toLowerCase().includes(formSearch.toLowerCase())).map(f => (
                <button 
                  key={f.id} 
                  onClick={() => setData({...data, formId: f.id})}
                  className={cn(
                    "p-3 rounded-3 border d-flex align-items-center gap-3 transition-all text-start",
                    data.formId === f.id ? "bg-brand-blue/5 border-brand-blue ring-1 ring-brand-blue/20" : "bg-white border-brand-border hover:border-brand-blue/30 shadow-sm"
                  )}
                >
                   <div className={cn("w-8 h-8 rounded-3 d-flex align-items-center justify-content-center transition-colors", data.formId === f.id ? "bg-brand-blue text-white" : "bg-brand-bg text-brand-gray")}>
                      <FileText size={16} />
                   </div>
                   <div className="d-flex-fill min-w-0">
                      <p className="fw-bold text-brand-dark text-uppercase truncate" style={{'fontSize':'10px'}}>{f.name}</p>
                      <p className="text-brand-gray fw-bold text-uppercase tracking-tight" style={{'fontSize':'8px'}}>{f.questions} Qs</p>
                   </div>
                   {data.formId === f.id && <CheckCircle2 size={14} className="text-brand-blue" />}
                </button>
              ))}
           </div>
        </div>
      </div>

      <div className="d-d-flex align-align-items-center gap-4 py-2">
         <div className="h-px d-flex-fill bg-brand-border" />
         <span className="fw-bold text-brand-gray text-uppercase tracking-widest px-4 py-1 bg-brand-bg rounded-circle border border-brand-border" style={{'fontSize':'9px'}}>2. Design Message Content</span>
         <div className="h-px d-flex-fill bg-brand-border" />
      </div>

      {data.channels.map(ch => (
        <div key={ch} className="bg-white rounded-4 border border-brand-border overflow-d-none shadow-sm">
          <div className="px-5 py-4 bg-brand-bg/20 border-bottom border-brand-border d-d-flex align-align-items-center justify-content-between">
             <div className="d-d-flex align-align-items-center gap-2">
                {ch === 'sms' ? <Smartphone size={16} className="text-brand-blue" /> : <Mail size={16} className="text-brand-blue" />}
                <span className="fw-bold text-uppercase tracking-widest" style={{'fontSize':'10px'}}>{ch.toUpperCase()} EDITOR</span>
             </div>
             <div className="d-d-flex align-align-items-center gap-2" />
          </div>
          <div className="p-4 space-y-4">
            {ch === 'email' && (
              <div className="space-y-2">
                <label className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>Subject Line</label>
                <input 
                  type="text" 
                  placeholder="Subject line..." 
                  className="w-100 h-11 border border-brand-border rounded-3 px-4 text-sm fw-bold bg-brand-bg/20 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all" 
                  value={data.emailSubject} 
                  onChange={e => setData({...data, emailSubject: e.target.value})} 
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>{ch === 'sms' ? 'Message' : 'Email Body'}</label>
              <textarea 
                className="w-100 h-32 p-4 text-sm fw-medium border border-brand-border rounded-3 resize-none bg-brand-bg/20 focus:bg-white focus:ring-1 focus:ring-brand-blue/30 outline-none transition-all" 
                placeholder={`ENTER ${ch.toUpperCase()} CONTENT...`}
                value={ch === 'sms' ? data.smsContent : data.emailContent}
                onChange={e => setData({...data, [ch === 'sms' ? 'smsContent' : 'emailContent']: e.target.value})}
              />
            </div>
            <div className="d-d-flex d-flex-wrap gap-2">
              <span className="fw-bold text-brand-gray text-uppercase tracking-widest align-self-center mr-2" style={{'fontSize':'8px'}}>Personalize:</span>
              {['[Patient Name]', '[Form Link]', '[Facility Name]'].map(tag => (
                <button 
                  key={tag} 
                  onClick={() => {
                    const field = ch === 'sms' ? 'smsContent' : 'emailContent';
                    setData(prev => ({ ...prev, [field]: prev[field] + ' ' + tag }));
                  }}
                  className="fw-bold text-uppercase tracking-tight bg-white border border-brand-border rounded-3 px-3 py-1.5 hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all shadow-sm d-d-flex align-align-items-center gap-1.5" style={{'fontSize':'9px'}}
                >
                  <Plus size={10} />
                  {tag.replace('[', '').replace(']', '')}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderScheduleStep = () => (
    <div className="bg-card p-4 lg:p-8 border border-brand-border space-y-8 max-w-2xl mx-auto shadow-sm" style={{'borderRadius':'24px'}}>
      <div className="d-d-flex d-flex-column gap-1">
        <h3 className="text-lg fw-bold text-brand-dark">Schedule</h3>
        <p className="text-sm text-brand-gray">Choose how and when your outreach should be delivered to patients.</p>
      </div>

      <div className="d-grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: 'now', label: 'Immediate', description: 'Send as soon as campaign is launched', icon: Zap },
          { id: 'schedule', label: 'Scheduled', description: 'Pick a specific date and time', icon: Calendar },
          { id: 'range', label: 'Date Range', description: 'Run between specific dates', icon: Clock }
        ].map(type => (
          <button 
            key={type.id} 
            onClick={() => setData({...data, scheduleType: type.id})} 
            className={cn(
              "p-4 rounded-4 border-2 transition-all d-flex d-flex-column align-items-center text-center gap-4 group",
              data.scheduleType === type.id ? "bg-white border-brand-blue shadow-xl shadow-brand-blue/5" : "bg-white border-brand-border hover:border-brand-blue/20"
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-4 d-flex align-items-center justify-content-center transition-all duration-300",
              data.scheduleType === type.id ? "bg-brand-blue text-white rotate-6" : "bg-brand-bg text-brand-gray group-hover:scale-110"
            )}>
               <type.icon size={24} />
            </div>
            <div className="space-y-1">
              <p className={cn(
                "style={{color: "10px"}} fw-bold uppercase tracking-[0.2em]",
                data.scheduleType === type.id ? "text-brand-blue" : "text-brand-dark"
              )}>{type.label}</p>
              <p className="fw-bold text-brand-gray text-uppercase tracking-widest leading-relaxed" style={{'fontSize':'8px'}}>
                {type.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {data.scheduleType !== 'now' && (
          <Motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-brand-bg/30 p-8 rounded-4 border border-brand-border space-y-6"
          >
             <div className="d-grid grid-cols-2 gap-8">
               {data.scheduleType !== 'range' && (
                 <div className="space-y-2">
                   <label className="fw-bold text-uppercase text-brand-gray d-d-block opacity-60" style={{'fontSize':'9px', 'letterSpacing':'0.2em'}}>Recurrence</label>
                   <select 
                     className="w-100 h-11 bg-white border border-brand-border rounded-3 px-4 text-xs fw-bold focus:ring-1 focus:ring-brand-blue/30 outline-none"
                     value={data.interval}
                     onChange={e => setData({...data, interval: e.target.value})}
                   >
                      <option value="None">None (One-time)</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                   </select>
                 </div>
               )}
               <div className={cn("space-y-2", data.scheduleType === 'range' ? "col-span-1" : "")}>
                 <label className="fw-bold text-uppercase text-brand-gray d-d-block opacity-60" style={{'fontSize':'9px', 'letterSpacing':'0.2em'}}>
                   {data.scheduleType === 'range' ? 'Start Date' : 'Launch Date'}
                 </label>
                 <input 
                   type="date" 
                   className="w-100 h-11 bg-white border border-brand-border rounded-3 px-4 text-xs fw-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" 
                   value={data.startDate} 
                   onChange={e => setData({...data, startDate: e.target.value})} 
                 />
               </div>
               {data.scheduleType === 'range' && (
                 <div className="space-y-2">
                   <label className="fw-bold text-uppercase text-brand-gray d-d-block opacity-60" style={{'fontSize':'9px', 'letterSpacing':'0.2em'}}>End Date</label>
                   <input 
                     type="date" 
                     className="w-100 h-11 bg-white border border-brand-border rounded-3 px-4 text-xs fw-bold focus:ring-1 focus:ring-brand-blue/30 outline-none" 
                     value={data.endDate} 
                     onChange={e => setData({...data, endDate: e.target.value})} 
                   />
                 </div>
               )}
             </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderReviewStep = () => (
    <div className="space-y-6">
       <div className="bg-white p-8 rounded-4 border border-brand-border shadow-xl space-y-8">
          <div className="d-d-flex align-align-items-center justify-content-between">
             <div className="space-y-1">
                <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Campaign Identity</p>
                <h2 className="text-2xl fw-bold text-brand-dark tracking-tight">{data.name}</h2>
             </div>
             <div className="d-d-flex align-align-items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-circle">
                <div className="w-2 h-2 bg-emerald-500 rounded-circle animate-pulse" />
                <span className="fw-bold text-emerald-600 text-uppercase tracking-widest" style={{'fontSize':'10px'}}>Ready to Launch</span>
             </div>
          </div>

          <div className="d-grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="space-y-2">
                <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>Channels</p>
                <div className="d-d-flex gap-2">
                   {data.channels.map(ch => (
                     <span key={ch} className="px-3 py-1 bg-brand-bg border border-brand-border rounded-3 fw-bold text-uppercase tracking-tight d-d-flex align-align-items-center gap-1.5" style={{'fontSize':'10px'}}>
                       {ch === 'sms' ? <Smartphone size={12} /> : <Mail size={12} />}
                       {ch}
                     </span>
                   ))}
                </div>
             </div>
             <div className="space-y-2">
                <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>Experience Form</p>
                <p className="text-xs fw-bold text-brand-dark d-d-flex align-align-items-center gap-2">
                  <FileText size={14} className="text-brand-blue" />
                  {forms.find(f => f.id === data.formId)?.name}
                </p>
             </div>
             <div className="space-y-2">
                <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>Audience Reach</p>
                <p className="text-xs fw-bold text-brand-dark d-d-flex align-align-items-center gap-2">
                   <Target size={14} className="text-brand-blue" />
                   5,590 Total Patients
                </p>
             </div>
             <div className="space-y-2">
                <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>Schedule</p>
                <p className="text-xs fw-bold text-brand-dark d-d-flex align-align-items-center gap-2">
                   <Clock size={14} className="text-brand-blue" />
                   {data.scheduleType === 'now' ? 'Instant Delivery' : 
                    data.scheduleType === 'range' ? `${data.startDate} to ${data.endDate}` :
                    `Starting ${data.startDate}`}
                </p>
             </div>
          </div>

          <div className="pt-8 border-top border-brand-border d-grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-5 bg-brand-bg rounded-4 border border-brand-border space-y-4">
                <div className="d-d-flex align-align-items-center justify-content-between">
                   <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>SMS Preview Content</p>
                   <MessageSquare size={14} className="text-brand-blue" />
                </div>
                <p className="text-sm fw-medium text-brand-dark fst-italic leading-relaxed">
                   "{data.smsContent.replace('[Patient Name]', 'Jane').replace('[Form Link]', 'lymbus.health/v2k8')}"
                </p>
             </div>
             <div className="p-5 bg-brand-bg rounded-4 border border-brand-border space-y-4">
                <div className="d-d-flex align-align-items-center justify-content-between">
                   <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'9px'}}>Compliance Status</p>
                   <CheckCircle2 size={14} className="text-emerald-500" />
                </div>
                <div className="space-y-2">
                   <div className="d-d-flex align-align-items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500 d-d-flex align-align-items-center justify-content-center text-white"><CheckCircle2 size={10} /></div>
                      <span className="fw-bold text-brand-dark text-uppercase" style={{'fontSize':'9px'}}>HIPAA Compliant Delivery</span>
                   </div>
                   <div className="d-d-flex align-align-items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500 d-d-flex align-align-items-center justify-content-center text-white"><CheckCircle2 size={10} /></div>
                      <span className="fw-bold text-brand-dark text-uppercase" style={{'fontSize':'9px'}}>TCPA Consent Verified</span>
                   </div>
                   <div className="d-d-flex align-align-items-center gap-2">
                      <div className="w-4 h-4 rounded bg-emerald-500 d-d-flex align-align-items-center justify-content-center text-white"><CheckCircle2 size={10} /></div>
                      <span className="fw-bold text-brand-dark text-uppercase" style={{'fontSize':'9px'}}>Encrypted Data Transit</span>
                   </div>
                </div>
             </div>
          </div>
       </div>


    </div>
  );

  return (
    <div className="position-position-fixed top-0 bottom-0 start-0 end-0 bg-brand-bg d-d-flex d-flex-column animate-in fade-in duration-300 overflow-d-none">
      {/* Header */}
      <header className="h-20 bg-white border-bottom border-brand-border px-8 d-d-flex align-align-items-center justify-content-between d-flex-flex-shrink-0 z-50">
        <div className="d-d-flex align-align-items-center gap-6">
          <button 
            onClick={handleDiscard}
            className="d-d-flex align-align-items-center gap-3 text-brand-gray hover:text-brand-dark transition-all fw-bold text-uppercase tracking-widest group px-4 py-2 hover:bg-brand-bg rounded-3 border border-transparent hover:border-brand-border" style={{'fontSize':'10px'}}
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Cancel</span>
          </button>
          <div className="h-8 w-px bg-brand-border" />
          <div className="d-d-flex d-flex-column">
            <input 
               className="text-2xl fw-bold text-brand-dark tracking-tighter bg-transparent border-none p-0 focus:ring-0 w-100"
               value={data.name}
               onChange={e => setData({...data, name: e.target.value})}
               placeholder="Untitled Campaign"
            />
          </div>
        </div>

        <div className="d-d-flex align-align-items-center gap-4">
          <button 
            onClick={() => toast.success("Draft saved successfully")}
            className="d-none lg:d-flex align-align-items-center gap-2 px-5 py-2.5 rounded-3 border border-brand-border fw-bold text-brand-gray text-uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95" style={{'fontSize':'10px'}}
          >
             <FileText size={14} />
             Save Draft
          </button>
          <button 
            onClick={() => toast.success("Test campaign sent to your device")}
            className="d-none lg:d-flex align-align-items-center gap-2 px-5 py-2.5 rounded-3 border border-brand-border fw-bold text-brand-gray text-uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95" style={{'fontSize':'10px'}}
          >
             <Smartphone size={14} />
             Send Test
          </button>
          <button 
            onClick={handleDiscard}
            className="d-none lg:d-flex align-align-items-center gap-2 px-5 py-2.5 rounded-3 border border-red-50 fw-bold text-red-500 text-uppercase tracking-widest hover:bg-red-50 transition-all active:scale-95" style={{'fontSize':'10px'}}
          >
             <Trash2 size={14} />
             Discard
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="d-flex-fill overflow-d-none d-d-flex bg-brand-bg">
        {/* Step Content */}
        <div className="d-flex-fill overflow-y-auto custom-scrollbar d-d-flex d-flex-column">
          <div className="d-flex-fill p-8 lg:p-12">
            <div className="max-w-6xl mx-auto d-d-flex gap-12 align-align-items-start">
              {/* Stepper (Desktop) - Inside Canvas Left Top */}
              <nav className="d-none xl:d-flex d-flex-column gap-6 w-48 d-flex-flex-shrink-0 position-sticky top-0">
                {steps.map((s, idx) => {
                  const isActive = activeStep === s.id;
                  const isPast = steps.findIndex(step => step.id === activeStep) > idx;
                  return (
                    <button 
                      key={s.id} 
                      onClick={() => setActiveStep(s.id)}
                      className="d-d-flex align-align-items-center gap-3 group position-position-relative text-start"
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-4 d-flex align-items-center justify-content-center transition-all duration-300 border-2 flex-shrink-0",
                        isActive ? "bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20" : 
                        isPast ? "bg-emerald-500 border-emerald-500 text-white" : "bg-white border-brand-border text-brand-gray group-hover:border-brand-blue/30"
                      )}>
                        {isPast ? <CheckCircle2 size={20} /> : <s.icon size={20} />}
                      </div>
                      <div className="d-flex-fill min-w-0">
                         <p className={cn(
                           "style={{color: "10px"}} fw-bold uppercase tracking-widest transition-colors leading-tight",
                           isActive ? "text-brand-blue" : "text-brand-gray"
                         )}>{s.label}</p>
                      </div>
                      {isActive && (
                        <Motion.div 
                          layoutId="active-step-indicator"
                          className="position-position-absolute -left-2 w-1 h-6 bg-brand-blue rounded-circle"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="d-flex-fill max-w-4xl">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {activeStep === 'audience' && renderAudienceStep()}
                    {activeStep === 'content' && renderContentStep()}
                    {activeStep === 'schedule' && renderScheduleStep()}
                    {activeStep === 'review' && renderReviewStep()}
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Persistent Bottom Actions */}
          <div className="position-sticky bottom-0 bg-white/80 backdrop-blur-md border-top border-brand-border p-4 mt-auto">
            <div className="max-w-4xl mx-auto d-d-flex align-align-items-center justify-content-between">
               <button 
                 onClick={handlePrev}
                 disabled={activeStep === 'audience'}
                 className={cn(
                   "d-flex align-items-center gap-2 style={{color: "10px"}} fw-bold uppercase tracking-widest transition-all",
                   activeStep === 'audience' ? "opacity-0 pointer-events-none" : "text-brand-gray hover:text-brand-dark"
                 )}
               >
                 <ChevronLeft size={16} />
                 Previous Step
               </button>
               
               <div className="d-d-flex align-align-items-center gap-6">
                 <div className="d-none sm:d-flex d-flex-column align-items-end">
                    <p className="fw-bold text-brand-dark text-uppercase tracking-widest" style={{'fontSize':'10px'}}>
                      {activeStep === 'audience' ? 'Step 1: Audience' : 
                       activeStep === 'content' ? 'Step 2: Content' : 
                       activeStep === 'schedule' ? 'Step 3: Schedule' : 'Step 4: Review'}
                    </p>
                    <p className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'8px'}}>Autosaved at 9:41 AM</p>
                 </div>
                 <button 
                    onClick={handleNext}
                    className="px-10 py-2 bg-brand-blue text-white rounded-3 fw-bold text-uppercase shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 hover:-translate-y-0.5 transition-all d-d-flex align-align-items-center gap-3" style={{'fontSize':'11px', 'letterSpacing':'0.2em'}}
                  >
                    {activeStep === 'review' ? 'Launch Campaign' : (activeStep === 'schedule' ? 'Review' : 'Next Step')}
                    <ChevronRight size={16} />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Live Preview (Conditional for Content step mostly, but helpful for others) */}
        <aside className="d-none lg:d-flex border-start border-brand-border bg-white d-flex-column" style={{'width':'400px'}}>
          <div className="px-8 py-6 border-bottom border-brand-border d-d-flex align-align-items-center justify-content-between d-flex-flex-shrink-0">
             <div className="d-d-flex align-align-items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-circle" />
                <span className="fw-bold text-uppercase tracking-widest text-brand-dark" style={{'fontSize':'10px'}}>Live Preview</span>
             </div>
             <div className="bg-brand-bg p-1 rounded-3 d-d-flex gap-1">
                <button 
                  onClick={() => setActivePreview('sms')}
                  className={cn("p-2 rounded-md transition-all", activePreview === 'sms' ? "bg-white text-brand-blue shadow-sm" : "text-brand-gray hover:text-brand-dark")}
                >
                  <Smartphone size={16} />
                </button>
                <button 
                  onClick={() => setActivePreview('email')}
                  className={cn("p-2 rounded-md transition-all", activePreview === 'email' ? "bg-white text-brand-blue shadow-sm" : "text-brand-gray hover:text-brand-dark")}
                >
                  <Mail size={16} />
                </button>
             </div>
          </div>

          <div className="d-flex-fill overflow-y-auto custom-scrollbar p-8 d-d-flex d-flex-column align-align-items-center">
             <div className="w-100 position-sticky top-0" style={{'maxWidth':'320px'}}>
                <AnimatePresence mode="wait">
                  {activePreview === 'sms' ? (
                    <Motion.div 
                      key="sms-prev"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-100 bg-dark border-zinc-800 p-3 d-d-flex d-flex-column shadow-2xl overflow-d-none position-position-relative" style={{'borderRadius':'44px', 'borderColor':'8px'}}
                    >
                       <div className="w-24 h-6 bg-dark position-position-absolute top-0 left-1/2 -translate-x-1/2 z-10" />
                       <div className="d-d-flex justify-content-between align-align-items-center pt-2 px-5 text-white fw-bold" style={{'fontSize':'9px'}}>
                          <span>9:41</span>
                          <div className="d-d-flex gap-1.5">
                             <div className="w-4 h-2 bg-white/20 rounded-1" />
                             <div className="w-4 h-2 bg-white/20 rounded-1" />
                          </div>
                       </div>

                       <div className="d-flex-fill bg-zinc-100 mt-6 p-4 space-y-4 overflow-y-auto no-scrollbar pt-8">
                          <div className="text-center mb-6">
                             <p className="text-zinc-400 fw-bold text-uppercase tracking-widest" style={{'fontSize':'8px'}}>Today 9:41 AM</p>
                          </div>
                          <div className="bg-white rounded-4 rounded-tl-none p-4 shadow-sm border border-zinc-200" style={{'maxWidth':'85%'}}>
                             <p className="text-xs text-zinc-800 leading-relaxed fw-medium break-words">
                                {data.smsContent
                                  .replace('[Patient Name]', 'Jane')
                                  .replace('[Form Link]', 'lymbus.health/v2k8')
                                  .replace('[Facility Name]', 'Main Hospital') || 'Start typing to see preview...'}
                             </p>
                          </div>
                          {data.formId && (
                             <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-4 p-3 d-d-flex align-align-items-center gap-3 shadow-sm">
                                <div className="w-8 h-8 bg-brand-blue rounded-3 d-d-flex align-align-items-center justify-content-center text-white">
                                   <FileText size={16} />
                                </div>
                                <div className="d-flex-fill min-w-0">
                                   <p className="fw-bold text-brand-dark text-uppercase truncate" style={{'fontSize':'8px'}}>{forms.find(f => f.id === data.formId)?.name}</p>
                                   <p className="text-brand-gray fw-bold text-uppercase" style={{'fontSize':'7px'}}>Dynamic Survey Attached</p>
                                </div>
                             </div>
                          )}
                       </div>
                       
                       <div className="h-12 bg-white border-top border-zinc-200 p-3 d-d-flex gap-3">
                          <div className="d-flex-fill bg-zinc-100 rounded-circle" />
                          <div className="w-8 h-8 bg-brand-blue rounded-circle" />
                       </div>
                    </Motion.div>
                  ) : (
                    <Motion.div 
                      key="email-prev"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="w-100 bg-white shadow-2xl border border-brand-border overflow-d-none d-d-flex d-flex-column" style={{'borderRadius':'24px', 'height':'550px'}}
                    >
                       <div className="bg-brand-bg/50 border-bottom border-brand-border p-5 space-y-1.5">
                          <p className="text-brand-gray fw-bold text-uppercase tracking-widest" style={{'fontSize':'8px'}}>From: Lymbus Health System</p>
                          <p className="text-xs text-brand-dark fw-bold truncate">Subject: {data.emailSubject || '(No Subject)'}</p>
                       </div>
                       <div className="p-4 d-flex-fill bg-white overflow-y-auto custom-scrollbar">
                          <div className="w-14 h-14 bg-brand-blue/10 rounded-4 d-d-flex align-align-items-center justify-content-center text-brand-blue mb-6 mx-auto">
                             <Target size={28} />
                          </div>
                          <div className="text-brand-dark leading-relaxed whitespace-pre-wrap fw-medium" style={{'fontSize':'11px'}}>
                             {data.emailContent
                               .replace('[Patient Name]', 'Jane Smith')
                               .replace('[Form Link]', 'https://lymbus.health/survey/' + data.formId)
                               .replace('[Facility Name]', 'Main Hospital') || 'Compose your email content...'}
                          </div>
                          {data.formId && (
                             <div className="mt-8 p-5 bg-brand-bg border border-brand-border rounded-4 d-d-flex d-flex-column align-align-items-center gap-4 text-center group hover:border-brand-blue transition-colors shadow-sm">
                                <div className="w-12 h-12 bg-white border border-brand-border rounded-3 d-d-flex align-align-items-center justify-content-center text-brand-blue shadow-sm">
                                   <FileText size={20} />
                                </div>
                                <div>
                                   <p className="fw-bold text-brand-dark text-uppercase tracking-tight" style={{'fontSize':'10px'}}>{forms.find(f => f.id === data.formId)?.name}</p>
                                   <p className="text-brand-gray fw-bold text-uppercase tracking-widest mt-1" style={{'fontSize':'8px'}}>Experience Assessment</p>
                                </div>
                                <button className="w-100 py-2.5 bg-brand-blue text-white rounded-3 fw-bold text-uppercase tracking-widest shadow-lg shadow-brand-blue/20" style={{'fontSize':'9px'}}>Open Survey</button>
                             </div>
                          )}
                          <div className="mt-8 pt-6 border-top border-brand-border">
                             <p className="text-brand-gray text-center fw-bold text-uppercase tracking-widest leading-loose" style={{'fontSize':'8px'}}>
                                This is a secure clinical message from Lymbus Health.<br/>
                                <button className="text-brand-blue">Unsubscribe</button> from future alerts.
                             </p>
                          </div>
                       </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-8 p-4 bg-brand-bg rounded-4 border border-brand-border border-dashed">
                   <div className="d-d-flex gap-3">
                      <Zap size={16} className="text-brand-blue d-flex-flex-shrink-0" />
                      <p className="fw-bold text-brand-gray leading-normal text-uppercase" style={{'fontSize':'9px'}}>
                         Preview reflects real-time changes including dynamic link shorteners and mobile responsive formatting.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </aside>
      </div>
      <ConfirmationModal 
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
        onConfirm={confirmModal.onConfirm}
        title={confirmModal.title}
        message={confirmModal.message}
        confirmLabel={confirmModal.confirmLabel}
        variant={confirmModal.variant}
      />
    </div>
  );
};
