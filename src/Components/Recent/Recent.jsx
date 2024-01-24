import React from "react";

export const Recent = () => {
  return <div className="h-auto br bg-bg z-0 container flex justify-center items-start">
    <div className="content w-[85%] h-auto br flex justify-start items-center flex-col pt-32 gap-16 pl-16 pr-16">
      <div className="title text-white text-3xl">Recent Project</div>
      <div className="recent br w-full h-auto flex flex-col gap-16 ">
        <div className="project br w-full h-[65vh] bg-fill rounded-lg"></div>
        <div className="project br w-full h-[65vh] bg-fill rounded-lg"></div>
        <div className="project br w-full h-[65vh] bg-fill rounded-lg"></div>
      </div>
    </div>
  </div>;
};
