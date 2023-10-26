import classNames from "classnames";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";

// components
import { Icon } from "../icon/Icon";
import { Location } from "../location/Location";

// styles
import styles from './Header.module.scss';

// data
// import me from '@/app/data/me.json';
import aboutMe from '@/app/data/aboutMe.json';
import projects from '@/app/data/projects.json';
import socialMedia from '@/app/data/socialMedia.json';

export const Header: React.FC = () => {

  const navSetionsIds = [
    aboutMe.id,
    projects.id,
  ];

  const t = useTranslations("Header");

  return (
    <header className={styles.main}>
      <Container>
        <div className={styles.nav}>
          <div className={styles.navSection}>
            <Location />
          </div>
          {/* <div className={styles.navSection}>
            <Link
              className={styles.link}
              href="/"
            >
              <div
                className={
                  classNames(
                    styles.linkContainer,
                    styles.homeLink
                  )
                }
              >
                {me.name}
              </div>
            </Link>
          </div> */}
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
                <Link
                  key={`header_nav_${sectionId}`}
                  className={styles.link}
                  href={`#${sectionId}`}
                >
                  <div
                    className={styles.linkContainer}
                  >
                    {t(`navItems.${sectionId}.label`)}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className={classNames(styles.socialMedia, styles.navSection)}>
            <div className={styles.socialMediaIconsContainer}>
              {socialMedia.map((media) => {
                return (
                  <a
                    key={`header_socialMediaIcon_${media.id}`}
                    target="_blank"
                    href={media.href}
                  >
                    <div
                      className={
                        classNames(
                          styles.socialMediaIcon,
                          styles.linkContainer
                        )
                      }
                    >
                      <Icon
                        id={media.id}
                        alt={media.alt}
                      />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
