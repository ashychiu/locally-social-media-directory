import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/Pages/landing-footer-cropped.png";
import HeroTop from "../../assets/Hero Section/Hero-1.svg";
import HeroBottom from "../../assets/Hero Section/Hero-2.svg";
import SearchButton from "../../assets/Buttons/search button.svg";
import HeroPlants from "../../assets/Hero Section/plants-block.png";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage__hero">
        <div className="homepage__hero-left">
          <img src={HeroTop} className="homepage__hero-top" alt="hero" />

          <div className="homepage__search">
            <input
              type="text"
              name="searchbar"
              placeholder="search for something new"
              className="homepage__search-input"
            />
            <Link to="/result">
              <img
                src={SearchButton}
                className="homepage__search-button"
                alt="search"
              />
            </Link>
          </div>
          <img src={HeroBottom} className="homepage__hero-bottom" alt="hero" />
        </div>

        <div className="homepage__hero-right">
          <img src={HeroPlants} className="homepage__hero-plant" alt="plants" />
        </div>
      </div>
      <img src={HomeImage} className="homepage__image" alt="homepage" />
    </section>
  );
};

export default HomePage;
