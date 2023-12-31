import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle("UPDATE-TOY");
  const navigate = useNavigate();
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

  const handleUpdate = (id) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const ratings = parseFloat(form.ratings.value);
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const photo = form.photo.value;
    const details = form.details.value;
    var selectBox = document.getElementById("updateCat");
    var subCategory = selectBox.value;

    const aToy = {
      name,
      ratings,
      price,
      quantity,
      subCategory,
      photo,
      details,
    };

    console.log(typeof ratings);
    fetch(
      `https://b7a11-toy-marketplace-server-side-fowzia-sultana.vercel.app/toys/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(aToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log("this is fron client side UPDATE", data);
          toast.success("Successfully Updated a toy");
          navigate("/myToys");
        }
      });
  };
  return (
    <div className=" container mx-auto w-3/4 bg-[#F4F3F0] px-3 md:px-24 py-5 md:py-14 mt-11 rounded-lg">
      <h1 className="text-center text-[#fbbd23] text-3xl lg:text-5xl">
        UPDATE TOY
      </h1>
      <form onSubmit={() => handleUpdate(_id)} className="">
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
              defaultValue={name}
              required
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
              defaultValue={price}
              required
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
              defaultValue={ratings}
              required
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
              defaultValue={quantity}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#fbbd23] font-semibold text-xl">
                Sub-Category
              </span>
            </label>
            <div className="input-group">
              <select id="updateCat" className="select select-bordered w-full">
                <option disabled>Pick category</option>
                {subCategory == "DC Marvel" ? (
                  <option selected value={"DC Marvel"}>
                    DC Marvel
                  </option>
                ) : (
                  <option value={"DC Marvel"}>DC Marvel</option>
                )}
                {subCategory == "Transformers" ? (
                  <option selected value={"Transformers"}>
                    Transformers
                  </option>
                ) : (
                  <option value={"Transformers"}>Transformers</option>
                )}
                {subCategory == "Avengers" ? (
                  <option selected value={"Avengers"}>
                    Avengers
                  </option>
                ) : (
                  <option value={"Avengers"}>Avengers</option>
                )}

                {/* <option value={"Transformers"}>Transformers</option>
                <option value={"Avengers"}>Avengers</option>
                <option value={"Star_wars"}>Star_wars</option> */}
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
              defaultValue={photo}
              required
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
              defaultValue={details}
              required
            ></textarea>
          </div>
        </div>
        {/* -----------------------------button---------------------------- */}
        <button className="btn btn-block  btn-warning mt-5">Update Toy</button>
      </form>
    </div>
  );
};

export default UpdateToy;
