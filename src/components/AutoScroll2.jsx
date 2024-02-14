import React from "react";
// import { useSpring, animated } from "react-spring";

const AutoScroll2 = ({ images, title }) => {
  return (
    <div className="pt-[114px] ">
      <h4 className="text-white text-center mb-[-60px] font-bold tracking-widest text-[24px] font-aileron">
        {title}
      </h4>
      <div className="marquee2">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup2">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup2">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScroll2;
