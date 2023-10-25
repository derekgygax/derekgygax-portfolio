import classNames from "classnames";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";

// components
import { Icon } from "../icon/Icon";

// styles
import styles from './Header.module.scss';

// data
import me from '@/app/data/me.json';
import aboutMe from '@/app/data/aboutMe.json';
import projects from '@/app/data/projects.json';
import contactMe from '@/app/data/contactMe.json';
import socialMedia from '@/app/data/socialMedia.json';

export const Header: React.FC = () => {

  const navSetionsIds = [
    aboutMe.id,
    projects.id,
    contactMe.id
  ];

  const t = useTranslations("Header");

  return (
    <header className={styles.main}>
      <Container>
        <div className={styles.nav}>
          <div className={styles.navSection}>
            <div
              className={
                classNames(
                  styles.linkContainer,
                  styles.homeLink
                )
              }
            >
              <Link
                className={styles.link}
                href="/"
              >
                {me.name}
              </Link>
            </div>
          </div>
          <div
            className={
              classNames(
                styles.portfolioSections,
                styles.navSection
              )
            }
          >
            {navSetionsIds.map((sectionId) => {
              return (
                <div
                  key={`header_nav_${sectionId}`}
                  className={styles.linkContainer}
                >
                  <Link
                    className={styles.link}
                    href={`#${sectionId}`}
                  >
                    {t(`navItems.${sectionId}.label`)}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={classNames(styles.socialMedia, styles.navSection)}>
            {socialMedia.map((media) => {
              return (
                <div
                  key={`header_socialMediaIcon_${media.id}`}
                  className={styles.socialMediaIcon}
                >
                  <a
                    target="_blank"
                    href={media.href}
                  >
                    <Icon
                      id={media.id}
                      alt={media.alt}
                    />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </header>
  )
}
