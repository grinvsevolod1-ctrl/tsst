import Header from '../components/Header'
import BookingWidget from '../components/BookingWidget'
import AIChat from '../components/AIChat'
import Footer from '../components/Footer'

export default function Booking(){
  return (
    <div>
      <Header />
      <main className="container mt-6">
        <h2 className="text-2xl font-bold">Бронирование трансфера</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="card">
              <h3 className="font-semibold">Описание услуги</h3>
              <p className="text-gray-600 mt-2">Удобная система бронирования с подтверждением и отправкой в CRM.</p>
              <div className="mt-4">
                <img src="/photos/photo2.jpg" className="rounded-md w-full h-60 object-cover" />
              </div>
            </div>
          </div>
          <div>
            <BookingWidget />
          </div>
        </div>
      </main>
      <AIChat />
      <Footer />
    </div>
  )
}