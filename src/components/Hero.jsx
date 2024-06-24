import React from 'react'


const Hero = () => {
  return (
    <main className="bg-bgColor bg-home-hero-gradient bg-no-repeat bg-cover bg-center-bottom pt-4 ">
      <div className=" mx-auto px-4 max-w-[62.5rem] sm:px-[2.5rem] ">
        <div className="pt-[11rem] md:py-[11rem] text-white ">
          <h1 className="mb-[1.5rem] text-[1.5rem] md:text-[3.2rem] ] leading-[1.9rem] md:leading-[3.7rem] font-[600] ">
            Be early to the future of finance
          </h1>
          <p className="mb-[2rem] text-lg left-6 md:text-[1.8rem] md:leading-[2.2rem] leading-6 font-[500]">
            Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a
            platform trusted by millions.
          </p>
          <form className="flex gap-4 place-items-center pt-6  pb-10 md:pb-5">
            <input
              className="w-[100%] max-w-[25rem] py-4 px-4 font-[400] text-white rounded-md leading-5 border-none bg-formColor  text-sm"
              placeholder="your email address"
            />
            <button className="bg-[#ECF5FE] text-[#0C6CF2] capitalize text-sm py-3 px-5 rounded-md text-nowrap">sign up</button>
          </form>
        </div>

       
      </div>

     
    </main>
  )
}

export default Hero
