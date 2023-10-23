import React from 'react';
import classNames from 'classnames';

// components
import { JobSummary } from '../../_components/jobSummary/JobSummary';

// styles
import styles from './SectionInfo.module.scss';

type SectionInfoProps = {
  classNameDescription?: string;
  classNameHeader?: string;
  classNameMain: string;
  classNameHeaderTitleContainer?: string;
  classNameTitle?: string;
  classNameTitleContainer?: string;
  detailsLink?: string;
  description: string[];
  header?: string;
  title: string;
  topicId: string;
  isMobile: boolean;
  companyName: string;
}

export const SectionInfo: React.FC<SectionInfoProps> = ({
  classNameDescription,
  classNameHeader,
  classNameMain,
  classNameHeaderTitleContainer,
  classNameTitle,
  classNameTitleContainer,
  description,
  detailsLink,
  header,
  title,
  topicId,
  isMobile,
  companyName
}) => {

  const headerText = header ? header : null;

  return (
    <div className={classNames(styles.main, classNameMain)}>
      <div className={classNames(styles.headerTitleContainer, classNameHeaderTitleContainer)}>
        <div className={classNames(styles.titleContainer, classNameTitleContainer, "playfairDisplayFont")}>
          <h1
            key={`${topicId}_companyName}`}
            className={classNames(styles.title, classNameTitle)}
          >
            {`${companyName} @ ${title}`}
          </h1>
        </div>
      </div>
      <JobSummary
        classNameDescription={classNameDescription}
        description={description}
        detailsLink={detailsLink}
        topicId={topicId}
      />
    </div>
  );
}