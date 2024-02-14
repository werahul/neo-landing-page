import React from "react";
import AutoScroll from "./AutoScroll";
import { part1, part2, part3, part4, part5 } from "../assets/images";

const Partners = () => {
  const images = [part1, part2, part3, part4, part5];
  return (
    <div className="-mt-20 lg:-mt-20 mb-10 lg:mb-20">
      <AutoScroll images={images} title="" />
    </div>
  );
};

export default Partners;
