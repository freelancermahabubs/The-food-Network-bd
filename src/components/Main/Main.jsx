import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

const Main = () => {
  return (
    <div>
      <ToastContainer />
      <div className="min-h-[calc(100vh-137px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
