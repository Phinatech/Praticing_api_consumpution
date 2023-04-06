import React from "react";
import { Footer, Header } from "../../blocks/homeblock";
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
