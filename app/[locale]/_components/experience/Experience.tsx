import { WorkExperience } from '@/app/[locale]/types/experience';
import styles from './Experience.module.scss';

type ExperienceProps = {
  data: WorkExperience
};

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className={styles.main}>
      <h1>{data.companyName}</h1>
      <h3>{data.jobTitle}</h3>
      <h4>{data.summary}</h4>
      <h4>Details:</h4>
      {data.details.map((detail, index) => {
        return (
          <p key={`${data.id}_detail_${index}`}>{detail}</p>
        )
      })}
      <h4>Technologies:</h4>
      {data.technologies.map((technology, index) => {
        return (
          <div key={`${data.id}_technology_`}>{technology}</div>
        )
      })}
      <h4>Website(s): {data.website}</h4>
    </div>
  )
}
