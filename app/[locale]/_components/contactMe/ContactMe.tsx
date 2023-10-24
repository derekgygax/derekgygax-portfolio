import Image from "next/image";
import { useTranslations } from "next-intl";

// layouts
import { Section } from "@/app/[locale]/_layouts/section/Section"

// components
// import { EmailForm } from "../emailForm/EmailForm";

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
        <div className={styles.contact}>
          {/* <EmailForm /> */}
          {contactMe.howToContact.map((type) => {
            return (
              <div
                key={`contact_by_${type.id}`}
                className={styles.contactType}
              >
                <div>
                  <span>
                    {`${t(`howToContact.${type.id}.label`)}:`}
                  </span>
                </div>
                {type.type === 'call' ? (
                  <a href={`tel:${type.contact}`}>
                    <div className={styles.contactHowTo}>
                      <span>
                        {type.contact}
                      </span>
                    </div>
                  </a>
                ) : (
                  <a href={`mailto:${type.contact}`}>
                    <div className={styles.contactHowTo}>
                      <span>
                        {type.contact}
                      </span>
                    </div>
                  </a>
                )}
              </div>
            )
          })}
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
    </Section >
  )
}
