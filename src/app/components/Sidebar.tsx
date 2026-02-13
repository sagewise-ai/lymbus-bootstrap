import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  Search, 
  BarChart3, 
  MessageSquare, 
  AlertTriangle, 
  FileText, 
  Settings, 
  HelpCircle,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, className: 'nav-dashboard' },
    { id: 'lymbus', label: 'Lymbus AI', icon: Sparkles, className: 'nav-lymbus' },
    { id: 'root-cause', label: 'Root Cause', icon: Search, className: 'nav-root-cause' },
    { id: 'benchmarking', label: 'Benchmarking', icon: BarChart3, className: 'nav-benchmarking' },
    { id: 'engagement', label: 'Engagement', icon: MessageSquare, className: 'nav-engagement' },
    { id: 'escalation', label: 'Escalation', icon: AlertTriangle, className: 'nav-escalation' },
    { id: 'reports', label: 'Reports', icon: FileText, className: 'nav-reports' },
  ];

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  return (
    <aside className="bg-card border-end border-brand-border vh-100 d-flex flex-column" style={{'width':'280px'}}>
      {/* Logo */}
      <div className="p-6 border-bottom border-brand-border d-flex align-items-center gap-3">
        <div className={cn(
          "w-8 h-8 rounded-lg flex items-center justify-center text-white",
          "bg-brand-blue [data-theme='rainbow']_&:bg-gradient-to-tr [data-theme='rainbow']_&:from-[#FFB800] [data-theme='rainbow']_&:via-[#F20000] [data-theme='rainbow']_&:to-[#0078C1]"
        )}>
          <Sparkles size={18} fill="white" />
        </div>
        <h1 className="text-brand-dark text-xl fw-bold tracking-tight">Lymbus AI</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-fill px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
              item.className,
              activeTab === item.id 
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                : "text-brand-gray hover:bg-brand-bg hover:text-brand-dark"
            )}
            style={activeTab === item.id ? { backgroundColor: 'var(--item-color, var(--brand-blue))' } : {}}
          >
            <item.icon 
              size={20} 
              className={cn(
                "transition-colors",
                activeTab === item.id ? "text-white" : "text-brand-gray group-hover:text-brand-dark"
              )} 
              style={activeTab !== item.id ? { color: 'var(--item-color, var(--brand-blue))' } : {}}
            />
            <span className="fw-medium text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="px-4 py-4 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              activeTab === item.id 
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" 
                : "text-brand-dark hover:bg-brand-bg"
            )}
          >
            <item.icon size={20} />
            <span className="fw-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-top border-brand-border space-y-2">
        <div className="w-100 d-flex align-items-center gap-3 p-2 bg-brand-bg rounded-3">
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" 
            alt="User" 
            className="w-8 h-8 rounded-circle object-fit-cover"
          />
          <div className="flex-fill text-start">
            <p className="text-sm fw-semibold text-brand-dark">Robert Fox</p>
            <p className="text-brand-gray" style={{'fontSize':'10px'}}>System Admin</p>
          </div>
        </div>
        <button 
          onClick={onLogout}
          className="w-100 d-flex align-items-center gap-3 px-4 py-2.5 rounded-3 text-brand-gray hover:text-red-500 hover:bg-red-50 transition-all duration-200 group"
        >
          <LogOut size={18} className="group-hover:translate-x-0.5 transition-transform" />
          <span className="fw-bold text-uppercase tracking-wider" style={{'fontSize':'11px'}}>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
