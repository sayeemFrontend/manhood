import React from "react";
import { Link } from "react-router-dom";
import { AllProducts, TrendingInTopwear } from "../BackendData/DataAllProducts";

const TrendingTopware = () => {
  const listData = TrendingInTopwear.map((id) =>
    AllProducts.find((i) => i.id === id)
  );
  return (
    <div className="row">
      {listData.map((item) => (
        <div className="col-4 col-md">
          <div className="itemCart-3">
            <Link to={`/product/view/${item.id}`}>
              <div className="trending-image">
                <img
                  className="img-fluid"
                  src="./Image/trending top-wear.png"
                  alt=""
                />
              </div>
              <div className=" mt-3">
                <p className="head">Stylish Nike Products</p>
                <p className="subHead">A classic in every sense of the world</p>

                <button
                  type="button"
                  className=" mt-3 py-2 customButton buttonEdit"
                >
                  Shop Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingTopware;
