import Image from "next/image";
import { useTranslations } from "next-intl"

// components
import { Button } from "../button/Button";

// data
import resume from '@/app/data/resume.json';

// styles
import styles from './Resume.module.scss';

// icons
import downloadIcon from '@/public/assets/icons/arrow-down-circle.svg'
import { Icon } from "../icon/Icon";

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
        <div>
          <span>{t('label')}</span>
          <Icon
            id={'download'}
            alt="Download Resume"
          />
        </div>

      </Button>
    </a>
  )
}