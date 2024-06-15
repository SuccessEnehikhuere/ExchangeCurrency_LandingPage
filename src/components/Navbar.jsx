import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-customColor fixed w-full mx-auto px-8 border-b-[1px] border-[#FFFFFF33]">
      <div className="flex justify-between place-items-center py-4  sm:gap-x-16 sm:items-center">
        <h2 className="text-white font-bold">CRYPTO</h2>
        <div className="flex gap-x-4 place-items-center">
          <button className="hidden sm:flex py-[10px] px-[20px] text-[14px]  rounded-lg border-2 border-white text-white font-medium capitalize">
            log in
          </button>
          <button className="hidden sm:flex py-[10px] px-[20px] text-[14px] bg-white rounded-lg text-customColor font-[600] capitalize text-sm p-3">
            sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar