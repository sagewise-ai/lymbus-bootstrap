import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Search, 
  ChevronDown
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { cn } from '@/app/components/ui/utils';
import { toast } from 'sonner';
import { FormBuilderInteractive } from '@/app/components/FormBuilderInteractive';

export const FormBuilder = ({ onBack }: { onBack: () => void }) => {
  const [selectedFacility, setSelectedFacility] = useState('Main Hospital');
  const [isFacilityOpen, setIsFacilityOpen] = useState(false);

  return (
    <div className="position-fixed top-0 bottom-0 start-0 end-0 bg-brand-bg d-flex flex-column animate-in fade-in duration-300 overflow-hidden">
      {/* Shared Header */}
      <header className="h-16 bg-white border-bottom border-brand-border px-4 lg:px-8 d-flex align-items-center justify-content-between flex-shrink-0 z-50">
        <div className="d-flex align-items-center gap-4">
          <button 
            onClick={onBack}
            className="d-flex align-items-center gap-2 text-brand-gray hover:text-brand-dark transition-all fw-bold text-xs lg:text-sm group"
          >
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="d-none sm:inline">Back to forms</span>
          </button>
          <div className="h-6 w-px bg-brand-border mx-2" />
          <div className="d-flex flex-column">
            <h1 className="text-lg lg:text-xl fw-bold text-brand-dark tracking-tight whitespace-nowrap leading-none">Form Builder</h1>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 lg:gap-6 flex-fill justify-content-end">
          <button 
            onClick={() => {
              toast.success('Form saved successfully');
              onBack();
            }}
            className="px-6 lg:px-8 py-2 bg-brand-blue text-white rounded-3 fw-bold text-xs lg:text-sm shadow-lg shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all whitespace-nowrap"
          >
            Save
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-fill overflow-hidden position-relative">
        <FormBuilderInteractive onBack={onBack} />
      </div>
    </div>
  );
};
