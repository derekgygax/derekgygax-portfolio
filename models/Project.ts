import { Technology } from "./Technology";
import { Link } from "./Link";
import { Metadata } from "./Metadata";
import { ProjectSkeleton, ProjectTranlation } from "@/types/projects";

export class Project {
  public name: string;
  public title: string;
  public jobTitle: string;
  public summary: string;
  public imgAlt: string;
  public website: string;
  public webCurrentProject: boolean;
  public displayOrder: number;
  public link: Link;
  public metadata: Metadata;
  public technologies: Technology[];

  constructor(
    {
      name,
      title,
      jobTitle,
      summary,
      imgAlt,
      website,
      webCurrentProject,
      displayOrder,
      link,
      metadata,
      technologies
    }:
      {
        name: string;
        title: string;
        jobTitle: string;
        summary: string;
        imgAlt: string;
        website: string;
        webCurrentProject: boolean;
        displayOrder: number;
        link: Link;
        metadata: Metadata;
        technologies: Technology[];
      }
  ) {
    this.name = name,
      this.website = website,
      this.title = title,
      this.jobTitle = jobTitle,
      this.summary = summary,
      this.imgAlt = imgAlt,
      this.webCurrentProject = webCurrentProject,
      this.displayOrder = displayOrder,
      this.link = link,
      this.metadata = metadata,
      this.technologies = technologies
  }

  public getName() {
    return this.name;
  }

  // return the things that need to be put in the translations
  public getTranslation(): ProjectTranlation {
    return {
      title: this.title,
      jobTitle: this.jobTitle,
      summary: this.summary,
      imgAlt: this.imgAlt,
      projectLink: this.link,
    }
  }

  public getSkeleton(): ProjectSkeleton {
    return {
      name: this.name,
      website: this.website,
      webCurrentProject: this.webCurrentProject,
      displayOrder: this.displayOrder,
      technologies: this.technologies
    }
  }

  public getMetadata(): Metadata {
    return this.metadata;
  }
}