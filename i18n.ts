import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from "./navigation";

import { Portfolio } from "./models/Portfolio";
import { getIconTranlastions } from "./lib/db/icon";
import { getContactMeButtonTranslation } from "./lib/db/contactMeButton";
import { getRootLayoutMetadata } from "./lib/db/rootLayout";
import { getGeneralTranslations } from "./lib/db/general";

const locales = LOCALES;

export default getRequestConfig(async ({ locale }) => {

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      AboutMe: await Portfolio.getUserTranslations(),
      ContactMeButton: await getContactMeButtonTranslation(),
      Metadata: {
        RootLayout: await getRootLayoutMetadata(),
        ...(await Portfolio.getProjectsMetadata())
      },
      General: await getGeneralTranslations(),
      Sections: await Portfolio.getSectionTranslations(),
      Icons: await getIconTranlastions(),

      // TODO THE ONE BELOW is only here to keep the typescript from complaining
      // you are figuring out why!!!

      ...(await import(`./messages/${locale}/resume.json`)).default,
      Project: await Portfolio.getProjectTranslations(),
      Footer: await Portfolio.getFooterTranslations()
    }
  }
});