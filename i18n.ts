import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from "./navigation";

import { Portfolio } from "./models/Portfolio";
import { getIconTranlastions } from "./lib/db/icon";
import { getContactMeButtonTranslation } from "./lib/db/contactMeButton";
import { getRootLayoutMetadata } from "./lib/db/rootLayout";

const locales = LOCALES;

export default getRequestConfig(async ({ locale }) => {

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      AboutMe: await Portfolio.getUserTranslations(),
      ContactMeButton: await getContactMeButtonTranslation(),
      ...(await import(`./messages/${locale}/footer.json`)).default,
      Metadata: {
        RootLayout: await getRootLayoutMetadata(),
        ...(await Portfolio.getProjectsMetadata())
      },
      Sections: await Portfolio.getSectionTranslations(),
      Icons: await getIconTranlastions(),
      ...(await import(`./messages/${locale}/logo.json`)).default,
      ...(await import(`./messages/${locale}/projects.json`)).default,
      ...(await import(`./messages/${locale}/resume.json`)).default,
      Project: await Portfolio.getProjectTranslations()
    }
  }
});