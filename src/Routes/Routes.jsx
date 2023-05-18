import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-6xl font-semibold">Hello world!</div>,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
