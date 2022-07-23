import React from "react";

import Logo from "../assets/logo.png";
import AppSotre from "../assets/app store.png";
import GooglePlay from "../assets/google-play.png";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer-nav">
        <p>Home</p>
        <p> Terms of Use</p>
        <p>Legal Notices</p>
        <p>Help</p>
        <p>Manage Account</p>
      </div>
      <div className="footer-store">
        <img src={AppSotre} alt="appSotre" />
        <img src={GooglePlay} alt="googleplay" />
      </div>
      <div className="footer-right">
        <p>Copyright 2020 Dreadfull Tomato Streaming. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
