import { useTranslations } from 'next-intl';

// components
import { Icon } from '../icon/Icon';

// styles
// import styles from './Location.module.scss';

// data
import location from '@/app/data/location.json';

export const Location: React.FC = () => {

  const t = useTranslations("Location");
  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <Icon
          id={location.icon.id}
        />
      </div>
      <div className={styles.location}>
        <span>{t("location")}</span>
      </div>
    </div>
  )
}
