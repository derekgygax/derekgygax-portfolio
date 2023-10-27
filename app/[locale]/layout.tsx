import { getTranslator } from 'next-intl/server';
// TODO
// This is a temporary work around that should be removed
// in the future
import { unstable_setRequestLocale } from 'next-intl/server';

// types
import type { Metadata } from 'next'

// components
import { Header } from './_components/header/Header';
import { Footer } from './_components/footer/Footer';

// styles
import './globals.css';

// Generate the Metadata for the root layout
export async function generateMetadata(
  { params: { locale } }: { params: { locale: string } }
): Promise<Metadata> {
  const t = await getTranslator(locale, 'RootLayout.Metadata');

  // TODO Does this have all the sections it needs like 57West does
  return {
    openGraph: {
      type: 'website',
      title: t('openGraph.title'),
      siteName: t('openGraph.title'),
      description: t('openGraph.description'),
      // TODO add this
      // url: 'https://57west.us',
    },
    // TODO IDK ABOUT THESE
    viewport: 'width=device-width, initial-scale=1.0',
    twitter: {
      card: 'summary_large_image',
    }
  };
}

type RootLayoutProps = {
  children: React.ReactNode,
  params: {
    locale: string;
  }
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {

  // TODO
  // This is a temporary work around that should be removed
  // in the future
  unstable_setRequestLocale(params.locale);

  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;