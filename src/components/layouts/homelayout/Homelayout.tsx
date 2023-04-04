import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../blocks";
import Header from "../../blocks/Homeblock/Header";

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
