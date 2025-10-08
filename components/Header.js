import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header(){
  const router = useRouter()
  const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.getItem('theme') || 'coffee' : 'coffee')
  function toggleTheme(){
    const t = theme === 'coffee' ? 'greygold' : 'coffee'
    setTheme(t)
    if (typeof window !== 'undefined'){
      localStorage.setItem('theme', t)
      document.documentElement.setAttribute('data-theme', t)
    }
  }
  return (
    <header className="header w-full py-4 px-4 border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/photos/photo1.jpg" alt="logo" width={56} height={56} className="rounded-full" />
          <div>
            <h1 className="text-lg font-bold">Быстрее Ветра</h1>
            <p className="text-sm text-gray-500">Transfer & booking made delightful</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm">Home</a></Link>
          <Link href="/booking"><a className="text-sm">Booking</a></Link>
          <Link href="/contact"><a className="text-sm">Contact</a></Link>
          <button onClick={toggleTheme} className="px-3 py-2 rounded bg-white shadow text-sm">Theme</button>
        </nav>
      </div>
    </header>
  )
}