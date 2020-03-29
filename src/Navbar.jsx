import React from "react";
import { Link } from "react-router-dom";

// TODO: Generate list items through loop to complement adding pages on the go
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar-nav">
        <li id="home" className="nav-item">
          <Link to={{ pathname: "/", state: "homeActive" }}>Home</Link>
        </li>
        <li id="favourite" className="nav-item">
          <Link
            to={{ pathname: "/favourite-places", state: "favouriteActive" }}
          >
            Favourite Places
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
