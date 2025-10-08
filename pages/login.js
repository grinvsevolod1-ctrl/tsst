
import {useState} from 'react'
export default function Login(){ const [email,setEmail]=useState(''); async function send(e){ e.preventDefault(); await fetch('/api/auth/request-otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})}); alert('sent'); }
  return (<div className="container"><div className="card max-w-md mx-auto mt-8"><h2>Login</h2><form onSubmit={send}><input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded p-2" placeholder="Email" /><div className="mt-3"><button className="btn">Send code</button></div></form></div></div>) }
