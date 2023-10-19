import type { Metadata } from 'next'

// components
import { Header } from './_components/header/Header';
import { Footer } from './_components/footer/Footer';

// styles
import './globals.scss'
import { Container } from './_layout/container/Container';


// TODO put this data somewhere!!!
// TODO put this data somewhere!!!
// TODO put this data somewhere!!!
// TODO put this data somewhere!!!
export const metadata: Metadata = {
  title: 'Derek Gygax',
  description: 'Portfolio for Derek Gygax',
  // TODO clean this shit up!
  openGraph: {
    type: 'website',
    title: 'Derek Gygax Portfolio',
    siteName: 'Derek Gygax Portfolio',
    description: 'Portfolio for Derek Gygax',
    // TODO add this
    // url: 'https://57west.us',
  },
  // TODO IDK ABOUT THESE
  viewport: 'width=device-width, initial-scale=1.0',
  twitter: {
    card: 'summary_large_image',
  }
}

type RootLayoutProps = {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;