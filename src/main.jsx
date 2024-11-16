import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Solucao from './routes/Solucao.jsx'
import Sobre from './routes/Sobre.jsx'
import Cadastrar from './routes/Cadastrar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'solucao', element: <Solucao /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'login', element: <Login /> },
      { path: 'cadastrar', element: <Cadastrar /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)