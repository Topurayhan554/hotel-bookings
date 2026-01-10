import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import ManageAccount from "../pages/ManageAccount";
import LoadingSpinner from "../components/LoadingSpnnier";
import Experience from "../pages/Experience";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import AllRooms from "../pages/AllRooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import Layout from "../pages/hotelOwner/Layout";
import Dashboard from "../pages/hotelOwner/Dashboard";
import AddRoom from "../pages/hotelOwner/AddRoom";
import ListRoom from "../pages/hotelOwner/ListRoom";
import Login from "../pages/Auth/Login";

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
        path: "/my-booklist",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "/owner",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-room",
        element: <AddRoom />,
      },
      {
        path: "list-room",
        element: <ListRoom />,
      },
    ],
  },
]);
