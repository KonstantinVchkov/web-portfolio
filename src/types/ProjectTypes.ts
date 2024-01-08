export interface IProject {
  name?: string;
  tech: string[];
  description: string;
  handleClick?: () => void;
  linkcode?: string;
  showLive?: string;
  imgsrc: string;
}

export type TNavbar = {
  mobile:string;
  email:string;
  github:string;
  linkedIn:string;
  instagram:string;
  facebook:string;
}
