import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);
  //   const {
  //     name,
  //     ratings,
  //     price,
  //     quantity,
  //     subCategory,
  //     photo,
  //     seller,
  //     email,
  //     details,
  //   } = toys;
  const handleToyUpdate = (id) => {
    alert("hhhhhh");
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
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
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
  return (
    <div className="max-w-[800px] mx-auto mt-10  ">
      <h1 className="text-center text-[#fbbd23] text-3xl lg:text-5xl mb-5">
        MY TOYS
      </h1>
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
