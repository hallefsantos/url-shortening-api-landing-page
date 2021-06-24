const AdvancedStatistics = () => {
  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-32 bg-violet-light">
      <div 
        className="max-w-6xl mx-auto px-5"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Advanced Statistics</h2>
          <p className="max-w-lg mx-auto mt-4 text-violet-grayish">Track how your links are performing across the web with our advanced statistics dashboard</p>
        </div>

        <div className="relative md:grid md:grid-cols-3 md:gap-8 mt-16">
          <div className="absolute left-1/2 md:inset-x-0 md:top-1/2  -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 w-2 md:w-full h-full md:h-2 bg-cyan"></div>

          {/* Box */}
          <div className="relative mt-10 md:mt-0 md:mb-24 bg-white rounded-b-md">
            <div className="relative md:pl-5 bg-violet-light">
              <div className="absolute top-0 inset-x-0 h-1/2 bg-violet-light"></div>
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-white rounded-t-md"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto md:mx-0 bg-violet-dark rounded-full">
                <img src="images/icon-brand-recognition.svg" />
              </div>
            </div>
            <div className="mt-2 p-5 text-center md:text-left">
              <h2 className="text-xl font-bold text-black">Brand Recognition</h2>
              <p className="mt-5 text-sm text-violet-grayish leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illo commodi impedit id officiis earum ab facilis, voluptatum molestiae ex, fugiat nostrum facere sed tenetur? Aperiam culpa inventore nostrum quaerat.</p>
            </div>
          </div>

          {/* Box */}
          <div className="self-center relative mt-10 md:mt-0 bg-white rounded-b-md">
            <div className="relative md:pl-5 bg-violet-light">
              <div className="absolute top-0 inset-x-0 h-1/2 bg-violet-light"></div>
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-white rounded-t-md"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto md:mx-0 bg-violet-dark rounded-full">
                <img src="images/icon-detailed-records.svg" />
              </div>
            </div>
            <div className="mt-2 p-5 text-center md:text-left">
              <h2 className="text-xl font-bold text-black">Detailed Records</h2>
              <p className="mt-5 text-sm text-violet-grayish leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illo commodi impedit id officiis earum ab facilis, voluptatum molestiae ex, fugiat nostrum facere sed tenetur? Aperiam culpa inventore nostrum quaerat.</p>
            </div>
          </div>

          {/* Box */}
          <div className="self-end relative mt-10 md:mt-0 bg-white rounded-b-md">
            <div className="relative md:pl-5 bg-violet-light">
              <div className="absolute top-0 inset-x-0 h-1/2 bg-violet-light"></div>
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-white rounded-t-md"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto md:mx-0 bg-violet-dark rounded-full">
                <img src="images/icon-fully-customizable.svg" />
              </div>
            </div>
            <div className="mt-2 p-5 text-center md:text-left">
              <h2 className="text-xl font-bold text-black">Fully Customizable</h2>
              <p className="mt-5 text-sm text-violet-grayish leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore illo commodi impedit id officiis earum ab facilis, voluptatum molestiae ex, fugiat nostrum facere sed tenetur? Aperiam culpa inventore nostrum quaerat.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AdvancedStatistics
