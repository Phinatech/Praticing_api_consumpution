import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {} from "../components/blocks";
import Homelayout from "../components/layouts/homelayout/Homelayout";
import { About } from "../pages";
import Home from "../pages/Home";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
