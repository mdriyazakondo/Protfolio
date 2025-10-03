import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SmoothFollower from "../components/SmoothFollower";
import NeuralGlow from "../components/NeuralGlow";

const Main = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* Persistent background */}
      <NeuralGlow />

      {/* Smooth follower on top of background */}
      <SmoothFollower />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main className="max-w-[1500px] mx-auto my-6 min-h-[76vh]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
