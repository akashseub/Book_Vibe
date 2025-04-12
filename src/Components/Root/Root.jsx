import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
