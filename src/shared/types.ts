export enum SelectedPage {
  Home = "home",
  AboutMe = "aboutme",
  Projects = "projects",
  ContactMe = "contactme",
}

export interface ProjectType {
  id: number;
  name: string;
  link1: string;
  link2?: string;
  image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  description: string;
  TechStack: string;
}

export interface TechType {
  name: string;
  image: string;
}
