import '../styles/globals.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'coffee'
    document.documentElement.setAttribute('data-theme', t)
  },[])
  return <Component {...pageProps} />
}