import { Terminal } from 'lucide-react';
import type { SectionId } from '../../types';
import { SECTIONS } from '../../types';

interface NavbarProps {
  activeSectionId: SectionId;
  onNavigate: (id: SectionId) => void;
}

export const Navbar = ({ activeSectionId, onNavigate }: NavbarProps) => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-500 bg-[#0a0f18]/80 backdrop-blur-md py-4 border-b border-slate-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="font-black text-2xl tracking-tighter text-white flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <Terminal size={24} className="text-cyan-400" />
          <span>JE<span className="text-cyan-400">.</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {SECTIONS.map((section) => {
            const isActive = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`relative px-1 py-2 transition-colors duration-300 hover:text-white ${
                  isActive ? 'text-white' : 'text-slate-400'
                }`}
              >
                {section.title}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu (simplified for now, just shows active) */}
        <div className="md:hidden flex items-center">
          <span className="text-cyan-400 font-medium text-sm">
            {SECTIONS.find(s => s.id === activeSectionId)?.title}
          </span>
        </div>
      </div>
    </nav>
  );
};