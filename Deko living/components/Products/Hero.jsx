import React from 'react'
import Product_bg from '../../assets/Products/Product-Hero.jpg'

const Hero = () => {
  return (
    <div className="w-full h-full">
      <img src={Product_bg} alt="" className="w-full h-[550px] object-cover" />
      <div className="lg:mt-[-168px] mt-[-236px]">
        <div className="w-[80%] h-[100px] m-auto">
          <h1 className="text-3xl lg:text-5xl font-bold text-white font-serif">Our Products</h1>
          <div className="pt-10 lg:flex lg:w-full lg:justify-evenly">
            <div className="flex justify-evenly lg:w-full">
              <button className="h-20 w-full bg-black text-yellow-700 font-bold text-[13px]">FIREPITS</button>
              <button className="h-20 w-full bg-black text-yellow-700 font-bold text-[13px]">PATIO SETS</button>
            </div>
            <div className="flex justify-evenly lg:w-full">
              <button className="h-20 w-full bg-black text-yellow-700 font-bold text-[13px]">PATIO DAYBEDS</button>
              <button className="h-20 w-full bg-black text-yellow-700 font-bold text-[13px]">LAWN & GARDEN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
