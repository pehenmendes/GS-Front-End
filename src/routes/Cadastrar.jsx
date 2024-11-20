import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cadastrar() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  })
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Dados do formulário:', JSON.stringify(formData, null, 2))
    setFormData({
      nome: '',
      email: '',
      password: '',
    })
    alert('Cadastro realizado com sucesso!')
    navigate('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Cadastro de Interesse em Energia Limpa</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="nome" className="block mb-2">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Senha:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Cadastrar