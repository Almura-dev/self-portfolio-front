import React from "react";
import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
export const Hero = () => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col container font-bold" >
      <div className="absolute w-full h-full  sq_bg  "></div>
      <div className="absolute w-full h-full  z-1 text-primary flex justify-center items-center text-center xl:text-[10rem] lg:text-[9rem] flex-col">
        <span>I'M A WEB</span>
        <motion.span
          animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30 }}
        >
          DEVELOPER
        </motion.span>
      </div>
      <div className="absolute w-full h-full z-10 text-primary flex justify-center items-end overflow-hidden">
        <img
          src="https://i.ibb.co/fNFpLx3/me2.png"
          alt="https://i.ibb.co/fNFpLx3/me2.png"
          className="filter grayscale w-[28rem] relative -bottom-1"
        />
      </div>
      <div className="absolute w-full h-full  z-20  flex flex-col justify-center items-center text-center xl:text-[10rem] lg:text-[9rem] ">
        <span className="text-stroke-2">I'M A WEB</span>
        <motion.span
          animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30 }}
          className="text-stroke-3"
        >
          DEVELOPER
        </motion.span>
      </div>
    </div>
  );
};
