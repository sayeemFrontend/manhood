import React from "react";
import { Link } from "react-router-dom";
import { AvailableShops } from "../BackendData/AvailableShops";

const AvailableShop = () => {
  const listData = AvailableShops;
  return (
    <div className="row">
      {listData.map((item) => (
        <div className="col-4 col-md ">
          <div className="itemCart-2 py-3 px-2 px-md-4">
            <Link to={`/product/under/shop/${item.id}`}>
              <div className="trending-image">
                <img className="img-fluid" src={item.image} alt="" />
              </div>

              <button type="button" className="mt-5 py-2 customButton buttonEdit">
                Little India
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableShop;
