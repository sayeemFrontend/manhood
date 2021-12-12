import React from "react";
import { PopularBrands } from "../BackendData/PopularBrands";

const PopularBrand = () => {
  const listData = PopularBrands;
  return (
    <div className="row">
      {listData.map((item) => (
        <div className="col-4 col-md">
          <div className="itemCart-2 pb-2 pb-md-3 pt-3 pt-md-5 px-2 px-md-4">
            <div className="mb-3 mb-md-5 trending-image">
              <img className="img-fluid" src={item.image} alt="" />
            </div>

            <button type="button" className="py-2 mt-3 mt-md-5 customButton buttonEdit">
              Final Products
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularBrand;
