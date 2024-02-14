import React from "react";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <div className="flex justify-between max-container px-[20px] lg:px-[96px] 2xl:mx-auto xxl:px-[156px] pt-[33px]">
      <img
        src={logo}
        alt=""
        className="w-[190px] lg:w-[276px] h-[80px] lg:h-[100px]"
      />
      <div className="flex justify-center items-center">
        <a href="tel:+918369074160" className="">
          <button className="font-poppins whitespace-nowrap text-[12px] lg:text-[16px]  text-[#33D6AD] font-semibold hover:text-black bg-transparent transition-all hover:bg-[#33D6AD] px-[32px] border py-[12px] lg:py-[16px] rounded-[50px] border-[#33D6AD]">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
