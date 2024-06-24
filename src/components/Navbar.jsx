import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-customColor fixed w-full mx-auto px-8 border-b-[1px] border-[#FFFFFF33] z-[1000]">
      <div className="flex justify-between place-items-center py-4  sm:gap-x-16 sm:items-center">
        <h2 className="text-white font-bold">CRYPTO</h2>
        <div className="flex gap-x-4 place-items-center">
          <button className="hidden sm:flex py-[10px] px-[20px] text-[14px] rounded-lg border-2 border-white text-white font-medium capitalize">
            log in
          </button>
          <button className="hidden sm:flex py-[10px] px-[20px] text-[14px] bg-white rounded-lg text-customColor font-[600] capitalize text-sm p-3">
            sign up
          </button>
          <GiHamburgerMenu
            className="flex md:hidden w-[24px] h-[24px] text-white cursor-pointer "
            onClick={toggleMenu}
          />
        </div>
      </div>
      {menuOpen && (
        <div className=" bg-customColor max-w-[100%] fixed top-0 left-0 right-0 flex flex-col mx-auto px-8 py-5 justify-center sm:hidden border-b-[1px] border-[#FFFFFF33] ">
          <div className="flex justify-between items-center px-4 left-0 right-0 z-[2]">
            <h2 className="font-bold text-white">CRYPTO</h2>
            <FaTimes
              className=" w-[24px] h-[24px] cursor-pointer text-white"
              onClick={closeMenu}
            />
          </div>

          <div className="px-4 flex gap-x-4 ">
            <button className="my-4 py-[10px] px-[20px] text-[14px] rounded-lg border-2 border-white  font-medium capitalize text-white">
              log in
            </button>

            <button className="my-4 py-[10px] px-[20px] text-[14px] bg-white rounded-lg text-customColor font-[600] capitalize text-sm">
              sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
