import { User } from "@/models/User";
import { Project } from "@/models/Project";
import { Technology } from "@/models/Technology";
import prisma from "../prisma"

import { ProjectSkeleton } from "@/types/projects";
import { Link } from "@/models/Link";
import { MetaData } from "@/models/Metadata";

// USER
const USER_EMAIL = process.env.USER_EMAIL;

interface PortfolioData {
  user: User | null,
  projects: Project[] | null,
}

// TODO ... this is very limited just for the basics right now!!!
// Just the project names are being stored and you are doing it again
// in another place


// TODO NOT FINISHEDDDD!!!!
// TODO NOT FINISHEDDDD!!!!
// TODO NOT FINISHEDDDD!!!!
// TODO NOT FINISHEDDDD!!!!
// TODO NOT FINISHEDDDD!!!!
// TODO NOT FINISHEDDDD!!!!
// TODO NOT FINISHEDDDD!!!!
export const getPortfolioData = async (): Promise<PortfolioData> => {
  try {
    // Retrieve the project names 
    // const userDetails = await prisma?.users.findUniqueOrThrow({
    const userDetails = await prisma?.users.findUniqueOrThrow({
      where: { email: USER_EMAIL },
      include: {
        user_project: {
          include: {
            project: {
              include: {
                project_link: {
                  select: {
                    tooltip: true,
                    label: true
                  }
                },
                project_detail: {
                  select: {
                    title: true,
                    job_title: true,
                    summary: true,
                    img_alt: true
                  }
                },
                project_metadata: {
                  select: {
                    title: true,
                    description: true,
                    keywords: true
                  }
                },
                project_icon: {
                  include: {
                    icon: {
                      select: {
                        name: true,
                        tooltip: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    const user = new User({
      firstName: userDetails.first_name,
      middleName: userDetails.middle_name || '',
      lastName: userDetails.last_name,
      email: userDetails.email,
      phone: userDetails.phone
    });

    // TODO it originally said to use flatMap but idk why?
    // maybe when you put the translations in it will make sense
    const projects: Project[] = userDetails?.user_project
      .map((projectInfo): Project => {
        // TODO in the future you need to fix this for language
        const projectDetails = projectInfo.project.project_detail[0];
        const projectMetadata = projectInfo.project.project_metadata[0];
        const projectLink = {
          ...projectInfo.project.project_link,
          tooltip: projectInfo.project.project_link.tooltip.replace('{PROJECT_TITLE}', projectDetails.title)
        };


        const project = new Project({
          name: projectInfo.project.name,
          title: projectDetails.title,
          jobTitle: projectDetails.job_title,
          summary: projectDetails.summary,
          imgAlt: projectDetails.img_alt,
          website: projectInfo.project.url,
          isCurrentProject: projectInfo.project.current_project,
          displayOrder: projectInfo.project.display_order,
          link: new Link(projectLink),
          metaData: new MetaData(projectMetadata),
          technologies: projectInfo.project.project_icon.map((iconMeta) => {
            const technology = new Technology(
              iconMeta.icon.name,
              iconMeta.icon.tooltip
            );
            return technology;
          })
        });

        return project;

      }).sort((a, b) => a.displayOrder - b.displayOrder);

    return {
      user: user,
      projects: projects
    };

  } catch (err) {
    console.error(err);
    return {
      user: null,
      projects: null
    };
  }
}