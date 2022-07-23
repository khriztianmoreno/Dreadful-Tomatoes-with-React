import React from "react";

import Logo from "../assets/logo.png";
import Login from "../assets/icon-login.png";

import "../styles/landingpage.scss";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="header-navbar">
        <img className="header-navbar-img" src={Logo} alt="Logo" />
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
