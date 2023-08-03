import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Hire Me
        </a>
        <form className="d-flex">
          <a className="navbar-brand " href="/" id="navitem1">
            Discover
          </a>
          <a className="navbar-brand" href="/" id="navitem2">
            For Job Seekers
          </a>
          <a className="navbar-brand" href="/" id="navitem3">
            For Companies
          </a>
          <button className="btn btn-dark" type="submit">
            Sign In
          </button>
          <button className="btn btn-dark" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
