export default function Gallery(){
  const imgs = [1,2,3,4].map(i=>`/photos/photo${i}.jpg`)
  return (
    <section className="container mt-8">
      <h3 className="text-xl font-semibold mb-3">Наши автомобили и маршруты</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imgs.map((s,i)=>(
          <div key={i} className="card">
            <img src={s} className="rounded-md h-40 w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}