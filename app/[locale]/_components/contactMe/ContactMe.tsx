import { useTranslations } from "next-intl";

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section"

// components
import { EmailForm } from "../emailForm/EmailForm";

// data
import contactMe from '@/app/data/contactMe.json';

// styles
import styles from './ContactMe.module.scss';

export const ContactMe: React.FC = () => {

  const t = useTranslations('ContactMe');

  return (
    <Section id={contactMe.id}>
      <h1>{t('title')}</h1>
      <div className={styles.formAndPic}>
        <EmailForm />
        <div>
          <img
            src={contactMe.image}
            width={500}
          />
        </div>
      </div>
    </Section>
  )
}
