import React from 'react';
import { 
  Book, 
  Video, 
  FileText, 
  LayoutDashboard, 
  Sparkles, 
  FileEdit, 
  MessageSquare, 
  Search, 
  AlertTriangle, 
  ExternalLink,
  HelpCircle,
  PlayCircle,
  Mail,
  Lightbulb
} from 'lucide-react';
import { motion as Motion } from 'motion/react';

const GuideCard = ({ icon: Icon, title, description, meta, delay }: any) => (
  <Motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-4 border border-brand-border hover:shadow-lg transition-all cursor-pointer group d-d-flex d-flex-column align-align-items-start h-100" style={{'borderRadius':'24px'}}
  >
    <div className="w-12 h-12 rounded-4 bg-brand-blue/10 text-brand-blue d-d-flex align-align-items-center justify-content-center mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-lg fw-bold text-brand-dark mb-2">{title}</h3>
    <p className="text-sm text-brand-gray mb-6 d-flex-fill">{description}</p>
    <span className="text-xs fw-bold text-brand-blue text-uppercase tracking-wider group-hover:underline">
      {meta}
    </span>
  </Motion.div>
);

const FeatureItem = ({ badge, title, description, delay, icon: Icon }: any) => (
  <Motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-card p-4 md:p-4 border border-brand-border hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all cursor-pointer group d-d-flex d-flex-column md:d-flex-row md:align-items-center gap-4 md:gap-6" style={{'borderRadius':'24px'}}
  >
    <div className="d-flex-flex-shrink-0">
      <span className="px-3 py-1.5 rounded-3 bg-brand-blue/10 text-brand-blue fw-bold text-uppercase tracking-wider" style={{'fontSize':'10px'}}>
        {badge}
      </span>
    </div>
    <div className="d-flex-fill">
      <h4 className="text-base fw-bold text-brand-dark mb-1 d-d-flex align-align-items-center gap-2">
        {title}
      </h4>
      <p className="text-sm text-brand-gray">{description}</p>
    </div>
    <div className="text-brand-gray/40 group-hover:text-brand-blue transition-colors align-self-end md:self-center">
      <ExternalLink size={20} />
    </div>
  </Motion.div>
);

export const HelpSupport = () => {
  return (
    <div className="p-4 lg:p-8 space-y-8 mx-auto pb-20" style={{'maxWidth':'1200px'}}>
      
      {/* Header Section */}
      <div className="space-y-2">
        <h2 className="text-2xl fw-bold text-brand-dark">Help & Support</h2>
        <p className="text-brand-gray">Find guides, documentation, and support resources.</p>
      </div>

      {/* Getting Started */}
      <section className="space-y-6">
        <div className="d-d-flex align-align-items-center gap-3">
          <div className="w-10 h-10 rounded-3 bg-brand-bg d-d-flex align-align-items-center justify-content-center text-brand-blue">
            <Lightbulb size={20} />
          </div>
          <div>
            <h3 className="text-lg fw-bold text-brand-dark">Getting Started</h3>
            <p className="text-sm text-brand-gray">Quick tips to help you get the most out of the platform</p>
          </div>
        </div>

        <div className="d-grid grid-cols-1 md:grid-cols-3 gap-6">
          <GuideCard 
            icon={Book}
            title="Platform Overview"
            description="Learn the basics of navigating and using key features"
            meta="5 min read"
            delay={0.1}
          />
          <GuideCard 
            icon={Video}
            title="Video Tutorials"
            description="Watch step-by-step guides for common workflows"
            meta="10 videos"
            delay={0.2}
          />
          <GuideCard 
            icon={FileText}
            title="Documentation"
            description="Detailed reference for all modules and settings"
            meta="Full docs"
            delay={0.3}
          />
        </div>
      </section>

      {/* Feature Guides */}
      <section className="space-y-6 pt-4">
        <div className="d-d-flex align-align-items-center gap-3">
          <div className="w-10 h-10 rounded-3 bg-brand-bg d-d-flex align-align-items-center justify-content-center text-emerald-600">
            <Book size={20} />
          </div>
          <div>
            <h3 className="text-lg fw-bold text-brand-dark">Feature Guides</h3>
            <p className="text-sm text-brand-gray">Learn how to use each module effectively</p>
          </div>
        </div>

        <div className="space-y-4">
          <FeatureItem 
            badge="Dashboard"
            title="Dashboard & Analytics"
            description="Understanding your NPS, PREM, and PROM metrics at a glance"
            delay={0.4}
            icon={LayoutDashboard}
          />
          <FeatureItem 
            badge="AI Copilot"
            title="Lymbus AI Assistant"
            description="Ask questions about patient feedback and get AI-powered insights"
            delay={0.5}
            icon={Sparkles}
          />
          <FeatureItem 
            badge="Forms"
            title="Form Builder"
            description="Create and customize patient experience surveys"
            delay={0.6}
            icon={FileEdit}
          />
          <FeatureItem 
            badge="Campaigns"
            title="Campaign Management"
            description="Schedule and track survey distribution campaigns"
            delay={0.7}
            icon={MessageSquare}
          />
          <FeatureItem 
            badge="Root Cause"
            title="Root Cause Analysis"
            description="Identify patterns and drivers behind patient feedback"
            delay={0.8}
            icon={Search}
          />
          <FeatureItem 
            badge="Escalation"
            title="Escalation Rules"
            description="Set up automated alerts for critical feedback"
            delay={0.9}
            icon={AlertTriangle}
          />
        </div>
      </section>

      {/* Need More Help Footer */}
      <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-brand-border p-4 md:p-8 d-d-flex d-flex-column md:d-flex-row align-align-items-start md:align-items-center justify-content-between gap-6 md:gap-8 mt-8 shadow-sm" style={{'borderRadius':'24px'}}
      >
        <div className="d-d-flex align-align-items-start gap-4">
          <div className="w-12 h-12 rounded-4 bg-brand-blue/10 text-brand-blue d-d-flex align-align-items-center justify-content-center d-flex-flex-shrink-0">
            <HelpCircle size={24} />
          </div>
          <div>
            <h3 className="text-lg fw-bold text-brand-dark mb-1">Need More Help?</h3>
            <p className="text-sm text-brand-gray">Contact our support team or browse FAQs</p>
          </div>
        </div>

        <div className="d-d-flex d-flex-column sm:d-flex-row align-align-items-center gap-3 w-100 md:w-auto">
          <button className="w-100 sm:w-auto px-5 py-2 rounded-3 border border-brand-border bg-white text-brand-dark fw-bold text-sm hover:bg-brand-bg transition-colors d-d-flex align-align-items-center justify-content-center gap-2">
            <FileText size={16} />
            Browse FAQs
          </button>
          <button className="w-100 sm:w-auto px-5 py-2 rounded-3 border border-brand-border bg-white text-brand-dark fw-bold text-sm hover:bg-brand-bg transition-colors d-d-flex align-align-items-center justify-content-center gap-2">
            <PlayCircle size={16} />
            Watch Tutorials
          </button>
          <button className="w-100 sm:w-auto px-5 py-2 rounded-3 bg-brand-blue text-white fw-bold text-sm hover:bg-blue-600 transition-colors d-d-flex align-align-items-center justify-content-center gap-2 shadow-lg shadow-brand-blue/20">
            <Mail size={16} />
            Contact Support
          </button>
        </div>
      </Motion.div>

    </div>
  );
};
