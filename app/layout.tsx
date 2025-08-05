import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vignesh Reddy',
  description: 'Manifesto',
  generator: 'Vignesh Reddy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
