import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from "./navigation";
import { getProjectTranslations } from "./lib/db/projects";
import { Portfolio } from "./models/Portfolio";

const locales = LOCALES;

export default getRequestConfig(async ({ locale }) => {

  const projectTranslations = await Portfolio.getProjectTranslations();

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
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
      Project: projectTranslations
    }
  }
});