const Button = ({ children }) => {
  return (
    <a 
      className="inline-block py-2 px-10 bg-cyan hover:bg-white sm:text-lg text-xl text-white hover:text-cyan font-bold rounded-full border-2 border-cyan transition-colors" 
      href="#"
      role="button"
    >
      {children}
    </a>
  )
}

export default Button
