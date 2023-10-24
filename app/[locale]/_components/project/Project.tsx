import { useTranslations } from 'next-intl';

// types
import { ProjectConfig } from '../../types/job';

// styles
import styles from './Project.module.scss';
import Image from 'next/image';

type ProjectProps = {
  jobId: string;
  project: ProjectConfig;
}

export const Project: React.FC<ProjectProps> = ({
  jobId,
  project
}) => {

  const t = useTranslations(`Jobs.${jobId}.projects.${project.id}`)

  return (
    <div className={styles.main}>
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <div className={styles.details}>
        <div className={styles.image}>
          <Image
            className={styles.projectImage}
            src={project.image}
            alt={t('imageAlt')}
            width={400}
            height={224}
          />
        </div>
        <div>
          <ul>
            {project.responsibilities.map((responsibility: string) => {
              return (
                <li key={`${jobId}_${project.id}_${responsibility}`}>
                  {t(`responsibilities.${responsibility}`)}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={styles.link}>
        <a href={project.website} target="_blank">
          {project.website}
        </a>
      </div>
    </div>
  );
}