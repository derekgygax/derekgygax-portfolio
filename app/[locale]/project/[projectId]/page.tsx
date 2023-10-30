import { notFound } from 'next/navigation';
import { getTranslator } from 'next-intl/server';

// types
import type { Metadata } from 'next'
import type { ProjectsConfig } from '../../types/projects';

// data
import { LOCALES } from '@/locales.config';
import projectsData from '@/app/data/projects.json';

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

  const projects = projectsData as ProjectsConfig;

  // TODO This section has only been done for RPPA in the JSON files
  const t = await getTranslator(locale, `Project.${projectId}`);

  return {
    title: projects.projects[projectId].title,
    description: t('metaData.description'),
    // TODO really need to make these better
    // TODO you need to learn about this still
    keywords: t('metaData.keywords')
  };
}

// Generate all params that could exist for this url
// example /en/rppa  OR  es/rppa  OR  en/loc  OR es/loc
export function generateStaticParams() {
  return LOCALES.reduce((
    accumulator: { locale: string; projectId: string }[],
    locale
  ) => {
    projectsData.projectIds.forEach((id: string) => {
      accumulator.push({
        locale: locale,
        projectId: id
      });
    });
    return accumulator;
  }, []);
}


type ProjectDetailsPageProps = {
  params: {
    locale: string;
    projectId: string;
  };
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ params }) => {

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = LOCALES.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  const projects = projectsData as ProjectsConfig;

  // Validate that the incoming `projectId` parameter is valid
  const isValidProjectId = projects.projectIds.some((id) => {
    return id === params.projectId
  });
  if (!isValidProjectId) notFound();

  const project = projects.projects[params.projectId];

  // This is a temporary work around that should be removed
  // in the future
  unstable_setRequestLocale(params.locale);

  return (
    // TODO this is just for the title while building, needs changing
    <main className='flex flex-cols items-center'>
      <h1 className="flex-1 section text-4xl pb-12">The details page for {project.title} is currently being constructed.</h1>
    </main>
  )
}

export default ProjectDetailsPage;