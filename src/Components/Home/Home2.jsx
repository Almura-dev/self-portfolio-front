import React from "react";
import { Hero } from "../Hero/Hero";
import { Navbar } from "../Navbar/Navbar";
// import { motion } from "framer-motion";

export const Home2 = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar/>
      
      <Hero />
    </div>
  );
};
