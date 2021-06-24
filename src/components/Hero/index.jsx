import Button from '../Button'

const Hero = () => {
  return (
    <section className="pt-2 pb-20 lg:py-32 relative overflow-hidden">
      <img className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-24 w-[30rem] sm:w-full max-w-[38.1875rem] ml-5 sm:mx-auto" src="images/illustration-working.svg" />
      <div 
        className="max-w-6xl mx-auto px-5"
      > 
        <div className="relative lg:max-w-xl mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">More than just shorter links</h1>

          <p className="mt-6 mb-10 text-xl text-gray">
            Build your brand's recognition and get detalied insights on how your links are performing.
          </p>

          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
