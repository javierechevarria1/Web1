import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Code, Database } from 'lucide-react';
import { useEffect } from 'react';

interface NetbeesModalProps {
  open: boolean;
  onClose: () => void;
}

const bullets = [
  {
    icon: Award,
    color: 'text-yellow-400',
    text: 'Participé en la hackathon organizada por la empresa, colaborando en el diseño y desarrollo de "Nexa", una solución tecnológica compuesta por una pulsera inteligente y una plataforma digital orientada a personas mayores de 65 años con soledad no deseada. El proyecto resultó ganador tras la presentación final ante la empresa.',
  },
  {
    icon: Code,
    color: 'text-cyan-400',
    text: 'Formé parte del desarrollo full stack de una plataforma web utilizando React, Next.js, Node.js, TypeScript, Tailwind CSS y PostgreSQL, participando en la implementación de funcionalidades frontend y backend, APIs REST, sistemas de autenticación, chat en tiempo real e integración de Stripe para pagos y suscripciones.',
  },
  {
    icon: Database,
    color: 'text-blue-400',
    text: 'Colaboré en la gestión, optimización y reestructuración de bases de datos mediante PostgreSQL, DBeaver y pgAdmin, así como en el control de versiones y trabajo colaborativo utilizando Git y GitHub mediante ramas propias, commits, push y merges coordinados con el equipo de desarrollo.',
  },
];

const base = import.meta.env.BASE_URL;
const photos = [
  { src: `${base}images/nexa-pulsera.jpg`, alt: 'Proyecto NEXA — pulsera inteligente' },
  { src: `${base}images/hackathon-premio.jpg`, alt: 'Primer puesto Hackathon Hack The Age' },
  { src: `${base}images/hackathon-presentacion.jpg`, alt: 'Presentación NEXA en Netbees' },
];

export const NetbeesModal = ({ open, onClose }: NetbeesModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0f18] border border-slate-700/60 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] custom-scrollbar"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0a0f18]/95 backdrop-blur border-b border-slate-800/60">
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-0.5">2024 — 2026</p>
                <h2 className="text-lg md:text-xl font-bold text-white">Prácticas en Netbees <span className="text-slate-400 font-normal text-base">(500h)</span></h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Fotos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {photos.map((photo, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-slate-800/60 aspect-[4/3] bg-slate-900">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              {/* Descripción */}
              <div className="space-y-5">
                {bullets.map(({ icon: Icon, color, text }, i) => (
                  <div key={i} className="flex gap-4 bg-slate-900/40 border border-slate-800/50 rounded-xl p-4">
                    <div className="mt-0.5 shrink-0">
                      <Icon size={18} className={color} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
