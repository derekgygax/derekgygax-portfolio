import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

// types
import type { Metadata } from 'next'

// Portfolio Object
import { Portfolio } from '@/models/Portfolio';

// data
import { LOCALES } from '@/navigation';

// TODO
// This is a temporary work around that should be removed
// in the future
import { unstable_setRequestLocale } from 'next-intl/server';


// TODO is this right. Do you need others
// TODO maybe the title and keywords and description can 
// TODO be moved to the rootLayout if no other pages
// TODO must improve your SEO
// Generate the Metadata for the home page
export async function generateMetadata(
  { params: {
    locale,
    projectId
  } }: {
    params: {
      locale: string,
      projectId: string
    }
  }
): Promise<Metadata> {

  // TODO This section has only been done for RPPA in the JSON files
  const t = await getTranslations({ locale: locale, namespace: `Metadata.${projectId}` });

  return {
    title: t('title'),
    description: t('description'),
    // TODO really need to make these better
    // TODO you need to learn about this still
    keywords: t('keywords')
  };
}

// Generate all params that could exist for this url
export async function generateStaticParams() {
  // Get the project names from the Portfolio object
  const projectNames = await Portfolio.getProjectNames();

  return projectNames.map((name) => ({ projectId: name }));
}


type ProjectDetailsPageProps = {
  params: {
    locale: string;
    projectId: string;
  };
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = async ({ params: { locale, projectId } }) => {

  // This is a temporary work around that should be removed
  // in the future
  unstable_setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = LOCALES.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Get the project names from the Portfolio object
  const projectNames = await Portfolio.getProjectNames();

  // Validate that the incoming `projectId` parameter is valid
  const isValidProjectId = projectNames.some((name) => {
    return name === projectId
  });
  if (!isValidProjectId) notFound();

  const t = await getTranslations(`Project.${projectId}`);


  return (
    // TODO this is just for the title while building, needs changing
    <main className='flex flex-cols items-center'>
      <h1 className="flex-1 section text-4xl pb-12">The details page for {t("title")} is currently being constructed.</h1>
    </main>
  )
}

export default ProjectDetailsPage;