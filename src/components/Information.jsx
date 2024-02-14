import React from "react";
import { i1, i2, i3, i4, i5, i6, i7, i8, i9 } from "../assets/images";
import AutoScroll2 from "./AutoScroll2";

const Information = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
  return (
    <div className="lg:pt-[150px] pt-[80px] max-container lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <h2 className="text-white text-[28px] text-center lg:text-5xl font-semibold font-poppins capitalize leading-[36px] lg:leading-[62.40px]">
        Stay Ahead. <br className="block lg:hidden" /> Stay Informed.
      </h2>
      <div>
        <AutoScroll2 images={images} title="" />
      </div>
    </div>
  );
};

export default Information;
