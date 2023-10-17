import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ardian Ilyas',
  description: 'Ardian Ilyas personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
