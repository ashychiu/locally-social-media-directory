import React from "react";
import FooterImage from "../../assets/Pages/Footer.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<Link to="/">
				<img src={FooterImage} className="footer__image" alt="footer" />
			</Link>
		</div>
	);
};

export default Footer;
