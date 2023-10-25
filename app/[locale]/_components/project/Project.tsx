import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

// components
import { ProjectConfig } from "../../types/projects";

// styles
import styles from './Project.module.scss';

// images
import fiftySevenWestImage from '@/public/assets/projects/fiftySevenWest.png';
import mendelgenImage from '@/public/assets/projects/mendelgen.png';
import locImage from '@/public/assets/projects/loc.png';
import copyrightImage from '@/public/assets/projects/copyright.png';
import rppaImage from '@/public/assets/projects/rppa.jpeg';
import cravatImage from '@/public/assets/projects/cravat.png';
import mupitImage from '@/public/assets/projects/mupit.png';

type ProjectProps = {
  id: string;
  image: StaticImageData;
  data: ProjectConfig;
  isLastProject: boolean;
}

export const Project: React.FC<ProjectProps> = ({
  id,
  image,
  data,
  isLastProject
}) => {

  const images: Record<string, StaticImageData> = {
    fiftySevenWest: fiftySevenWestImage,
    mendelgen: mendelgenImage,
    loc: locImage,
    copyright: copyrightImage,
    rppa: rppaImage,
    cravat: cravatImage,
    mupit: mupitImage
  }

  const t = useTranslations(`Project.${id}`);

  return (
    <div
      className={
        classNames(
          styles.main,
          isLastProject ? styles.lastChild : undefined
        )
      }
    >
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={t('imageAlt')}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{data.title}</h4>
        <div className={styles.paragraphs}>
          <p>{t('summary')}</p>
        </div>
      </div>
    </div>
  )
}
