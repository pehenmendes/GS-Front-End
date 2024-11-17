import { useState, useEffect } from 'react'

const images = [
  'https://www.futurosolar.com.br/wp-content/uploads/2018/10/energia-renovavel.jpg',
  'https://www.opencadd.com.br/hs-fs/hubfs/transformacao-energia-renovavel-em-eletrica.jpg?width=1200&height=630&name=transformacao-energia-renovavel-em-eletrica.jpg',
  'https://media.licdn.com/dms/image/D4D12AQEJ1JCV4iVQFA/article-cover_image-shrink_720_1280/0/1720108393070?e=2147483647&v=beta&t=KRFbJkLm5nfqw63v4HiIXZPiaApJrUu7bAX97NgUYKU',
]

function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Energia Limpa para um Futuro Sustentável</h1>
      
      <div className="mb-8 relative h-96">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <p className="text-lg mb-8">
        A energia limpa é essencial para construirmos um futuro sustentável. Ao adotar fontes renováveis como solar, eólica e hidrelétrica, podemos reduzir as emissões de carbono e mitigar os efeitos das mudanças climáticas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Energia Solar" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Energia Solar</h3>
            <p>Aproveite o poder do sol para gerar eletricidade limpa e renovável.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.pexels.com/photos/243138/pexels-photo-243138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Energia Eólica" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Energia Eólica</h3>
            <p>Utilize a força dos ventos para produzir energia de forma sustentável.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://images.prismic.io/novaenergia/db3731ae-7431-45b1-8f6e-e3062636b02a_iStock-1322319349+%281%29.jpg?auto=compress%2Cformat&fit=max" alt="Energia Hidrelétrica" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Energia Hidrelétrica</h3>
            <p>Aproveite o fluxo dos rios para gerar eletricidade limpa e confiável.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home