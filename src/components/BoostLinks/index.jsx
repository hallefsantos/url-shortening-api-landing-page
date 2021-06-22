import Image from 'next/image'

import Button from '../Button'

const BoostLinks = () => {
  return (
    <section className="relative py-16 text-center bg-violet-dark">
      <img 
        className="hidden sm:block absolute inset-0 w-full h-full object-cover" 
        src="/images/bg-boost-desktop.svg" 
      />
      <img 
        className="block sm:hidden absolute inset-0 w-full h-full object-cover" 
        src="/images/bg-boost-mobile.svg" 
      />
      <div class="relative">
        <h2 className="mb-6 sm:mb-10 text-2xl sm:text-4xl font-bold text-white">Boost your links today</h2>
        <Button>Get Started</Button>
      </div>
    </section>
  )
}

export default BoostLinks
