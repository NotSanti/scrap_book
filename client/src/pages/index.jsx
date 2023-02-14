import React from "react";
import Navbar from "../components/Navbar";
import "../style/index.css";
import Random from "../components/Random";

const Home = () => {
  return (
    <>
      <div className="root">
        <Navbar />

        <div className="main">
          <h1>HOME PAGE</h1>
          <Random />
        </div>
      </div>
    </>
  );
};

export default Home;
