import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`./messages/${locale}/aboutMe.json`)).default,
    ...(await import(`./messages/${locale}/contactMeButton.json`)).default,
    ...(await import(`./messages/${locale}/footer.json`)).default,
    ...(await import(`./messages/${locale}/general.json`)).default,
    ...(await import(`./messages/${locale}/homePage.json`)).default,
    ...(await import(`./messages/${locale}/icons.json`)).default,
    ...(await import(`./messages/${locale}/logo.json`)).default,
    ...(await import(`./messages/${locale}/projects.json`)).default,
    ...(await import(`./messages/${locale}/resume.json`)).default,
    ...(await import(`./messages/${locale}/rootLayout.json`)).default,
    Project: {
      ...(await import(`./messages/${locale}/projects/copyright.json`)).default,
      ...(await import(`./messages/${locale}/projects/cravat.json`)).default,
      ...(await import(`./messages/${locale}/projects/fiftySevenWest.json`)).default,
      ...(await import(`./messages/${locale}/projects/general.json`)).default,
      ...(await import(`./messages/${locale}/projects/loc.json`)).default,
      ...(await import(`./messages/${locale}/projects/mendelgen.json`)).default,
      ...(await import(`./messages/${locale}/projects/mupit.json`)).default,
      ...(await import(`./messages/${locale}/projects/portfolio.json`)).default,
      ...(await import(`./messages/${locale}/projects/rppa.json`)).default,
    }
  }
}));