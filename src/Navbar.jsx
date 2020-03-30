import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav">
        <li id="home" className="nav-item">
          <Link
            to={{
              pathname: "/",
              state: { status: "homeActive" }
            }}
          >
            <i className="homeIcon fa-4x fas fa-igloo" />
            Home
          </Link>
        </li>
        <li id="favourite" className="nav-item">
          <Link
            to={{
              pathname: "/favourite-places",
              state: { status: "favouriteActive" }
            }}
          >
            Favourite Places
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
