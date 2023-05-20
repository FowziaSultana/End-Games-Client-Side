import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router-dom";

// bg-[#0b4027]
const AddToy = () => {
  useTitle("ADD-TOY");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const details = form.details.value;
    var selectBox = document.getElementById("mySelect");
    var subCategory = selectBox.value;

    const aToy = {
      name,
      ratings,
      price,
      quantity,
      subCategory,
      photo,
      seller,
      email,
      details,
    };

    console.log(aToy);
    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(aToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("this is from client side add toy", data);
          toast.success("Successfully Added a toy");
          form.reset();
          navigate("/myToys");
        }
      });
  };
  return (
    <div className=" container mx-auto w-3/4 bg-[#F4F3F0] px-3 md:px-24 py-5 md:py-14 mt-11 rounded-lg">
      <h1 className="text-center text-[#fbbd23] text-3xl lg:text-5xl">
        ADD TOYS
      </h1>
      <form onSubmit={handleAdd} className="">
        {/* ---------------------NAME Price ratings------------------------------------ */}
        <div
          className="grid md:grid-cols-3  gap-5 my-3
        "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered "
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Price
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              className="input input-bordered "
              name="price"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Ratings
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter Ratings"
              className="input input-bordered "
              name="ratings"
              step="any"
            />
          </div>
        </div>
        {/* ------------------------Quantity and category photo--------------------------------- */}
        <div
          className="grid md:grid-cols-3  gap-5 my-3
        "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Available Quantity
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="input input-bordered "
              name="quantity"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Sub-Category
              </span>
            </label>
            <div className="input-group">
              <select id="mySelect" className="select select-bordered w-full">
                <option disabled selected>
                  Pick category
                </option>
                <option value={"DC Marvel"}>DC Marvel</option>
                <option value={"Transformers"}>Transformers</option>
                <option value={"Avengers"}>Avengers</option>
                <option value={"Star_wars"}>Star_wars</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Photo
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter URL"
              className="input input-bordered "
              name="photo"
            />
          </div>
        </div>
        {/* --------------------------Seller name and email------------------------------- */}
        <div
          className="grid md:grid-cols-2  gap-5 my-3
        "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Seller
              </span>
            </label>
            <input
              readOnly
              placeholder="Enter Seller"
              className="input input-bordered "
              name="seller"
              defaultValue={user?.displayName}
            />
          </div>{" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Email
              </span>
            </label>
            <input
              readOnly
              placeholder="Enter Email"
              className="input input-bordered "
              name="email"
              defaultValue={user?.email}
            />
          </div>
        </div>
        {/* -------------------------description-------------------------------- */}
        <div
          className="grid grid-cols-1 my-3
        "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Description
              </span>
            </label>
            <textarea
              name="details"
              className="textarea textarea-bordered "
              placeholder="Enter description"
            ></textarea>
          </div>
        </div>
        {/* -----------------------------button---------------------------- */}
        <button className="btn btn-block  btn-warning mt-5">Add Toy</button>
      </form>
    </div>
  );
};

export default AddToy;
