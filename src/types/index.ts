export type SectionId = 'home' | 'about' | 'experience' | 'skills' | 'contact';

export interface Section {
  id: SectionId;
  title: string;
}

export const SECTIONS: Section[] = [
  { id: 'home', title: 'Inicio' },
  { id: 'about', title: 'Sobre mí' },
  { id: 'experience', title: 'Trayectoria' },
  { id: 'skills', title: 'Habilidades' },
  { id: 'contact', title: 'Contacto' }
];