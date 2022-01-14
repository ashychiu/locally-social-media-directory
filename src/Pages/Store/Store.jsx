import React from "react";
import StoreImage from "../../assets/Pages/Storefront.png";
import "./Store.scss";

const Footer = () => {
	return (
		<div className="store">
			<img src={StoreImage} className="store__image" alt="store" />
		</div>
	);
};

export default Footer;
