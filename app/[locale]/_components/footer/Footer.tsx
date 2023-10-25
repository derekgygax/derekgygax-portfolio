import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";

// components
import { Icon } from '../icon/Icon';

// styles
import styles from './Footer.module.scss';

// data
import footerData from '@/app/data/footer.json';

export const Footer: React.FC = () => {

  const t = useTranslations('Footer');

  return (
    <footer className={styles.main}>
      <Container>
        <div className={styles.content}>
          <div className={styles.iconsContainer}>
            <div className={styles.icons}>
              {footerData.icons.map((icon) => {
                return (
                  <div
                    key={`footer_icon_${icon.id}`}
                    className={styles.icon}
                  >
                    <a
                      target={icon.type === "link" ? "_blank" : "_self"}
                      href={icon.href}
                    >
                      <Icon
                        id={icon.id}
                        alt={t(`icons.${icon.id}.alt`)}
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
