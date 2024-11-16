import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
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
          <img src="/path/to/solar.jpg" alt="Energia Solar" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Energia Solar</h3>
            <p>Aproveite o poder do sol para gerar eletricidade limpa e renovável.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/path/to/wind.jpg" alt="Energia Eólica" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Energia Eólica</h3>
            <p>Utilize a força dos ventos para produzir energia de forma sustentável.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/path/to/hydro.jpg" alt="Energia Hidrelétrica" className="w-full h-48 object-cover" />
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