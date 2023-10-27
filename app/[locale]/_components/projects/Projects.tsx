import { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl"

// components
import { Project } from '../project/Project';

// data
import projectsData from '@/app/data/projects.json';

// types
import { ProjectsConfig } from '../../types/projects';

// images
import fiftySevenWestImage from '@/public/assets/projects/fiftySevenWest.png';
import mendelgenImage from '@/public/assets/projects/mendelgen.png';
import locImage from '@/public/assets/projects/loc.png';
import copyrightImage from '@/public/assets/projects/copyright.png';

// TODO need to change rppa image
import mdAnderCancerCenterImage from '@/public/assets/projects/mdAndersonCancerCenter.jpg';
import cravatImage from '@/public/assets/projects/cravat.png';
import mupitImage from '@/public/assets/projects/mupit.png';
import portfolioImage from '@/public/assets/projects/portfolio.png';

export const Projects: React.FC = () => {

  const projects = projectsData as ProjectsConfig;

  const t = useTranslations("Projects");

  const images: Record<string, StaticImageData> = {
    fiftySevenWest: fiftySevenWestImage,
    mendelgen: mendelgenImage,
    loc: locImage,
    copyright: copyrightImage,
    // TODO NEED TO CHANGE RPPA IMAGE
    rppa: locImage,
    cravat: cravatImage,
    mupit: mupitImage,
    portfolio: portfolioImage
  }

  // TODO
  // DOing this and running npm run build you can see that
  // for some reason everything is building twice ... not sure
  // why. Figure that out!!!
  // console.log("SDJHOSIFJSBDFKLSDJB");


  return (
    <section id={projectsData.id}>
      <div className="section">
        <div className="pb-8">
          <h1 className="m-0 text-5xl font-bold pb-2">
            {t('title')}
          </h1>
        </div>
        {/* TODO THIS INST WORKING BUT IS THE WAY IT SHOULD BE DONE. YOU HAVE SOMETHING IN THAT WORKS KINDA!!  MABYE CHANGING THE INTERIOR WILL FIX IT!!*/}
        {/* <div className="grid grid-cols-1 grid-rows-7 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-y-8 gap-x-8"> */}
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 gap-y-8 gap-x-8">
          {projects.projectIds.map((id: string) => {
            return (
              <Project
                key={`project_${id}`}
                id={id}
                image={images[id]}
                data={projects.projects[id]}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}
