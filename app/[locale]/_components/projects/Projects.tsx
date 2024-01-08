import { StaticImageData } from 'next/image';
import { getTranslations } from 'next-intl/server';

// components
import { Project } from '../project/Project';

// data
import projectsData from '@/app/data/projects.json';

import { Portfolio } from '@/models/Portfolio';

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

export const Projects: React.FC = async () => {

  const projects = await Portfolio.getProjectSkeletons();

  // TODO does the locale need to be passed here OR only in the metadata one??
  // TODO does the locale need to be passed here OR only in the metadata one??
  // TODO does the locale need to be passed here OR only in the metadata one??
  // TODO does the locale need to be passed here OR only in the metadata one??

  // TODO does the locale need to be passed here OR only in the metadata one??
  const t = await getTranslations("Projects");

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

  return (
    <section id={projectsData.id}>
      <div className="section">
        <header className="pb-2 md:pb-8">
          <h1 className="m-0 text-3xl md:text-5xl font-bold pb-2">
            {t('title')}
          </h1>
        </header>
        <div className="md:grid md:grid-cols-2 md:grid-rows-4 gap-y-4 gap-x-4">
          {projects.map((project) => {
            return (
              <Project
                key={`project_${project.name}`}
                name={project.name}
                image={images[project.name]}
                isCurrenProject={project.isCurrentProject}
                website={project.website}
                technologies={project.technologies}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}
