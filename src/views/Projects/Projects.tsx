import { motion } from 'framer-motion';
import { Clock, MessageSquare, ShieldCheck, Users, Package, ExternalLink } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const stack = [
  'React', 'Next.js', 'Node.js', 'TypeScript',
  'Tailwind CSS', 'PostgreSQL', 'Socket.io', 'Stripe'
];

const features = [
  { icon: Users,          color: 'text-cyan-400',   label: 'Usuarios, cuidadores y organizaciones' },
  { icon: MessageSquare,  color: 'text-blue-400',   label: 'Chat en tiempo real' },
  { icon: Package,        color: 'text-purple-400', label: 'Productos y servicios' },
  { icon: ShieldCheck,    color: 'text-green-400',  label: 'Autenticación propia' },
];

export const Projects = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 pt-20 pb-6 overflow-hidden bg-[#0a0f18]">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Proyectos</h2>
          <div className="h-[1px] flex-1 bg-slate-800" />
        </motion.div>

        {/* Tarjeta VIVEPLUS */}
        <motion.div
          variants={fadeInUp}
          className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 md:p-8 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider">
                  <Clock size={11} /> En curso
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">VIVEPLUS</h3>
              <p className="text-slate-400 text-sm mt-1">Plataforma web de cuidado y acompañamiento para personas mayores</p>
            </div>
            <button
              disabled
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-500 text-xs font-mono opacity-50 cursor-not-allowed"
              title="Disponible próximamente"
            >
              <ExternalLink size={13} /> Ver proyecto
            </button>
          </div>

          {/* Descripción */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
            VIVEPLUS es una plataforma web orientada a personas mayores de 55 años que conecta usuarios,
            cuidadores (médicos/profesionales) y organizaciones. Incluye funcionalidades de{' '}
            <span className="text-cyan-400">chat en tiempo real</span>, gestión de productos y servicios,
            recursos de salud, cercanía entre usuarios y un{' '}
            <span className="text-cyan-400">sistema de autenticación propio</span>.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {features.map(({ icon: Icon, color, label }) => (
              <div key={label} className="flex items-center gap-2 bg-[#05080f] border border-slate-800/80 rounded-lg px-3 py-2.5">
                <Icon size={15} className={color} />
                <span className="text-slate-400 text-xs leading-tight">{label}</span>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {stack.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#05080f] border border-slate-800/80 rounded-lg text-slate-400 font-mono text-xs hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Más proyectos próximamente */}
        <motion.div variants={fadeInUp} className="mt-6">
          <p className="font-mono text-xs text-slate-600 text-center">
            &gt; <span className="text-cyan-500/50">ls ./proyectos</span>
            <span className="text-slate-600"> — más proyectos próximamente</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
