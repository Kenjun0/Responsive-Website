import React from 'react'
import Arrivals_1 from '../assets/Arrivals_1.jpg'
import Arrivals_2 from '../assets/Arrivals_2.jpg'
import Arrivals_3 from '../assets/Arrivals_3.jpg'
import Arrivals_4 from '../assets/Arrivals_4.jpg'

const Arrivals = () => {
  return (
    <div className="pt-10 h-full">
      <div className="w-full h-full flex justify-center text-center">
        <div className="w-[80%] justify-center">
            <h1 className="py-4 font-bold text-[30px] font-serif text-blue-600 md:text-[45px] lg:text-[55px]">New Arrivals</h1>
            <p className="py-4 max-w-[700px] justify-self-center font-extralight font-sans text-[17px]">Add decor to your patio, deck or backyard with Deko Living outdoor fire pits, daybeds, sectional patio and sofas sets.</p>
            <button className="my-4 h-11 flex justify-self-center justify-center text-center items-center text-orange-200 w-30 bg-gray-600 font-bold tracking-widest text-[13px]">VIEW ALL</button>
        </div>
      </div>
      <div className="w-full h-full lg:h-[500px] flex justify-center">
        <div className="w-[80%] gap-4 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 py-4">
            <div>
                <img src={Arrivals_1} alt="" />
                <a href="/#">
                <p className="text-blue-500 font-bold font-mono cursor-pointer">38 Inch Diameter Outdoor Steel Woodburning Fire Pit with Log Storage • COB10509</p>
                </a>
            </div>
            <div>
                <img src={Arrivals_2} alt="" />
                <a href="/#">
                <p className="text-blue-500 font-bold font-mono cursor-pointer">42 Inch Rectangular Outdoor Propane Firetable with Ice Bucket • COB10004</p>
                </a>
            </div>
            <div>
                <img src={Arrivals_3} alt="" />
                <a href="/#">
                <p className="text-blue-500 font-bold font-mono cursor-pointer">7-Piece Outdoor Sectionals & Tables • COP30008</p>
                </a>
            </div>
            <div>
                <img src={Arrivals_4} alt=""/>
                <a href="/#">
                <p className="text-blue-500 font-bold font-mono cursor-pointer">Tricarico Outdoor Patio Set & Gas Firepit Model COP30901</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Arrivals
