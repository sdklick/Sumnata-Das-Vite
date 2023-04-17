import React from "react";
import "./App.css";
import Outletpage from "./Outletpage";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outletpage/>
      <Outlet/>
    </>
    
  );
};

export default Home;
