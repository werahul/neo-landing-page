import React, { useState, useRef, useEffect } from "react";
import { a1Mob, a2Mob, a3Mob, a4Mob } from "../assets/images";

const ScrollWithStickyDots = () => {
  const [activeDot, setActiveDot] = useState(1);
  const [activeImage, setActiveImage] = useState(a1Mob);
  const [imageStyles, setImageStyles] = useState(
    [a1Mob, a2Mob, a3Mob, a4Mob].map(() => ({ opacity: 1, top: "50px" }))
  );

  const contentRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const dotIndex = contentRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          setActiveDot(dotIndex + 1);

          const newImageStyles = contentRefs.map((ref, index) => {
            if (index === dotIndex) {
              return { opacity: 1, top: "0" };
            } else if (index === dotIndex - 1 || index === dotIndex + 1) {
              return { opacity: 1, top: "50px" };
            } else {
              return { opacity: 0, top: "-50px" };
            }
          });

          setImageStyles(newImageStyles);

          switch (dotIndex) {
            case 0:
              setActiveImage(a1Mob);
              break;
            case 1:
              setActiveImage(a2Mob);
              break;
            case 2:
              setActiveImage(a3Mob);
              break;
            case 3:
              setActiveImage(a4Mob);
              break;
            default:
              setActiveImage(a1Mob);
              break;
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    contentRefs.forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, [contentRefs]);

  return (
    <div className="pt-[80px] lg:pt-[127px] parentContainer max-container relative lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <h2 className="text-[28px] mb-[18px] lg:mb-[48px] text-center font-semibold font-poppins text-white">
        Your New Way <br className="block lg:hidden" /> of Trading
      </h2>
      <div className="nav-dots sticky top-[50px] inset-0 hidden lg:flex flex-col items-start space-y-4">
        {[1, 2, 3, 4].map((dot) => (
          <div
            key={dot}
            onClick={() =>
              contentRefs[dot - 1].current.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={`w-2 h-2 rounded-full cursor-pointer relative ${
              activeDot === dot
                ? "bg-transparent h-20 opening-dot"
                : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:-mt-40">
        {/* <div className="grid grid-cols-1 mt-20 ml-5 px-4 text-white mb-8">
          {[a1, a2, a3, a4].map((image, index) => (
            <div className="" key={index}>
              <p className="border-2 border-blue-500 rounded-full w-11 py-2 text-center mb-2">
                0{index + 1}
              </p>
              <p className="text-teal-400 text-2xl font-bold font-['Aileron'] leading-[31.20px] tracking-wide">
                {getTitle(index + 1)}
              </p>
              <p className="w-[500px] text-white text-base font-normal font-['Aileron'] leading-normal tracking-tight">
                {getDescription(index + 1)}
              </p>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 px-4 w-full gap-y-[50px] text-white sticky top-[50px]">
          {/* <div
            className={`flex items-center ${
              imageStyles[index].opacity === 1
                ? `opacity-100 top-${imageStyles[index].top}`
                : "opacity-0"
            }  h-[400px] transition-opacity border-2 border-black duration-1000 ease-in-out overflow-hidden p-4`}
          > */}
          {[a1Mob, a2Mob, a3Mob, a4Mob].map((image, index) => (
            <div
              key={index}
              ref={contentRefs[index]}
              className={`h-auto sticky top-[50px] w-full z-20`}
            >
              <img
                src={image}
                alt={`Readymade Trades ${index + 1}`}
                className={`image w-full h-[458px] top-[40px] mb-4 z-10 object-contain rounded-[30px] sticky`}
              />
            </div>
          ))}
          {/* </div> */}
        </div>
        {/* <div className="flex px-4 text-white ">
          {[a1, a2, a3, a4].map((image, index) => (
            <div
              key={index}
              ref={contentRefs[index]}
              className={`flex items-center ${
                imageStyles[index].opacity === 1
                  ? `opacity-100 top-${imageStyles[index].top}`
                  : "opacity-100"
              } transition-opacity overflow-hidden p-4`}
            >
              <div className="h-[400px] sticky top-[50px] overflow-hidden z-20">
                <img
                  src={image}
                  alt={`Readymade Trades ${index + 1}`}
                  className="image w-[612px] absolute h-[344px] top-0 mb-4 z-10"
                />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ScrollWithStickyDots;

// Helper functions getTitle and getDescription go here...

// ... (rest of the code)

// Define functions to get dynamic titles and descriptions
const getTitle = (sectionNumber) => {
  switch (sectionNumber) {
    case 1:
      return "Readymade Trades";
    case 2:
      return "AI Powered Signals";
    case 3:
      return "One Click Execution";
    case 4:
      return "Time Efficiency";
    default:
      return "";
  }
};

const getDescription = (sectionNumber) => {
  switch (sectionNumber) {
    case 1:
      return "Identification of top trades using time-tested strategies, price action & technical indicators in live markets.";
    case 2:
      return "Filtered BUY & SELL signals from refined technical indicators & price action modules, enhancing your analysis.";
    case 3:
      return "Precise entry, targets, & stop-loss points via NeoTrader, enabling one-click execution on connected broker’s account.";
    case 4:
      return "Save time in the research process with readymade dashboards, reducing hours of manual chart reading to just minutes.";
    default:
      return "";
  }
};

// ... (rest of the code)
