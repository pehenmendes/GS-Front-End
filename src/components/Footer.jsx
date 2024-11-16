import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-green-600 p-4 text-white">
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-green-200"><FaFacebook size={24} /></a>
        <a href="#" className="hover:text-green-200"><FaInstagram size={24} /></a>
        <a href="#" className="hover:text-green-200"><FaLinkedin size={24} /></a>
        <a href="#" className="hover:text-green-200"><FaEnvelope size={24} /></a>
      </div>
    </footer>
  )
}

export default Footer