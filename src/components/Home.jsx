import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header>
        <h1>Welcome to Home Component</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/STyzAxi67KE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </header>
    </>
  );
};

export default Home;
