import React from 'react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

// components
import { Button } from '../button/Button';
// import { CallToAction } from '../../callToAction/CallToAction';
import { DualDivs } from '@/app/[locale]/_layouts/dualDivs/DualDivs';
// import { ScrollToBottomDiv } from '../../scrollToBottomDiv/ScrollToBottomDiv';

// styles
import styles from './Hero.module.scss';
import { Section } from '../../_layouts/section/Section';

// data
import hero from '@/app/data/hero.json';
import { Resume } from '../resume/Resume';

export const Hero: React.FC = ({ }) => {

  const t = useTranslations('Hero');

  const roles = [
    t('fullStack'),
    t('bioinformatics'),
    t('fontEnd')
  ];

  return (
    <Section>
      <div
        className={
          classNames(
            styles.main,
            styles.backgroundImage
          )
        }
      >
        <div className={styles.backgroundBlue}>
          <div className={classNames(styles.header, "playfairDisplayFont")}>
            <div className={classNames(styles.coverBackgroundImage, styles.inlineBlock)}>
              <span>{t('name')}</span>
            </div>
          </div>
          <div className={styles.roles}>
            {roles.map((role, index) => {
              return (
                <div key={`hero_role_(${index})`} className={styles.coverBackgroundImage}>
                  <p className={styles.description}>
                    {role}
                  </p>
                </div>
              )
            })}
          </div>
          <div className={styles.resume}>
            <Resume />
          </div>
        </div>
      </div>
    </Section>
  );
};

