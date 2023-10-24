import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section";

// import data
import aboutMe from '@/app/data/aboutMe.json';

// styles
import styles from './AboutMe.module.scss';

export const AboutMe: React.FC = () => {

  const t = useTranslations('AboutMe');
  return (
    <Section
      id={aboutMe.id}
      title={t("title")}
    >
      <div className={styles.aboutContent}>
        <div className={classNames(styles.paragraphSection)}>
          <div className={styles.paragraphs}>
            <p className={styles.paragraph}>{t("bio.work")}</p>
            <p className={styles.paragraph}>{t("bio.personal")}</p>
          </div>
        </div>
        <div>
          <Image
            src={aboutMe.image}
            alt={t("imageAlt")}
            height={533}
            width={400}
          />
        </div>
      </div>
    </Section>
  )
}
