import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/Register";
import ManageAccount from "../pages/ManageAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/manage-account",
        element: <ManageAccount />,
      },
    ],
  },
]);
