import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mintzberg Configuraties - HBO Sportkunde',
  description: 'Interactieve leerapp over Mintzberg\'s organisatie configuraties voor HBO Sportkunde studenten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}