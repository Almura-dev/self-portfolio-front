import React from "react";
import "./skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
export const Skills2 = () => {
  return (
    <section className="container skills__container">
      <h4 className="text-light">Technologies I Use</h4>
      <h2>Skills</h2>
      <div className="skills_content">
        <div className="skill_icon">
          <AiFillHtml5 />
        </div>
        <div className="skill_icon">
          <IoLogoCss3 />
        </div>
        <div className="skill_icon">
          <DiJavascript1 />
        </div>
        <div className="skill_icon">
          <FaReact />
        </div>
        <div className="skill_icon">
          <SiTailwindcss />
        </div>
        <div className="skill_icon small-screens">
          <FaBootstrap />
        </div>
      </div>
    </section>
  );
};
