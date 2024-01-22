import React from "react";

// import { TypeAnimation } from "react-type-animation";
export const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute w-full h-full  z-1 text-primary flex justify-center items-center text-center text-[10rem] flex-col">
        <span>I'M A WEB</span>
        <span>DEVELOPER</span>
      </div>
      <div className="absolute w-full h-full z-10 text-primary flex justify-center items-end">
        <img
          src="https://i.ibb.co/fNFpLx3/me2.png"
          alt="https://i.ibb.co/fNFpLx3/me2.png"
          className="filter grayscale w-[28rem]"
        />
      </div>
      <div className="absolute w-full h-full  z-20  flex flex-col justify-center items-center text-center text-[10rem] ">
        <span className="text-stroke-2">I'M A WEB</span>
        <span className="text-stroke-3">DEVELOPER</span>
      </div>
    </div>
  );
};
