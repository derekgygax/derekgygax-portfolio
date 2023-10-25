import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";

// styles
import styles from './Footer.module.scss';

// data
import footerData from '@/app/data/footer.json';

// icons
import githubIcon from '@/public/assets/icons/github.svg';
import linkedInIcon from '@/public/assets/icons/linkedin.svg';
import emailIcon from '@/public/assets/icons/mail.svg';
import phoneIcon from '@/public/assets/icons/smartphone.svg';

export const Footer: React.FC = () => {

  const t = useTranslations('Footer');

  const icons: Record<string, StaticImageData> = {
    phone: phoneIcon,
    email: emailIcon,
    github: githubIcon,
    linkedIn: linkedInIcon
  };

  const iconsConfig = footerData.map((foot) => {
    return {
      ...foot,
      icon: icons[foot.id],
      alt: t(`icons.${foot.id}.alt`)
    }
  })


  return (
    <footer className={styles.main}>
      <Container>
        <div className={styles.content}>
          <div className={styles.iconsContainer}>
            <div className={styles.icons}>
              {iconsConfig.map((icon) => {
                return (
                  <div
                    key={`footer_icon_${icon.id}`}
                    className={styles.icon}
                  >
                    <a
                      target={icon.type === "link" ? "_blank" : "_self"}
                      href={icon.href}
                    >
                      <Image
                        alt={icon.alt}
                        src={icon.icon}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.copyright}>
            <span>{`${t('copyright')}`}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
