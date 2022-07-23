import React from "react";

import Logo from "../assets/logo.png";
import Login from "../assets/icon-login.png";
import Movies from "../assets/icon-movies.png";
import TvShows from "../assets/icon-series.png";

import "../styles/navbar.scss";

const Navbar = ({ tag }) => {
  return (
    <header className="header">
      <nav className="header-navbar">
        <img className="header-navbar-img" src={Logo} alt="Logo" />
        {tag && (
          <div className="header-navbar-sections">
            <div
              className={
                tag === "movies"
                  ? "header-navbar-movies-red"
                  : "header-navbar-movies"
              }
            >
              <img src={Movies} alt="movies" />
              <p>Movies</p>
            </div>
            <div
              className={
                tag === "tvshows"
                  ? "header-navbar-tvshows-red"
                  : "header-navbar-tvshows"
              }
            >
              <img src={TvShows} alt="tvshows" />
              <p>Series</p>
            </div>
          </div>
        )}
        <ul className="header-navbar-list">
          <li className="header-navbar-item">
            <p>Login</p>
          </li>
          <li className="header-navbar-item">
            <img src={Login} alt="Login" />
          </li>
          <li className="header-navbar-item">
            <button>Start your free trial</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
