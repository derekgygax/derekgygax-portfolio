import type { Metadata } from 'next'

// styles
import './globals.css'

export const metadata: Metadata = {
  title: 'Derek Gygax',
  description: 'Portfolio for Derek Gygax',


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
