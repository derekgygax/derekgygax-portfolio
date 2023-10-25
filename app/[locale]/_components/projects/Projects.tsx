import { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl"

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section";

// components
import { Project } from '../project/Project';

// styles
import styles from './Projects.module.scss';

// data
import projectsData from '@/app/data/projects.json';

// types
import { ProjectsConfig } from '../../types/projects';

// images
import fiftySevenWestImage from '@/public/assets/projects/fiftySevenWest.png';
import mendelgenImage from '@/public/assets/projects/mendelgen.png';
import locImage from '@/public/assets/projects/loc.png';
import copyrightImage from '@/public/assets/projects/copyright.png';
import mdAnderCancerCenterImage from '@/public/assets/projects/mdAndersonCancerCenter.jpg';
import cravatImage from '@/public/assets/projects/cravat.png';
import mupitImage from '@/public/assets/projects/mupit.png';

export const Projects: React.FC = () => {

  const projects = projectsData as ProjectsConfig;

  const t = useTranslations("Projects");

  const images: Record<string, StaticImageData> = {
    fiftySevenWest: fiftySevenWestImage,
    mendelgen: mendelgenImage,
    loc: locImage,
    copyright: copyrightImage,
    rppa: locImage,
    cravat: cravatImage,
    mupit: mupitImage
  }

  // TODO
  // DOing this and running npm run build you can see that
  // for some reason everything is building twice ... not sure
  // why. Figure that out!!!
  // console.log("SDJHOSIFJSBDFKLSDJB");


  return (
    <Section
      id={projects.id}
      title={t('title')}
    >
      <div className={styles.projects}>
        {projects.projectIds.map((id: string, index: number) => {
          return (
            <Project
              key={`project_${id}`}
              id={id}
              image={images[id]}
              data={projects.projects[id]}
              isLastProject={index === projects.projectIds.length - 1}
            />
          )
        })}
      </div>
    </Section>
  );
}
