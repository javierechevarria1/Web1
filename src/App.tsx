import { AnimatePresence } from 'framer-motion';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { Navbar } from './components/Navbar/Navbar';
import { PageTransition } from './components/UI/PageTransition';
import { CustomCursor } from './components/UI/CustomCursor';

import { Home } from './views/Home/Home';
import { About } from './views/About/About';
import { Experience } from './views/Experience/Experience';
import { Skills } from './views/Skills/Skills';
import { Contact } from './views/Contact/Contact';

function App() {
  const { activeSectionId, activeSectionIndex, goToSectionById } = useSectionNavigation();

  return (
    <div className="fixed inset-0 w-full h-full bg-[#0a0f18] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <CustomCursor />
      <Navbar activeSectionId={activeSectionId} onNavigate={goToSectionById} />

      <main className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {activeSectionId === 'home' && (
            <PageTransition key="home" id="home">
              <Home onNavigateToProjects={() => goToSectionById('experience')} />
            </PageTransition>
          )}
          {activeSectionId === 'about' && (
            <PageTransition key="about" id="about">
              <About />
            </PageTransition>
          )}
          {activeSectionId === 'experience' && (
            <PageTransition key="experience" id="experience">
              <Experience />
            </PageTransition>
          )}
          {activeSectionId === 'skills' && (
            <PageTransition key="skills" id="skills">
              <Skills />
            </PageTransition>
          )}
          {activeSectionId === 'contact' && (
            <PageTransition key="contact" id="contact">
              <Contact />
            </PageTransition>
          )}
        </AnimatePresence>
      </main>

      {/* Indicador de scroll */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === activeSectionIndex 
                ? 'bg-cyan-400 h-8 shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
                : 'bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;