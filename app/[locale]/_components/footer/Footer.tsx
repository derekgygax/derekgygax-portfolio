import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";

// styles
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {

  const t = useTranslations('Footer');
  return (
    <footer className={styles.main}>
      <Container>
        <div className={styles.copyright}>
          <span>{`${t('copyright')}`}</span>
        </div>
      </Container>
    </footer>
  )
}
