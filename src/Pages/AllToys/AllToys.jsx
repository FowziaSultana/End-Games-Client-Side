import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <div>
      <p>ALl TOYS </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center ">
        {toys.map((aToy) => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={aToy.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
