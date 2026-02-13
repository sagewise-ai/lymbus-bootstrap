import React, { useState } from 'react';
import { 
  List, 
  LayoutGrid, 
  Search, 
  Filter, 
  MoreVertical, 
  Calendar,
  MessageSquare,
  Mail,
  Smartphone,
  Play,
  Pause,
  Edit2,
  Trash2,
  FileText,
  BarChart3,
  ChevronUp,
  ChevronDown,
  X,
  Check,
  Plus,
  HelpCircle,
  Share2,
  FileQuestion,
  QrCode,
  Link,
  Copy,
  Zap,
  FilePlus,
  Wand2,
  Eye,
  Layers,
  ChevronRight,
  Monitor,
  CheckCircle2,
  Smile,
  Meh,
  Frown,
  TrendingUp
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { cn } from '@/app/components/ui/utils';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell 
} from 'recharts';
import { FormsGuide } from '@/app/components/FormsGuide';
import { FormBuilder } from '@/app/components/FormBuilder';
import { InsightsTab } from './InsightsTab';
import { CampaignBuilder } from './CampaignBuilder';
import { ConfirmationModal } from './ConfirmationModal';

const campaigns = [
  { 
    id: 1, 
    name: 'Q1 Patient Satisfaction Survey', 
    status: 'Active', 
    channels: ['Email', 'SMS'], 
    delivered: '94%', 
    opened: '68%', 
    clicked: '42%', 
    performance: '78%', 
    startDate: '15, Jan 2026', 
    endDate: '28, Feb 2026' 
  },
  { 
    id: 2, 
    name: 'Flu Vaccination Drive 2026', 
    status: 'Active', 
    channels: ['SMS'], 
    delivered: '99%', 
    opened: '85%', 
    clicked: '64%', 
    performance: '92%', 
    startDate: '01, Feb 2026', 
    endDate: '31, Mar 2026' 
  },
  { 
    id: 3, 
    name: 'Telehealth Awareness Campaign', 
    status: 'Paused', 
    channels: ['Email'], 
    delivered: '88%', 
    opened: '45%', 
    clicked: '12%', 
    performance: '25%', 
    startDate: '10, Jan 2026', 
    endDate: '15, Apr 2026' 
  },
  { 
    id: 4, 
    name: 'Post-Surgical Follow-up Automation', 
    status: 'Active', 
    channels: ['SMS'], 
    delivered: '100%', 
    opened: '92%', 
    clicked: '88%', 
    performance: '96%', 
    startDate: '01, Jan 2026', 
    endDate: '31, Dec 2026' 
  },
  { 
    id: 5, 
    name: 'Diabetic Wellness Outreach', 
    status: 'Ended', 
    channels: ['Email'], 
    delivered: '92%', 
    opened: '54%', 
    clicked: '31%', 
    performance: '45%', 
    startDate: '01, Nov 2025', 
    endDate: '31, Jan 2026' 
  },
];

const forms = [
  { id: 1, name: 'Patient satisfaction survey', status: 'Active', questions: 5, date: '22 Nov, 2026', type: 'Survey', lastUpdated: '2026-02-05' },
  { id: 2, name: 'Nurse feedback form', status: 'Draft', questions: 12, date: '15 Dec, 2026', type: 'Feedback', lastUpdated: '2026-02-01' },
  { id: 3, name: 'Staff performance review', status: 'Draft', questions: 8, date: '30 Jan, 2027', type: 'Feedback', lastUpdated: '2026-01-15' },
  { id: 4, name: 'Treatment efficacy questionnaire', status: 'Active', questions: 7, date: '28 Feb, 2027', type: 'Clinical', lastUpdated: '2026-02-08' },
  { id: 5, name: 'Medication compliance survey', status: 'Active', questions: 6, date: '10 Mar, 2027', type: 'Clinical', lastUpdated: '2026-02-09' },
  { id: 6, name: 'Emergency response feedback', status: 'Active', questions: 9, date: '22 Apr, 2027', type: 'Feedback', lastUpdated: '2026-01-20' }
];

const campaignSentimentData = [
  { 
    id: 1, 
    campaign: 'Q1 Patient Satisfaction Survey', 
    sentiment: 8.4, 
    responses: 1250,
    form: 'Patient satisfaction survey',
    formId: 1
  },
  { 
    id: 2, 
    campaign: 'Flu Vaccination Drive 2026', 
    sentiment: 9.1, 
    responses: 2100,
    form: 'Post-Vaccination Check',
    formId: 2
  },
  { 
    id: 3, 
    campaign: 'Telehealth Awareness Campaign', 
    sentiment: 7.2, 
    responses: 680,
    form: 'Video Quality Survey',
    formId: 3
  },
  { 
    id: 4, 
    campaign: 'Post-Surgical Follow-up Automation', 
    sentiment: 9.4, 
    responses: 840,
    form: 'Recovery Tracking Form',
    formId: 4
  },
  { 
    id: 5, 
    campaign: 'Diabetic Wellness Outreach', 
    sentiment: 6.8, 
    responses: 450,
    form: 'Lifestyle & Diet Survey',
    formId: 5
  },
  { 
    id: 6, 
    campaign: 'ER Wait Time Feedback', 
    sentiment: 4.2, 
    responses: 3200,
    form: 'Emergency Room Experience',
    formId: 6
  },
  { 
    id: 7, 
    campaign: 'Mental Health Support Outreach', 
    sentiment: 8.9, 
    responses: 1100,
    form: 'Support Efficacy Form',
    formId: 1
  },
  { 
    id: 8, 
    campaign: 'Maternity Care Follow-up', 
    sentiment: 9.7, 
    responses: 520,
    form: 'Postnatal Feedback',
    formId: 2
  },
  { 
    id: 9, 
    campaign: 'Oncology Patient Experience', 
    sentiment: 8.1, 
    responses: 290,
    form: 'Care Journey Survey',
    formId: 3
  },
  { 
    id: 10, 
    campaign: 'Annual Health Check Reminder', 
    sentiment: 7.5, 
    responses: 4100,
    form: 'Scheduling Experience',
    formId: 4
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    Active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    Paused: 'bg-orange-50 text-orange-700 border border-orange-200',
    Ended: 'bg-red-50 text-red-700 border border-red-200',
    Draft: 'bg-slate-50 text-slate-700 border border-slate-200',
  };
  return (
    <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center justify-center h-6 ${colors[status] || 'bg-gray-50 text-gray-600'}`}>
      {status}
    </span>
  );
};

export const Engagement = ({ search = '' }: { search?: string }) => {
  const [view, setView] = useState<'list' | 'grid'>('grid');
  const [activeSubTab, setActiveSubTab] = useState('insights');
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    // Initial resize trigger to fix Recharts zero-dimension issues
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const [localSearch, setLocalSearch] = useState('');
  const [sort, setSort] = useState({ key: 'name', order: 'asc' });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState({
    status: 'All',
    performance: 'All',
    channel: 'All',
    dateRange: 'All'
  });
  const [activeFilters, setActiveFilters] = useState({
    status: 'All',
    performance: 'All',
    channel: 'All',
    dateRange: 'All'
  });
  const [sharingForm, setSharingForm] = useState<any>(null);
  const [previewForm, setPreviewForm] = useState<any>(null);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCampaignBuilder, setShowCampaignBuilder] = useState(false);
  const [showFormsGuide, setShowFormsGuide] = useState(true);
  const [showFormBuilder, setShowFormBuilder] = useState(false);
  const [responseSearch, setResponseSearch] = useState('');
  const [responseFilter, setResponseFilter] = useState('All');

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

  const handleSort = (key: string) => {
    setSort(prev => ({ key, order: prev.key === key && prev.order === 'asc' ? 'desc' : 'asc' }));
  };

  const getPerformanceColor = (perfString: string) => {
    const val = parseInt(perfString);
    if (val < 40) return 'bg-red-500';
    if (val < 70) return 'bg-orange-500';
    return 'bg-[#00d88c]'; 
  };

  const StatusPill = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
      Active: 'bg-[#f0fdf4] text-[#10b981]',
      Paused: 'bg-[#fffbeb] text-[#f59e0b]',
      Ended: 'bg-[#fef2f2] text-[#ef4444]',
      Draft: 'bg-slate-50 text-slate-700',
    };
    return (
      <div className={cn("w-full h-8 rounded-xl flex items-center justify-center text-[10px] font-bold uppercase tracking-widest", colors[status] || 'bg-gray-50 text-gray-600')}>
        {status}
      </div>
    );
  };

  const FormStatusBadge = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
      Active: 'bg-[rgba(52,211,153,0.1)] text-[#10b981]',
      Draft: 'bg-[#f3f4f6] text-[#6b7280]',
    };
    return (
      <div className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest", colors[status] || 'bg-gray-100 text-gray-600')}>
        {status}
      </div>
    );
  };

  const combinedSearch = (search + ' ' + localSearch).trim().toLowerCase();

  const filteredCampaigns = campaigns
    .filter(camp => {
      const matchesSearch = camp.name.toLowerCase().includes(combinedSearch) ||
                           camp.status.toLowerCase().includes(combinedSearch) ||
                           camp.channels.some(ch => ch.toLowerCase().includes(combinedSearch));
      
      const matchesStatus = activeFilters.status === 'All' || camp.status === activeFilters.status;
      
      const perf = parseInt(camp.performance);
      const matchesPerformance = activeFilters.performance === 'All' || 
        (activeFilters.performance === 'High' && perf > 80) ||
        (activeFilters.performance === 'Mid' && perf >= 50 && perf <= 80) ||
        (activeFilters.performance === 'Low' && perf < 50);
      
      const matchesChannel = activeFilters.channel === 'All' || camp.channels.includes(activeFilters.channel);
      
      return matchesSearch && matchesStatus && matchesPerformance && matchesChannel;
    })
    .sort((a: any, b: any) => {
      let valA = a[sort.key];
      let valB = b[sort.key];

      if (typeof valA === 'string' && valA.includes('%')) valA = parseFloat(valA);
      if (typeof valB === 'string' && valB.includes('%')) valB = parseFloat(valB);

      if (valA < valB) return sort.order === 'asc' ? -1 : 1;
      if (valA > valB) return sort.order === 'asc' ? 1 : -1;
      return 0;
    });

  const filteredForms = forms
    .filter(form => {
      const matchesSearch = form.name.toLowerCase().includes(combinedSearch) ||
                           form.status.toLowerCase().includes(combinedSearch);
      
      const matchesStatus = activeFilters.status === 'All' || form.status === activeFilters.status;
      
      const matchesType = activeFilters.performance === 'All' || form.type === activeFilters.performance;

      const matchesDate = activeFilters.dateRange === 'All' || (() => {
        const today = new Date('2026-02-09');
        const updateDate = new Date(form.lastUpdated);
        const diffDays = Math.floor((today.getTime() - updateDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (activeFilters.dateRange === 'Today') return diffDays === 0;
        if (activeFilters.dateRange === 'This Week') return diffDays <= 7;
        if (activeFilters.dateRange === 'This Month') return diffDays <= 30;
        return true;
      })();
      
      return matchesSearch && matchesStatus && matchesType && matchesDate;
    })
    .sort((a: any, b: any) => {
      let valA = a[sort.key];
      let valB = b[sort.key];

      if (valA < valB) return sort.order === 'asc' ? -1 : 1;
      if (valA > valB) return sort.order === 'asc' ? 1 : -1;
      return 0;
    });

  const filteredResponses = campaignSentimentData.filter(item => {
    const matchesSearch = item.campaign.toLowerCase().includes(responseSearch.toLowerCase()) || 
                          item.form.toLowerCase().includes(responseSearch.toLowerCase());
    const matchesFilter = responseFilter === 'All' ||
      (responseFilter === 'Positive' && item.sentiment >= 8) ||
      (responseFilter === 'Neutral' && item.sentiment >= 6 && item.sentiment < 8) ||
      (responseFilter === 'Negative' && item.sentiment < 6);
    return matchesSearch && matchesFilter;
  });

  const clearFilters = () => {
    const reset = { status: 'All', performance: 'All', channel: 'All', dateRange: 'All' };
    setTempFilters(reset);
    setActiveFilters(reset);
  };

  const applyFilters = () => {
    setActiveFilters(tempFilters);
    setIsFilterOpen(false);
  };

  if (showCampaignBuilder) {
    return <CampaignBuilder onBack={() => setShowCampaignBuilder(false)} />;
  }

  if (showFormBuilder) {
    return <FormBuilder onBack={() => setShowFormBuilder(false)} />;
  }

  const FilterSection = ({ title, options, current, onChange }: any) => (
    <div className="space-y-3">
      <h4 className="fw-bold text-brand-gray text-uppercase tracking-widest" style={{'fontSize':'10px'}}>{title}</h4>
      <div className="d-flex flex-wrap gap-2">
        {options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
              current === opt 
                ? 'bg-brand-blue border-brand-blue text-white' 
                : 'bg-white border-brand-border text-brand-gray hover:border-brand-blue/30'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 lg:p-8 space-y-6 lg:space-y-8 animate-in fade-in duration-500">
      {/* Tabs */}
      <div className="bg-white p-1.5 border d-flex gap-1 overflow-x-auto no-scrollbar whitespace-nowrap" style={{'borderRadius':'12px', 'borderColor':'#eee'}}>
        {[
          { id: 'insights', label: 'Insights', icon: Zap },
          { id: 'campaigns', label: 'Campaigns', icon: MessageSquare },
          { id: 'forms', label: 'Forms', icon: FileText },
          { id: 'responses', label: 'Responses', icon: BarChart3 },
        ].map((tab: any) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveSubTab(tab.id);
              setView('grid');
            }}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-[24px] text-sm font-bold transition-all duration-200 ${
              activeSubTab === tab.id 
                ? 'bg-[#3649e9] text-white shadow-[0_10px_15px_rgba(54,73,233,0.2)]' 
                : 'text-[#6a7282] hover:bg-brand-bg hover:text-brand-dark'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeSubTab !== 'insights' && activeSubTab !== 'responses' && (
      <div className="d-flex flex-column lg:flex-row lg:items-center justify-content-between gap-4">
        <div className="d-flex flex-column gap-1 text-center lg:text-left">
          <h3 className="fw-bold" style={{'fontSize':'18px', 'color':'#09156a'}}>
            {activeSubTab === 'campaigns' ? 'All Campaigns' : activeSubTab === 'forms' ? 'All Forms' : activeSubTab.charAt(0).toUpperCase() + activeSubTab.slice(1)}
          </h3>
          <p className="text-sm fw-medium" style={{'color':'#6a7282'}}>
            {activeSubTab === 'campaigns' ? 'Manage and track your active outreach' : activeSubTab === 'forms' ? 'Manage and track your forms' : 'View insights and responses'}
          </p>
        </div>

        <div className="d-flex flex-column sm:flex-row align-items-center gap-4">
          {/* View Toggle */}
          {activeSubTab !== 'forms' && (
            <div className="bg-white p-1 border d-flex gap-1 w-100 sm:w-auto h-10 align-items-center justify-content-center" style={{'borderRadius':'12px', 'borderColor':'#eee'}}>
              <button 
                onClick={() => setView('grid')}
                className={`flex-1 sm:flex-none p-2 rounded-[12px] transition-colors flex justify-center ${view === 'grid' ? 'bg-[#3649e9] text-white' : 'text-[#6a7282] hover:bg-brand-bg'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setView('list')}
                className={`flex-1 sm:flex-none p-2 rounded-[12px] transition-colors flex justify-center ${view === 'list' ? 'bg-[#3649e9] text-white' : 'text-[#6a7282] hover:bg-brand-bg'}`}
              >
                <List size={18} />
              </button>
            </div>
          )}

          {/* Search */}
          <div className="position-relative w-100 sm:w-64">
            <Search size={16} className="position-absolute left-3 top-1/2 -translate-y-1/2" style={{'color':'#6a7282'}} />
            <input 
              type="text" 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search" 
              className="w-100 h-10 bg-white border pl-10 pr-4 text-sm fw-medium focus:outline-none focus:ring-1 focus:ring-brand-blue/50" style={{'borderColor':'#eee', 'borderRadius':'12px', 'color':'#6a7282'}}
            />
          </div>

          <div className="position-relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-2.5 border rounded-[12px] transition-all flex justify-center ${
                isFilterOpen || Object.values(activeFilters).some(v => v !== 'All')
                  ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                  : 'bg-white border-[#eee] text-[#6a7282] hover:bg-brand-bg'
              }`}
            >
              <Filter size={18} />
              {Object.values(activeFilters).some(v => v !== 'All') && !isFilterOpen && (
                <div className="position-absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-circle border-2 border-white" />
              )}
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <>
                  <Motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsFilterOpen(false)}
                    className="position-fixed top-0 bottom-0 start-0 end-0"
                  />
                  <Motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="position-absolute end-0 top-full mt-3 w-100 sm:w-[320px] bg-white shadow-2xl border border-brand-border p-4 sm:p-6 overflow-hidden" style={{'maxWidth':'calc(100vw-32px)', 'borderRadius':'24px'}}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-6">
                      <h3 className="fw-bold text-brand-dark">
                        {activeSubTab === 'forms' ? 'Form Filters' : 'Campaign Filters'}
                      </h3>
                      <button onClick={() => setIsFilterOpen(false)} className="text-brand-gray hover:text-brand-dark transition-colors">
                        <X size={20} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {activeSubTab === 'forms' ? (
                        <>
                          <FilterSection 
                            title="Status" 
                            options={['All', 'Active', 'Draft']} 
                            current={tempFilters.status}
                            onChange={(status: string) => setTempFilters(prev => ({ ...prev, status }))}
                          />
                          
                          <FilterSection 
                            title="Form Type" 
                            options={['All', 'Clinical', 'Survey', 'Feedback']} 
                            current={tempFilters.performance}
                            onChange={(performance: string) => setTempFilters(prev => ({ ...prev, performance }))}
                          />

                          <FilterSection 
                            title="Last Updated" 
                            options={['All', 'Today', 'This Week', 'This Month']} 
                            current={tempFilters.dateRange}
                            onChange={(dateRange: string) => setTempFilters(prev => ({ ...prev, dateRange }))}
                          />
                        </>
                      ) : (
                        <>
                          <FilterSection 
                            title="Status" 
                            options={['All', 'Active', 'Paused', 'Ended']} 
                            current={tempFilters.status}
                            onChange={(status: string) => setTempFilters(prev => ({ ...prev, status }))}
                          />
                          
                          <FilterSection 
                            title="Performance" 
                            options={['All', 'High', 'Mid', 'Low']} 
                            current={tempFilters.performance}
                            onChange={(performance: string) => setTempFilters(prev => ({ ...prev, performance }))}
                          />

                          <FilterSection 
                            title="Channel" 
                            options={['All', 'Email', 'SMS']} 
                            current={tempFilters.channel}
                            onChange={(channel: string) => setTempFilters(prev => ({ ...prev, channel }))}
                          />

                          <FilterSection 
                            title="Date Range" 
                            options={['All', 'Today', 'This Week', 'This Month']} 
                            current={tempFilters.dateRange}
                            onChange={(dateRange: string) => setTempFilters(prev => ({ ...prev, dateRange }))}
                          />
                        </>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-top border-brand-border d-flex align-items-center gap-3">
                      <button 
                        onClick={clearFilters}
                        className="flex-fill py-2.5 rounded-3 text-xs fw-bold text-brand-gray hover:bg-brand-bg transition-colors text-uppercase tracking-widest"
                      >
                        Clear All
                      </button>
                      <button 
                        onClick={applyFilters}
                        className="flex-fill py-2.5 rounded-3 bg-brand-blue text-white text-xs fw-bold hover:shadow-lg shadow-brand-blue/20 transition-all d-flex align-items-center justify-content-center gap-2 text-uppercase tracking-widest"
                      >
                        <Check size={14} />
                        Apply
                      </button>
                    </div>
                  </Motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      )}

      <AnimatePresence mode="wait">
        {activeSubTab === 'insights' ? (
          <Motion.div
            key="insights-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <InsightsTab />
          </Motion.div>
        ) : activeSubTab === 'campaigns' ? (
          view === 'list' ? (
            <Motion.div
              key="camp-list"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-card border border-brand-border overflow-hidden" style={{'borderRadius':'24px'}}
            >
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-100 text-start lg:min-w-0" style={{'minWidth':'1000px'}}>
                  <thead>
                    <tr className="bg-brand-bg/30 text-uppercase tracking-wider text-brand-gray fw-bold" style={{'fontSize':'10px'}}>
                      {[
                        { label: 'Campaign Name', key: 'name' },
                        { label: 'Delivered', key: 'delivered' },
                        { label: 'Opened', key: 'opened' },
                        { label: 'Clicked', key: 'clicked' },
                        { label: 'Performance', key: 'performance' },
                        { label: 'Duration', key: 'startDate' }
                      ].map((col) => (
                        <th 
                          key={col.key}
                          onClick={() => handleSort(col.key)}
                          className="px-6 py-4 cursor-pointer hover:bg-brand-bg/50 transition-colors group"
                        >
                          <div className="d-flex align-items-center gap-1">
                            {col.label}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              {sort.key === col.key ? (
                                sort.order === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />
                              ) : <ChevronDown size={12} className="text-brand-gray/30" />}
                            </div>
                          </div>
                        </th>
                      ))}
                      <th className="px-6 py-4 text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-border">
                    {filteredCampaigns.map((camp) => (
                      <tr key={camp.id} className="hover:bg-brand-bg/20 transition-colors group">
                        <td className="px-6 py-5">
                          <div className="d-flex flex-column gap-1.5">
                            <span className="text-sm fw-bold text-brand-dark">{camp.name}</span>
                            <div className="d-flex align-items-center gap-2">
                              <StatusBadge status={camp.status} />
                              {camp.channels.map(ch => (
                                <span key={ch} className="fw-bold px-3 py-1 rounded-3 h-6 d-flex align-items-center justify-content-center text-uppercase tracking-wide" style={{'backgroundColor':'#f1f3f5', 'color':'#495057', 'fontSize':'10px'}}>
                                  {ch}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm fw-medium text-brand-gray">{camp.delivered}</td>
                        <td className="px-6 py-5 text-sm fw-medium text-brand-gray">{camp.opened}</td>
                        <td className="px-6 py-5 text-sm fw-medium text-brand-gray">{camp.clicked}</td>
                        <td className="px-6 py-5">
                          <div className="d-flex flex-column gap-2">
                            <div className="d-flex align-items-center justify-content-between fw-bold text-brand-gray mb-1" style={{'fontSize':'10px'}}>
                              <span>{camp.performance}</span>
                            </div>
                            <div className="h-1 w-24 bg-brand-bg rounded-circle overflow-hidden">
                              <Motion.div 
                                className={`h-full ${getPerformanceColor(camp.performance)} rounded-full`} 
                                initial={{ width: 0 }}
                                animate={{ width: camp.performance }}
                                transition={{ duration: 1, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm fw-medium text-brand-gray">
                          {camp.startDate} - {camp.endDate}
                        </td>
                        <td className="px-6 py-5">
                          <div className="d-flex align-items-center justify-content-end gap-2">
                            {camp.status === 'Paused' ? (
                              <button className="p-2 bg-emerald-50 text-emerald-500 rounded-3 hover:bg-emerald-100 transition-colors">
                                <Play size={14} fill="currentColor" />
                              </button>
                            ) : camp.status === 'Active' ? (
                              <button className="p-2 bg-brand-bg text-brand-gray rounded-3 hover:bg-gray-200 transition-colors">
                                <Pause size={14} fill="currentColor" />
                              </button>
                            ) : null}
                            <button className="p-2 bg-brand-bg text-brand-gray rounded-3 hover:bg-gray-200 transition-colors">
                              <Edit2 size={14} />
                            </button>
                            <button 
                              onClick={() => {
                                openConfirm({
                                  title: 'Delete Campaign',
                                  message: `Are you sure you want to delete "${camp.name}"? This will stop all outreach and delete historical data.`,
                                  confirmLabel: 'Delete',
                                  variant: 'danger',
                                  onConfirm: () => toast.error('Campaign deleted')
                                });
                              }}
                              className="p-2 bg-red-50 text-red-500 rounded-3 hover:bg-red-100 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredCampaigns.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-brand-gray text-sm fst-italic">
                          No campaigns found matching "{combinedSearch}"
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Motion.div>
          ) : (
            <Motion.div
              key="camp-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="d-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {filteredCampaigns.map((camp) => (
                <div 
                  key={camp.id} 
                  className={cn(
                    "bg-white rounded-[24px] border border-brand-border p-6 transition-all flex flex-col",
                    camp.status !== 'Ended' && "hover:shadow-xl group"
                  )}
                >
                  {/* Card Header: Tags & Menu */}
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center gap-2">
                      {camp.channels.map(ch => (
                        <span key={ch} className="fw-bold px-3 py-1 rounded-3 text-uppercase tracking-wider" style={{'backgroundColor':'#f5f7f7', 'color':'#6a7282', 'fontSize':'10px'}}>
                          {ch}
                        </span>
                      ))}
                    </div>
                    <div className="position-relative">
                      <button 
                        onClick={() => setOpenMenuId(openMenuId === camp.id ? null : camp.id)}
                        className="p-1 hover:text-brand-dark transition-colors" style={{'color':'#6a7282'}}
                      >
                        <MoreVertical size={16} />
                      </button>
                      
                      <AnimatePresence>
                        {openMenuId === camp.id && (
                          <>
                            <div className="position-fixed top-0 bottom-0 start-0 end-0 z-10" onClick={() => setOpenMenuId(null)} />
                            <Motion.div
                              initial={{ opacity: 0, scale: 0.95, y: -10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: -10 }}
                              className="position-absolute end-0 top-full mt-2 w-32 bg-white rounded-3 shadow-xl border border-brand-border z-20 py-1 overflow-hidden"
                            >
                              <button className="w-100 px-4 py-2 text-start text-xs fw-bold text-brand-dark hover:bg-brand-bg transition-colors d-flex align-items-center gap-2">
                                <Edit2 size={12} /> Edit
                              </button>
                              <button 
                                onClick={() => {
                                  setOpenMenuId(null);
                                  openConfirm({
                                    title: 'Delete Campaign',
                                    message: `Are you sure you want to delete "${camp.name}"? This will stop all outreach and delete historical data.`,
                                    confirmLabel: 'Delete',
                                    variant: 'danger',
                                    onConfirm: () => toast.error('Campaign deleted')
                                  });
                                }}
                                className="w-100 px-4 py-2 text-start text-xs fw-bold text-red-500 hover:bg-red-50 transition-colors d-flex align-items-center gap-2"
                              >
                                <Trash2 size={12} /> Delete
                              </button>
                            </Motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="fw-bold mb-4 line-clamp-2" style={{'fontSize':'18px', 'color':'#09156a', 'lineHeight':'1.3', 'minHeight':'54px'}}>
                    {camp.name}
                  </h4>

                  {/* Date Range */}
                  <div className="d-flex align-items-center gap-2 mb-6">
                    <Calendar size={12} className="" style={{'color':'#6a7282'}} />
                    <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px', 'color':'#6a7282'}}>
                      {camp.startDate} - {camp.endDate}
                    </span>
                  </div>

                  {/* Stats Grid: 3 columns */}
                  <div className="d-flex align-items-center justify-content-between mb-6">
                    <div>
                      <p className="fw-bold leading-none mb-1" style={{'fontSize':'14px', 'color':'#09156a'}}>{(1200 + camp.id * 450).toLocaleString()}</p>
                      <p className="fw-bold text-uppercase tracking-wider leading-none" style={{'fontSize':'10px', 'color':'#6a7282'}}>Sent</p>
                    </div>
                    <div>
                      <p className="fw-bold leading-none mb-1" style={{'fontSize':'14px', 'color':'#09156a'}}>{camp.delivered}</p>
                      <p className="fw-bold text-uppercase tracking-wider leading-none" style={{'fontSize':'10px', 'color':'#6a7282'}}>Delivered</p>
                    </div>
                    <div>
                      <p className="fw-bold leading-none mb-1" style={{'fontSize':'14px', 'color':'#09156a'}}>{camp.clicked}</p>
                      <p className="fw-bold text-uppercase tracking-wider leading-none" style={{'fontSize':'10px', 'color':'#6a7282'}}>Clicked</p>
                    </div>
                  </div>

                  {/* Overall Performance */}
                  <div className="mb-6">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px', 'color':'#6a7282'}}>Overall Performance</span>
                      <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px', 'color':'#09156a'}}>{camp.performance}</span>
                    </div>
                    <div className="w-100 rounded-circle overflow-hidden" style={{'height':'6px', 'backgroundColor':'#f5f7f7'}}>
                      <Motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: camp.performance }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={cn("h-full rounded-full", getPerformanceColor(camp.performance))}
                      />
                    </div>
                  </div>

                  {/* Status & CTA Overlay: Fade & Scale transition */}
                  <div className="mt-auto position-relative h-8">
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 d-flex align-items-center pe-none group-hover:pointer-events-none">
                      <StatusPill status={camp.status} />
                    </div>
                    <div className="position-absolute top-0 bottom-0 start-0 end-0 transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 d-flex align-items-center">
                      {camp.status === 'Active' ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Campaign "${camp.name}" paused`);
                          }}
                          className="w-100 h-8 rounded-3 bg-orange-500 text-white fw-bold text-uppercase tracking-widest d-flex align-items-center justify-content-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20" style={{'fontSize':'10px'}}
                        >
                          <Pause size={14} />
                          Pause Campaign
                        </button>
                      ) : camp.status === 'Paused' ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toast.success(`Campaign "${camp.name}" resumed`);
                          }}
                          className="w-100 h-8 rounded-3 text-white fw-bold text-uppercase tracking-widest d-flex align-items-center justify-content-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-brand-blue/20" style={{'backgroundColor':'#3649e9', 'fontSize':'10px'}}
                        >
                          <Play size={14} />
                          Resume Campaign
                        </button>
                      ) : (
                        <StatusPill status={camp.status} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {filteredCampaigns.length === 0 && (
                <div className="col-span-full py-24 text-center text-brand-gray text-sm fst-italic bg-white border border-brand-border" style={{'borderRadius':'24px'}}>
                  No campaigns found matching "{combinedSearch}"
                </div>
              )}
            </Motion.div>
          )
        ) : activeSubTab === 'forms' ? (
          <Motion.div
            key="forms-grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {showFormsGuide && (
              <FormsGuide onClose={() => setShowFormsGuide(false)} />
            )}

            <div className="d-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForms.map((form) => (
              <div key={form.id} className="bg-white border p-6 hover:shadow-xl transition-all group d-flex flex-column position-relative overflow-hidden" style={{'borderRadius':'24px', 'borderColor':'#eee'}}>
                {/* Header: Status & Actions */}
                <div className="d-flex align-items-center justify-content-between mb-6">
                  <FormStatusBadge status={form.status} />
                  <div className="d-flex align-items-center gap-1 position-relative">
                    <button 
                      onClick={() => setPreviewForm(form)}
                      className="p-1.5 hover:text-brand-blue transition-colors rounded-3 hover:bg-brand-bg" style={{'color':'#6a7282'}}
                    >
                      <Eye size={16} />
                    </button>
                    <div className="position-relative">
                      <button 
                        onClick={() => setOpenMenuId(openMenuId === `form-${form.id}` ? null : `form-${form.id}`)}
                        className="p-1.5 hover:text-brand-dark transition-colors rounded-3 hover:bg-brand-bg" style={{'color':'#6a7282'}}
                      >
                        <MoreVertical size={16} />
                      </button>
                      <AnimatePresence>
                        {openMenuId === `form-${form.id}` && (
                          <>
                            <div className="position-fixed top-0 bottom-0 start-0 end-0 z-10" onClick={() => setOpenMenuId(null)} />
                            <Motion.div
                              initial={{ opacity: 0, scale: 0.95, y: -10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: -10 }}
                              className="position-absolute end-0 top-full mt-2 w-32 bg-white rounded-3 shadow-xl border border-brand-border z-20 py-1 overflow-hidden"
                            >
                              <button className="w-100 px-4 py-2 text-start text-xs fw-bold text-brand-dark hover:bg-brand-bg transition-colors d-flex align-items-center gap-2">
                                <Edit2 size={12} /> Edit
                              </button>
                              <button 
                                onClick={() => {
                                  setOpenMenuId(null);
                                  openConfirm({
                                    title: 'Delete Form',
                                    message: `Are you sure you want to delete "${form.name}"? This will disable any active links to this form.`,
                                    confirmLabel: 'Delete',
                                    variant: 'danger',
                                    onConfirm: () => toast.error('Form deleted')
                                  });
                                }}
                                className="w-100 px-4 py-2 text-start text-xs fw-bold text-red-500 hover:bg-red-50 transition-colors d-flex align-items-center gap-2"
                              >
                                <Trash2 size={12} /> Delete
                              </button>
                            </Motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 
                  className="fw-bold mb-4 line-clamp-2 cursor-pointer hover:text-[#3649e9] transition-colors" style={{'fontSize':'18px', 'color':'#09156a', 'lineHeight':'1.3', 'minHeight':'54px'}}
                  onClick={() => setPreviewForm(form)}
                >
                  {form.name}
                </h4>

                {/* Details Row */}
                <div className="d-flex align-items-center gap-6 mb-6">
                  <div className="d-flex align-items-center gap-2">
                    <HelpCircle size={12} className="" style={{'color':'#6a7282'}} />
                    <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px', 'color':'#6a7282'}}>
                      {form.questions} Questions
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Calendar size={12} className="" style={{'color':'#6a7282'}} />
                    <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px', 'color':'#6a7282'}}>
                      {form.date}
                    </span>
                  </div>
                </div>

                {/* CTA Overlay Section: Fade & Scale transition */}
                <div className="mt-auto position-relative h-10">
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 border-top group-hover:opacity-0 transition-all duration-300 d-flex align-items-center" style={{'borderColor':'#eee'}}>
                    <div className="w-100 h-px bg-transparent" />
                  </div>
                  <div className="position-absolute top-0 bottom-0 start-0 end-0 transition-all duration-300 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 d-flex align-items-center">
                    <button 
                      onClick={() => setSharingForm(form)}
                      className="w-100 h-10 rounded-3 text-white fw-bold d-flex align-items-center justify-content-center gap-2 hover:bg-blue-700 transition-colors" style={{'backgroundColor':'#3649e9', 'fontSize':'12px'}}
                    >
                      Share form
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredForms.length === 0 && (
              <div className="col-span-full py-24 text-center text-brand-gray text-sm fst-italic bg-white border border-brand-border" style={{'borderRadius':'24px'}}>
                No forms found matching "{combinedSearch}"
              </div>
            )}
            </div>
          </Motion.div>
        ) : activeSubTab === 'responses' ? (
        <Motion.div
          key="responses-view"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-8"
        >
          {/* Sentiment Overview & Stats */}
          <div className="d-grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 bg-card p-6 border border-brand-border d-flex flex-column min-w-0" style={{'borderRadius':'24px', 'height':'350px'}}>
               <h3 className="text-lg fw-bold text-brand-dark mb-6">Sentiment Analysis by Campaign</h3>
               <div className="flex-fill min-h-0 w-100 overflow-x-auto pb-6 custom-scrollbar scroll-smooth">
                 <div className="h-100 pr-12" style={{'minWidth':'1200px'}}>
                   {isMounted && (
                     <ResponsiveContainer width="100%" height={250} minWidth={0} minHeight={100}>
                       <BarChart data={campaignSentimentData} margin={{ top: 10, right: 30, left: -10, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--brand-border)" />
                          <XAxis 
                            dataKey="campaign" 
                            axisLine={true} 
                            tickLine={true} 
                            tick={{ fontSize: 10, fill: 'var(--brand-gray)', fontWeight: 'bold' }} 
                            interval={0}
                            tickFormatter={(value) => value.length > 15 ? `${value.substring(0, 12)}...` : value}
                          />
                          <YAxis 
                            domain={[0, 10]} 
                            axisLine={true} 
                            tickLine={true} 
                            width={40}
                            tick={{ fontSize: 12, fill: 'var(--brand-gray)', fontWeight: 'bold' }} 
                          />
                          <RechartsTooltip 
                            cursor={{ fill: 'var(--brand-bg)' }}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} 
                            formatter={(value: any) => [value, 'Sentiment Score']}
                          />
                          <Bar dataKey="sentiment" radius={[4, 4, 0, 0]} barSize={40}>
                            {campaignSentimentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.sentiment >= 8 ? '#059669' : entry.sentiment >= 6 ? '#d97706' : '#dc2626'} />
                            ))}
                          </Bar>
                       </BarChart>
                     </ResponsiveContainer>
                   )}
                 </div>
               </div>
            </div>

            <div className="d-flex flex-column gap-6" style={{'height':'350px'}}>
               <div className="flex-fill bg-card p-6 border border-brand-border d-flex flex-column align-items-center justify-content-center text-center hover:shadow-lg transition-all" style={{'borderRadius':'24px'}}>
                  <div className="w-12 h-12 rounded-circle bg-emerald-50 text-emerald-700 d-flex align-items-center justify-content-center mb-2">
                    <Smile size={24} />
                  </div>
                  <h4 className="text-3xl fw-bold text-brand-dark">8.2</h4>
                  <p className="fw-bold text-brand-gray text-uppercase tracking-wider mt-1" style={{'fontSize':'10px'}}>Avg Sentiment Score</p>
                  <div className="d-flex align-items-center gap-1 mt-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-3">
                    <TrendingUp size={10} />
                    <span className="fw-bold" style={{'fontSize':'10px'}}>+0.4 vs last month</span>
                  </div>
               </div>
               <div className="flex-fill bg-card p-6 border border-brand-border d-flex flex-column align-items-center justify-content-center text-center hover:shadow-lg transition-all" style={{'borderRadius':'24px'}}>
                  <div className="w-12 h-12 rounded-circle bg-brand-blue/10 text-brand-blue d-flex align-items-center justify-content-center mb-2">
                    <MessageSquare size={24} />
                  </div>
                  <h4 className="text-3xl fw-bold text-brand-dark">4,030</h4>
                  <p className="fw-bold text-brand-gray text-uppercase tracking-wider mt-1" style={{'fontSize':'10px'}}>Total Analyzed</p>
               </div>
            </div>
          </div>

          {/* Detailed List */}
          <div className="bg-card p-6 border border-brand-border" style={{'borderRadius':'24px'}}>
             {/* Local Toolbar */}
             <div className="d-flex flex-column md:flex-row md:items-center justify-content-between gap-4 mb-6">
               <h3 className="text-lg fw-bold text-brand-dark">Campaign Response Breakdown</h3>
               
               <div className="d-flex align-items-center gap-3">
                 <div className="position-relative w-100 md:w-64">
                    <Search size={14} className="position-absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" />
                    <input 
                      type="text" 
                      value={responseSearch}
                      onChange={(e) => setResponseSearch(e.target.value)}
                      placeholder="SEARCH CAMPAIGNS..." 
                      className="w-100 h-9 bg-brand-bg border border-brand-border rounded-3 pl-9 pr-4 fw-bold tracking-widest text-uppercase focus:outline-none focus:ring-1 focus:ring-brand-blue/50" style={{'fontSize':'10px'}}
                    />
                 </div>
                 <div className="d-flex gap-2">
                   {['All', 'Positive', 'Neutral', 'Negative'].map(filter => (
                     <button
                       key={filter}
                       onClick={() => setResponseFilter(filter)}
                       className={cn(
                         "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border",
                         responseFilter === filter 
                           ? "bg-brand-blue border-brand-blue text-white" 
                           : "bg-white border-brand-border text-brand-gray hover:bg-brand-bg"
                       )}
                     >
                       {filter}
                     </button>
                   ))}
                 </div>
               </div>
             </div>

             <div className="d-grid grid-cols-1 gap-4">
               {filteredResponses.map((camp) => (
                 <div key={camp.id} className="p-6 rounded-2xl bg-brand-bg/30 border border-brand-border hover:bg-brand-bg/50 transition-colors group">
                    <div className="d-flex flex-column lg:flex-row lg:items-center justify-content-between gap-6">
                       <div className="d-flex align-items-start gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                            camp.sentiment >= 8 ? "bg-emerald-50 text-emerald-700" : camp.sentiment >= 6 ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"
                          )}>
                             {camp.sentiment >= 8 ? <Smile size={24} /> : camp.sentiment >= 6 ? <Meh size={24} /> : <Frown size={24} />}
                          </div>
                          <div>
                            <h4 className="text-lg fw-bold text-brand-dark">{camp.campaign}</h4>
                            <div className="d-flex align-items-center gap-3 mt-1">
                               <div className="d-flex align-items-center gap-1.5 bg-white px-2 py-0.5 rounded-2 border border-brand-border/50">
                                 <span className="fw-bold text-brand-gray text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Sentiment:</span>
                                 <span className={cn("text-xs font-bold", camp.sentiment >= 8 ? "text-emerald-700" : camp.sentiment >= 6 ? "text-amber-700" : "text-red-700")}>{camp.sentiment}/10</span>
                               </div>
                               <div className="d-flex align-items-center gap-1.5 bg-white px-2 py-0.5 rounded-2 border border-brand-border/50 text-brand-blue">
                                  <FileText size={10} />
                                  <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>{camp.form}</span>
                                </div>
                            </div>
                          </div>
                       </div>
                       <div className="text-start lg:text-right">
                          <span className="text-2xl fw-bold text-brand-dark">{camp.responses.toLocaleString()}</span>
                          <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Total Responses</p>
                       </div>
                    </div>
                 </div>
               ))}
               {filteredResponses.length === 0 && (
                  <div className="text-center py-12 text-brand-gray fst-italic text-sm">
                    No campaigns found matching your criteria.
                  </div>
               )}
             </div>
          </div>
        </Motion.div>
      ) : (
          <Motion.div
            key="other"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="d-flex flex-column align-items-center justify-content-center py-24 bg-white border border-brand-border text-brand-gray" style={{'borderRadius':'24px'}}
          >
            <div className="w-16 h-16 bg-brand-bg rounded-2xl d-flex align-items-center justify-content-center mb-4">
              <BarChart3 size={32} />
            </div>
            <h3 className="text-lg fw-bold text-brand-dark mb-1">Coming Soon</h3>
            <p className="text-sm">The {activeSubTab} section is currently under development.</p>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {sharingForm && (
          <>
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSharingForm(null)}
              className="position-fixed top-0 bottom-0 start-0 end-0 bg-black/40 backdrop-blur-sm"
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="position-fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md bg-card shadow-2xl p-8" style={{'width':'90%', 'borderRadius':'32px'}}
            >
              <div className="d-flex align-items-center justify-content-between mb-8">
                <h3 className="text-xl fw-bold text-brand-dark">Share Form</h3>
                <button 
                  onClick={() => setSharingForm(null)}
                  className="p-2 hover:bg-brand-bg rounded-3 transition-colors"
                >
                  <X size={20} className="text-brand-gray" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-brand-bg/50 p-6 rounded-2xl d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl d-flex align-items-center justify-content-center shadow-sm mb-3">
                    <FileText size={32} className="text-brand-blue" />
                  </div>
                  <h4 className="fw-bold text-brand-dark text-lg line-clamp-1">{sharingForm.name}</h4>
                  <p className="text-sm text-brand-gray mt-1">{sharingForm.questions} Questions • {sharingForm.date}</p>
                </div>

                <div className="d-grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(`https://lymbus.ai/form/${sharingForm.id}`);
                      toast.success('Link copied to clipboard!');
                      setSharingForm(null);
                    }}
                    className="d-flex flex-column align-items-center justify-content-center gap-3 p-6 bg-white border border-brand-border rounded-2xl hover:border-brand-blue hover:bg-brand-blue/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-brand-bg rounded-3 d-flex align-items-center justify-content-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Link size={24} />
                    </div>
                    <span className="fw-bold text-brand-dark text-sm">Copy Link</span>
                  </button>

                  <button 
                    onClick={() => {
                      toast.info('QR Code generating...');
                      // In a real app, this would show a QR code view
                    }}
                    className="d-flex flex-column align-items-center justify-content-center gap-3 p-6 bg-white border border-brand-border rounded-2xl hover:border-brand-blue hover:bg-brand-blue/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-brand-bg rounded-3 d-flex align-items-center justify-content-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <QrCode size={24} />
                    </div>
                    <span className="fw-bold text-brand-dark text-sm">QR Code</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-top border-brand-border">
                <p className="text-brand-gray fw-bold text-uppercase tracking-widest text-center" style={{'fontSize':'10px'}}>
                  Secure Sharing Enabled
                </p>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Preview Drawer */}
      <AnimatePresence>
        {previewForm && (
          <>
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewForm(null)}
              className="position-fixed top-0 bottom-0 start-0 end-0 bg-black/20 backdrop-blur-sm"
            />
            <Motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="position-fixed top-0 end-0 bottom-0 w-100 max-w-2xl bg-brand-bg d-flex flex-column shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="bg-card px-8 py-6 border-bottom border-brand-border d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 rounded-2 bg-brand-blue/10 text-brand-blue fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Preview Mode</span>
                    <h3 className="text-lg fw-bold text-brand-dark">{previewForm.name}</h3>
                  </div>
                  <p className="text-xs text-brand-gray fw-medium">Viewing as Patient • {previewForm.questions} Questions</p>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <div className="d-flex bg-brand-bg p-1 rounded-3 border border-brand-border">
                    <button 
                      onClick={() => setPreviewDevice('desktop')}
                      className={`p-2 rounded-lg transition-all ${previewDevice === 'desktop' ? 'bg-white shadow-sm text-brand-blue' : 'text-brand-gray'}`}
                    >
                      <Monitor size={18} />
                    </button>
                    <button 
                      onClick={() => setPreviewDevice('mobile')}
                      className={`p-2 rounded-lg transition-all ${previewDevice === 'mobile' ? 'bg-white shadow-sm text-brand-blue' : 'text-brand-gray'}`}
                    >
                      <Smartphone size={18} />
                    </button>
                  </div>
                  <button 
                    onClick={() => setPreviewForm(null)}
                    className="p-2 hover:bg-brand-bg rounded-3 transition-colors text-brand-gray"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Preview Content Area */}
              <div className="flex-fill overflow-y-auto p-8 d-flex justify-content-center">
                <div className={`transition-all duration-500 bg-white shadow-xl rounded-[32px] overflow-hidden border border-brand-border flex flex-col ${previewDevice === 'mobile' ? 'w-[375px] h-[667px]' : 'w-full'}`}>
                  {/* Mock Form Top Bar */}
                  <div className="h-2 bg-brand-blue w-100" />
                  <div className="p-8 flex-fill overflow-y-auto custom-scrollbar">
                    <div className="mb-8">
                      <h4 className="text-2xl fw-bold text-brand-dark mb-3">{previewForm.name}</h4>
                      <p className="text-brand-gray text-sm leading-relaxed">
                        Thank you for choosing Lymbus Health. Please take a moment to complete this form. Your responses are confidential and will help us provide better care.
                      </p>
                    </div>

                    <div className="space-y-8">
                      {/* Mock Question 1 */}
                      <div className="space-y-3">
                        <label className="text-sm fw-bold text-brand-dark d-flex align-items-center gap-2">
                          Full Legal Name
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="w-100 h-12 rounded-3 border border-brand-border bg-brand-bg/30 px-4 d-flex align-items-center text-brand-gray fst-italic text-sm">
                          Patient response area...
                        </div>
                      </div>

                      {/* Mock Question 2 */}
                      <div className="space-y-3">
                        <label className="text-sm fw-bold text-brand-dark d-flex align-items-center gap-2">
                          How satisfied are you with our check-in process?
                        </label>
                        <div className="d-flex gap-3">
                          {[1, 2, 3, 4, 5].map(num => (
                            <div key={num} className="w-10 h-10 rounded-circle border border-brand-border d-flex align-items-center justify-content-center text-sm fw-bold text-brand-gray">
                              {num}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Mock Question 3 */}
                      <div className="space-y-3">
                        <label className="text-sm fw-bold text-brand-dark d-flex align-items-center gap-2">
                          Primary Reason for Visit
                        </label>
                        <div className="d-grid grid-cols-1 gap-2">
                          {['Routine Check-up', 'Follow-up', 'New Symptoms', 'Lab Results'].map(opt => (
                            <div key={opt} className="px-4 py-3 rounded-3 border border-brand-border d-flex align-items-center gap-3">
                              <div className="w-5 h-5 rounded-circle border border-brand-border" />
                              <span className="text-sm text-brand-gray">{opt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 pt-8 border-top border-brand-border">
                      <button className="w-100 py-4 bg-brand-blue text-white fw-bold rounded-2xl shadow-lg shadow-brand-blue/20">
                        Submit Form
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="bg-card p-6 border-top border-brand-border d-flex align-items-center justify-content-center gap-8">
                <div className="d-flex align-items-center gap-2 text-xs fw-bold text-brand-gray">
                  <CheckCircle2 size={16} className="" style={{'color':'#00d08a'}} />
                  HIPAA Compliant
                </div>
                <div className="d-flex align-items-center gap-2 text-xs fw-bold text-brand-gray">
                  <CheckCircle2 size={16} className="" style={{'color':'#00d08a'}} />
                  SSL Encrypted
                </div>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating CTA */}
      <AnimatePresence>
        {(activeSubTab === 'campaigns' || activeSubTab === 'forms') && (
          <div className="position-fixed bottom-8 right-8 d-flex flex-column align-items-end gap-4">
            <AnimatePresence>
              {isFabMenuOpen && (
                <Motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="bg-white shadow-2xl border border-brand-border p-3 d-flex flex-column gap-2" style={{'borderRadius':'24px', 'minWidth':'200px'}}
                >
                  <button 
                    onClick={() => {
                      setShowTemplates(true);
                      setIsFabMenuOpen(false);
                    }}
                    className="d-flex align-items-center gap-3 p-4 rounded-3 hover:bg-brand-bg transition-colors text-start group"
                  >
                    <div className="w-10 h-10 bg-brand-bg rounded-3 d-flex align-items-center justify-content-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                      <p className="fw-bold text-brand-dark text-sm">Quick Templates</p>
                      <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Start from pre-built</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => {
                      setShowFormBuilder(true);
                      setIsFabMenuOpen(false);
                    }}
                    className="d-flex align-items-center gap-3 p-4 rounded-3 hover:bg-brand-bg transition-colors text-start group"
                  >
                    <div className="w-10 h-10 bg-brand-bg rounded-3 d-flex align-items-center justify-content-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <FilePlus size={20} />
                    </div>
                    <div>
                      <p className="fw-bold text-brand-dark text-sm">Build New Form</p>
                      <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Create from scratch</p>
                    </div>
                  </button>
                </Motion.div>
              )}
            </AnimatePresence>

            <Motion.button 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={showFormsGuide && activeSubTab === 'forms' ? {
                opacity: 1, 
                scale: [1, 1.1, 1],
                y: 0,
                transition: {
                  scale: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.2 },
                  y: { duration: 0.2 }
                }
              } : { opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (activeSubTab === 'forms') {
                  setIsFabMenuOpen(!isFabMenuOpen);
                } else {
                  setShowCampaignBuilder(true);
                }
              }}
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-blue/30 transition-all duration-300 relative z-[151] ${
                isFabMenuOpen ? 'bg-brand-dark rotate-45' : 'bg-brand-blue'
              }`}
            >
              <Plus size={32} className="lg:scale-125" />
            </Motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Templates Modal */}
      <AnimatePresence>
        {showTemplates && (
          <>
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTemplates(false)}
              className="position-fixed top-0 bottom-0 start-0 end-0 bg-black/40 backdrop-blur-sm"
            />
            <Motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="position-fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100 bg-card shadow-2xl overflow-hidden d-flex flex-column border border-brand-border" style={{'maxWidth':'480px', 'borderRadius':'32px'}}
            >
              <div className="p-6 border-bottom border-brand-border bg-white d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-3 d-flex align-items-center justify-content-center text-brand-blue">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg fw-bold text-brand-dark leading-tight">Quick Start</h2>
                    <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>Select a template</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowTemplates(false)}
                  className="p-2 hover:bg-brand-bg rounded-3 transition-colors group"
                >
                  <X size={18} className="text-brand-gray group-hover:text-brand-dark" />
                </button>
              </div>
              
              <div className="flex-fill overflow-y-auto p-6 space-y-3" style={{'maxHeight':'400px'}}>
                {[
                  { title: 'OPD Visit Feedback', questions: 5, icon: MessageSquare, color: 'text-blue-500' },
                  { title: 'IPD Discharge Survey', questions: 12, icon: FileText, color: 'text-green-500' },
                  { title: 'ER Experience Review', questions: 8, icon: Zap, color: 'text-amber-500' },
                  { title: 'Surgery Follow-up', questions: 7, icon: CheckCircle2, color: 'text-purple-500' }
                ].map((tpl, i) => (
                  <Motion.button 
                    key={tpl.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-100 d-flex align-items-center justify-content-between p-4 rounded-2xl bg-brand-bg/40 border border-brand-border hover:bg-brand-bg transition-all group"
                  >
                    <div className="d-flex align-items-center gap-4">
                      <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center ${tpl.color} shadow-sm group-hover:scale-110 transition-transform`}>
                        <tpl.icon size={20} />
                      </div>
                      <div className="text-start">
                        <p className="text-sm fw-bold text-brand-dark">{tpl.title}</p>
                        <p className="text-brand-gray fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>{tpl.questions} Questions</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-brand-gray opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Motion.button>
                ))}
              </div>

              <div className="p-6 bg-brand-bg/50 border-top border-brand-border d-flex align-items-center justify-content-between">
                <span className="text-xs text-brand-gray fw-medium">Over 20+ more templates available</span>
                <button className="text-brand-blue text-xs fw-bold text-uppercase tracking-widest hover:underline">
                  View Library
                </button>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>

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
