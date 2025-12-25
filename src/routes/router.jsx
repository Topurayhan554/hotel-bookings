import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/Register";
import ManageAccount from "../pages/ManageAccount";
import LoadingSpinner from "../components/LoadingSpnnier";
import Experience from "../pages/Experience";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllRooms from "../pages/AllRooms";
import RoomDetails from "../pages/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
        hydrateFallbackElement: <LoadingSpinner />,
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
      {
        path: "/hotels",
        element: <AllRooms />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/hotels/:id",
        element: <RoomDetails />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
