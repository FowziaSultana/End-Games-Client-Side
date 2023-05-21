import React from "react";
import g1 from "../../../assets/image/Gallery/kid.png";
import g2 from "../../../assets/image/Gallery/kid2.png";
import g3 from "../../../assets/image/Gallery/kid3.jpg";
import g4 from "../../../assets/image/Gallery/kid4.jpg";
import g5 from "../../../assets/image/Gallery/kid5.jpg";

const Gallery = () => {
  return (
    <div className="container mx-auto mb-10">
      {" "}
      <h1 className="text-center text-2xl font-bold lg:text-5xl text-[#fbbd23] my-6">
        Toy Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={g1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={g2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={g3} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={g4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={g5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
