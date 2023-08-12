import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [rev, setRev] = useState([]);
  useEffect(() => {
    fetch("test.json")
      .then((res) => res.json())
      .then((data) => setRev(data));
  }, []);
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center text-2xl font-bold lg:text-5xl text-[#fbbd23] my-6">
        Happy Customers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {rev.map((review) => (
          <ReviewCard review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
