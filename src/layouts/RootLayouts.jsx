import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

const RootLayouts = () => {
  const { pathname } = useLocation();
  const isOwnerPath = pathname.includes("/owner");

  return (
    <div className="flex min-h-screen flex-col">
      {!isOwnerPath && <Navbar />}

      <Container>
        <div className="flex-1 w-full mx-auto px-4 ">
          <Outlet />
        </div>
      </Container>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default RootLayouts;
