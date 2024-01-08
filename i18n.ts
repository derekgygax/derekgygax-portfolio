import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from "./navigation";

import { Portfolio } from "./models/Portfolio";
import { getIconTranlastions } from "./lib/db/icon";
import { getContactMeButtonTranslation } from "./lib/db/contactMeButton";

const locales = LOCALES;

export default getRequestConfig(async ({ locale }) => {

  const projectTranslations = await Portfolio.getProjectTranslations();
  const iconTranslations = await getIconTranlastions();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(await import(`./messages/${locale}/aboutMe.json`)).default,
      ContactMeButton: await getContactMeButtonTranslation(),
      ...(await import(`./messages/${locale}/footer.json`)).default,
      ...(await import(`./messages/${locale}/general.json`)).default,
      ...(await import(`./messages/${locale}/homePage.json`)).default,
      Icons: iconTranslations,
      ...(await import(`./messages/${locale}/logo.json`)).default,
      ...(await import(`./messages/${locale}/projects.json`)).default,
      ...(await import(`./messages/${locale}/resume.json`)).default,
      ...(await import(`./messages/${locale}/rootLayout.json`)).default,
      Project: projectTranslations
    }
  }
});