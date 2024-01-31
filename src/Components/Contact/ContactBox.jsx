import React from "react";
import { MdOutlineEmail } from "react-icons/md";

export const ContactBox = (Props) => {
  return (
    <div className="contact  hover:bg-bg hover:border-2  transition-all hover:cursor-pointer  hover:border-primary flex flex-col justify-around p-4 gap-2 rounded-lg bg-fill min-w-64 min-h-40">
      <div className=" center text-2xl ">
        <MdOutlineEmail />
      </div>
      <div className=" p-2 flex flex-col">
        <div className=" ">Email</div>
        <div className=" font-sm opacity-50 ">almuraweb@gmail.com</div>
      </div>
      <a
        href="mailto:Daringyan31@gmail.com"
        target={"_blank"}
        className=" text-xs text-primary hover:text-white hover:scale-110 transition-all"
      >
        Send a message
      </a>
    </div>
  );
};
