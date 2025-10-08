import Header from '../components/Header'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import BookingWidget from '../components/BookingWidget'
import AIChat from '../components/AIChat'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2">
            <Gallery />
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