import React from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'warning' | 'info';
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger'
}) => {
  if (!isOpen) return null;

  const variantStyles = {
    danger: {
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      buttonBg: 'bg-red-600 hover:bg-red-700 shadow-red-200',
    },
    warning: {
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      buttonBg: 'bg-amber-600 hover:bg-amber-700 shadow-amber-200',
    },
    info: {
      iconBg: 'bg-brand-blue/10',
      iconColor: 'text-brand-blue',
      buttonBg: 'bg-brand-blue hover:bg-brand-blue/90 shadow-brand-blue/20',
    }
  };

  const style = variantStyles[variant];

  return (
    <AnimatePresence>
      <div className="position-position-fixed top-0 bottom-0 start-0 end-0 d-d-flex align-align-items-center justify-content-center p-4">
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="position-position-absolute top-0 bottom-0 start-0 end-0 bg-brand-dark/40 backdrop-blur-sm"
        />
        <Motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="position-position-relative bg-card w-100 max-w-md shadow-2xl overflow-d-none" style={{'borderRadius':'24px'}}
        >
          <div className="p-8">
            <div className="d-d-flex align-align-items-start justify-content-between mb-6">
              <div className={`w-12 h-12 rounded-4 ${style.iconBg} ${style.iconColor} d-flex align-items-center justify-content-center flex-shrink-0`}>
                <AlertTriangle size={24} />
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-brand-bg rounded-circle transition-colors text-brand-gray"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-2 mb-8">
              <h3 className="text-xl fw-bold text-brand-dark text-uppercase tracking-tight">{title}</h3>
              <p className="text-sm fw-medium text-brand-gray leading-relaxed">
                {message}
              </p>
            </div>

            <div className="d-d-flex align-align-items-center gap-3">
              <button
                onClick={onClose}
                className="d-flex-fill px-5 py-2 rounded-3 border border-brand-border text-xs fw-bold text-brand-gray text-uppercase tracking-widest hover:bg-brand-bg transition-all active:scale-95"
              >
                {cancelLabel}
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className={`d-flex-grow-1 px-5 py-2 rounded-3 ${style.buttonBg} text-white text-xs fw-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg`}
              >
                {confirmLabel}
              </button>
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
};
