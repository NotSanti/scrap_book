import React from "react";
import Navbar from "../components/Navbar";
import "../style/index.css";
import PictureList from "../components/PictureList";

const All = () => {
  return (
    <>
      <div className="root">
        <Navbar />

        <div className="main">
          <PictureList />
        </div>
      </div>
    </>
  );
};

export default All;
