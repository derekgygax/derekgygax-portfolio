import React from 'react';
import classNames from 'classnames';

// styles
import styles from './DualDivs.module.scss';

type ContainerInHalvesProps = {
  firstChild: React.ReactNode;
  classNameFlexDirection?: string;
  halfContainers?: string;
  secondChild: React.ReactNode;
  classNameContainerSecond?: string;
}

export const DualDivs: React.FC<ContainerInHalvesProps> = ({
  firstChild,
  classNameFlexDirection,
  halfContainers,
  secondChild,
  classNameContainerSecond,
}) => {
  return (
    <div className={classNames(styles.main, classNameFlexDirection)}>
      <div className={classNames(styles.containerFirst, halfContainers)}>
        {firstChild}
      </div>
      <div
        className={
          classNames(
            styles.containerSecond,
            halfContainers,
            classNameContainerSecond
          )
        }
      >
        {secondChild}
      </div>
    </div>
  )
}