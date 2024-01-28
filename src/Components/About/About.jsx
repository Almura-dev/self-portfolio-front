import React from "react";

export const About = () => {
  return (
    <div className="w-full flex justify-center h-[100vh] bg-fill">
      <div className="container  flex justify-start items-center flex-col pt-16">
        <div className=" flex justify-center flex-col items-center gap-2">
          <div className="title text-primary-variant  text-1xl font-sm">
            Get to Know
          </div>
          <div className="title text-primary text-3xl">About Me</div>
        </div>
        <div className="content flex w-full h-full justify-center items-center p-16 gap-4">
          <div className="w-[50%] h-full  flex justify-center items-center p-16  ">
            <img
              className="filter grayscale w-[20rem] rounded-xl "
              src="https://i.ibb.co/BnV8bPJ/photo-2024-01-28-21-23-58.jpg"
              alt="https://i.ibb.co/BnV8bPJ/photo-2024-01-28-21-23-58.jpg"
            />
          </div>
          <div className="w-[50%] h-full p-16  flex flex-col justify-between items-start gap-4">
            <div className=" w-full h-auto text-2xl text-white italic">
              "I find peace in programming."
            </div>
            <div className=" w-full h-auto text-xs text-primary-variant font-sm">
              Hey there, I'm Alan, a web developer born in the 2000s and a proud
              graduate of Charmo University's computer science program. Teamwork
              is my strength, and I bring solid coding skills and a calm
              demeanor under pressure. I'm passionate about creating digital
              experiences that leave a lasting impact.
            </div>
            <div className=" w-full h-auto">
              <button class="text-white h-auto bg-primary text-sm   py-2 px-4  rounded">
                Let us talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
