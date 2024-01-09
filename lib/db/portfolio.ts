import { User } from "@/models/User";
import { Project } from "@/models/Project";
import { Technology } from "@/models/Technology";
import prisma from "../prisma"

import { ProjectSkeleton } from "@/types/projects";
import { Link } from "@/models/Link";
import { MetaData } from "@/models/Metadata";
import { Bio } from "@/models/Bio";
import { Location } from "@/models/Location";
import { Contact } from "@/models/Contact";

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
    // const userInfo = await prisma?.users.findUniqueOrThrow({
    const userInfo = await prisma?.users.findUniqueOrThrow({
      where: { email: USER_EMAIL },
      include: {
        location: true,
        contact: {
          include: {
            icon_link: true
          }
        },
        user_detail: {
          include: {
            user_bio: true
          }
        },
        user_job: {
          select: {
            job_title: true
          }
        },
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
                  select: {
                    icon_name: true
                  }
                }
              }
            }
          }
        }
      }
    });

    const userContacts = userInfo.contact.map((contactLink) => {
      return new Contact({
        name: contactLink.icon_link.icon_name,
        target: contactLink.icon_link.target,
        href: contactLink.icon_link.href
          .replace('{USER_LINKEDIN}', userInfo.linked_in || '')
          .replace('{USER_GITHUB}', userInfo.github || '')
          .replace('{USER_PHONE}', userInfo.phone)
          .replace('{USER_EMAIL}', userInfo.email),
        displayOrder: contactLink.display_order
      })
    }).sort((a, b) => a.displayOrder - b.displayOrder);

    const user = new User({
      firstName: userInfo.first_name,
      middleName: userInfo.middle_name || '',
      lastName: userInfo.last_name,
      email: userInfo.email,
      phone: userInfo.phone,
      github: userInfo.github || '',
      linkedIn: userInfo.linked_in || '',
      jobTitles: userInfo.user_job.map((job) => {
        return job.job_title
      }),
      // BECAUSE OF THE locale
      summary: userInfo.user_detail[0].summary,
      imgAlt: userInfo.user_detail[0].image_alt || '',
      bios: userInfo.user_detail[0].user_bio.map((bio) => {
        return new Bio({
          type: bio.type,
          text: bio.text
        })
      }),
      location: new Location({
        city: userInfo.location.city,
        stateAbbr: userInfo.location.state_abbr,
        stateFull: userInfo.location.state_full,
        countryAbbr: userInfo.location.country_abbr,
        countryFull: userInfo.location.country_full,
      }),
      contacts: userContacts
    });

    // TODO it originally said to use flatMap but idk why?
    // maybe when you put the translations in it will make sense
    const projects: Project[] = userInfo?.user_project
      .map((projectInfo): Project => {
        // TODO in the future you need to fix this for language
        const projectDetails = projectInfo.project.project_detail[0];
        const projectMetadata = projectInfo.project.project_metadata[0];
        // TODO this might be stupid and you don't need to do this
        // Because you are still using the translations ... you will see as you get further in
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
            const technology = new Technology({
              name: iconMeta.icon_name,
            });
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