'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const currentRoute = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="w-full py-8 bg-neutral-800">
      <div className="container text-white flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-bold text-2xl">ARDIAN ILYAS</h1>
          <button onClick={toggleMenu} className="md:hidden">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>              
              ) :  (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
          </button>
        </div>
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0`}>
          <Link href={'/'} className={currentRoute == '/' ? 'text-blue-600' : 'hover:text-blue-600'} >Home</Link>
          <Link href={'/about'} className={currentRoute == '/about' ? 'text-blue-600' : 'hover:text-blue-600'}>About</Link>
          <Link href={'/skills'} className={currentRoute == '/skills' ? 'text-blue-600' : 'hover:text-blue-600'}>Skills</Link>
        </ul>
      </div>
    </div>
  )
}
