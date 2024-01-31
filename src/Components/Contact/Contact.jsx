import React, { useRef } from "react";
// import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
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
      className="w-full h-[200vh] flex justify-center items-start"
    >
      <div className="container flex justify-center flex-col items-center p-16 br">
        <div className=" flex justify-center flex-col items-center gap-2">
          <div className="title text-primary-variant  text-1xl font-sm">
            Get In Touch
          </div>
          <div className="title text-primary text-3xl">Contact Me</div>
        </div>
        <div className="content br h-[100vh] w-[85%] flex justify-center  items-center">
          <div className="contactLeft flex justify-center items-center flex-col w-[50%] h-full p-8 br gap-4">
            <div className="contact br flex flex-col p-2 gap-4 ">
              <div className="br p-2">a</div>
              <div className="br p-2 flex flex-col gap-2">
                <div className="br p-2">b</div>
                <div className="br p-2">c</div>
              </div>
              <div className="br p-2">d</div>
            </div>
          </div>
          <div className="contactRight w-[50%] h-full p-2 br"></div>
        </div>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">Daringyan31@gmail.com</h5>
            <a href="mailto:Daringyan31@gmail.com" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5 className="text-light">Didar B. Ahmad</h5>
            <a href="https://m.me/adiv.abosnene.7" target={"_blank"}>
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5 className="text-light">+0964 770 280 51 57</h5>
            <a href="https://wa.me/9647702805157" target={"_blank"}>
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows="7"
            required
          ></textarea>
          <button type="sumbit" className="btn btn-primary" value="Send">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};
