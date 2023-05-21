import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle("MY-TOYS");

  const navigate = useNavigate();

  const url = `https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const handleToyUpdate = (id) => {
    Swal.fire({
      title: "Are you sure You want to Update the toy?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/updateToys/${id}`);
        // <Navigate to={`/updateToys/${id}`}></Navigate>;
      }
    });
  };
  const handleToyDelete = (id) => {
    Swal.fire({
      title: "Are you sure You want to Delete the toy?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/toys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            } else {
              toast.error("Something went wrong");
            }
          });
      }
    });
  };

  const handleHighToLow = () => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/sortToys?email=${user?.email}&&sort=HighToLow`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        toast.success("SUCCESSFULLY SORTED IN DESCENDING ORDER");
      });
  };
  const handleLowtoHigh = () => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/sortToys?email=${user?.email}&&sort=LowToHigh`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        toast.success("SUCCESSFULLY SORTED IN ASCENDING ORDER");
      });
  };
  return (
    <div className="max-w-[800px] mx-auto mt-10  ">
      <div className="flex justify-evenly md:justify-between items-center mb-5">
        <h1 className="text-center text-[#fbbd23] text-3xl lg:text-5xl  ">
          MY TOYS
        </h1>

        <div className="place-self-end grid grid-cols-1 ">
          <span className="text-center text-[#fbbd23] text-base md:text-3xl">
            Price:
          </span>
          <span className="space-y-3 md:space-y-0 md:space-x-3 flex flex-col md:flex-row">
            <button
              className="btn btn-warning btn-xs"
              onClick={handleHighToLow}
            >
              Descending
            </button>
            <button
              onClick={handleLowtoHigh}
              className="btn btn-warning btn-xs"
            >
              Ascending
            </button>
          </span>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-black font-bold">
          {/* head */}
          <thead>
            <tr className="text-4xl font-extrabold">
              <th>Name</th>
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
                  <button
                    onClick={() => handleToyUpdate(aToy._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaPencilAlt className="text-warning"></FaPencilAlt>
                  </button>
                  <button
                    onClick={() => handleToyDelete(aToy._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-warning"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
