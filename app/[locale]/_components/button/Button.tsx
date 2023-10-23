import React from 'react';
import classNames from 'classnames';
import Link from 'next-intl/link';

// styles
import styles from './Button.module.scss';

export type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => {};
  style?: 'light' | 'dark';
  noArrow?: boolean;
  type?: string;
};

export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  onClick,
  style = 'light',
  noArrow,
  type
}) => {
  return (
    <button
      className={classNames(
        styles.buttonContainer,
        style === 'dark' ? styles.dark : null,
        className
      )}
      onClick={onClick}
    >
      <span className={styles.button}>
        <span className={styles.text}>
          {children}
        </span>
        <span className={!noArrow ? styles.rightArrowIcon : undefined} />
      </span>
    </button>
  );
};
