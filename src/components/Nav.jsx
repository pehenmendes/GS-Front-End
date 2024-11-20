import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = sessionStorage.getItem('user')
    setIsLoggedIn(!!user)
  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-green-600 p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="text-white hover:underline">Home</Link></li>
        <li><Link to="/solucao" className="text-white hover:underline">Solução</Link></li>
        <li><Link to="/sobre" className="text-white hover:underline">Sobre</Link></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout} className="text-white hover:underline">Sign Out</button></li>
        ) : (
          <>
          <li><Link to="/login" className="text-white hover:underline">Sign In</Link></li>
          <li><Link to="/cadastrar" className="text-white hover:underline">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav