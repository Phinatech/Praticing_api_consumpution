import React from "react";
import { Footer, Header } from "../../Blocks";
import { Outlet } from "react-router-dom";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Homelayout;
