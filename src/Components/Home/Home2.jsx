import React from "react";
import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";
import { Recent } from "../Recent/Recent";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
// import { motion } from "framer-motion";

export const Home2 = () => {
  return (
    <div className="flex justify-start items-center flex-col">
      <Navbar />
      <Hero />
      <About />
      <Recent />

      <Skills />
    </div>
  );
};
