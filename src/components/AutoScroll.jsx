import React from "react";
// import { useSpring, animated } from "react-spring";

const AutoScroll = ({ images, title }) => {
  return (
    <div className="pt-[45px] lg:pt-[114px] ">
      <h4 className="text-white pb-[32px] text-center font-bold tracking-[4%] text-[24px] font-aileron">
        {title}
      </h4>
      <div className="marquee">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScroll;
