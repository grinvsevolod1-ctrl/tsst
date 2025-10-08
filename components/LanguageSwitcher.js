
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function LanguageSwitcher(){
  const router = useRouter()
  const [lang,setLang] = useState(typeof window !== 'undefined' ? localStorage.getItem('lang') || router.locale : router.locale)
  useEffect(()=>{ if (typeof window !== 'undefined') localStorage.setItem('lang', lang) },[lang])
  function change(l){ setLang(l); router.push(router.pathname, router.asPath, { locale: l }) }
  return (<div style={{display:'inline-flex',gap:8}}><button onClick={()=>change('ru')} className="px-2 py-1 border rounded">{lang==='ru'?'RU ✓':'RU'}</button><button onClick={()=>change('en')} className="px-2 py-1 border rounded">{lang==='en'?'EN ✓':'EN'}</button></div>)
}
