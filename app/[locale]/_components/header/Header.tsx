import classNames from "classnames";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";

// styles
import styles from './Header.module.scss';

// types
import { SectionNavItem } from "@/app/[locale]/types/nav";

// data
import me from '@/app/data/me.json';
import aboutMe from '@/app/data/aboutMe.json';
import projects from '@/app/data/projects.json';
import contactMe from '@/app/data/contactMe.json';
import socialMedia from '@/app/data/socialMedia.json';


// icons
import githubIcon from '@/public/assets/icons/github-mark-white.svg';
import linkedInIcon from '@/public/assets/icons/linkedin.svg';

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
                  key={`footer_socialMediaIcon_${media.id}`}
                  className={styles.socialMediaIcon}
                >
                  <a
                    target="_blank"
                    href={media.href}
                  >
                    <Image
                      alt={media.alt}
                      src={media.id === 'github' ? githubIcon : linkedInIcon}
                      width={media.width}
                      height={media.height}
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
