import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <Link to="/" className="navbar-brand">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="!#">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/post/add" className="nav-link" href="!#">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" href="!#">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
