import { useTranslations } from "next-intl"

// components
import { Button } from "../button/Button";

// data
import resume from '@/app/data/resume.json';

// styles
import styles from './Resume.module.scss';

export const Resume: React.FC = () => {

  const t = useTranslations('Resume');

  return (
    <a
      target="_blank"
      href={resume.href}
      download
    >
      <Button
        className={styles.resumeButton}
      >
        {t('label')}
      </Button>
    </a>
  )
}