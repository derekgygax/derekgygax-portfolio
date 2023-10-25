import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

// components
import { ProjectConfig } from "../../types/projects";

// styles
import styles from './Project.module.scss';

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
