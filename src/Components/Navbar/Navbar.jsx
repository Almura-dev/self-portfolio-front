import React from "react";
import { TypeAnimation } from "react-type-animation";
export const Navbar = () => {
  return (
    <nav className="absolute bg-bg z-30 w-full border-b-[1px] border-primary h-16 flex justify-center items-center  text-white">
      <div className="h-full w-[75%]  flex justify-between items-center container ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "< > ALAN   MUHAMMAD < / >",
            5000, // wait 1s before replacing "Mice" with "Hamsters"
            " < > ALMURA < / >",
            5000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="font-bold hover:text-primary hover:cursor-pointer flex-1"
        />
        <span className="flex-1 text-center"></span>
        <div className="flex-1 text-right  h-full flex justify-end items-center">
          <button class="bg-white h-auto text-primary text-sm   py-2 px-4 border border-white  rounded">
            My CV
          </button>
        </div>
      </div>
    </nav>
  );
};
