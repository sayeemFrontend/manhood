import React from "react";
import Slider from "react-slick";
import "./slide.css";
import { AllProducts, DealsOfTheDay } from "../BackendData/DataAllProducts";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      <i className="fas fa-angle-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      <i className="fas fa-angle-left"></i>
    </div>
  );
}

const Slide = () => {
  const lsitData = DealsOfTheDay.map((item) =>
    AllProducts.find((i) => i.id === item)
  );
  const dealsOfTheDay = [];
  DealsOfTheDay.forEach((id) => {
    let productWithId = AllProducts.find((i) => i.id == id);
    if (productWithId) dealsOfTheDay.push(productWithId);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider_css">
      <Slider {...settings}>
        {lsitData.map((item) => (
          <div className="cartConatiner-1">
            <div className="itemCart-1">
              <Link to={`/product/view/${item.id}`}>
                <div className="position-relative ">
                  <div className="product_discount position-absolute">
                    <p>{item.discount}%</p>
                  </div>
                  <img
                    className="img-fluid"
                    src={item.image[0]}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="text-center">
                  <img
                    className="img-fluid img-brand"
                    src="./Image/BrandLogo.png"
                    width="78px"
                    alt=""
                  />
                  <div className="deals-img-text">
                    {item.discount}% Discount on Nike Shoes{" "}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
