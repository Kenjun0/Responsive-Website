import React from 'react'
import Image_1 from '../assets/Image_1.jpg'
import Image_2 from '../assets/Image_2.jpg'
import Image_3 from '../assets/Image_3.jpg'

const Services = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full py-15 lg:flex lg:w-[80%] lg:justify-self-center">
        <div className="flex justify-center lg:justify-end md:w-full md:justify-end">
          <div className="absolute flex justify-center bg-gray-100/80 h-[500px] w-[80%] md:h-[85%] lg:w-[60%] lg:h-[60%] md:w-[90%]">
            <div className="w-[90%] pt-8">
              <h1 className="py-2 font-bold font-serif text-[28px] text-blue-600 md:text-[48px] lg:text-[40px]">INNOVATIVE, CREATIVE OUTDOOR FURNITURE</h1>
              <div className="lg:flex lg:grid-cols-1 lg:items-center">
                <div>
                  <p className="py-2 md:font-semibold text-[17px]">Deko Living offers a refined sense of luxury amidst an impressive collection of modern outdoor furniture.</p>
                  <p className="py-2 md:font-semibold text-[17px]">Featuring high-end patio sets, daybeds and firepits for residential lawn and garden .</p>
                </div>
                <div>
                  <p className="py-4 font-bold text-[17px]">Modern elegance and sophisticated luxury for your outdoor space.</p>
                  <button className="mt-4 bg-gray-600 h-11 w-55 flex justify-center items-center text-orange-200 font-bold tracking-widest text-[13px]">VIEW OUR PRODUCTS</button>
                </div>
              </div>
            </div>
          </div>
          <img src={Image_1} alt="" className="h-[90vh] w-full lg:h-[100vh] md:h-[100vh] lg:w-full lg:justify-self-center object-cover" />
        </div>
      </div>
      {/* SECOND IMAGE */}
      <div className="w-full h-full">
        <div className="flex justify-center py-2">
          <div className="w-[80%] lg:flex lg:h-[100vh]">
            <div className="lg:self-center lg:w-[1000px]">
              <h1 className="lg:px-15 font-bold text-[30px] font-serif text-blue-600 md:text-[45px] lg:text-[55px]">Firepit Collection</h1>
              <p className="lg:px-15 py-4 font-extralight font-sans text-[17px]">Deko Living Collection of fire pits and fire tables bring the feel of relaxing in your very own outdoor paradise.</p>
              <p className="lg:px-15 py-4 font-extralight font-sans text-[17px]">Light up and bring warmth to your evenings outdoor living space surrounding one of our Fire Pits or Fire Tables</p>
              <button className="lg:mx-15 mt-4 bg-gray-600 h-11 w-55 flex justify-center items-center text-orange-200 font-bold tracking-widest text-[13px]">VIEW OUR COLLECTION</button>
            </div>
            <div>
              <img src={Image_2} alt="" className="h-[230px] w-full sm:h-[270px] md:h-[350px] object-cover py-4 lg:w-[1000px] lg:h-full" />
            </div>
          </div>
        </div>
        {/* SECOND IMAGE */}
        <div className="flex justify-center py-2">
          <div className="w-[80%] lg:flex lg:flex-row-reverse lg:h-[100vh] flex flex-col-reverse">
            <div className="lg:self-center lg:w-[1000px]">
              <h1 className="lg:px-15 font-bold text-[30px] font-serif text-blue-600 md:text-[45px] lg:text-[55px]">Patio Set Collection</h1>
              <p className="lg:px-15 py-4 font-extralight font-sans text-[17px]">Create an oasis and bring your living space outdoors with a wide selection of stylish furniture patio sets, daybeds and fire tables.</p>
              <p className="lg:px-15 py-4 font-extralight font-sans text-[17px]">Deko Living offers a collection of Armchairs, Sofas and Daybeds with clean lines and padded cushion makes for a comfortable place to enjoy the afternoon sun</p>
              <button className="lg:mx-15 mt-4 bg-gray-600 h-11 w-55 flex justify-center items-center text-orange-200 font-bold tracking-widest text-[13px]">VIEW OUR COLLECTION</button>
            </div>
            <div>
              <img src={Image_3} alt="" className="h-[230px] w-full sm:h-[270px] md:h-[350px] object-cover py-4 lg:w-[1000px] lg:h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
