import React from "react";
import "./StoreFront.scss";

function StoreFront() {
  return (
    <>
      <div className="storefront">
        <h1> StoreFront</h1>
        <button className="storefront__facebook">Continue with Facebook</button>
        <button className="storefront__instagram">
          Sign in with Instagram
        </button>
      </div>
    </>
  );
}

export default StoreFront;
