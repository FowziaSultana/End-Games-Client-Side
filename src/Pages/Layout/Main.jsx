import React from "react";
import Navabar from "../Shared/Navbar/Navabar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navabar></Navabar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
