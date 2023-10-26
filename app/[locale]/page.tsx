import { getTranslator } from 'next-intl/server';
import { notFound } from 'next/navigation';


// components
import { AboutMe } from './_components/aboutMe/AboutMe';
import { Projects } from './_components/projects/Projects';

// data
import { LOCALES } from '@/locales.config';

// types
import type { Metadata } from 'next'

// TODO
// This is a temporary work around that should be removed
// in the future
import { unstable_setRequestLocale } from 'next-intl/server';
import { ConnectionIcons } from './_components/connectionIcons/ConnectionIcons';


// Generate the urls that code exist at this level form the LOCALES
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// TODO is this right. Do you need others
// TODO maybe the title and keywords and description can 
// TODO be moved to the rootLayout if no other pages
// TODO must improve your SEO
// Generate the Metadata for the home page
export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } }
): Promise<Metadata> {
  const t = await getTranslator(locale, 'HomePage.Metadata');

  return {
    title: t('title'),
    description: t('description'),
    // TODO really need to make these better
    // TODO you need to learn about this still
    keywords: t('keywords')
  };
}

interface HomePageProps {
  params: {
    locale: string;
  }
}

const HomePage: React.FC<HomePageProps> = ({ params }) => {

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = LOCALES.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  // TODO
  // This is a temporary work around that should be removed
  // in the future
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <AboutMe />
      <Projects />
      <ConnectionIcons />
    </>
  )
}

export default HomePage;










// TODO this is how the HOC in Section can be used
// dynamically and maintaining the props of each component
// import { withSection } from "../_layout/section/Section";
// import { About } from "../_components/about/About";
// import { Contact } from "../_components/contact/Contact";
// import { Experience } from "../_components/experience/Experience";
// import { Hero } from "../_components/hero/Hero";

// const HomePage: React.FC = () => {

//   const componentsWithProps = [
//     { Component: Hero, props: { title: "Welcome" } },
//     { Component: About, props: {} },
//     { Component: Experience, props: {} },
//     { Component: Contact, props: { email: "example@email.com" } },
//   ];

//   return (
//     <div>
//       {componentsWithProps.map((item, index) => {
//         const WrappedComponent = withSection({ Component: item.Component });
//         return <WrappedComponent key={index} {...item.props} />;
//       })}
//     </div>
//   )
// }

// export default HomePage;
