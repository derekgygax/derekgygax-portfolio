import classNames from "classnames";
import Link from "next/link";

// layouts
import { Container } from "@/app/_layouts/container/Container";
// import { Logo } from "../logo/Logo";

// styles
import styles from './Header.module.scss';

// types
import { NavItem } from "@/app/types/nav";

// data
import navItems from '@/app/data/nav.json';

export const Header: React.FC = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.nav}>
          {/* <Link href={'/'} className={classNames(styles.logo)}>
            <Logo />
          </Link> */}
          <div className={styles.menu}>
            {navItems.map((navItem: NavItem) => {
              return (
                <Link
                  key={`header_nav_${navItem.id}`}
                  className={classNames(
                    styles.menuNavbarLink,
                  )}
                  href={`#${navItem.href}`}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
