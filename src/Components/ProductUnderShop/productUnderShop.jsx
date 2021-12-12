import React from "react";
import "./productUnderShop.css";
import { Link, useParams } from "react-router-dom";
import { AvailableShops } from "../BackendData/AvailableShops";
import { AllProducts } from "../BackendData/DataAllProducts";
import ListShopProduct from "./listShopProduct";

const ProductUnderShop = () => {
  const { id } = useParams();

  const shop = AvailableShops.find((i) => i.id == id);
  const shopProduct = shop.products;

  //   const listData = shopProductsId.map((id) =>
  //     AllProducts.find((it) => it.id === id)
  //   );

  return (
    <section className="productUnderShop">
      <div className="container">
        <div className="d-flex align-items-baseline  listBar">
          <div className=" d-flex justify-content-between  Group1 ">
            <li>Home</li>
            <li>></li>
            <li>New In</li>
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
          <img src={`/${shop.image}`} alt="" />
          <div className="translate-middle getUpDiscount">GET UP TO 50% OFF</div>
        </div>
        <div className=" d-flex align-items-baseline newInListBar">
          <div>New In</div>

          <div className=" ms-auto d-flex inputField">
            <input type="text" placeholder="Search by item name..." />
            <img src="/Image/allProductView/searchIcon (2).png" alt="" />
          </div>
        </div>
        <div className="mt-3 mb-4 displayItems">
          <ListShopProduct shopProduct={shopProduct} />
        </div>
      </div>
    </section>
  );
};

export default ProductUnderShop;
