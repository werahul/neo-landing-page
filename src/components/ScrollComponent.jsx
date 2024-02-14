// ImageScroll.js
import React, { useState, useEffect } from "react";
import { a1, a2, a3, a4 } from "../assets/images";
import { InView } from "react-intersection-observer";

const ImageScroll = () => {
  const images = [a1, a2, a3, a4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  const handleIntersection = (inView, index) => {
    if (inView) {
      setCurrentImageIndex(index);
    }
  };

  const handleChangeImage = (direction) => {
    if (direction === "up" && currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    } else if (direction === "down" && currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollDirection = window.scrollY > 0 ? "down" : "up";
      handleChangeImage(scrollDirection);

      // Check if the component is fully scrolled
      const componentHeight = document.getElementById(
        "imageScrollContainer"
      ).clientHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsSticky(scrollPosition + windowHeight < componentHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleChangeImage]);

  return (
    <div
      id="imageScrollContainer"
      className="relative h-[1200px] overflow-hidden"
    >
      {images.map((imageUrl, index) => (
        <InView
          key={index}
          as="div"
          onChange={(inView) => handleIntersection(inView, index)}
          className={`transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 right-0 bottom-0 ${
            isSticky ? "sticky top-40" : "absolute top-0"
          }`}
          style={{ zIndex: images.length - index }}
        >
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-80 h-80 object-cover"
          />
        </InView>
      ))}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-white">This is the overlay content</p>
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
