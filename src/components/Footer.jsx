import React from "react";
import { footerImage } from "../assets/images";

const Footer = () => {
  return (
    <footer className=" text-white pt-12 pb-16 px-5 lg:mx-[96px] xxl:mx-auto xxl:w-[1248px] my-5 lg:my-20 rounded-[20px] max-container">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-start">
        {/* Logo on the left side */}
        <div className="lg:w-[30%] flex items-start justify-start">
          <img
            src={footerImage}
            alt="NeoTrader Logo"
            className="lg:-mt-3 h-auto"
          />
        </div>

        {/* Contact Form and Information on the right side */}
        <div className="w-[70%] flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between lg:space-x-[80px]">
          {/* Contact Form */}
          <div className="flex flex-col">
            <h3 className=" font-medium mb-2 whitespace-nowrap text-[24px] font-poppins">
              SEBI Registration No.
            </h3>
            <div className="flex text-[#fff] font-aileron flex-col">
              <p className="">INH000002285</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-medium mb-2 text-[24px] font-poppins">
              Address
            </h3>
            <div className="flex text-[#fff] font-aileron flex-col">
              <a
                target="_blank"
                href="https://www.google.com/maps/search/14th+floor,+1402+Vikas+Centre,+Dr+C+G+Rd,+Chembur+(E),+Mumbai,+Maharashtra+400074/@19.0453758,72.8992323,17z/data=!3m1!4b1?entry=ttu"
              >
                <p className="">14th floor, 1402 Vikas Centre,</p>
                <p className="">Dr C G Rd, Chembur (E), Mumbai,</p>
                <p className=" mb-2">Maharashtra 400074</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className=" font-medium mb-2 text-[24px] font-poppins">
              Contact Us
            </h3>
            <div className="flex text-[#fff] font-aileron flex-col">
              {/* <p className="">
                {" "}
                <a href="tel:+918369074160" className="">
                  +91-8369074160
                </a>
              </p> */}
              <p className="">
                <a
                  href="mailto:support@neotrader.in"
                  className="hidden lg:flex items-center "
                >
                  support@neotrader.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer and Start Trading Section */}
      <div className="max-w-6xl block mx-auto mt-8 tracking-[4%]">
        <p className="font-aileron font-semibold lg:text-[20px] text-base mb-4 ">
          Disclaimer:{" "}
          <span className="font-normal lg:text-xl text-base text-white lg:text-zinc-500">
            Investments in securities market are subject to market risks, read
            all the related documents carefully before investing. Brokerage will
            not exceed SEBI prescribed limit. The securities are quoted as an
            example and not as a recommendation. SEBI Registration: INH000002285
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
