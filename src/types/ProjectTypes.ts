export interface IProject {
  name?: string;
  tech: string[];
  description: string;
  handleClick?: () => void;
  linkcode?: string;
  showLive?: string;
  image: string;
}
