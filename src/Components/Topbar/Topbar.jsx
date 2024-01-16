import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LiaNewspaper } from "react-icons/lia";
export const Topbar = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between overflow-hidden p-4 transition-all text-fill text-[1.5rem]">
        <ul className="flex items-center justify-center gap-1 transition-all opacity-100 transform-none">
          <li tabIndex="0">
            <a
              className="flex items-center text-750"
              target="_blank"
              href="https://www.linkedin.com/in/renovatt"
            >
              <FaLinkedin />
            </a>
          </li>
          <li tabIndex="0">
            <a
              className="flex items-center text-750"
              target="_blank"
              href="https://github.com/renovatt"
            >
              <FaGithub />
            </a>
          </li>
          <li tabIndex="0">
            <a
              className="flex items-center text-750"
              target="_blank"
              href="/willcode-cv.pdf"
            >
              <LiaNewspaper />
            </a>
          </li>
        </ul>
        {/* <div className="opacity-100 transform-none">
          <a className="flex text-2xl font-bold md:text-3xl" href="/">
            <h1 className="inline-block text-750">
              <span style={{ opacity: 1, transform: 'none' }}>{' '}</span>
              <span className="text-950">...</span>Will
              <span style={{ opacity: 1, transform: 'none' }}>{' '}</span>
            </h1>
          </a>
        </div> */}
      </header>
    </div>
  );
};
