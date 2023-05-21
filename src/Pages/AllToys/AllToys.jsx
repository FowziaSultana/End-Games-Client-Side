import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { data } from "autoprefixer";

const AllToys = () => {
  useTitle("ALL-TOYS");
  const [toys, setToys] = useState([]);

  // const toys = useLoaderData();

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/allToys"
    )
      .then((res) => res.json())
      .then((data) => {
        const result = data.slice(0, 20);
        setToys(result);
      });
  }, []);

  const handleSearch = () => {
    const searchText = document.getElementById("mysearch").value;
    fetch(
      `https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/searchToys?search=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-[#fbbd23] text-3xl lg:text-5xl  ">
        ALL TOYS
      </h1>
      <div
        className="w-3/4 mx-auto my-6  grid grid-cols-1
      "
      >
        <div className="form-control  place-self-center">
          <div className="input-group">
            <input
              id="mysearch"
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full text-black font-bold">
          {/* head */}
          <thead>
            <tr className="text-4xl font-extrabold">
              <th>Name</th>
              <th>Seller</th>
              <th>Details</th>
              <th>SubCategory</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((aToy) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={aToy.photo} alt={aToy.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{aToy.name}</div>
                    </div>
                  </div>
                </td>
                <td>{aToy.seller}</td>
                <td>
                  <div className="text-base">
                    <span className="font-bold">Price: </span>
                    {aToy.price}Tk
                  </div>
                  <div className="text-base ">
                    <span className="font-bold">Ratings: </span>
                    {aToy.ratings}
                  </div>

                  <span className="badge badge-ghost badge-md">
                    Available: {aToy.quantity}
                  </span>
                </td>
                <td>{aToy.subCategory}</td>
                <th>
                  <Link
                    to={`/singleToy/${aToy._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    {" "}
                    DETAILS
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
