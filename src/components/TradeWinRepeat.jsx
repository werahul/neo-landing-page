import React, { useEffect, useState } from "react";
import { choose, decide, Trade } from "../assets/gifs";

const TradeWinRepeat = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollLevel, setScrollLevel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop);
      setScrolling(true);

      // Debounce the scroll event to improve performance
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setScrolling(false);
      }, 200);

      // Calculate scroll level based on percentage of scrolling
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentageScrolled = (scrollTop / totalHeight) * 100;
      const maxHeight = 882;
      const calculatedHeight = Math.min(
        (percentageScrolled * maxHeight) / 100,
        maxHeight
      );

      setScrollLevel(calculatedHeight);
    };

    let scrollTimer;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="max-container lg:px-[96px] px-[20px] 2xl:mx-auto xxl:px-[156px] my-[40px] lg:my-[100px]">
      <div className="text-white lg:text-5xl text-[28px] text-center lg:mb-[48px] mb-9 font-semibold font-['Poppins'] lg:leading-[62.40px] leading-9">
        Trade. Win. Repeat.
      </div>
      <div className=" flex flex-col lg:gap-y-12 gap-y-6">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:px-[44px] px-[20px] lg:py-[54px] py-[30px] w-full h-[408px] lg:h-[373px] bg-zinc-800 rounded-[20px]">
          <div
            className={`scrollToColor w-0.5 h-[242.91px] mr-10 lg:block hidden bg-teal-400 rounded-tl-[10px] rounded-tr-[10px] ${
              scrolling ? "scrolling" : ""
            }`}
          />
          <div className="space-y-[16px] lg:space-y-3">
            <div className="text-teal-400 lg:text-xl text-sm font-normal font-['Aileron'] lg:leading-7 leading-tight tracking-tight">
              Step 1
            </div>
            <div className="text-white lg:text-[34px] text-[22px] font-bold font-['Aileron'] lg:leading-[44.20px] leading-7 lg:tracking-wider tracking-wide mt-[12px]">
              Choose
            </div>
            <div className="w-auto lg:w-[90%] text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-[30px] leading-normal tracking-tight mt-[10px]">
              Select trades of your choice ranging from intraday, multiday &
              positional.
            </div>
          </div>
          <img
            className="lg:w-[472px] w-[353px] lg:h-[265.50px] h-[200px] lg:rounded-[20px] rounded-xl"
            src={choose}
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:px-[44px] px-[20px] lg:py-[54px] py-[30px] w-full h-[408px] lg:h-[373px] bg-zinc-800 rounded-[20px]">
          <div
            className={`scrollToColor w-0.5 h-[242.91px] mr-10 lg:block hidden bg-teal-400 rounded-tl-[10px] rounded-tr-[10px] ${
              scrolling ? "scrolling" : ""
            }`}
          />
          <div className="space-y-[16px] lg:space-y-3">
            <div className="text-teal-400 lg:text-xl text-sm font-normal font-['Aileron'] lg:leading-7 leading-tight tracking-tight">
              Step 2
            </div>
            <div className="text-white lg:text-[34px] text-[22px] font-bold font-['Aileron'] lg:leading-[44.20px] leading-7 lg:tracking-wider tracking-wide mt-[10px]">
              Decide
            </div>
            <div className="w-auto lg:w-[90%] text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-[30px] leading-normal tracking-tight mt-[10px]">
              Choose from our easy readymade technical filters to further zero
              in on your trades.
            </div>
          </div>
          <img
            className=" lg:mt-0 mt-[10px]  lg:w-[472px] w-[353px] lg:h-[265.50px] h-[200px] lg:rounded-[20px] rounded-xl"
            src={decide}
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:px-[44px] px-[20px] lg:py-[54px] py-[30px] w-full h-[408px] lg:h-[373px]  bg-zinc-800 rounded-[20px]">
          <div
            className={`scrollToColor w-0.5 h-[242.91px] mr-10 lg:block hidden bg-teal-400 rounded-tl-[10px] rounded-tr-[10px] ${
              scrolling ? "scrolling" : ""
            }`}
          />
          <div className="space-y-[16px] lg:space-y-3">
            <div className="text-teal-400 lg:text-xl text-sm font-normal font-['Aileron'] lg:leading-7 leading-tight tracking-tight">
              Step 3
            </div>
            <div className="text-white lg:text-[34px] text-[22px] font-bold font-['Aileron'] lg:leading-[44.20px] leading-7 lg:tracking-wider tracking-wide mt-[10px]">
              Trade
            </div>
            <div className="w-auto lg:w-[90%] text-zinc-400 lg:text-xl text-base font-normal font-['Aileron'] lg:leading-[30px] leading-normal tracking-tight mt-[10px]">
              Place your orders directly within your broker's demat account with
              just one click.
            </div>
          </div>
          <img
            className="lg:mt-0 mt-[10px] lg:w-[472px] w-[353px] lg:h-[265.50px] h-[200px] lg:rounded-[20px] rounded-xl"
            src={Trade}
          />
        </div>
      </div>
    </div>
  );
};

export default TradeWinRepeat;
