import React from "react";
import StoreImage from "../../assets/Pages/SearchResults.png";
import "./SearchResult.scss";

const Footer = () => {
	return (
		<div className="result">
			<img src={StoreImage} className="result__image" alt="store" />
		</div>
	);
};

export default Footer;
