import About from '@/components/About'
import Banner from '@/components/Banner'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import { Features } from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import ShowCase from '@/components/ShowCase'
import Steps from '@/components/Steps'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <ShowCase />
      <Banner />
      <About />
      <Features />
      <Steps />
      <Benefits />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page
