import React from "react";
import { TypeAnimation } from "react-type-animation";
export const Navbar = () => {
  return (
    <nav className=" absolute z-10 bg-bg  w-full border-b-[1px] border-primary h-12 flex justify-center items-center  text-white ">
      <div className="h-full w-[75%]  flex justify-between items-center container ">
        <TypeAnimation
          sequence={[
            "< > ALAN   MUHAMMAD < / >",
            5000,
            " < > ALMURA < / >",
            5000,
            "< > Front - End Dev< / >",
            5000,
            " < > MERN Stack DEv < / >",
            5000,
          ]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
          className="font-bold hover:text-primary hover:cursor-pointer flex-1"
        />
        <span className="flex-1 text-center w-full flex justify-around items-start text-sm">
          <a href="" className="hover:text-primary">
            About
          </a>
          <a href="" className="hover:text-primary">
            Recent Projects
          </a>
          <a href="" className="hover:text-primary">
            Skills
          </a>
        </span>
        <div className="flex-1 text-right  h-full flex justify-end items-center">
          <button class="bg-white h-auto text-primary text-sm   py-2 px-4 border border-white  rounded">
            My CV
          </button>
        </div>
      </div>
    </nav>
  );
};
