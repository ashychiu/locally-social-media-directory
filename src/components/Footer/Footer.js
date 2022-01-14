import React from "react";
import FooterImage from "../../assets/Pages/Footer.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterImage} className="footer__image" alt="footer" />
    </div>
  );
};

export default Footer;
