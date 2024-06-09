export type TScrollBtn = {
  handleScroll: () => void;
};
export interface DefaultContextValues {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}
export type IProject = {
  name?: string;
  tech: string[];
  description: string;
  handleClick?: () => void;
  linkcode?: string;
  showLive?: string;
  image?: string;
};

export type TNavbar = {
  mobile: string;
  email: string;
  github: string;
  linkedIn: string;
  instagram: string;
  facebook: string;
};
export type AboutMe = {
  paragraphs: string[];
  skills: string[];
};
