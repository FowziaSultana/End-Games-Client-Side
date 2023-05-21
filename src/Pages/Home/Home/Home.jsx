import React from "react";
import "./Home.css";
import HomeHeader from "../HomeHeader/HomeHeader";
import useTitle from "../../../hooks/useTitle";
import ShopCategory from "../ShopByCategory/ShopCategory";

const Home = () => {
  useTitle("HOME");
  return (
    <div className="space-y-6">
      <HomeHeader></HomeHeader>
      <ShopCategory></ShopCategory>
    </div>
  );
};

export default Home;
