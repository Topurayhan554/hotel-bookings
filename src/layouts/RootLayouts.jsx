import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { ToastContainer } from "react-toastify";

const RootLayouts = () => {
  const { pathname } = useLocation();
  const isOwnerPath = pathname.includes("/owner");

  return (
    <div className="flex min-h-screen flex-col">
      {!isOwnerPath && <Navbar />}

      <Outlet />

      {!isOwnerPath && <Footer />}
      <ToastContainer />
    </div>
  );
};

export default RootLayouts;
