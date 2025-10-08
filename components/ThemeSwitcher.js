
import { useEffect, useState } from 'react'
export default function ThemeSwitcher(){
  const [theme,setTheme] = useState(typeof window !== 'undefined' ? localStorage.getItem('theme') || 'coffee' : 'coffee')
  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme); if (typeof window !== 'undefined') localStorage.setItem('theme', theme) },[theme])
  return (<div style={{display:'inline-flex', gap:8}}><button onClick={()=>setTheme('coffee')} className="px-2 py-1 border rounded">{theme==='coffee'?'Coffee ✓':'Coffee'}</button><button onClick={()=>setTheme('greygold')} className="px-2 py-1 border rounded">{theme==='greygold'?'GreyGold ✓':'GreyGold'}</button></div>)
}
