import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

// layouts
import { Container } from "@/app/_layouts/container/Container";
// import { Logo } from "../logo/Logo";

// styles
import styles from './Header.module.scss';

// types
import { SectionNavItem } from "@/app/types/nav";

// data
import me from '@/app/data/me.json';
import navSections from '@/app/data/navSections.json';
import socialMedia from '@/app/data/socialMedia.json';

// icons
import githubIcon from '@/public/assets/icons/github-mark-white.svg';
import linkedInIcon from '@/public/assets/icons/linkedin.svg';

export const Header: React.FC = () => {
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
            {navSections.map((section: SectionNavItem) => {
              return (
                <Link
                  key={`header_nav_${section.id}`}
                  className={styles.link}
                  href={`#${section.href}`}
                >
                  {section.label}
                </Link>
              );
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
