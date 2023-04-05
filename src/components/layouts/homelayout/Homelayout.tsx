import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../blocks";

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
