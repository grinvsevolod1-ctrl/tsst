
import {useEffect,useState} from 'react'
export default function Profile(){ const [u,setU]=useState(null); useEffect(()=>{ fetch('/api/auth/me').then(r=>r.json()).then(d=>{ if (d.ok) setU(d.user) }) },[])
  return (<div className="container"><div className="card max-w-md mx-auto mt-8"><h2>Profile</h2>{u? <div><p>{u.email}</p></div> : <p>Not logged</p> }</div></div>) }
