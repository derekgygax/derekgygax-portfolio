import React from 'react';
import classNames from 'classnames';

// styles
import styles from './Button.module.scss';

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
}) => {
  return (
    <button
      className={classNames(
        styles.buttonContainer,
        className
      )}
    >
      <span className={styles.button}>
        <span className={styles.text}>
          {children}
        </span>
      </span>
    </button>
  );
};
