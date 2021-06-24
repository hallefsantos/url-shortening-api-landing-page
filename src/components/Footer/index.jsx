import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-violet-darker">
      <div 
        className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto py-14 md:py-20 px-5"
      >
        <div className="flex-shrink-0">
          <Image 
            className="brightness-0 invert"
            src={logo}
            alt="Shortly Logo"
          />
        </div>

        <nav className="flex items-center md:items-start flex-col md:flex-row mt-14 md:mt-0 space-x-0 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 text-center md:text-left">

          {/* Features Menu */}
          <div>
            <h3 className="font-bold text-white">Features</h3>
            <ul className="space-y-5 mt-8">
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Link Shortening
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Branded Links
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Menu */}
          <div>
            <h3 className="font-bold text-white">Resources</h3>
            <ul className="space-y-5 mt-8">
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Developers
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company Menu */}
          <div>
            <h3 className="font-bold text-white">Company</h3>
            <ul className="space-y-5 mt-8">
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  className="text-gray hover:text-cyan transition-colors" 
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <ul className="flex items-center space-x-6">
              <li>
                <a 
                  className="text-3xl text-white hover:text-cyan transition-colors" 
                  href="#"
                >
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a 
                  className="text-3xl text-white hover:text-cyan transition-colors" 
                  href="#"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a 
                  className="text-3xl text-white hover:text-cyan transition-colors" 
                  href="#"
                >
                  <FaPinterest />
                </a>
              </li>
              <li>
                <a 
                  className="text-2xl lg:text-3xl text-white hover:text-cyan transition-colors" 
                  href="#"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        
        </nav>

      </div> 
    </footer>
  )
}

export default Footer
