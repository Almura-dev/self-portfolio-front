import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
export const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 mt-4 flex w-full items-center justify-between p-2 backdrop-blur-sm md:absolute md:bottom-10 md:left-10 md:w-auto md:rounded-full md:border">
      <div className="flex w-full items-center justify-between md:w-auto p-2">
        <Link to="/">
          <FaHome className="text-primary text-4xl " />
        </Link>
        <Link to="/">
          <RiAccountCircleFill className="text-white text-4xl " />
        </Link>
        <Link to="/">
          <FaDiagramProject className="text-white text-4xl " />
        </Link>
        <Link to="/">
          <GiSkills className="text-white text-4xl " />
        </Link>
        <Link to="/">
          <HiOutlineMail className="text-white text-4xl " />
        </Link>
      </div>
    </nav>
  );
};