import React from "react";
import "./Header.scss";
import HeaderImage from "../../assets/Pages/Header.svg";
import HeaderHoverImage from "../../assets/Pages/Header-hover.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<div class="imageBox">
				<div class="imageInn">
					<img src={HeaderImage} className="header__image" alt="header" />
				</div>
				<div class="hoverImg">
					<Link to="/auth">
						<img
							src={HeaderHoverImage}
							className="header__image"
							alt="header"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Header;
