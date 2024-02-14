import React, { useState } from "react";
import { mainVideo, playVideo } from "../assets/images";

const Author = () => {
  const youtubeVideoURL =
    "https://www.youtube.com/embed/n7Nn9t8dyiU?si=ha_cVme4xMJRbS7a";

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  return (
    <div className="pt-[72px] lg:pt-[127px] px-[20px] lg:space-x-10 lg:flex-row items-start justify-between flex flex-col   max-container lg:px-[96px]  2xl:mx-auto xxl:px-[146px]">
      {isVideoPlaying ? (
        <iframe
          title="Main Video"
          width="100%"
          height="344"
          src={youtubeVideoURL}
          allowFullScreen
          className="w-full rounded-[20px] lg:w-[612px] h-[220px] lg:h-[344px]"
        ></iframe>
      ) : (
        <div
          className="lg:w-[612px] h-[220px] lg:h-[344px]  relative"
          onClick={handleVideoPlay}
        >
          <img
            src={mainVideo}
            alt=""
            className="w-[420px] lg:w-[612px] h-[220px] lg:h-[344px]"
          />
          <img
            src={playVideo}
            alt=""
            className="absolute top-[35%] lg:top-[45%] left-[45%] cursor-pointer"
          />
        </div>
      )}
      <div className="w-auto mt-[10px] lg:mt-0 lg:w-[50%]">
        <h2 className="font-poppins  text-white whitespace-nowrap font-semibold text-[28px] lg:text-[40px] xxl:text-[48px]">
          Man Behind NeoTrader
        </h2>
        <p className="font-aileron text-[16px] mt-[16px] lg:mt-5 font-light lg:font-normal  lg:text-[22px] xxl:mt-3 xxl:text-[22.2px] text-white">
          A SEBI registered software designed by Dr. CK Narayan - a market
          veteran of more than 40 years of experience in Stock market &
          popularly called{" "}
          <span className="text-teal-400">
            {" "}
            "The Father of Technical Analysis in India"{" "}
          </span>{" "}
          Dr. Narayan is a Dalal Street veteran & one of finest exponents of
          Technical Analysis in Indian financial markets. He is a preferred
          expert on the markets on several television channels such as CNBC & ET
          Now.
        </p>
      </div>
    </div>
  );
};

export default Author;
