import React, { useEffect } from "react";
import kid1 from "../../../assets/image/kid4.jpg";
import kid2 from "../../../assets/image/kid5.jpg";
import "./HomeHeader.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeHeader = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 place-items-center pt-8 px-5 bg-base-200 rounded-2xl">
        <div className=" grid grid-col-1 lg:grid-cols-2  place-items-center">
          <img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="rounded-2xl max-h-[300px] lg:place-self-start"
            src={kid1}
          ></img>
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            className="hidden lg:block max-h-[300px]"
            src={kid2}
          ></img>
        </div>
        <div className=" grid grid-cols-3 place-self-start my-10 mx-auto ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="col-span-3 lg:col-span-2 lg:max-w-[600px]   "
          >
            <h1
              className=" text-2xl font-bold lg:text-5xl text-[#fbbd23] 
            "
            >
              Toys That Will Bring Delight to Your Children's Faces
            </h1>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="hidden lg:block  place-self-end "
          >
            <h1
              className=" text-2xl font-bold lg:text-2xl text-[#0b4027] bg-[#fbbd23] px-4 rounded
            "
            >
              Happiness Always!!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
