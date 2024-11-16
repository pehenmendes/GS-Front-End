import { useState } from 'react'

function Cadastrar() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipoEnergia: '',
    consumoMensal: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para salvar os dados em um arquivo JSON
    console.log('Dados do formulário:', JSON.stringify(formData, null, 2))
    // Limpar o formulário após o envio
    setFormData({
      nome: '',
      email: '',
      tipoEnergia: '',
      consumoMensal: '',
    })
    alert('Cadastro realizado com sucesso!')
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
          <label htmlFor="tipoEnergia" className="block mb-2">Tipo de Energia de Interesse:</label>
          <select
            id="tipoEnergia"
            name="tipoEnergia"
            value={formData.tipoEnergia}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Selecione...</option>
            <option value="solar">Energia Solar</option>
            <option value="eolica">Energia Eólica</option>
            <option value="hidrica">Energia Hídrica</option>
            <option value="biomassa">Biomassa</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="consumoMensal" className="block mb-2">Consumo Mensal (kWh):</label>
          <input
            type="number"
            id="consumoMensal"
            name="consumoMensal"
            value={formData.consumoMensal}
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