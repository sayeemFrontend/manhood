import React from "react";
import "./allProduct.css";
import { Link } from "react-router-dom";

const AllProduct = () => {
  return (
    <section className="allProduct">
      <div className="container">
        <div className="d-flex align-items-baseline  listBar">
          <div className=" d-flex justify-content-between  Group1 ">
            <li>Home</li>
            <li>></li>
            <li>All</li>
          </div>
          <div className="ms-auto d-flex justify-content-between Group2">
            <div>
              <img src="/Image/allProductView/Group.svg" alt="" />
              <span>Sort by</span>
            </div>
            <div>
              <img src="/Image/allProductView/Group (1).svg" alt="" />
              <span>Filter</span>
            </div>
          </div>
        </div>
        <div className="my-4 position-relative homeImage">
          <img src="/Image/allProductView/Group 211.png" alt="" />
          <div className="translate-middle getUpDiscount">GET UP TO 50% OFF</div>
        </div>
        <div className=" d-flex align-items-baseline newInListBar">
          <div>All Products</div>

          <div className=" ms-auto d-flex inputField">
            <input type="text" placeholder="Search by item name..." />
            <img src="/Image/allProductView/searchIcon (2).png" alt="" />
          </div>
        </div>
        <div className="mt-3 mb-4 displayItems">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="cart text-center">
                <img src="/Image/ProductViewer/allproductImage.png" alt="" />
                <div>
                  <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                  <p className="p2 ">A classic in every sense of the world</p>
                  <div className="d-flex justify-content-between align-items-baseline">
                    <p className="cartFlexp1">$45.00</p>
                    <p className="cartFlexp2">$55.00</p>
                    <p className="cartFlexp3">($10 less)</p>
                  </div>
                  <Link to="/product/view/1">
                    <button>Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="cart text-center">
                <img src="/Image/ProductViewer/allproductImage.png" alt="" />
                <div>
                  <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                  <p className="p2 ">A classic in every sense of the world</p>
                  <div className="d-flex justify-content-between align-items-baseline">
                    <p className="cartFlexp1">$45.00</p>
                    <p className="cartFlexp2">$55.00</p>
                    <p className="cartFlexp3">($10 less)</p>
                  </div>
                  <Link to="/product/view/1">
                    <button>Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
