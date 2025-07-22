import React from 'react'
import Image from '../assets/bg.jpg'

const Hero = () => {
  return (
    <div className="flex justify-center">
      <img src={Image} alt="" className="h-[100vh] w-full object-cover" />
    </div>
  )
}

export default Hero
