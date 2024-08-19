import React from "react";

function Service() {
  const DataService = [
    {
      id: "1",
      nameeng: "Bedroom",
      namethai: "ห้องนอน",
      image:
        "https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      nameeng: "Living room",
      namethai: "ห้องนั่งเล่น",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      nameeng: "Bathroom",
      namethai: "ห้องน้ำ",
      image:
        "https://plus.unsplash.com/premium_photo-1661902468735-eabf780f8ff6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      nameeng: "Kitchen",
      namethai: "ห้องครัว",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "5",
      nameeng: "Kitchen",
      namethai: "ห้องครัว",
      image:
        "https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "5",
      nameeng: "Bedroom",
      namethai: "ห้องนอน",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

  ];
  return (
    <div className="w-full h-auto  pt-[120px] mb-20" id="service">
      <div className="w-full">
        <h1 className="text-center text-[42px] mb-10">บริการของเรา</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5">
        {DataService.map((data, index) => {
          return (
            <div className="w-[400px] h-[400px] bg-neutral-100 " key={data.id}>
              <div className="bg-black">
                <img className="object-cover w-full h-[280px] hover:scale-105 duration-200" src={data.image} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-[28px]">{data.nameeng}</h1>
                <h1 className="font-bold text-[24px] text-neutral-600">{data.namethai}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
