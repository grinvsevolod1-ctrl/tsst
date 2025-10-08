import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Orders(){
  return (
    <div>
      <Header />
      <main className="container mt-6">
        <div className="card">
          <h2 className="text-2xl font-bold">История заказов</h2>
          <p className="text-gray-600">Здесь будет список предыдущих трансферов (демо).</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}