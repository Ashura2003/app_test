// Importing React package
import React from "react";
import { Link } from "react-router-dom";

// Creating Navbar UI
const Navbar = () => {
  //Writiing the logic for Navbar for logged in user

  // Getting user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hamro <span className="text-danger">Market</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {user ? (
                // Logic for logged in user
                <div className="dropdown">
                  <button
                    className="btn btn-success dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Welcome, {user.firstName}!
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item " href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                // Logic for not logged in user
                <>
                  <Link
                    to={"/login"}
                    className="btn btn-primary ms-2"
                    type="submit"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn btn-success ms-2"
                    type="submit"
                  >
                    Register
                  </Link>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
