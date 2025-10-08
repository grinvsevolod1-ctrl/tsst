import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div>
      <Header />
      <main className="container mt-6">
        <div className="card">
          <h2 className="text-xl font-bold">Контакты</h2>
          <p className="text-gray-600 mt-2">Напишите нам, и мы поможем организовать трансфер.</p>
          <form className="mt-3" onSubmit={e=>{ e.preventDefault(); alert('Демо: сообщение отправлено') }}>
            <input className="w-full border rounded p-2 mt-2" placeholder="Имя" />
            <input className="w-full border rounded p-2 mt-2" placeholder="Email или телефон" />
            <textarea className="w-full border rounded p-2 mt-2" placeholder="Сообщение" />
            <div className="mt-3">
              <button className="btn-primary">Отправить</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}