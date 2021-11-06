import React from "react";
import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navegación
          </Link>
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
                <NavLink exact to="/" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/login" className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
