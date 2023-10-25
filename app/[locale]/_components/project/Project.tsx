import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

// components
import { ProjectConfig } from "../../types/projects";

// styles
import styles from './Project.module.scss';
import { Icon } from '../icon/Icon';

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
        <div className={styles.techIcons}>
          {data.technologies.map((tech) => {
            return (
              <div
                key={`project_${id}_tech_${tech}`}
                className={
                  classNames(
                    styles.techIcon,
                  )
                }
              >
                <Icon
                  id={tech}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
