import React from "react";
import { About, Home } from "../pages";
import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/layouts/homelayout/Homelayout";
import { Errohandling } from "../utils/hoc";
import Errorsbands from "../utils/hoc/Errorsbands";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Errorsbands />,
        hasErrorBoundary: true,
      },
      {
        path: "/abouting",
        element: <About />,
        errorElement: <Errorsbands />,
        hasErrorBoundary: true,
      },
    ],
  },
]);
