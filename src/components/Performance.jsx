import React from "react";
import {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
} from "../assets/images";
// import AutoScroll2 from "./AutoScroll2";
import AutoScroll3 from "./AutoScroll3";

const Performance = () => {
  const images = [p1, p2, p3, p4, p5, p7, p8, p9, p10, p11, p12, p13];
  return (
    <div className="pt-[80px] lg:pt-[127px] max-container lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <h2 className="text-white text-center text-[28px] lg:text-5xl font-semibold font-poppins capitalize leading-[30px] lg:leading-[62.40px]">
        Our Industry-Leading Performance
      </h2>
      <div className="flex font-bold mt-[10px] lg:mt-[20px] text-[16px] font-aileron lg:text-[24px] items-center space-x-5 justify-center">
        <p className="text-white">
          Accuracy Rate: <span className="text-[#33D6AD]">85%</span>
        </p>
        <p className="text-white">
          Hit: <span className="text-[#33D6AD]">114</span>
        </p>
        <p className="text-white">
          Miss: <span className="text-[#33D6AD]">21</span>
        </p>
      </div>
      <div>
        <AutoScroll3 images={images} title="" />
      </div>
    </div>
  );
};

export default Performance;
