import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../components";
import { Errorhandling } from "../utils";

const Homes = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homes />,
        errorElement: <Errorhandling />,
        hasErrorBoundary: true,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
