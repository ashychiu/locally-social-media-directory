import React from "react";
import "./StoreFront.scss";
import Logo from "../../assets/icons/logoblack.svg";
import Back from "../../assets/icons/backarrow.png";

function StoreFront() {
  return (
    <>
      <div className="storefront">
        <button className="storefront__back"></button>
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
          <button className="storefront__card-instagram">
            Sign in with Instagram
          </button>
        </div>
      </div>
    </>
  );
}

export default StoreFront;
