import React from "react";
import { Link } from "react-router-dom";
import { AllProducts, FeaturedProduct } from "../BackendData/DataAllProducts";

const FeatureProduct = () => {
  const listData = FeaturedProduct.map((id) =>
    AllProducts.find((i) => i.id === id)
  );
  console.log("asasas", listData);
  return (
    <div className="row">
      {listData.map((item) => (
        <div className="col-4 col-md">
          <div className="itemCart-2">
            <Link to={`/product/view/${item.id}`}>
              <div className="rating-cart-root">
                <img
                  className="img-fluid"
                  src={item.image[0]}
                  width="100%"
                  alt=""
                />
                <div className="rating-cart">
                  <div>{item.rating}</div>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="featureText">
                <p>{item.name} </p>
                <p>${item.price}</p>
              </div>
            </Link>
          </div>
        </div>

      ))}
    </div>
  );
};

export default FeatureProduct;
