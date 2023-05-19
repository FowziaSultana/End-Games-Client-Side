import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
