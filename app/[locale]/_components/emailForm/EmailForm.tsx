import React from 'react';
import { useTranslations } from 'next-intl';

// styles
import { EmailFormClient } from './emailFormClient/EmailFormClient';


export const EmailForm: React.FC = () => {

  const t = useTranslations("EmailForm");

  const labels = {
    name: t('labels.name'),
    email: t('labels.email'),
    subject: t('labels.subject'),
    message: t('labels.message'),
  };
  const placeholders = {
    name: t('placeHolders.name'),
    email: t('placeHolders.email'),
    subject: t('placeHolders.subject'),
    message: t('placeHolders.message'),
  }

  return (
    <EmailFormClient
      labels={labels}
      placeHolders={placeholders}
      loading={t('loading')}
      thankyou={t('thankyou')}
      buttonText={t('buttonText')}
    />
  );
}