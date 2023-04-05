import React, { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../components";
import { Errorhandly } from "../utils";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const pratice4 = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Errorhandly />,
        hasErrorBoundary: true,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Errorhandly />,
        hasErrorBoundary: true,
      },
    ],
  },
]);
