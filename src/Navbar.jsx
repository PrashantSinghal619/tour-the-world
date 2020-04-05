import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav">
        <li className="logo">
          <div className="nav-link">
            <span className="link-text logo-text">Tour The World</span>
            <i className="fas fa-2x fa-angle-double-right"></i>
          </div>
        </li>
        <li id="home" className="nav-item">
          <Link
            className="nav-link"
            to={{
              pathname: "/",
              state: { status: "homeActive" },
            }}
          >
            <i className="home-icon fa-2x fas fa-igloo" />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li id="favourite" className="nav-item">
          <Link
            className="nav-link"
            to={{
              pathname: "/favourite-places",
              state: { status: "favouriteActive" },
            }}
          >
            <i className="favourite-icon fa-2x fas fa-heart" />
            <span className="link-text">Favourite Places</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
