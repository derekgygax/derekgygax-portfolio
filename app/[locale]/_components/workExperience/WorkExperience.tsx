import { useTranslations } from "next-intl";

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section";

// components
import { Job } from "../job/Job";

// types
import { JobConfig } from "../../types/job";

// data
import workExperince from '../../../data/workExperience.json';

// styles
import styles from './WorkExperience.module.scss';

export const WorkExperience: React.FC = () => {

  const t = useTranslations("WorkExperience");

  return (
    <Section id={workExperince.id}>
      <h1>{t("title")}</h1>
      <div className={styles.jobs}>
        {workExperince.jobs.map((job: JobConfig, index: number) => {
          return (
            <div
              key={`job_${job.id}`}
              className={index !== 0 ? styles.job : undefined}
            >
              <Job
                id={job.id}
                companyName={job.companyName}
                projects={job.projects}
              />
            </div>
          );
        })}
      </div>
    </Section>
  )
}
