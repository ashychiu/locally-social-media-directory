import React from "react";
import FooterImage from "../../assets/Pages/Footer.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={FooterImage} alt="footer" />
    </div>
  );
};

export default Footer;
