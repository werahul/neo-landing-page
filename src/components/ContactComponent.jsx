import React from "react";
import { contactImage, call, msg, location } from "../assets/images";

const ContactComponent = () => {
  return (
    <div className="mt-[40px] lg:mt-[150px] max-container px-5 lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <div className="max-w-6xl mx-auto py-12 flex flex-col-reverse lg:flex-row items-center">
        {/* Image on the left side */}
        <div className="w-auto mt-4 lg:mt-0 lg:w-1/2">
          <img
            src={contactImage}
            alt="NeoTrader Team"
            className="rounded-lg w-full lg:h-[367px] h-[240px]"
          />
        </div>

        {/* Text content on the right side */}
        <div className="w-auto lg:w-1/2 text-center lg:text-left lg:px-8">
          <h2 className="text-[28px] lg:text-[32px]  font-aileron text-white font-bold mb-2">
            Your Success. <br className="block lg:hidden" /> Our Support.
          </h2>
          <p className="text-white font-aileron mt-[20px] lg:mt-0 text-[16px] lg:text-[20px]">
            The NeoTrader Team stands as your unwavering support, guiding you
            through every market endeavour with expertise & dedication, ensuring
            your success in the trading realm. With their constant presence &
            commitment, the NeoTrader Team is your reliable ally, ready to
            assist & empower you in your trading journey.
          </p>

          {/* Contact Information */}
          <div className="mt-4 lg:px-0 px-8">
            <p className="lg:text-xl text-base font-aileron text-white block">
              For more info:
            </p>
            <div className="flex text-[18px] font-aileron items-center justify-start lg:space-x-5">
              {/* <p className="text-zinc-500 hidden lg:flex items-center">
                <span className="mr-2">
                  <img src={call} alt="" className="w-4" />
                </span>
                <a href="tel:+918369074160" className="text-zinc-500 mr-1">
                  +91-8369074160
                </a>
                {/* /
                <a href="tel:+918169111411" className="text-zinc-500 ml-1">
                  8169111411
                </a> 
              </p> */}
              {/* <p className="flex text-center text-white space-x-1 text-base justify-center items-start lg:hidden">
                <span className="mr-2 mt-1">
                  <img src={call} alt="" className="w-4" />
                </span>
                <a href="tel:+918369074160" className="text-white mr-1">
                  +91-8369074160
                </a>
                {/* /
                <a href="tel:+918169111411" className="text-white">
                  8169111411
                </a> 
              </p> */}

              <p className="underline text-[#33d6ad] ">
                <a
                  href="mailto:support@neotrader.in"
                  className="hidden lg:flex items-center "
                >
                  <span className="mr-2">
                    <img src={msg} alt="" />
                  </span>{" "}
                  support@neotrader.in
                </a>
              </p>
            </div>
            <p className="hidden lg:flex items-start text-zinc-500 font-aileron">
              <a
                className="flex items-start"
                target="_blank"
                href="https://www.google.com/maps/search/14th+floor,+1402+Vikas+Centre,+Dr+C+G+Rd,+Chembur+(E),+Mumbai,+Maharashtra+400074/@19.0453758,72.8992323,17z/data=!3m1!4b1?entry=ttu"
              >
                <span className="mr-2 mt-1">
                  <img src={location} alt="" />
                </span>
                14th floor, 1402 Vikas Centre, Dr C G Rd, Chembur (E), Mumbai,
                Maharashtra 400074
              </a>
            </p>
            <p className=" text-center my-2 lg:my-0 font-aileron text-base text-[#fff] flex lg:hidden">
              <span className="mr-2 mt-1">
                <img src={msg} alt="" className="w-4" />
              </span>{" "}
              <a
                href="mailto:support@neotrader.in"
                className="underline text-[#33d6ad]"
              >
                support@neotrader.in
              </a>
            </p>
            <p className="lg:hidden flex text-left text-base text-white font-aileron">
              {" "}
              <span className="mr-2 mt-1">
                <img src={location} alt="" className="w-10" />
              </span>
              14th floor, 1402 Vikas Centre, Dr C G Rd, Chembur (E), Mumbai,
              Maharashtra 400074
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
