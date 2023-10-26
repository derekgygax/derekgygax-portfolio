import { useTranslations } from "next-intl";

// styles
// import styles from './Footer.module.scss';

export const Footer: React.FC = () => {

  const t = useTranslations('Footer');

  return (
    <footer className={styles.main}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <span>{`${t('copyright')}`}</span>
        </div>
      </div>
    </footer>
  )
}
