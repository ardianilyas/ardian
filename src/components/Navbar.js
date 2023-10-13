'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const currentRoute = usePathname()
  return (
    <div className="w-full py-8 bg-neutral-800">
      <div className="container text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl">Next-app</h1>
        <ul className='text-gray-50 flex gap-4'>
          <Link href={'/'} className={currentRoute == '/' ? 'text-blue-600' : 'hover:text-blue-600'} >Home</Link>
          <Link href={'/about'} className={currentRoute == '/about' ? 'text-blue-600' : 'hover:text-blue-600'}>About</Link>
          <Link href={'/skills'} className={currentRoute == '/skills' ? 'text-blue-600' : 'hover:text-blue-600'}>Skills</Link>
        </ul>
      </div>
    </div>
  )
}
