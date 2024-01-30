import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from "./navigation";

import { Portfolio } from "./models/Portfolio";
import { getIconTranlastions } from "./lib/db/icon";
import { getContactMeButtonTranslation } from "./lib/db/contactMeButton";
import { getRootLayoutMetadata } from "./lib/db/rootLayout";
import { getGeneralTranslations } from "./lib/db/general";

// TODO You put the any there but you don't want that at all!!!
// TODO You put the any there but you don't want that at all!!!
// TODO You put the any there but you don't want that at all!!!
// TODO You put the any there but you don't want that at all!!!
export default getRequestConfig(async ({ locale }) => {

  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as any)) notFound();

  return {
    messages: {
      AboutMe: await Portfolio.getUserTranslations() as any,
      ContactMeButton: await getContactMeButtonTranslation() as any,
      Metadata: {
        RootLayout: await getRootLayoutMetadata() as any,
        ...(await Portfolio.getProjectsMetadata())
      },
      General: await getGeneralTranslations() as any,
      Sections: await Portfolio.getSectionTranslations() as any,
      Icons: await getIconTranlastions() as any,
      Project: await Portfolio.getProjectTranslations() as any,
      Footer: await Portfolio.getFooterTranslations() as any
    }
  }
});