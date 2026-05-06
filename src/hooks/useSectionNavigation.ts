import { useState, useEffect, useCallback } from 'react';
import type { SectionId } from '../types';
import { SECTIONS } from '../types';

export const useSectionNavigation = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSection = useCallback((index: number) => {
    if (isAnimating || index === activeSectionIndex || index < 0 || index >= SECTIONS.length) return;
    
    setIsAnimating(true);
    setActiveSectionIndex(index);
    
    // Bloquear scroll durante la animación
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // 1000ms coincide con la duración de la animación + un margen
  }, [activeSectionIndex, isAnimating]);

  const goToSectionById = useCallback((id: SectionId) => {
    const index = SECTIONS.findIndex(s => s.id === id);
    if (index !== -1) {
      goToSection(index);
    }
  }, [goToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Si el evento viene de un elemento que tiene su propio scroll interno, no hacer nada
      const target = e.target as HTMLElement;
      if (target.closest('.allow-scroll')) {
        return;
      }

      e.preventDefault(); // Prevenir el scroll normal de la página

      if (isAnimating) return;

      if (e.deltaY > 50) {
        // Scroll down
        goToSection(activeSectionIndex + 1);
      } else if (e.deltaY < -50) {
        // Scroll up
        goToSection(activeSectionIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Soporte para teclado (flechas)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        goToSection(activeSectionIndex + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        goToSection(activeSectionIndex - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSectionIndex, isAnimating, goToSection]);

  return {
    activeSectionIndex,
    activeSectionId: SECTIONS[activeSectionIndex].id,
    goToSection,
    goToSectionById,
    isAnimating
  };
};