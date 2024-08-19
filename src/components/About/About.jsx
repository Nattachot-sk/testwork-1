import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLine } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="w-full h-auto md:h-[850px] bg-white mb-20 md:md-0" id="about">
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 mt-10 ">
        <div className="col-span-1 relative my-auto">
          <div className="relative w-[400px] h-[300px] md:w-[550px] md:h-[550px] xl:w-[650px] xl:h-[550px] mx-auto mt-20">
            <img
              src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover rounded-sm "
            />
            <div className="w-[200px] h-[100px] md:w-[300px] md:h-[100px] bg-blue-600 absolute left-[100px] md:left-[150px] -bottom-[45px] md:-bottom-[45px] rounded-sm">
              <p className="px-4 md:px-8 py-[16px] md:py-[24px] font-bold text-white text-[14px] md:text-[16px] indent-2">
                อยากออกแบบห้องหรือแปลนบ้านแบบไหนแค่เพียงปรึกษาเรา
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-5">
          <div className="flex-col mt-20">
            <h1 className="font-bold text-[34px] mb-5">เกี่ยวกับเรา</h1>
            <p className="px-5 indent-4 w-[90%] mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              quaerat eius ipsa nisi minima labore corrupti laborum autem
              corporis adipisci maxime sequi nesciunt dolores deleniti, eos
              officia assumenda. Nostrum, pariatur.
            </p>
            <h1 className="font-bold text-[34px]">ทำไมต้องเลือกเราในการออกแบบ</h1>
            <hr />
            <ul className="flex-col mb-2 mt-5">
              <li className="relative flex  items-center  w-full h-[50px] mb-3">
                <div className="absolute w-10 h-10   bg-orange-600 rounded-full flex justify-center items-center">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} className="absolute text-[24px] text-white"/>
                </div>
                <p className="absolute left-20 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, reprehenderit.</p>
              </li>
              <li className="relative flex  items-center  w-full h-[50px] mb-3">
                <div className="absolute w-10 h-10   bg-orange-600 rounded-full flex justify-center items-center">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} className="absolute text-[24px] text-white"/>
                </div>
                <p className="absolute left-20 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, reprehenderit.</p>
              </li>
              <li className="relative flex  items-center  w-full h-[50px] mb-3">
                <div className="absolute w-10 h-10   bg-orange-600 rounded-full flex justify-center items-center">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} className="absolute text-[24px] text-white"/>
                </div>
                <p className="absolute left-20 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, reprehenderit.</p>
              </li>
              <li className="relative flex  items-center  w-full h-[50px] mb-3">
                <div className="absolute w-10 h-10   bg-orange-600 rounded-full flex justify-center items-center">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} className="absolute text-[24px] text-white"/>
                </div>
                <p className="absolute left-20 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, reprehenderit.</p>
              </li>
              <li className="relative flex  items-center  w-full h-[50px] mb-3">
                <div className="absolute w-10 h-10   bg-orange-600 rounded-full flex justify-center items-center">
                  {" "}
                  <FontAwesomeIcon icon={faCheck} className="absolute text-[24px] text-white"/>
                </div>
                <p className="absolute left-20 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, reprehenderit.</p>
              </li>
            </ul>
            <hr />

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
