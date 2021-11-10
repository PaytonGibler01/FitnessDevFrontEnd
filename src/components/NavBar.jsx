import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <header>
        <h1 className="logo">Fitness Tracker</h1>
   
      <div className="home" id>
        <Link id="home" to="/home">
          Home
        </Link>
      </div>

      <div className="activities" id>
        <Link id="activities" to="/activities">
          Activities
        </Link>
      </div>

      <div className="my-routines" id>
        <Link id="my-routines" to="/my-routines">
          My Routines
        </Link>
      </div>

      <div className="exp-routines" id>
        <Link id="exp-routines" to="/exp-routines">
          Explore Routines
        </Link>
      </div>
      </header>
    </div>
  );
};

export default NavBar;
