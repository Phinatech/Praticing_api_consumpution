import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../components/layout/homelayout/Homelayout";
import { Home } from "../pages";
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
    ],
  },
]);
