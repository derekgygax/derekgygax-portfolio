import { useTranslations } from "next-intl";

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section";

// import data
import aboutMe from '@/app/data/aboutMe.json';

// styles
import styles from './AboutMe.module.scss';

export const AboutMe: React.FC = () => {

  const t = useTranslations('AboutMe');
  return (
    <Section id={aboutMe.id}>
      <h1>About Me</h1>
      <div className={styles.aboutContent}>
        <div className={styles.content}>
          <p>{t("details")}</p>
        </div>
        <div className={styles.content}>
          <img
            src={aboutMe.image}
            height={500}
          />
        </div>
      </div>
    </Section>
  )
}
