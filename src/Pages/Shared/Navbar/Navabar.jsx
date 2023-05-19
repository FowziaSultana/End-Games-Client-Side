import React, { useContext } from "react";
import logo from "../../../assets/image/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  //const { user, logout } = useContext(Authcontext);
  // const handlelogOut = () => {
  //   logout();
  // };
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/allToys"}>All Toys</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-white font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52 text-[#fbbd23] "
            >
              {navItems}
            </ul>
          </div>
          <img className="w-14 h-14" src={logo}></img>
          <p className="text-lg text-[#fbbd23]">End Games</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  text-[#fbbd23] ">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn btn-outline btn-warning">
            Login
          </Link>
          {/* {user ? (
          <button
            onClick={handlelogOut}
            className="btn btn-outline btn-warning"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn btn-outline btn-warning">
            Login
          </Link>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
