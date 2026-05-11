import { motion } from 'framer-motion';

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

export const About = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center px-6 overflow-hidden bg-[#0d131f]">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Sobre mí</h2>
          <div className="h-[1px] flex-1 bg-slate-800"></div>
        </motion.div>

        <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden bg-[#0a0f18] border border-slate-800/80 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#05080f] border-b border-slate-800/80 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 text-xs font-mono text-slate-500">javier@portfolio: ~</div>
          </div>
          {/* Terminal Body */}
          <div className="p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed text-slate-300">
            <p className="mb-4">
              <span className="text-cyan-400">&gt; whoami</span>
            </p>
            <p className="mb-8 text-slate-400 text-lg leading-relaxed">
              "Soy un apasionado de la tecnología, los servidores y el código. Empecé gestionando redes a nivel microinformático y me especialicé en ASIR."
            </p>
            <p className="mb-4">
              <span className="text-cyan-400">&gt; cat objetivos.txt</span>
            </p>
            <p className="mb-8 text-slate-400 text-lg leading-relaxed">
              "Mi próximo gran reto es dominar la creación de software. Por ello, entre 2026 y 2028 cursaré DAW para unir el mundo de la infraestructura con el desarrollo web."
            </p>
            <p className="mb-4">
              <span className="text-cyan-400">&gt; echo $FILOSOFIA</span>
            </p>
            <p className="text-green-400/90 text-lg">
              "La excelencia no es un acto, es un hábito."
            </p>
            <p className="mt-4 animate-pulse text-cyan-400">_</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};