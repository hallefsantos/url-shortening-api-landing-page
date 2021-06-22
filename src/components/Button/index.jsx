const Button = ({ children }) => {
  return (
    <a 
      className="inline-block py-4 px-10 bg-cyan hover:bg-white sm:text-lg text-xl text-white hover:text-cyan font-bold rounded-full transition-colors" 
      href="#"
    >
      {children}
    </a>
  )
}

export default Button
