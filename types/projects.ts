export type ProjectsConfig = {
  id: string;
  projectIds: string[];
  projects: { [key: string]: ProjectConfig };
};

export type ProjectConfig = {
  id: string;
  isThisProject: boolean;
  title: string;
  website: string;
  hasWebsite: boolean;
  responsibilities: string[],
  technologies: string[];
};

export interface ProjectLink {
  tooltip: string;
  label: string;
};

export interface Technology {
  name: string;
};

export interface ProjectSkeleton {
  name: string;
  website: string;
  webCurrentProject: boolean;
  displayOrder: number;
  technologies: Technology[];
}

export interface ProjectDetails {
  title: string,
  jobTitle: string,
  summary: string,
  imgAlt: string,
};

export interface ProjectMetadata {
  title: string;
  description: string;
  keywords: string;
};

export interface ProjectTranlation extends ProjectDetails {
  projectLink: ProjectLink;
};