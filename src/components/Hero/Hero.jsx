import {React,useEffect,useState} from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faEvernote } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="w-full h-auto slanted-bg mb-20" id="home">
      <div className="w-full md:w-[1300px] h-auto grid grid-cols-1 md:grid-cols-2 mx-auto pt-40">
        <div className="col-span-1  my-auto w-full  px-10">
          <h1 className="font-bold md:text-start text-center text-[24px] md:text-[32px] text-amber-400 mb-5">
            รับออกแบบห้องทุกรูปแบบ
          </h1>
          <h1 className="font-bold md:text-[24px] md:text-start text-center text-[16px] text-white mb-2">
            <Typewriter
              options={{
                strings: [
                  "ห้องนอน",
                  "ห้องนั่งเล่น",
                  "ห้องน้ำ",
                  "ห้องครัว",
                  "และอีกหลายรูปแบบ",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="indent-8 md:text-start text-cente">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            ullam, sunt aut quo itaque ipsum quaerat quam ut cupiditate ex
            excepturi reiciendis. Libero laboriosam itaque voluptatibus, eos
            dolor voluptatem debitis?
          </p>
          <div className="flex justify-center items-center mt-5 mb-5">
            <a href="#about">
              {" "}
              <button className="w-[120px] h-[40px] text-white bg-blue-700 rounded-md mr-5 hover:bg-white hover:border-2 hover:text-blue-600  duration-300">
                เกี่ยวกับเรา <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>

            <a href="#contact">
              {" "}
              <button className="w-[120px] h-[40px] bg-orange-400 rounded-md hover:bg-white hover:border-2 hover:text-blue-600 duration-300">
                ติดต่อเรา <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex">
          <div className="md:w-[650px] md:h-[550px] w-[400px] h-[300px] mx-auto">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-lg object-cover shadow-lg hover:scale-90 duration-300"
            />
          </div>
        </div>
        {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-amber-500 hover:bg-orange-400 text-white px-4 py-2 rounded-md shadow-md duration-200"
        >
         <FontAwesomeIcon icon={faArrowUp} />
        </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
