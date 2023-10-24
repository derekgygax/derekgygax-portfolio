
// styles
import styles from './Sections.module.scss';

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  title?: string | undefined;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  title
}) => {
  return (
    <div id={id} className={styles.main}>
      {title ? (
        <h1 className={styles.sectionTitle}>{title}</h1>
      ) : null}
      {children}
    </div>
  );
}

// TODO
// This would be using it as a HOC
// Our example is too simplistic to do this.
// // styles
// import styles from './Sections.module.scss';

// type SectionProps = {
//   children: React.ReactNode;
// }

// const Section: React.FC<SectionProps> = ({ children }) => {
//   return (
//     <div className={styles.main}>
//       {children}
//     </div>
//   );
// }


// type withSectionProps = {
//   Component: React.ComponentType<any>;
// }

// export const withSection = ({ Component }: withSectionProps) => (props: any) => {
//   return (
//     <Section>
//       <Component {...props} />
//     </Section>
//   );
// }