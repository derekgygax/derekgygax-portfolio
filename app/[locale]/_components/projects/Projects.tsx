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
import rppaImage from '@/public/assets/projects/rppa.png';
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
    rppa: rppaImage,
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
        <header className="pb-2 md:pb-8">
          <h1 className="m-0 text-3xl md:text-5xl font-bold pb-2">
            {t('title')}
          </h1>
        </header>
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 gap-y-4 gap-x-4">
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
