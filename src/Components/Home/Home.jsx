import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col h-full ">
      <div className="w-full flex justify-center items-center pt-16 ">
        <motion.div className="w-[12.5rem] h-[12.5rem] rounded-[50%] overflow-hidden bg-primary border-2 shadow">
          <img
            src="https://i.ibb.co/fNFpLx3/me2.png"
            alt="https://i.ibb.co/fNFpLx3/me2.png"
            className="filter grayscale"
          />
        </motion.div>
      </div>
      <div className="flex justify-center items-center flex-auto w-full  ">
        <section className="relative flex h-1/2 w-full flex-col items-center justify-center gap-5 md:h-screen md:w-2/5">
          <article className="relative flex w-full flex-col items-center p-0 md:items-start md:pl-20">
            <span className="text-1xl text-750 text-primary-variant">I am</span>
            <h1 className="text-8xl font-bold text-750 md:ml-8 md:text-9xl text-primary text-stroke-3 ">
              ALAN
            </h1>
            <span className="text-xl text-950 lg:text-4xl text-primary-variant">
              <div style={{ display: "inline-block" }}>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Front-End Developer",
                    3000, // wait 1s before replacing "Mice" with "Hamsters"
                    " Front-End Developer",
                    3000,
                  ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
              </div>
              <span
                className="text-750 pl-1"
                style={{
                  display: "inline-block",
                  transition: "opacity 0.5s ease 0s",
                  opacity: 0,
                }}
              ></span>
            </span>
          </article>
        </section>
      </div>
    </div>
  );
};
