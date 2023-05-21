import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { FaStar, FaThumbsUp } from "react-icons/fa";

const SingleToyDetails = () => {
  useTitle("DETAILS");

  const toy = useLoaderData();
  const {
    _id,
    name,
    ratings,
    price,
    quantity,
    subCategory,
    photo,
    seller,
    email,
    details,
  } = toy;
  // seller name, seller email,,
  const overlayStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${photo})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "80px",
  };
  return (
    <div className="">
      <div className="container mx-auto w-full  grid grid-cols-1 md:grid-cols-8 gap-3 ">
        <div className="md:col-span-3 flex h-[500px] justify-center items-center flex-col rounded-[30px]">
          <div className="w-full h-[500px] rounded-lg" style={overlayStyle}>
            <div className="w-full h-[500px] rounded-lg flex justify-center items-center backdrop-brightness-90">
              {/* <span className="text-white text-4xl w-1/2 text-center">
                Here is an example of a black overlay on an image
              </span> */}
            </div>
          </div>
        </div>
        <div className="md:col-span-5  p-9 rounded-2xl">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="py-3">{details}</p>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
            <div className="grid grid-cols-1">
              <span>
                {" "}
                <span className="text-lg font-medium">Price: </span>
                {price}
              </span>
              <span>
                {" "}
                <span className="text-lg font-medium">
                  Available Quantity:{" "}
                </span>
                {quantity}
              </span>
              <span className="flex items-center">
                <span>Ratings:</span> <span className="ml-2">{ratings}</span>
                <FaStar className="text-warning ml-2" />
              </span>
            </div>
            <div className="grid grid-cols-1 mr-5">
              <span>
                {" "}
                <span className="text-lg font-medium">Seller: </span>
                {seller}
              </span>
              <span>
                {" "}
                <span className="text-lg font-medium">Email: </span>
                {email}
              </span>
            </div>
            {/* <div className="flex gap-2 items-center mr-5  mt-3 md:mt-0">
              <span>
                <FaStar className="text-warning" />
              </span>{" "}
              <span>{ratings}</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
