import React, { useState } from 'react'
import ExchangeSvg from './ExchangeSvg'
import { exchangeAccordion } from '../utils/AccordionItem'
import Carousel from './Carousel'

const Exchange = () => {
  const [activeIndex, setActiveIndex] = useState(0);

   const handleAccordionClick = (index) => {
     setActiveIndex(index === activeIndex ? null : index)
   }

  return (
    <div className="px-4 max-w-[80rem] mx-auto md:px-10 ">
      <section className="bg-exchangeColor flex flex-col overflow-hidden p-4 text-exchangeText rounded-[1.25rem] md:rounded-3xl bg-exchange-image bg-left-top md:bg-left-bottom bg-no-repeat bg-375px md:bg-625px min-h-[52.5rem] my-[3.75rem] mx-0 md:mx-auto max-w-[80rem] md:grid md:grid-cols-2  ">
        {/*IMAGE CONTAINER*/}
        <div className="hidden md:flex flex-col justify-center pl-[5rem] ">
          {activeIndex !== null && (
            <div className="h-[100%] w-[100%] flex items-center justify-center ">
              <img
                src={exchangeAccordion[activeIndex].image}
                alt="Accordion related"
                className="rounded-lg w-[422px] h-[600px]"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col p-0 md:py-[100px] justify-start md:pl-[5rem] ">
          <div className="text-exchangeLightColor bg-exchangeOther self-start inline-flex rounded-[1.25rem] items-center mb-[1.25rem] p-[12px] md:p-4 ">
            <ExchangeSvg />
            <p className="text-[18px] leading-[25px] ml-[10px] font-[500] ">
              Exchange
            </p>
          </div>
          <h2 className="text-[1.25rem] leading-[1.75rem] md:text-[2.5rem] font-[600]  md:leading-[3.25rem] md:mb-[1.875rem] m-0 max-w-[30.5rem] ">
            Lightning-fast crypto trading
          </h2>

          <div className="hidden md:flex flex-col mb-[1.85rem] max-w-[30.5rem] ">
            {/*ACCORDION  */}

            {exchangeAccordion.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-currencyColor border border-currencyBorder cursor-pointer rounded-xl mb-3`}
                  onClick={() => handleAccordionClick(index)}
                >
                  <h3
                    className={`py-4 px-5 text-[1rem] font-[500] leading-5 transition-all ease-in-out`}
                  >
                    {item.title}
                  </h3>
                  {activeIndex === index && (
                    <p className=" max-w-[80%] overflow-hidden px-[1.25rem]  pb-[1rem] text-[1rem] font-[400] leading-[1.5rem] duration-500 transition-all">
                      {item.content}
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          {/*CAROUSEL CONTAINER*/}

          <div className="md:hidden">
            <Carousel
              data={exchangeAccordion}
              dotClass="slick-dots"
              arrowClass="carousel-arrow"
              arrowColor="rgb(12, 108, 242)"
              dotColor="rgb(12, 108, 242)"
            />
          </div>

          <a className="inline-flex justify-center py-[0.6rem] px-[0.875rem] md:py-[0.8rem] md:px-[1.4rem]  text-[0.875rem]  md:text-lg font-[500] rounded-lg text-nowrap bg-exchangeText text-white w-fit-content mt-[5rem] items-center tracking-wide leading-[143%] md:leading-[144%] cursor-pointer border-[0.125rem] border-transparent ">
            Trade Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default Exchange