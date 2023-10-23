import React from 'react';
import classNames from 'classnames';

// components
import { DualDivs } from '../dualDivs/DualDivs';
// import { SectionData } from '../sectionData/SectionData';

// types
import { WorkExperience } from '../../types/job';
// import { DataParams } from '@/app/types/dataParams';
// import { TopicData, TopicInfo } from '@/app/types/topic';
// import { SliderStarts } from '@/app/types/sliderStarts';

// layouts
import { Job } from '../../_components/job/Job';
// import { SwiperMobile } from '../swiperMobile/SwiperMobile';

// styles
import styles from './TopicSection.module.scss';

type TopicSectionProps = {
  jobId: string;
  // topicHeaderClassName: string;
  jobInfo: WorkExperience;
  // topicMobileInfo: TopicInfo;
  // topicData: TopicData[];
  // dataParams: DataParams;
  // sectionDataClassName?: string;
  // sliderStarts?: SliderStarts;
}

export const TopicSection: React.FC<TopicSectionProps> = ({
  jobId,
  // topicHeaderClassName,
  jobInfo,
  // sectionDataClassName,
}) => {

  return (
    <div className={classNames(styles.main)}>
      <DualDivs
        // classNameFlexDirection={styles.flexDirection}
        // halfContainers={styles.halfContainers}
        // classNameContainerSecond={styles.containerSecond}
        firstChild={(
          // There are two SectionInfo's here. One of them is used for mobile
          // and one is used for the desktop. They are identically constructed
          // but have different information. That is why there are two, you see the 
          // different classNameMains to differentiate when each one is used
          <>
            <Job
              // classNameHeader={topicHeaderClassName}
              // classNameMain={styles.desktop}
              // classNameHeaderTitleContainer={styles.headerTitleContainer}
              // description={jobInfo.details}
              // detailsLink={jobInfo.website}
              // slideHeaderLeftStart={sliderStarts}
              // companyName={jobInfo.companyName}
              // title={jobInfo.jobTitle}
              // topicId={jobId}
              // isMobile={false}
              data={jobInfo}
            />
            {/* <SectionInfo
              classNameHeader={topicHeaderClassName}
              classNameMain={styles.mobile}
              description={topicMobileInfo.description}
              detailsLink={topicMobileInfo.detailsLink}
              titles={topicMobileInfo.title}
              topicId={topicId}
              isMobile={true}
            /> */}
          </>
        )}
        secondChild={
          <>
            {/* <SectionData
              classNameMain={classNames(styles.desktop, sectionDataClassName)}
              topicId={topicId}
              topicData={topicData}
              dataParams={dataParams}
            /> */}
            {/* <SwiperMobile
              classNameMain={classNames(styles.mobile, sectionDataClassName)}
              topicId={topicId}
              topicData={topicData}
              dataParams={dataParams}
            /> */}
          </>
        }
      />
    </div>
  );
}