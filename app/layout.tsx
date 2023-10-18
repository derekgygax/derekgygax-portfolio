import type { Metadata } from 'next'

// styles
import './globals.scss'


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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
