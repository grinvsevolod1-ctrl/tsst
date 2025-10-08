
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
    <motion.header initial={{ y:-20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.5 }} className="header w-full py-4 px-4 border-b backdrop-blur">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo_transparent.png" alt="logo" width={56} height={56} className="rounded-full" />
          <div>
            <h1 className="text-lg font-bold">Быстрее Ветра</h1>
            <p className="text-sm text-gray-500">Transfer & booking made delightful</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm hover:opacity-80">Home</a></Link>
          <Link href="/booking"><a className="text-sm hover:opacity-80">Booking</a></Link>
          <Link href="/profile"><a className="text-sm hover:opacity-80">Profile</a></Link>
          <Link href="/orders"><a className="text-sm hover:opacity-80">Orders</a></Link>
          <button onClick={toggleTheme} className="px-3 py-2 rounded bg-white shadow text-sm">Theme</button>
        </nav>
      </div>
    </motion.header>
  )
}
