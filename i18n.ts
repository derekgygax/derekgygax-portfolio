import { notFound } from "next/navigation";
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from "./navigation";
import { getProjectTranslations } from "./lib/db/projects";

const locales = LOCALES;

export default getRequestConfig(async ({ locale }) => {

  const projects = await getProjectTranslations();
  // console.log(projects);

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
      Project: projects
    }
  }
});