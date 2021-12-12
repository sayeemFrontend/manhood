import React from "react";
import "./productUnderShop.css";
import { Link, useParams } from "react-router-dom";
import { AvailableShops } from "../BackendData/AvailableShops";
import { AllProducts } from "../BackendData/DataAllProducts";

const ListShopProduct = (props) => {
  const listData = props.shopProduct.map((id) =>
    AllProducts.find((i) => i.id === id)
  );
  console.log("ki aseeee", listData);
  return (
    <section className="productUnderShop">
      <div className="mt-3 mb-4 displayItems">
        <div className="row">
          {listData.map((item) => (
            <div className="col-md-3">
              <div className="cart text-center">
                <img src={`/${item.image[0]}`} alt="" />
                <div>
                  <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                  <p className="p2 ">A classic in every sense of the world</p>
                  <div className="d-flex justify-content-between align-items-baseline">
                    <p className="cartFlexp1">
                      ${(item.price * item.discount) / 100}
                    </p>
                    <p className="cartFlexp2">${item.price}</p>
                    <p className="cartFlexp3">(${item.discount} less)</p>
                  </div>
                  <Link to={`/product/view/${item.id}`}>
                    <button>Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListShopProduct;
