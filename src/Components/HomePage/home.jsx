import React from "react";
import FeatureProduct from "./featureProduct";
import "./home.css";
import Slide from "./slide";
import TrendingFootware from "./trendingFootware";
import TrendingTopware from "./trendingTopware";
import TrendingBottomware from "./trendingBottomware";
import AvailableShop from "./availableShop";
import PopularBrand from "./popularBrand";
const HomePage = () => {

  // const category = await axios.get("https://jachai.com/api/category")
  // console.log("sasasasas", category.data);

  return (
    <div className="">
      <div className="homeBody">
        <section className="slider">
          <div className="position-relative">
            <img
              className="slide-image img-fluid"
              src="./Image/backImage.png"
              alt=""
            />
            <div className="fifty-off">50% OFF</div>
            <div className="new-year">New Year 2021</div>
            <div className="winter-sale">Winter Sale</div>
            <div className="grab-it-now">
              <img className="grab-next-icon" src="./Image/Group 204.png" alt="" />
              Grab It Now
            </div>
          </div>
        </section>

        <section className="deals-of-the-day">
          <div className="container-fluid">
            <div className="title-text">Deals Of The Day</div>
            <Slide />
          </div>
        </section>

        <section className="featuredProduct">
          <div className="container-fluid">
            <div className="title-text">Featured Product</div>
            <FeatureProduct />
          </div>
        </section>

        <section className="trendingFootware">
          <div className="container-fluid">
            <div className="title-text">Trending In Footware</div>
            <TrendingFootware />
          </div>
        </section>

        <section className="trendingTopware">
          <div className="container-fluid">
            <div className="title-text">Trending In Topwear</div>
            <TrendingTopware />
          </div>
        </section>

        <section className="trendingBottomware">
          <div className="container-fluid">
            <div className="title-text">Trending In Bottomwear</div>
            <TrendingBottomware />
          </div>
        </section>

        <section className="availableShop">
          <div className="container-fluid">
            <div className="d-flex nextButton">
              <span className="me-auto">Available Shops </span>
              <button className="customButton">
                Show All
                <img
                  className="ms-4 next-botton-image"
                  src="./Image/nexticon.png"
                  alt=""
                />
              </button>
            </div>

            <AvailableShop />
          </div>
        </section>

        <section className="popularBrand">
          <div className="container-fluid">
            <div className="d-flex nextButton">
              <span className="me-auto">Populars Brands </span>
              <button className="customButton">
                Show All
                <img
                  className="ms-4 next-botton-image"
                  src="./Image/nexticon.png"
                  alt=""
                />
              </button>
            </div>
            <PopularBrand />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
