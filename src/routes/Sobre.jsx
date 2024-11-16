import { useState } from 'react'

const quizQuestions = [
  {
    question: "Qual é a principal vantagem da energia solar?",
    options: [
      "É barata para instalar",
      "Funciona à noite",
      "É uma fonte renovável e limpa",
      "Não requer manutenção"
    ],
    correctAnswer: 2
  },
  {
    question: "Qual destas NÃO é uma fonte de energia renovável?",
    options: [
      "Eólica",
      "Nuclear",
      "Geotérmica",
      "Biomassa"
    ],
    correctAnswer: 1
  },
  {
    question: "Qual é o principal gás de efeito estufa produzido pela queima de combustíveis fósseis?",
    options: [
      "Oxigênio",
      "Nitrogênio",
      "Metano",
      "Dióxido de carbono"
    ],
    correctAnswer: 3
  }
]

function Sobre() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Sobre o Projeto</h2>
      <p className="text-lg mb-4">
        Nosso projeto "Energia Limpa para um Futuro Sustentável" visa promover a adoção de fontes de energia renovável e educar o público sobre a importância da sustentabilidade energética.
      </p>
      <p className="text-lg mb-8">
        Através de parcerias com empresas, governos e comunidades, buscamos implementar soluções inovadoras que reduzam nossa dependência de combustíveis fósseis e mitiguem os efeitos das mudanças climáticas.
      </p>

      <h3 className="text-2xl font-bold mb-4">Quiz: Teste seus conhecimentos sobre energia limpa</h3>
      {showScore ? (
        <div className="bg-green-100 p-4 rounded">
          <p className="text-xl">Você acertou {score} de {quizQuestions.length} questões!</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded p-4">
          <h4 className="text-xl font-bold mb-4">
            Questão {currentQuestion + 1}/{quizQuestions.length}
          </h4>
          <p className="mb-4">{quizQuestions[currentQuestion].question}</p>
          <div className="space-y-2">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sobre