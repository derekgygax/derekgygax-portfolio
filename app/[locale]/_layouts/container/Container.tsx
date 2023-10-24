import React from 'react';
import classNames from 'classnames';

// styles
import styles from './Container.module.scss';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children, className }) => {

  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  );
};
