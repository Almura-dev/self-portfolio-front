import React from "react";
// import { motion } from "framer-motion"
// import { TypeAnimation } from "react-type-animation";
export const Hero = () => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col">
      <div className="absolute w-full h-full  sq_bg  "></div>
      <div className="absolute w-full h-full  z-1 text-primary flex justify-center items-center text-center text-[10rem] flex-col">
        <span>I'M A WEB</span>
        <span>DEVELOPER</span>
      </div>
      <div className="absolute w-full h-full z-10 text-primary flex justify-center items-end overflow-hidden">
        <img
        transition={{ repeat: Infinity, duration: 5 }}
          src="https://i.ibb.co/fNFpLx3/me2.png"
          alt="https://i.ibb.co/fNFpLx3/me2.png"
          className="filter grayscale w-[28rem] relative -bottom-1"
        />
      </div>
      <div className="absolute w-full h-full  z-20  flex flex-col justify-center items-center text-center text-[10rem] ">
        <span className="text-stroke-2">I'M A WEB</span>
        <span className="text-stroke-3">DEVELOPER</span>
      </div>
    </div>
  );
};
