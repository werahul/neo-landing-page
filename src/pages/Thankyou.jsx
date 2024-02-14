import React from "react";
import { purpleGra } from "../assets/images";

const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] ">
      <div className=" my-auto relative">
        <img
          src={purpleGra}
          alt=""
          className="absolute -top-20 -left-20 object-cover opacity-75 w-[740px]"
        />
        <h3 className="lg:text-[100px] text-[50px] text-white font-extrabold font-['Poppins']">
          Thank you!
        </h3>

        <div className="text-center lg:text-[25px] text-[18px] rounded-md font-semibold text-white font-['Aileron']">
          <p>Payment successfully received</p>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
