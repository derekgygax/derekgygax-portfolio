import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`./messages/${locale}/aboutMe.json`)).default,
    ...(await import(`./messages/${locale}/contactMe.json`)).default,
    ...(await import(`./messages/${locale}/emailForm.json`)).default,
    ...(await import(`./messages/${locale}/footer.json`)).default,
    ...(await import(`./messages/${locale}/header.json`)).default,
    ...(await import(`./messages/${locale}/hero.json`)).default,
    ...(await import(`./messages/${locale}/homePage.json`)).default,
    ...(await import(`./messages/${locale}/resume.json`)).default,
    ...(await import(`./messages/${locale}/rootLayout.json`)).default,
    ...(await import(`./messages/${locale}/workExperience.json`)).default,
    Jobs: {
      ...(await import(`./messages/${locale}/jobs/fiftySevenWest.json`)).default,
      ...(await import(`./messages/${locale}/jobs/mendelgen.json`)).default,
      ...(await import(`./messages/${locale}/jobs/artemis.json`)).default,
      ...(await import(`./messages/${locale}/jobs/inSilico.json`)).default,
    }
  }
}));