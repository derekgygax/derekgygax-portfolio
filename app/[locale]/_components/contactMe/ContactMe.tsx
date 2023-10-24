import Image from "next/image";
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
    <Section
      id={contactMe.id}
      title={t('title')}
    >
      <div className={styles.formAndPic}>
        <div className={styles.form}>
          <EmailForm />
        </div>
        <div>
          <Image
            src={contactMe.image}
            alt={t('imageAlt')}
            width={500}
            height={375}
          />
        </div>
      </div>
    </Section>
  )
}
