const Form = ({ link, setLink, handleSubmit }) => {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-violet-light"></div>

      <div 
        className="relative max-w-6xl mx-auto px-5"
      >
        <div className="relative p-5 sm:p-8 lg:py-12 lg:px-16 bg-violet-dark rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="relative flex flex-col lg:flex-row">
              <input 
                className="flex-1 min-h-[3rem] lg:min-h-[4rem] lg:mr-6 px-4 md:px-8 rounded-lg focus:outline-none"
                type="url" 
                placeholder="Shorten a link here..." 
                onChange={(e) => setLink(e.target.value)}
                required
                value={link}
              />
              <button 
                className="flex-shrink-0 min-h-[3rem] lg:min-h-[4rem] mt-3 lg:mt-0 px-12 text-lg text-white bg-cyan hover:bg-violet-grayish transition-colors rounded-lg focus:outline-none"
                type="submit"
              >
                Shorten it!
              </button>
            </div>
          </form>
        </div>
      </div> 
    </section>
  )
}

export default Form
