import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`./messages/${locale}/header.json`)).default,
    ...(await import(`./messages/${locale}/homePage.json`)).default,
    ...(await import(`./messages/${locale}/rootLayout.json`)).default,
    // Discover: {
    //   ...(await import(`./messages/${locale}/discover/whyEquities.json`)).default,
    // }
  }
}));