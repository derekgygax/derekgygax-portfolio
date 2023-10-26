import { useTranslations } from "next-intl"

// components
import { Icon } from "../icon/Icon";

// data
import resume from '@/app/data/resume.json';

// styles
// import styles from './Resume.module.scss';

export const Resume: React.FC = () => {

  const t = useTranslations('Resume');

  return (
    <a
      className={styles.link}
      href={resume.href}
      download
    >
      <div className={styles.downloadContainer} >
        <span className={styles.text}>{t('label')}</span>
        <div className={styles.icon}>
          <Icon
            id={resume.icon.id}
            alt={resume.icon.alt}
          />
        </div>
      </div>
    </a>
  )
}