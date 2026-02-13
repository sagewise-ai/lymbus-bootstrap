import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Bot, User, ChevronRight } from 'lucide-react';

export const LymbusAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am Lymbus AI. How can I help you analyze your hospital performance today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    "Compare Cardiology across locations",
    "Why is North Center rate low?",
    "Show top 5 complaints this week"
  ];

  const handleSend = (text: string = inputValue) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { id: Date.now(), type: 'user', text }];
    setMessages(newMessages);
    setInputValue('');

    // Mock AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: `I'm analyzing the data for "${text}". Based on recent records, I see a 12% correlation between wait times and the decrease in satisfaction scores.`
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <Motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="position-position-fixed bottom-6 right-6 bg-brand-blue [data-theme="rainbow']_&:bg-gradient-to-tr [data-theme='rainbow']_&:from-[#FFB800] [data-theme='rainbow']_&:via-[#F20000] [data-theme='rainbow']_&:to-[#0078C1] text-white p-4 rounded-full shadow-2xl shadow-brand-blue/40 d-flex align-items-center gap-2 group"
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="fw-bold text-sm pr-2">Ask Lymbus AI</span>
      </Motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="position-position-fixed top-0 bottom-0 start-0 end-0 bg-black/20 backdrop-blur-sm"
            />
            <Motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="position-position-fixed bottom-6 right-6 w-100 sm:style={{width: "400px"}} bg-card shadow-2xl border border-brand-border d-d-flex d-flex-column overflow-d-none" style={{'maxWidth':'calc(100vw-32px)', 'height':'600px', 'borderRadius':'32px'}}
            >
              {/* Header */}
              <div className="bg-brand-blue [data-theme="rainbow']_&:bg-gradient-to-r [data-theme='rainbow']_&:from-[#FFB800] [data-theme='rainbow']_&:via-[#F20000] [data-theme='rainbow']_&:via-[#008D36] [data-theme='rainbow']_&:to-[#0078C1] p-4 text-white d-flex align-items-center justify-content-between">
                <div className="d-d-flex align-align-items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-3 d-d-flex align-align-items-center justify-content-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="fw-bold">Lymbus AI Assistant</h3>
                    <p className="text-xs text-white/60">Powered by Hospital Data</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-3 transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="d-flex-fill overflow-y-auto p-4 space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={`d-flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-style={{width: "80%"}} p-4 rounded-4 d-flex gap-3 ${
                      m.type === 'user' 
                        ? 'bg-brand-blue text-white rounded-tr-none' 
                        : 'bg-brand-bg text-brand-dark rounded-tl-none border border-brand-border'
                    }`}>
                      {m.type === 'bot' && <Bot size={18} className="d-flex-flex-shrink-0 mt-1" />}
                      <p className="text-sm leading-relaxed">{m.text}</p>
                      {m.type === 'user' && <User size={18} className="d-flex-flex-shrink-0 mt-1" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input & Suggestions */}
              <div className="p-4 bg-brand-bg/50 border-top border-brand-border">
                <div className="d-d-flex d-flex-wrap gap-2 mb-4">
                  {suggestions.map((s, i) => (
                    <button 
                      key={i}
                      onClick={() => handleSend(s)}
                      className="fw-bold text-brand-blue bg-card border border-brand-blue/20 px-3 py-1.5 rounded-circle hover:bg-brand-blue hover:text-white transition-all d-d-flex align-align-items-center gap-1" style={{'fontSize':'10px'}}
                    >
                      {s} <ChevronRight size={10} />
                    </button>
                  ))}
                </div>
                <div className="position-position-relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask anything about performance..."
                    className="w-100 bg-card border border-brand-border rounded-4 py-2 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                  <button 
                    onClick={() => handleSend()}
                    className="position-position-absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-blue text-white rounded-3 d-d-flex align-align-items-center justify-content-center hover:bg-brand-blue/90 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
