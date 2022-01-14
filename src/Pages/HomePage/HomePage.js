import React from "react";
import HomeImage from "../../assets/Pages/Home Page.png";

const HomePage = () => {
  return (
    <section className="homepage">
      <img src={HomeImage} className="homepage__image" alt="homepage" />
    </section>
  );
};

export default HomePage;
