import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={props.s}>
        <div className="container-fluid" style={props.s}>
          <Link className="navbar-brand" to="/" style={props.s}>
            News
          </Link>
          <Link className="navbar-brand" to="/sports" style={props.s}>
            Sports
          </Link>
          <Link className="navbar-brand" to="/health" style={props.s}>
            Health
          </Link>
          <Link className="navbar-brand" to="/business" style={props.s}>
            Business
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={props.s}
          >
            <span className="navbar-toggler-icon" style={props.s}></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={props.s}
          >
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
