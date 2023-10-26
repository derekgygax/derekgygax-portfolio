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

  const t_general = useTranslations(`General`);
  const t_project = useTranslations(`Project.${id}`);

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
          alt={t_project('imageAlt')}
          className={styles.image}
        />
      </div>
      <div className={styles.textAndTech}>
        <div className={styles.textContainer}>
          <div className={styles.jobAndTitle}>
            <h3 className={styles.title}>{data.title}</h3>
            <h4 className={styles.jobTitle}>{t_project('jobTitle')}</h4>
          </div>
          <div className={styles.paragraphs}>
            <p>{t_project('summary')}</p>
          </div>
        </div>
        <div className={styles.techContainer}>
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
          {data.website ? (
            <a target="_blank" href={data.website}>
              <div className={styles.websiteContainer}>
                <span> {t_general("website")}</span>
              </div>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
