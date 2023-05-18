import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layout/Main";
import AllToys from "../Pages/AllToys/AllToys";
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
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
