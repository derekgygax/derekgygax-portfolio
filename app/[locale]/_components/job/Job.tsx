import classNames from 'classnames';
import { useTranslations } from 'next-intl';

// types
import { ProjectConfig } from '../../types/job';

// styles
import styles from './Job.module.scss';
import { Project } from '../project/Project';

type JobProps = {
  id: string,
  companyName: string;
  projects: ProjectConfig[]
};

export const Job: React.FC<JobProps> = ({ id, companyName, projects }) => {

  const t = useTranslations(`Jobs.${id}`);

  return (
    <div className={classNames(styles.main)}>
      <div className={classNames(styles.headerTitleContainer)}>
        <div className={classNames(styles.titleContainer, "playfairDisplayFont")}>
          <h1 className={classNames(styles.title, styles.companyName)}>
            {companyName}
          </h1>
          <h1 className={classNames(styles.title, styles.jobTitle)}>
            {t('jobTitle')}
          </h1>
        </div>
      </div>
      <div className={styles.summary}>
        <span className={styles.spanSmall}>
          {t('summary')}
        </span>
      </div>
      <div>
        <h1>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project: ProjectConfig) => {
            return (
              <div key={`${id}_project_${project.id}`}>
                <Project
                  jobId={id}
                  project={project}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
