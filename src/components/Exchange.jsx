import React from 'react'
import ExchangeSvg from './ExchangeSvg'

const Exchange = () => {
  return (
    <div className="px-4 max-w-[80rem] mx-auto md:px-10 ">
      <section className="bg-exchangeColor flex flex-col overflow-hidden p-4 text-exchangeText bg-exchange-image bg-left-top md:bg-left-bottom bg-no-repeat bg-375px md:bg-625px min-h-[52.5rem] my-[3.75rem] mx-0 md:mx-auto max-w-[80rem] md:grid md:grid-cols-2  ">
        <div className="flex flex-col justify-center md:pl-[8.75rem] p-0">
          <div className="h-[100%] w-[100%] flex items-center justify-center ">
            <img src="/images/currency.png" className="w-[360px] h-[542px]" />
          </div>
        </div>

        <div className="flex flex-col p-0 md:py-[100px] justify-start pl-[5rem] ">
          <div className="text-exchangeLightColor bg-exchangeOther self-start inline-flex rounded-[1.25rem] items-center mb-[1.25rem] p-[12px] md:p-4 ">
            <ExchangeSvg />
            <p className="text-[18px] leading-[25px] ml-[10px] font-[500] ">
              Exchange
            </p>
          </div>
          <h2 className="text-[2.5rem] font-[600]  leading-[3.25rem] mb-[1.875rem]">
            Lightning-fast crypto trading
          </h2>

          <div className="mb-[1.85rem] max-w-[30.5rem] ">
            {/*ACCORDION  */}

            {/* <div className="bg-currencyColor border border-currencyBorder rounded-[0.75rem] mb-[0.75rem] ">
              <h3 className="pt-4 px-[1.25rem] text-[1rem] font-[500] ">
                Trade in 3 fiat currencies
              </h3>
              <p className="max-h-[100%] pt-[0.5rem] px-[1.25rem] pb-[1rem] overflow-hidden font-[400] leading-[1.5rem] text-[1rem] ">
                The Exchange supports USD, EUR, and GBP.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exchange