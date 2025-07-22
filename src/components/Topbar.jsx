import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="flex h-7 w-full bg-blue-500 z-10 lg:fixed">
      <div className="flex w-[95%] m-auto text-white font-bold justify-between">
        <div className="flex w-full h-7 justify-center gap-10 pl-5 text-[13px] md:text-[15px] lg:justify-start">
            <p className="flex items-center gap-1">
            <BsFillTelephoneFill />
            1-888-227-3340
            </p>
            <p className="text-white hover:text-blue-300 duration-1000 cursor-pointer flex items-center gap-1">
            <MdEmail />
            <a href="/#">customerservice@dekoliving.com</a>
            </p>
        </div>
        <div className="">
            <p className="text-white w-[200px] justify-end hover:text-blue-300 duration-1000 cursor-pointer md:flex hidden">Connect with Us</p>
        </div>
      </div>
    </div>
  )
}

export default Topbar
