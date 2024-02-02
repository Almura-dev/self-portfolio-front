import React, { useRef } from "react";
// import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
// import { ContactBox } from "./ContactBox";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_p8350sg",
      "template_w5tnr68",
      form.current,
      "V-4OPZ84V0CX2iaGp"
    );
    e.target.reset(); // Fix the typo here
  };

  return (
    <section
      id="contact"
      className="w-full h-auto flex justify-center items-start"
    >
      <div className="container flex justify-center flex-col items-center p-8 ">
        <div className=" flex justify-center flex-col items-center gap-2">
          <div className="title text-primary-variant  text-1xl font-sm">
            Get In Touch
          </div>
          <div className="title text-primary text-3xl">Contact Me</div>
        </div>
        <div className="content  h-[100vh] w-[85%] flex justify-center  items-center">
          <div className="contactLeft flex justify-start items-center flex-col w-[50%] h-full p-8 gap-4 text-white text-center">
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
            <div className="contact  hover:bg-bg hover:border-2  transition-all hover:cursor-pointer  hover:border-primary flex flex-col justify-around p-4 gap-2 rounded-lg bg-fill min-w-64 min-h-40">
              <div className=" center text-2xl ">
                <RiMessengerLine />
              </div>
              <div className=" p-2 flex flex-col">
                <div className=" ">Messenger</div>
                <div className=" font-sm opacity-50 ">Alan Muhammad Rasul</div>
              </div>
              <a
                href="https://m.me/almura.dev"
                target={"_blank"}
                className=" text-xs text-primary hover:text-white hover:scale-110 transition-all"
              >
                Send a message
              </a>
            </div>
            <div className="contact  hover:bg-bg hover:border-2  transition-all hover:cursor-pointer  hover:border-primary flex flex-col justify-around p-4 gap-2 rounded-lg bg-fill min-w-64 min-h-40">
              <div className=" center text-2xl ">
                <BsWhatsapp />
              </div>
              <div className=" p-2 flex flex-col">
                <div className=" ">WhatsApp</div>
                <div className=" font-sm opacity-50 ">+0964 750 382 52 06</div>
              </div>
              <a
                href="https://wa.me/9647503825206"
                target={"_blank"}
                className=" text-xs text-primary hover:text-white hover:scale-110 transition-all"
              >
                Send a message
              </a>
            </div>
          </div>
          <div className="contactRight w-[50%] h-full p-8  ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" flex h-full flex-col justify-start w-full items-center gap-8 "
            >
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="rounded-md w-full bg-transparent border-2 border-primary placeholder-primary-variant p-4 text-white "
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="rounded-md w-full bg-transparent border-2 border-primary placeholder-primary-variant p-4 text-white"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows="7"
                required
                className="rounded-md w-full bg-transparent border-2 border-primary placeholder-primary-variant p-4 text-white"
              ></textarea>
              <button
                type="submit"
                className=" p-4 bg-primary text-white rounded-md hover:scale-105 transition-all"
                value="Send"
              >
                Send a message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
