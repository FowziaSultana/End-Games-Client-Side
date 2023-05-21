import React from "react";
import "./Home.css";
import HomeHeader from "../HomeHeader/HomeHeader";
import useTitle from "../../../hooks/useTitle";
import ShopCategory from "../ShopByCategory/ShopCategory";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../NewsLetter/NewsLetter";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  useTitle("HOME");
  return (
    <div className="space-y-6">
      <HomeHeader></HomeHeader>
      <ShopCategory></ShopCategory>
      <Reviews></Reviews>
      <Gallery></Gallery>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
