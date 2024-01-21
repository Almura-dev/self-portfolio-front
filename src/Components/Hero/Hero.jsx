import React from "react";

import { TypeAnimation } from "react-type-animation";
export const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute w-full h-full  z-1 text-primary flex justify-center items-center text-center text-[10rem] flex-col">
        <span>I'AM A WEB</span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "DEVELOPER",
            5000, // wait 1s before replacing "Mice" with "Hamsters"
            " DEVELOPER",
            5000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          cursor={false}
        />
      </div>
      <div className="absolute w-full h-full z-10 text-primary flex justify-center items-end">
        <img
          src="https://i.ibb.co/fNFpLx3/me2.png"
          alt="https://i.ibb.co/fNFpLx3/me2.png"
          className="filter grayscale w-[28rem]"
        />
      </div>
      <div className="absolute w-full h-full  z-20  flex flex-col justify-center items-center text-center text-[10rem] ">
        <span className="text-stroke-2">I'AM A WEB</span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "DEVELOPER",
            5000, // wait 1s before replacing "Mice" with "Hamsters"
            " DEVELOPER",
            5000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="text-stroke-3"
          cursor={false}
        />
      </div>
    </div>
  );
};
