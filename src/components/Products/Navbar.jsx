import {React, useState} from 'react'
import Logo from '../../assets/Deko-living-LOGO.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [nav, setNav] = useState (false);

    const handleNav = () => {
        setNav(!nav)
    }

    const handleLogoClick = () => {};

  return (
    <div className="h-50 w-full absolute z-10 lg:fixed top-10">
      <div className="flex justify-center">
        <div className="w-55 lg:w-70">
            <a href="/">
            <img src={Logo} onClick={handleLogoClick} alt="Logo" className="cursor-pointer" />
            </a>
        </div>
      </div>
      <div className="flex items-center justify-between w-full m-auto py-0 h-10">
        <div className="md:flex w-[90%] m-auto justify-center hidden font-bold text-2xl">
          <a href="/Products">
            <p className="cursor-pointer z-10 text-blue-500">Our Products</p>
          </a>
        </div >
        <div className="flex md:hidden w-full justify-between px-15 absolute items-center text-white">
        <p className="text-[20px]">Select Pages</p>
        {!nav ?  <AiOutlineMenu  onClick={handleNav} className="text-2xl cursor-pointer" />: <AiOutlineClose onClick={handleNav} className="text-2xl cursor-pointer" />}
        </div>
      </div>
      <div className={!nav ? "fixed top-[-100%]" : "flex md:hidden w-[90%] m-auto mt-5 h-[150px] border-t-4 border-blue-500 shadow-md shadow-gray-400 ease-in duration-200"}>
            <ul className="font-bold">
                <li className="py-6 px-5">
                    <a href="/Products"><p className="text-white hover:text-blue-300 duration-1000">Our Products</p></a>
                </li>
                <li className="py-4 px-5">
                    <a href="/#"><p className="text-white hover:text-blue-300 duration-1000">Connect with Us</p></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
