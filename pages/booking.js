
import Header from '../components/Header'; import BookingWidget from '../components/BookingWidget'; import AIChat from '../components/AIChat'; import Footer from '../components/Footer'
export default function Booking(){ return (<div><Header /><main className="container mt-6"><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="md:col-span-2"><div className="card"><h2 className="text-xl font-bold">Бронирование</h2><p className="text-gray-600 mt-2">Заполните форму справа.</p></div></div><div><BookingWidget /></div></div></main><AIChat /><Footer /></div>) }
