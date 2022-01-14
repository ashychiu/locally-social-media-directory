import React from "react";
import "./StoreFront.scss";
import Logo from "../../assets/icons/logoblack.svg";
import Back from "../../assets/icons/backarrow.png";
import { Link } from "react-router-dom";

function StoreFront() {
	return (
		<>
			<div className="storefront">
				{/* <Link to={`/`}>
          <button className="storefront__back"></button>
        </Link> */}
				<div className="storefront__card">
					<img src={Logo} alt="Logo" />
					<div className="storefront__card__heading">
						Create your storefront
						<p className="storefront__card__heading-para">
							Get started by connecting your business account
						</p>
					</div>
					<button className="storefront__card-facebook">
						Continue with Facebook
					</button>
					<Link to={`/instagram`}>
						<button className="storefront__card-instagram">
							Sign in with Instagram
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default StoreFront;
