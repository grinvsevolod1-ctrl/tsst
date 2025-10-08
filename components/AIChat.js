import { useState } from 'react'

export default function AIChat(){
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function send(){
    if (!input.trim()) return
    setMessages(m=>[...m, {role:'user', text:input}])
    setInput('')
    setLoading(true)
    try {
      const r = await fetch('/api/ai', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({prompt: input})})
      const data = await r.json()
      setMessages(m=>[...m, {role:'assistant', text: data.result || data.error || 'Нет ответа'}])
    } catch (e){
      setMessages(m=>[...m, {role:'assistant', text: 'Ошибка AI: '+String(e)}])
    } finally { setLoading(false) }
  }

  return (
    <aside className="fixed right-4 bottom-4 w-80 md:w-96 space-y-2">
      <div className="card">
        <h4 className="font-semibold">AI Ассистент</h4>
        <div className="max-h-48 overflow-auto mt-2 space-y-2">
          {messages.map((m,i)=>(
            <div key={i} className={m.role==='user' ? 'text-right':'text-left'}>
              <div className="inline-block p-2 rounded-md bg-gray-100">{m.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 border rounded p-2" placeholder="Как помочь?" />
          <button onClick={send} className="btn-primary" disabled={loading}>{loading?'...':'OK'}</button>
        </div>
      </div>
    </aside>
  )
}