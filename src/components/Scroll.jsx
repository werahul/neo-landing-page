import React, { useState, useRef, useEffect } from "react";
import { a1, a2, a3, a4 } from "../assets/images";

const ScrollWithStickyDots = () => {
  const [activeDot, setActiveDot] = useState(1);
  const [activeImage, setActiveImage] = useState(a1);
  const [imageStyles, setImageStyles] = useState(
    [a1, a2, a3, a4].map(() => ({ opacity: 1, top: "50px" }))
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
              setActiveImage(a1);
              break;
            case 1:
              setActiveImage(a2);
              break;
            case 2:
              setActiveImage(a3);
              break;
            case 3:
              setActiveImage(a4);
              break;
            default:
              setActiveImage(a1);
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
    <div className="pt-[70px] lg:pt-[127px] parentContainer max-container relative lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <h2 className="text-5xl mb-[48px] text-center font-semibold font-poppins text-white">
        Your New Way of Trading
      </h2>
      <div className="nav-dots sticky top-[50px] inset-0 flex flex-col items-start space-y-4">
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
      <div className="flex flex-col-reverse lg:flex-row -mt-40">
        <div className="px-4 w-full gap-y-[50px] text-white sticky top-[50px]">
          {[a1, a2, a3, a4].map((image, index) => (
            <div
              key={index}
              ref={contentRefs[index]}
              className={`h-auto sticky flex top-[50px] w-full z-20`}
            >
              <img
                src={image}
                alt={`Readymade Trades ${index + 1}`}
                className={`image w-full h-[458px] top-[40px] mb-4 z-10  rounded-[30px] sticky`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollWithStickyDots;

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
