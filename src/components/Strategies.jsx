import React from "react";
import { int1, int2, int3, int4, line } from "../assets/images";
// import { triBlue, triPurple } from '../../assets/decor'

const Strategies = () => {
  return (
    <div className="lg:px-40 lg:py-20 py-10 px-5 font-nunito  max-container  text-white">
      <div className="text-center text-white lg:whitespace-nowrap lg:text-5xl text-[27px] font-semibold font-['Poppins'] lg:leading-[62.40px] mb-0 lg:mb-20 leading-9">
        Advanced Technical Indicators & Strategies
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-8 lg:gap-y-0 gap-y-6">
        <div className="lg:border-gray-300  lg:border-r lg:border-b lg:h-[300px] flex flex-col justify-center items-center font-nunito  lg:mt-0 mt-8">
          <img src={int1} alt="" className="-ml-4  " />
          <div className="text-center text-white lg:text-2xl text-[22px] font-bold font-['Aileron'] lg:leading-[31.20px] leading-7 tracking-[4%] lg:tracking-wide lg:mt-3 mt-2">
            Option Buying Trades
          </div>
          <div className="lg:w-[376px] h-[71px] text-center text-white text-base font-normal font-['Aileron'] leading-normal lg:mt-4 mt-3">
            Execute high probability option trades from NIFTY/BANK NIFTY & stock
            options with preset entry, targets & stop losses.
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="lg:border-gray-300 lg:border-l lg:border-b lg:h-[300px] flex flex-col justify-center items-center font-nunito lg:px-4">
          <img src={int2} alt="" className=" " />
          <div className="text-center text-white lg:text-2xl text-[22px] font-bold font-['Aileron'] lg:leading-[31.20px] leading-7 tracking-[4%] lg:tracking-wide lg:mt-3 mt-2">
            Price Action Based Signals
          </div>
          <div className="lg:w-[376px] h-12 text-center text-white text-base font-normal font-['Aileron'] leading-normal lg:mt-4 mt-3 mb-5 ">
            Identify trades by readymade price action & diverse indicators like
            Volume, CPR pivots, Camarilla, Fibonacci pivots & more.
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="lg:border-gray-300  lg:border-t lg:border-r  lg:h-[300px] flex flex-col justify-center items-center font-nunito">
          <img src={int3} alt="" className=" " />
          <div className="text-center text-white lg:text-2xl text-[22px] font-bold font-['Aileron'] lg:leading-[31.20px] leading-7 tracking-[4%] lg:tracking-wide lg:mt-3 mt-2">
            Momentum Based Signals
          </div>
          <div className="lg:w-[354px] h-[71px] text-center text-white text-base font-normal font-['Aileron'] leading-normal lg:mt-4 mt-3">
            Spot momentum surges, contraction zones, with prompt signals from
            indicators like RSI, ADX, ATR & more.
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="lg:border-gray-300 lg:border-t lg:border-l lg:h-[300px] flex flex-col justify-center items-center font-nunito lg:mt-0 mt-4">
          <img src={int4} alt="" className=" " />
          <div className="text-center text-white lg:text-2xl text-[22px] font-bold font-['Aileron'] lg:leading-[31.20px] leading-7 tracking-[4%] lg:tracking-wide lg:mt-3 mt-2">
            Candlestick Strategies
          </div>
          <div className="lg:w-[354px] h-[71px] text-center text-white text-base font-normal font-['Aileron'] leading-normal lg:mt-4 mt-3 mb-5 lg:mb-0">
            Get notified on market tops, bottoms & trending stocks with preset
            signals derived from various Candlestick patterns both traditional &
            Heiken Ashi.
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
