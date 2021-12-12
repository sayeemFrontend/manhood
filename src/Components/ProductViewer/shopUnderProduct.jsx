import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AvailableShops } from "../BackendData/AvailableShops";
import { CartContext } from "../Context/cartContext/cartProvider";

const ShopUnderProduct = (props) => {
  const {
    productID,
    discount,
    name,
    size,
    color,
    image,
    quantity,
    handleDisplay,
    price,
  } = props;

  // const discountedPrice = Math.floor((price - (price * discount) / 100))
  //   const cart = useContext(CartContext);

  const shops = [];
  AvailableShops.forEach((it) => {
    if (it.products.includes(productID)) shops.push(it);
  });

  const prop = useContext(CartContext);

  const addToCart = (
    shopID,
    productId,
    discount,
    name,
    size,
    color,
    quantity,
    image,
    price
  ) => {
    const cartItem = {
      productID: productId,
      shopID: shopID,
      discount: discount,
      name: name,
      size: size,
      color: color,
      quantity: quantity,
      image: image,
      price: price,
      discountedPrce: Math.floor(price - (price * discount) / 100)
    };
    prop.addCart(cartItem);
  };

  return (
    <div className="container">
      <div className="row">
        {shops?.map((item) => (
          <div className="col-12 col-md-3">
            <div className="cart">
              <div className="float-start float-md-none">
                <img src={`/${item.image}`} alt="" width="100%" />
              </div>
              <div className="text-md-center"><p className="cartHeader">{item.name}</p>
                <p className="cartPhone">{item.phone}</p></div>

              <div className="d-none d-md-flex justify-content-center"><div className="d-flex starIcon">
                <i className="rounded-circle fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star inactive"></i>
              </div>
              </div>

              <div className="mt-2 text-md-center"><p className="fw-bold">$65.88</p></div>
              <div><div className="d-flex">
                <button onClick={handleDisplay} className="btn1">
                  <span>
                    <img src="/Image/ProductViewer/chat.png" alt="" />
                  </span>{" "}
                Chat
              </button>
                <div>
                  <button
                    onClick={() =>
                      addToCart(
                        item.id,
                        productID,
                        discount,
                        name,
                        size,
                        color,
                        quantity,
                        image,
                        price
                      )
                    }
                    className="btn2"
                  >
                    {" "}
                  Add Cart
                </button>
                </div>
              </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopUnderProduct;
