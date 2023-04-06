import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/layout/homelayout/Homelayout";
import Homes from "../pages/Homes";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homes />,
      },
    ],
  },
]);
