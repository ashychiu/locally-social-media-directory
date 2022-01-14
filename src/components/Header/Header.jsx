import React from "react";
import "./Header.scss";
import HeaderImage from "../../assets/Pages/Header.svg";

const Header = () => {
	return (
		<div className="header">
			<img src={HeaderImage} className="header__image" alt="header" />
		</div>
	);
};

export default Header;
