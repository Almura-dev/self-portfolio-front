import React from "react";
import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
export const Hero = () => {
  return (
    <div className="h-[100vh] flex justify-start items-center flex-col container font-bold ">
      <div className="absolute w-full h-full  sq_bg  "></div>
      <div className="absolute w-full h-full text-primary flex justify-center items-center text-center xl:text-[10rem] lg:text-[9rem] flex-col">
        <span>I'M A WEB</span>
        <motion.span
          animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 30 }}
        >
          DEVELOPER
        </motion.span>
      </div>
      <div className="absolute w-full h-full  text-primary flex justify-center items-end overflow-hidden">
        <img
          src="https://i.ibb.co/fNFpLx3/me2.png"
          alt="https://i.ibb.co/fNFpLx3/me2.png"
          className="filter grayscale w-[28rem] relative bottom-0"
        />
      </div>
      <div className="absolute w-full h-full   flex flex-col justify-center items-center text-center xl:text-[10rem] lg:text-[9rem] ">
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
