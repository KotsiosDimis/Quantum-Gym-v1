import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "var(--primary)",
      }}
    >
      <div className="container">
        {/* Brand on Left */}
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: "var(--light)" }}
        >
          Quantum Gym
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "var(--light)" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(100%)" }}
          ></span>
        </button>

        {/* Centered Navigation Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                end
                style={({ isActive }) => ({
                  color: isActive ? "var(--highlight)" : "var(--light)",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "var(--highlight)" : "var(--light)",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "var(--highlight)" : "var(--light)",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
