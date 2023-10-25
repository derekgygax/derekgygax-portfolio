export type ProjectsConfig = {
  id: string;
  projectIds: string[];
  projects: { [key: string]: ProjectConfig };
};

export type ProjectConfig = {
  id: string;
  title: string;
  website: string;
  responsibilities: string[],
  technologies: string[];
};