import React from "react";
import { MdArrowOutward } from "react-icons/md";
export const Recent = () => {
  return (
    <div className="h-auto  bg-bg z-0 container flex justify-center items-start " id="recent">
      <div className="content w-[85%] h-auto  flex justify-start items-center flex-col p-16 gap-16">
        <div className=" flex justify-center flex-col items-center gap-2">
          <div className="title text-primary-variant  text-1xl font-sm">
            Check out
          </div>
          <div className="title text-primary text-3xl">Recent Projects</div>
        </div>
        <div className="recent  w-full h-auto flex flex-col gap-16 ">
          <div className="project  w-full h-[65vh] bg-fill rounded-xl flex justify-center items-center  overflow-hidden">
            <div className="w-[50%] flex pt-16 pr-16 justify-end items-end h-full">
              <img
                className=" rounded-tr-lg"
                src="https://i.ibb.co/mCD7TrT/408866863-750410110479361-8952381762018789961-n.jpg"
                alt="https://i.ibb.co/mCD7TrT/408866863-750410110479361-8952381762018789961-n.jpg"
              />
            </div>
            <div className="w-[50%] h-full  flex flex-col p-16 gap-4">
              <div className="flex-1  text-white text-2xl">
                Noor Application - Portfolio
              </div>
              <div className="flex-1  text-white text-sm font-light font-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, incidunt?
              </div>
              <div className="flex-1  p-4">
                <div className="rounded-full  w-16 h-16 bg-primary flex justify-center items-center text-3xl text-white hover:scale-125 transition-all ease-in-out">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent  w-full h-auto flex flex-col gap-16 ">
          <div className="project  w-full h-[65vh] bg-fill rounded-xl flex justify-center items-center  overflow-hidden">
            <div className="w-[50%] h-full  flex flex-col p-16 gap-4">
              <div className="flex-1  text-white text-2xl">
                Didar Baxtyar <br /> Website
              </div>
              <div className="flex-1  text-white text-sm font-light font-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, incidunt?
              </div>
              <div className="flex-1  p-4">
                <div className="rounded-full  w-16 h-16 bg-primary flex justify-center items-center text-3xl text-white ">
                  <MdArrowOutward />
                </div>
              </div>
            </div>
            <div className="w-[50%]  flex flex-col justify-end items-start pt-16 pl-16 h-full">
              <img
                className=" rounded-tl-lg scale-125"
                src="https://i.ibb.co/bNmkJZM/171.jpg"
                alt="https://i.ibb.co/bNmkJZM/171.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
