import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/layout/homelayout/Homelayout";
import { About, Home } from "../pages";
import { Erroring } from "../utils";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Erroring />,
        hasErrorBoundary: true,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Erroring />,
        hasErrorBoundary: true,
      },
    ],
  },
]);
