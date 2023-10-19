import { Container } from "@/app/_layout/container/Container";

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.main}>
      <Container>
        Header
      </Container>
    </div>
  )
}
