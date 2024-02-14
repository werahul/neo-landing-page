// Import React and TestimonialItem
import React from "react";
import TestimonialItem from "./TestimonialItem";
import { comma, test1, test2, test3 } from "../assets/images";

// YouTube video URLs
const youtubeVideoURLs = [
  "https://www.youtube.com/embed/Cghf7vj0bvk?si=-xCUCvw4Y4-2HyGB",
  "https://www.youtube.com/embed/z55ytQk22tQ?si=Y0Xu6ijRAMjJZAMK",
  "https://www.youtube.com/embed/VI_hibC5q2k?si=NF5Kv1rUAcPD1oRx",
];

// Testimonials data with YouTube videos
const testimonialsData = [
  {
    name: "Navin Sood",
    role: "Professional Trader",
    content:
      "I would like to express my gratitude to the NeoTrader family for inviting me to this platform and providing guidance on how to use it. I have been trading for nearly 20 years. I began without any prior knowledge and gradually progressed.",
    videoURL: youtubeVideoURLs[0],
    image2: comma,
    image: test1,
  },
  {
    name: "Rupesh Bhalla",
    role: "Professional Trader",
    content:
      "I used to profit in bear markets but faced losses in bull markets. Joining NeoTrader changed that. Thanks to Raja Sir and Aditya Sir, I now profit in both markets, gaining valuable insights.",
    videoURL: youtubeVideoURLs[1],
    image2: comma,
    image: test2,
  },
  {
    name: "Nitesh Nagdev",
    role: "Professional Trader",
    content:
      "I learned about NeoTrader and Chart Advise, where I had the opportunity to meet Raja Sir and C.K. Narayan Sir. They taught me how to analyze the market in a structured manner.",
    videoURL: youtubeVideoURLs[2],
    image2: comma,
    image: test3,
  },
];

// TestimonialComponent
const TestimonialComponent = () => {
  return (
    <div className="max-container mt-[80px] lg:mt-[170px] lg:px-[96px] 2xl:mx-auto xxl:px-[146px]">
      <h3 className="text-white text-[28px] lg:text-5xl text-center font-semibold font-['Poppins'] leading-[30px] lg:leading-[62.40px]">
        Hear From Our <br className="block lg:hidden" /> Happy Subscribers
      </h3>
      <div className="max-w-6xl lg:mx-auto px-5 lg:px-0 py-12 lg:space-y-[80px]">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            content={testimonial.content}
            image={testimonial.image}
            videoURL={testimonial.videoURL}
            image2={testimonial.image2}
            reverse={index % 2 === 0}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
