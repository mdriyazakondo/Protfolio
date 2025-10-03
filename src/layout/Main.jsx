import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SmoothFollower from "../components/SmoothFollower";

const Main = () => {
  return (
    <div>
      <SmoothFollower />
      <div>
        <Navbar />
        <main className="max-w-[1500px] mx-auto my-6 min-h-[76vh] ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
