import React from 'react'
import Hero from './Hero'
import Services from './Services'
import AboutUs from './AboutUs'
import Cta from './Cta'

function Home() {
  return (
    <div>
        <Hero/>
        <Services/>
        <AboutUs/>
        <Cta/>
    </div>
  )
}

export default Home