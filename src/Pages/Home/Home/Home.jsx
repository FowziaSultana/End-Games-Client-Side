import React from "react";
import "./Home.css";
import HomeHeader from "../HomeHeader/HomeHeader";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("HOME");
  return (
    <div>
      <HomeHeader></HomeHeader>
    </div>
  );
};

export default Home;
