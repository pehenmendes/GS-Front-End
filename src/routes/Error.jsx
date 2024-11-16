import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-4">Desculpe, ocorreu um erro inesperado.</p>
      <p className="text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default Error