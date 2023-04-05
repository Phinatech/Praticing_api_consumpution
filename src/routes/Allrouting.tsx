import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Dashlayout } from "../components/layout/dashlayout";
import Homelayout from "../components/layout/homelayout/Homelayout";
import { About, Home } from "../pages";
import DashHome from "../pages/DashHome";
import Profile from "../pages/Profile";
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

  {
    path: "/dashboard",
    element: <Dashlayout />,
    children: [
      {
        index: true,
        element: <DashHome />,
        errorElement: <Erroring />,
        hasErrorBoundary: true,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
        errorElement: <Erroring />,
        hasErrorBoundary: true,
      },
    ],
  },
]);
