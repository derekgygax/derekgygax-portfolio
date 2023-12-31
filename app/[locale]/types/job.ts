export type ProjectConfig = {
  id: string;
  title: string;
  image: string;
  website: string;
  responsibilities: string[],
  technologies: string[];
}

export type JobConfig = {
  id: string;
  companyName: string;
  projects: ProjectConfig[]
};