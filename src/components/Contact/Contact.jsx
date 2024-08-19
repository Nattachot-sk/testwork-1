import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEvernote,
  faFacebook,
  faLine,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div
      className="w-full h-[auto] md:[950px] py-20 contact-bg flex justify-center items-center"
      id="contact"
    >
      <div className="w-[1200px] h-auto bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 justify-center px-5 py-3">
        <div className="w-full flex flex-col items-center">

          <img
            src="./gif/contact.gif"
            alt=""
            className="size-[300px] md:size-[400px] hover:scale-125 duration-300"
          />
          <div className="w-full h-auto">
            <ul>
              <li className="w-full h-auto flex items-center py-2 pl-16 md:pl-[90px] relative mb-5">
                <div className="size-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute flex justify-center items-center ">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute text-[28px] text-white hover:scale-75 duration-300"
                  />
                </div>
                <div className="w-full">
                  <p className="ml-14 md:ml-20">testemail@gmail.com</p>
                </div>
              </li>
              <li className="w-full h-auto flex items-center py-2 pl-16 md:pl-[90px] relative mb-5">
                <div className="size-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute flex justify-center items-center ">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute text-[28px] text-white hover:scale-75 duration-300"
                  />
                </div>
                <div className="w-full">
                  <p className="ml-14 md:ml-20">+66 97-789-XXXX</p>
                </div>
              </li>
              <li className="w-full h-auto flex items-center py-2 pl-16 md:pl-[90px] relative mb-5">
                <div className="size-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute flex justify-center items-center ">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="absolute text-[28px] text-white hover:scale-75 duration-300"
                  />
                </div>
                <div className="w-full">
                  <p className="ml-14 md:ml-20">testemail@gmail.com</p>
                </div>
              </li>
            </ul>
            <div className="w-[70%] h-10 rounded-xl mx-auto flex justify-center items-center gap-5 bg-gradient-to-r from-cyan-500 to-blue-500">
              <a href="https://www.facebook.com/" target="_blank">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[28px] text-white  hover:scale-125 duration-200"
                  />
                </button>
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-[28px] text-white hover:scale-125 duration-200"
                  />
                </button>
              </a>
              <a href="https://www.tiktok.com" target="_blank">
                <button>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="text-[28px] text-white hover:scale-125 duration-200"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full h-full p-5 bg-white">
          <p className="text-[42px] font-bold text-center">- Contact Me -</p>
            <form>
              <div className="relative mt-5 mb-5">
                <label htmlFor="" className="absolute top-4 left-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[24px] text-white"
                  />
                </label>
                <input
                  type="text"
                  className="w-full h-[60px] px-12 border-2 placeholder-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  placeholder="Firstname"
                />
              </div>
              <div className="relative mb-5">
                <label htmlFor="" className="absolute top-4 left-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[24px] text-white"
                  />
                </label>
                <input
                  type="text"
                  className="w-full h-[60px] px-12 border-2 placeholder-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  placeholder="Lastname"
                />
              </div>
              <div className="relative mb-5">
                <label htmlFor="" className="absolute top-4 left-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[24px] text-white"
                  />
                </label>
                <input
                  type="text"
                  className="w-full h-[60px] px-12 border-2 placeholder-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  placeholder="Phone"
                />
              </div>
              <div className="relative mb-5">
                <label htmlFor="" className="absolute top-4 left-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[24px] text-white"
                  />
                </label>
                <input
                  type="email"
                  className="w-full h-[60px] px-12 border-2 placeholder-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  placeholder="Email"
                />
              </div>

              <div className="relative">
                <label htmlFor="" className="absolute top-4 left-4">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="text-[24px] text-white"
                  />
                </label>
                <textarea
                  type="textarea"
                  className="w-full h-20 max-h-40 min-h-20 pt-4 px-12 border-2 placeholder-white bg-gradient-to-r from-cyan-500 to-blue-500"
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="uppercase w-full h-[60px] bg-green-600 rounded-md px-5 mt-5 text-white font-bold cursor-pointer"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
