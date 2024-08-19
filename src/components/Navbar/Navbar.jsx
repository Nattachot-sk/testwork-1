import { React, useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden p-2 mt-5 w-full relative"
        >
          <FontAwesomeIcon icon={faBars} className="absolute left-2 -top-2 size-5 duration-200"/>
        </button>

        <div
          className={`md:w-[full] md:h-[100px] h-[50px] ${
            isOpen ? "block bg-transparent  h-[100px] rounded-b-2xl" : "hidden"
          } md:block`}
        >
          <div className="md:flex md:justify-between md:items-center px-5  md:pt-[10px]">
            <div className="hidden md:block">
              <a href="">
                <img src="vite.svg" alt="" />
              </a>
            </div>
            <div>
              <ul className="flex">
                <li className="px-5 py-2 md:text-[24px] hover:text-white hover:scale-120 duration-200">
                  <a href="" className="under">
                    หน้าแรก
                  </a>
                </li>
                <li className="px-5 py-2 md:text-[24px] hover:text-white hover:scale-110 duration-200">
                  <a href="#about" className="under">
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li className="px-5 py-2 md:text-[24px] hover:text-white hover:scale-110 duration-200">
                  <a href="#service" className="under">
                    บริการ
                  </a>
                </li>
                <li className="px-5 py-2 md:text-[24px] hover:text-white hover:scale-110 duration-200">
                  <a href="#content" className="under">
                    ผลงาน
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <a href="#contact">
                <button className="md:w-[150px] md:h-[50px] w-[75px] h-[20px] bg-orange-300 hover:text-blue-600 rounded-2xl font-bold hover:bg-[#f7d963] hover:border-4 hover:border-orange-200 duration-300 text-[14px]">
                  ติดต่อเรา
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
