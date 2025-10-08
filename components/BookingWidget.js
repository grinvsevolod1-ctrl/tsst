import { motion } from 'framer-motion'\nimport { useState } from 'react'

const cars = [
  { id: 'economy', name: 'Economy', seats: 4, price: 10 },
  { id: 'comfort', name: 'Comfort', seats: 4, price: 18 },
  { id: 'business', name: 'Business', seats: 4, price: 30 },
]

export default function BookingWidget(){
  const [step,setStep] = useState(0)
  const [data,setData] = useState({pickup:'',dropoff:'',car:'economy',phone:'',notes:''})
  const [loading,setLoading] = useState(false)

  async function next(){
    setStep(s=>s+1)
  }
  async function prev(){ setStep(s=>Math.max(0,s-1)) }

  async function submit(){
    setLoading(true)
    try {
      const r = await fetch('/api/book', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
      const res = await r.json()
      if (res.ok) {
        setStep(3)
      } else {
        alert('Ошибка: ' + (res.error || 'server'))
      }
    } catch (e){
      alert('Ошибка: ' + String(e))
    } finally { setLoading(false) }
  }

  return (
    <motion.div layout className="card">
      {step===0 && (
        <div>
          <h4 className="font-semibold">Маршрут</h4>
          <input value={data.pickup} onChange={e=>setData({...data,pickup:e.target.value})} className="w-full border rounded p-2 mt-2" placeholder="Откуда" />
          <input value={data.dropoff} onChange={e=>setData({...data,dropoff:e.target.value})} className="w-full border rounded p-2 mt-2" placeholder="Куда" />
          <div className="mt-3 flex gap-2">
            <button onClick={next} className="btn-primary">Далее</button>
          </div>
        </div>
      )}
      {step===1 && (
        <div>
          <h4 className="font-semibold">Выберите авто</h4>
          <div className="flex gap-2 mt-2">
            {cars.map(c=>(
              <button key={c.id} onClick={()=>setData({...data,car:c.id})} className={`p-2 rounded border ${data.car===c.id ? 'bg-gray-100' : ''}`}>{c.name}</button>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={prev} className="px-4 py-2 rounded border">Назад</button>
            <button onClick={next} className="btn-primary">Далее</button>
          </div>
        </div>
      )}
      {step===2 && (
        <div>
          <h4 className="font-semibold">Контакты</h4>
          <input value={data.phone} onChange={e=>setData({...data,phone:e.target.value})} className="w-full border rounded p-2 mt-2" placeholder="+7..." />
          <input value={data.notes} onChange={e=>setData({...data,notes:e.target.value})} className="w-full border rounded p-2 mt-2" placeholder="Комментарий" />
          <div className="mt-3 flex gap-2">
            <button onClick={prev} className="px-4 py-2 rounded border">Назад</button>
            <button onClick={submit} className="btn-primary" disabled={loading}>{loading ? '...' : 'Отправить'}</button>
          </div>
        </div>
      )}
      {step===3 && (
        <div className="text-center">
          <h4 className="font-semibold">Спасибо — заказ принят</h4>
          <p className="text-sm text-gray-600 mt-2">Мы свяжемся с вами для подтверждения.</p>
        </div>
      )}
    </div>
  )
}