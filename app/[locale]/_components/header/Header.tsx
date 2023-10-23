import classNames from "classnames";
import Image from "next/image";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

// layouts
import { Container } from "@/app/[locale]/_layouts/container/Container";
// import { Logo } from "../logo/Logo";

// styles
import styles from './Header.module.scss';

// types
import { SectionNavItem } from "@/app/[locale]/types/nav";

// data
import me from '@/app/data/me.json';
import aboutMe from '@/app/data/aboutMe.json';
import workExperience from '@/app/data/workExperience.json';
import contactMe from '@/app/data/contactMe.json';
import socialMedia from '@/app/data/socialMedia.json';

// data for content sections

// icons
import githubIcon from '@/public/assets/icons/github-mark-white.svg';
import linkedInIcon from '@/public/assets/icons/linkedin.svg';

export const Header: React.FC = () => {

  const navSetionsIds = [
    aboutMe.id,
    workExperience.id,
    contactMe.id
  ];

  const t = useTranslations("Header");

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.nav}>
          <div className={styles.navSection}>
            <Link
              className={styles.link}
              href="/"
            >
              {me.name}
            </Link>
          </div>
          <div
            className={
              classNames(styles.portfolioSections, styles.navSection)
            }
          >
            {navSetionsIds.map((sectionId) => {
              return (
                <Link
                  key={`header_nav_${sectionId}`}
                  className={styles.link}
                  href={`#${sectionId}`}
                >
                  {t(`navItems.${sectionId}.label`)}
                </Link>
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
    </div>
  )
}
