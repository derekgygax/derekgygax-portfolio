import { Technology } from "./Technology";
import { Link } from "./Link";
import { MetaData } from "./Metadata";
import { ProjectSkeleton, ProjectTranlation } from "@/types/projects";

export class Project {
  public name: string;
  public title: string;
  public jobTitle: string;
  public summary: string;
  public imgAlt: string;
  public website: string;
  public isCurrentProject: boolean;
  public displayOrder: number;
  public link: Link;
  public metaData: MetaData;
  public technologies: Technology[];

  constructor(
    {
      name,
      title,
      jobTitle,
      summary,
      imgAlt,
      website,
      isCurrentProject,
      displayOrder,
      link,
      metaData,
      technologies
    }:
      {
        name: string;
        title: string;
        jobTitle: string;
        summary: string;
        imgAlt: string;
        website: string;
        isCurrentProject: boolean;
        displayOrder: number;
        link: Link;
        metaData: MetaData;
        technologies: Technology[];
      }
  ) {
    this.name = name,
      this.website = website,
      this.title = title,
      this.jobTitle = jobTitle,
      this.summary = summary,
      this.imgAlt = imgAlt,
      this.isCurrentProject = isCurrentProject,
      this.displayOrder = displayOrder,
      this.link = link,
      this.metaData = metaData,
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
      metaData: this.metaData,
      projectLink: this.link
    }
  }

  public getSkeleton(): ProjectSkeleton {
    return {
      name: this.name,
      website: this.website,
      isCurrentProject: this.isCurrentProject,
      displayOrder: this.displayOrder,
      technologies: this.technologies
    }
  }
}