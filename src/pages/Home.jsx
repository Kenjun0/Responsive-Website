import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Arrivals from '../components/Arrivals'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <Arrivals />
      <Footer />
    </>
  )
}

export default Home
