export type IProject = {
  name?: string;
  tech: string[];
  description: string;
  handleClick?: () => void;
  linkcode: string;
  showLive?: string;
  image: string;
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
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  fourthParagraph: string;
  skills: string[];
};
