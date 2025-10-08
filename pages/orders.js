
import {useEffect,useState} from 'react'
export default function Orders(){ const [orders,setOrders]=useState([]); useEffect(()=>{ fetch('/api/orders').then(r=>r.json()).then(d=>setOrders(d.orders||[])) },[])
  return (<div className="container"><div className="card max-w-3xl mx-auto mt-8"><h2>Orders</h2>{orders.length===0? <p>No orders</p> : orders.map(o=>(<div key={o.id} className="border p-2">{o.pickup} → {o.dropoff}</div>))}</div></div>) }
