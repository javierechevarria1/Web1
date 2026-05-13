export type SectionId = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface Section {
  id: SectionId;
  title: string;
}

export const SECTIONS: Section[] = [
  { id: 'home', title: 'Inicio' },
  { id: 'about', title: 'Sobre mí' },
  { id: 'experience', title: 'Trayectoria' },
  { id: 'projects', title: 'Proyectos' },
  { id: 'skills', title: 'Habilidades' },
  { id: 'contact', title: 'Contacto' }
];