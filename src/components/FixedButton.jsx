import React from "react";

const FixedButton = () => {
  return (
    <div className="bg-[#292d35]">
      <div className="fixed bottom-0 footBg h-[100px] w-full py-4 z-50 opacity-100 flex justify-center items-center">
        <div className="max-w-6xl mx-auto lg:px-0 px-5 flex justify-between w-full items-center">
          <p className="text-white  lg:tracking-wide text-[16px] lg:text-[32px] font-aileron font-semibold lg:font-bold capitalize">
            Begin Smart <br className="block lg:hidden" /> Trading Today!
          </p>
          <div className="flex justify-center items-center">
            <a href="https://imjo.in/nwTPSr" target="_blank">
              <button className="font-poppins hover:text-[#fff] font-semibold text-[#17131e] hover:bg-[#17131e] transition-all bg-[#33D6AD] lg:px-[32px] px-7 border-none py-[10px] lg:py-[16px] rounded-[50px] ">
                Subscribe Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedButton;
