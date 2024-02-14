import React, { useState } from "react";

const TestimonialItem = ({
  name,
  role,
  content,
  image,
  reverse,
  image2,
  videoURL,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  return (
    <div
      className={`lg:flex flex ${
        reverse
          ? "lg:flex-row-reverse flex-col-reverse"
          : "lg:flex-row flex-col-reverse"
      } items-center mb-2 lg:mb-12`}
    >
      <div className="w-full lg:w-1/2">
        {videoURL && !isVideoPlaying ? (
          <div>
            <img
              src={image} // Use custom thumbnail or fallback to the regular image
              alt={`${name} Thumbnail`}
              className="rounded-[20px] mx-auto w-full  lg:w-[527px] lg:h-[313px] lg:mt-0 my-7 object-contain cursor-pointer"
              onClick={handleVideoPlay}
            />
          </div>
        ) : (
          <iframe
            title={`${name}'s Video`}
            width="100%"
            height="353"
            src={videoURL}
            allowFullScreen
            className="rounded-[20px] mx-auto w-full lg:w-[527px] h-[200px] mt-5 lg:h-[313px]"
            onLoad={() => setIsVideoPlaying(true)}
          ></iframe>
        )}
      </div>
      <div className="w-full lg:w-1/2 lg:px-8 my-0 lg:my-auto space-y-3 lg:space-y-8">
        {image2 && (
          <img
            src={image2}
            alt={`${name} Additional Image`}
            className="block" // Show only on large screens
          />
        )}
        <p className="text-white font-aileron lg:text-[20px] text-base">
          "{content}"
        </p>
        <div className="font-poppins text-[20px] font-semibold">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-[#33D6AD] lg:mb-2">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
