import '@/styles/globals.css'  
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import AccentToggle from '@/components/AccentToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Owen Njaria Njuguna - Portfolio',
  description: 'Full-Stack Developer, Ethical Hacker, and Cybersecurity Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body 
        className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white`} 
        suppressHydrationWarning
      >
        <Menu />
        <AccentToggle />
        {children}
      </body>
    </html>
  )
}

