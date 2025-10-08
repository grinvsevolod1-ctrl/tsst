import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Profile(){
  return (
    <div>
      <Header />
      <main className="container mt-6">
        <div className="card">
          <h2 className="text-2xl font-bold">Профиль</h2>
          <p className="text-gray-600">Демо профиль пользователя. Здесь можно добавить сохранённые адреса и историю.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}