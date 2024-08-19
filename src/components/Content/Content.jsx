import React from "react";
import { datacontent } from "../../data/data";

function Content() {
  return (
    <div className="w-full h-auto border-y-2 my-20 px-10 md:px-20" id="content">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 mt-10 ">
        <div className="md:grid-cols-1 ">
          <h1 className="font-bold text-[24px] mb-10">ผลงานของเรา</h1>
          <p>
            บริการรับสร้างบ้าน รีโนเวทบ้าน ตั้งแต่ขั้นตอน การออกแบบ เขียนแบบ
            ประเมินราคา จนก่อสร้างแล้วเสร็จครบวงจร
          </p>
        </div>
        <div className="md:grid-cols-1 text-center">
          <button>ผลงานภายใน</button>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-[24px] font-bold">ผลงานก่อสร้างภายใน</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20 mt-5 md:-20">
          {datacontent.map((data, index) => {
            return (
              <div className="w-auto h-auto   mx-auto col-span-1">
                <img
                  src={data.image}
                  alt=""
                  className="hover:scale-110 duration-300"
                />
                <div className="flex-col  my-7">
                  <div className="flex items-center">
                    <h1 className="font-bold text-[24px] text-gray-400">
                      Project{" "}
                    </h1>
                    <span className="ml-5 text-[16px]">{data.projectname}</span>
                  </div>
                  <div className="flex items-center">
                    <h1 className="flex font-bold text-[24px] text-gray-400">
                      Style{" "}
                    </h1>
                    <span className="ml-5 text-[16px]">{data.style}</span>
                  </div>
                </div>
                <div className="flex justify-start items-center">
                  <a href="https://www.facebook.com" target="_blank">
                    <button className="bg-orange-200 px-7 py-2 hover:bg-slate-300 duration-500">
                      ดูรายละเอียดเพิ่มเติม
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
