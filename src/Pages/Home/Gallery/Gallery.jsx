import React from "react";
import g1 from "../../../assets/image/Gallery/g1.jpg";
import g2 from "../../../assets/image/Gallery/g2.jpg";
import g3 from "../../../assets/image/Gallery/g3.jpg";
import g4 from "../../../assets/image/Gallery/g4.jpg";
import g5 from "../../../assets/image/Gallery/g5.jpg";
import g6 from "../../../assets/image/Gallery/g6.jpg";

const Gallery = () => {
  return (
    <div className="container mx-auto py-10">
      {" "}
      <h1 className="text-center text-2xl font-bold lg:text-5xl text-[#fbbd23] my-6">
        Toy Gallery
      </h1>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={g1}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={g2}
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={g3}
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={g4}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={g5}
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={g6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
