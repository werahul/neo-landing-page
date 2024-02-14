import React, { useEffect, useState } from "react";
import { checkbox, headerImage, headerImageMobile } from "../assets/images";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "Trade Better, Smarter, Faster.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" pt-[50px] lg:pt-[100px]">
      <h1 className="text-center font-semibold text-white text-[24px] lg:text-[64px] font-poppins ">
        {text}
      </h1>
      <p className="font-aileron text-center text-white mt-2 lg:mt-0 text-[16px] lg:text-[24px]">
        Boost Your Profits By Combining <br className="block lg:hidden" /> Human
        Expertise & AI
      </p>
      <div className="flex flex-col lg:flex-row pt-[15px] lg:pt-[39px] space-y-[10px] lg:space-y-0 lg:space-x-[38px] justify-center items-center text-[#33D6AD] font-aileron text-[16px] lg:text-[26px]">
        <p className="flex space-x-3 items-center">
          <img src={checkbox} alt="" className="w-5 h-5 lg:h-auto lg:w-auto" />
          <span>40+ Years of Experience</span>
        </p>
        <p className="flex space-x-3 items-center">
          <img src={checkbox} alt="" className="w-5 h-5 lg:h-auto lg:w-auto" />
          <span>SEBI Registered</span>
        </p>
        <p className="flex space-x-3 items-center">
          <img src={checkbox} alt="" className="w-5 h-5 lg:h-auto lg:w-auto" />
          <span>30,000+ Users</span>
        </p>
      </div>
      {/* <a
        href="https://imjo.in/nwTPSr"
        target="_blank"
        className="flex justify-center pt-[30px] lg:pt-[45px] pb-[20px] items-center"
      >
        <button className="font-poppins  hover:text-[#33D6AD] font-semibold text-black hover:bg-transparent transition-all bg-[#33D6AD] text-[12px] lg:text-[16px] px-[32px] border py-[10px] lg:py-[16px] rounded-[50px] border-[#33D6AD]">
          Subscribe Now
        </button>
      </a> */}
      <div className="flex items-center justify-center">
        <img
          src={headerImage}
          alt=""
          className="object-cover hidden lg:block"
        />
        <img
          src={headerImageMobile}
          alt=""
          className="object-cover  lg:hidden block"
        />
      </div>
    </div>
  );
};

export default Header;
