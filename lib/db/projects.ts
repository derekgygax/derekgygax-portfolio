
import prisma from "../prisma";

// types
import { ProjectLink, ProjectSkeleton, ProjectTranlation } from "@/types/projects";

// Constants for the user
const USER_EMAIL = process.env.USER_EMAIL;

/**
 * Gets project names sorted by display order
 * 
 * Fetches projects for the user with the provided email address, 
 * extracts the project names, sorts them by display_order,
 * and returns the ordered list of names.
 * 
 * @returns {Promise<string[]>} Promise resolving to array of ordered project names
 */
export const getProjectData = async (): Promise<ProjectSkeleton[]> => {
  try {
    // Retrieve the project names 
    const userDetails = await prisma?.users.findUniqueOrThrow({
      where: { email: USER_EMAIL },
      include: {
        user_project: {
          include: {
            project: {
              include: {
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

    // TODO it originally said to use flatMap but idk why?
    // maybe when you put the translations in it will make sense
    const projects: ProjectSkeleton[] = userDetails?.user_project
      .map((projectMeta): ProjectSkeleton => {
        const project = projectMeta.project;
        return {
          name: project.name,
          website: project.url,
          isCurrentProject: project.current_project,
          displayOrder: project.display_order,
          technologies: project.project_icon.map((iconMeta) => {
            const icon = iconMeta.icon;
            return icon;
          })
        }
      })
      .sort((a, b) => a.displayOrder - b.displayOrder)

    // TODO you need to make this better!!!
    if (!projects) {
      return [];
    }

    return projects;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export const getProjectTranslations = async () => {
  try {
    const userProjects = await prisma?.users.findUniqueOrThrow({
      where: {
        email: USER_EMAIL
      },
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
                }
              }
            }
          }
        }
      }
    });
    // TODO it originally said to use flatMap but idk why?
    // maybe when you put the translations in it will make sense
    const projectsArray = userProjects?.user_project
      .map(up => up.project);
    const projects = projectsArray?.reduce((acc: Record<string, ProjectTranlation>, project) => {
      // TODO in the future you need to fix this for language
      const details = project.project_detail[0];
      const metaData = project.project_metadata[0];
      const projectLink: ProjectLink = {
        ...project.project_link,
        tooltip: project.project_link.tooltip.replace('{PROJECT_TITLE}', details.title)
      }
      acc[project.name] = {
        title: details.title,
        jobTitle: details.job_title,
        summary: details.summary,
        imgAlt: details.img_alt,
        metaData: metaData,
        projectLink: projectLink
      }
      return acc;
    }, {} as Record<string, ProjectTranlation>);

    return projects;
  } catch (err) {
    console.error(err);
  }
}