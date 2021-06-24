import { useState } from 'react'

import Button from '../Button'
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <nav>
      <div 
        className="relative flex justify-between items-center max-w-6xl mx-auto pt-8 md:pt-14 pb-5 px-5"
      >
        <div className="flex items-center">
          <a className="md:mr-14 text-3xl md:text-4xl font-bold" href="#">Shortly</a>

          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a className="text-gray hover:text-black transition-colors" href="#">Features</a>
            </li>
            <li>
              <a className="text-gray hover:text-black transition-colors" href="#">Pricing</a>
            </li>
            <li>
              <a className="text-gray hover:text-black transition-colors" href="#">Resources</a>
            </li>
          </ul>

        </div>
        
        <div className="hidden md:block">
          <a
            className="inline-block mr-10 text-gray hover:text-black transition-colors" 
            href="#"
          >
            Login
          </a>
          <Button>Sign Up</Button>
        </div>

        <button 
          onClick={toggleMenu}
          className="block md:hidden"
          aria-pressed={menuActive}
          aria-expanded={menuActive}
          aria-label="Show Menu"
          aria-controls="mobile-menu"
        >
          <HiMenu className="h-8 w-8 text-violet-grayish" aria-hidden="true" />
        </button>

        {/* Menu mobile */}
        {menuActive && (
          <div 
            id="mobile-menu" 
            className="absolute top-20 inset-x-0 z-10 mx-5"
            aria-hidden={!menuActive}
          >
            <div className="py-10 px-6 bg-violet-dark text-white rounded-lg">
              <ul className="pb-8 text-center space-y-8">
                <li>
                  <a 
                    className="text-lg text-white font-bold hover:text-black transition-colors" 
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    className="text-lg text-white font-bold hover:text-black transition-colors" 
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    className="text-lg text-white font-bold hover:text-black transition-colors" 
                    href="#"
                  >
                    Resources
                  </a>
                </li>
              </ul>

              <div className="flex flex-col pt-8 space-y-8 text-center border-t border-gray/20">
                <a 
                  className="text-lg text-white font-bold hover:text-black transition-colors" 
                  href="#"
                >
                  Login
                </a>

                <Button>Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
