import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { LinkedinIcon } from '../../components/UI/Icons';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const Contact = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 pt-20 pb-6 overflow-hidden bg-[#0a0f18]">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-3xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Contacto</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-1">
            ¿Tienes un proyecto en mente o simplemente quieres hablar?
          </p>
          <p className="text-slate-500 text-sm font-light mb-6">
            Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col gap-3 mb-6">
          <a
            href="mailto:javiecheva99@gmail.com"
            className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 rounded-xl px-5 py-4 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 group"
          >
            <div className="p-2.5 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
              <Mail size={20} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
              <p className="text-white font-medium text-base">javiecheva99@gmail.com</p>
            </div>
            <Send size={15} className="text-slate-600 group-hover:text-cyan-400 ml-auto transition-colors duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/javier-echevarr%C3%ADa-traspuesto-ab3755258"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 rounded-xl px-5 py-4 hover:border-[#0a66c2]/50 hover:shadow-[0_0_30px_rgba(10,102,194,0.1)] transition-all duration-300 group"
          >
            <div className="p-2.5 bg-[#0a66c2]/10 rounded-lg group-hover:bg-[#0a66c2]/20 transition-colors duration-300">
              <LinkedinIcon size={20} className="text-[#0a66c2]" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
              <p className="text-white font-medium text-base">Javier Echevarría</p>
            </div>
            <Send size={15} className="text-slate-600 group-hover:text-[#0a66c2] ml-auto transition-colors duration-300" />
          </a>

        </motion.div>

        <motion.div variants={fadeInUp}>
          <p className="font-mono text-xs text-slate-600 text-center">
            &gt; <span className="text-cyan-500/60">echo</span> "Hablemos y construyamos algo grande."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
