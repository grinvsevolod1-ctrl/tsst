
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <section className="container mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <motion.h2 initial={{ x:-30, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.5 }} className="text-3xl font-extrabold mb-3">Персональный трансфер без забот</motion.h2>
        <p className="text-gray-600 mb-4">Быстрое оформление, удобный чат-ассистент и понятные цены. Заказывайте трансфер по своему маршруту.</p>
        <div className="flex gap-3">
          <a href="/booking" className="btn-primary">Бронировать</a>
          <a href="/contact" className="px-4 py-2 rounded border">Контакты</a>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <img src="/photos/photo2.jpg" alt="p" className="rounded-md h-20 object-cover" />
          <img src="/photos/photo3.jpg" alt="p" className="rounded-md h-20 object-cover" />
          <img src="/photos/photo4.jpg" alt="p" className="rounded-md h-20 object-cover" />
        </div>
      </div>
      <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.6 }} className="card">
        <Image src="/photos/photo1.jpg" width={720} height={480} alt="hero" className="hero-img" />
      </motion.div>
    </section>
  )
}
