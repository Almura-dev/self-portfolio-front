import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPhp } from "react-icons/si";
export const Skills = () => {
  return (
    <div className="w-full h-[100vh] bg-fill flex justify-center items-start">
      <div className="container h-full flex justify-start items-center flex-col p-16 gap-16">
        <div className=" flex justify-center flex-col items-center gap-2">
          <div className="title text-primary-variant  text-1xl font-sm">
            Technologies I Use
          </div>
          <div className="title text-primary text-3xl">Skills</div>
        </div>
        <div className="content  w-[85%] h-full  gap-8 grid grid-cols-4 grid-rows-2 rounded-xl p-2">
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <FaReact />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <SiTailwindcss />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <FaNode />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <FaBootstrap />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <SiNextdotjs />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <SiExpo />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <SiMongodb />
          </div>
          <div className="skill hover:scale-[1.05] hover:text-primary hover:cursor-pointer hover:shadow-primary  hover:border-primary transition-all rounded-lg flex justify-center items-center text-8xl text-white border-2 border-primary-variant  shadow-lg shadow-primaryVariant">
            <SiPhp />
          </div>
        </div>
      </div>
    </div>
  );
};
