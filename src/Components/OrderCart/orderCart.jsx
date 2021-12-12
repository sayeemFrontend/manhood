import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext/cartProvider";
import "./orderCart.css"


const OrderCart = ({ cartShow, setCartShow }) => {
  //update spacific object in list method-1


  const items = useContext(CartContext).cart

  const deleteItem = useContext(CartContext).deleteCart
  const updateProperty = useContext(CartContext).updateQuantity



  // const decrement = (item) => {
  //   const copy = [...orderList];
  //   const index = copy.indexOf(item);
  //   copy[index].quantity = --copy[index].quantity;
  //   updateList(copy);
  // };

  //update spacific object in list method-2
  // const increment = (givenItem) => {
  //   updateList(
  //     orderList.map((item) => {
  //       if (item.id === givenItem.id) {
  //         item.quantity = item.quantity + 1;
  //       }

  //       return item;
  //     })
  //   );
  // };
  const deleveryCost = 0.0;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    items.map((it) => {
      sum = sum + it.quantity * it.price;
      return sum;
    });
    setTotal(sum);
  }, [total, items]);



  return (
    <section className={cartShow ? "orderCartOn" : "orderCartOff"}>
      <div className="row" style={{ height: "100%" }}>
        <div onClick={() => setCartShow(false)} className="col col-md-7"></div>
        <div className="col-12 col-md-5">
          <div className="cartContainer">
            <div className="container px-2 py-2">
              <div className="row p-3">
                <div onClick={() => setCartShow(false)} style={{ cursor: "pointer" }} className="col-2">
                  <img src="/Image/OrderCheckout/crossicon.png" alt="" />
                </div>
                <div className="col-10 text-center order-checkout-header">
                  <p>Your Order Cart</p>
                </div>
              </div>

              <div className="itemContainer">
                {items.map((item) => (
                  <div key={item.id} className="my-3 cartItem">
                    <div className="row">
                      <div className="col-2">
                        <div className="order-checkout-picture">
                          <img
                            src={`/${item.image}`}
                            width="100%"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <div className="cartItemList">
                          <div className="itemName">
                            <p>{item.name}</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <ul className="list-group list-group-horizontal">
                              <li className="list-group-item order-checkout-borderless">
                                ${item.discountedPrce}
                              </li>
                              <li className="list-group-item order-checkout-borderless">
                                <img src="/Image/orderPlace/cross.png" alt="" />
                              </li>
                              <li className="list-group-item order-checkout-borderless">
                                {item.quantity}
                              </li>
                            </ul>
                            <div>
                              <p className="order-amount">{item.quantity * item.discountedPrce}</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <ul className="list-group list-group-horizontal list-group-border">
                                <li style={{ cursor: "pointer" }}
                                  onClick={() => updateProperty(item, --item.quantity)}
                                  className="list-group-item borderless-2nd"
                                >
                                  <img src="/Image/orderPlace/minus.png" alt="" />
                                </li>
                                <li className="list-group-item borderless-2nd">
                                  {item.quantity}
                                </li>
                                <li style={{ cursor: "pointer" }}
                                  onClick={() => updateProperty(item, ++item.quantity)}
                                  className="list-group-item borderless-2nd"
                                >
                                  <img src="/Image/orderPlace/plus.png" alt="" />
                                </li>
                              </ul>
                            </div>
                            <div>
                              <button
                                onClick={() => deleteItem(items.indexOf(item))}
                                className="pe-0 customButton order-remove"
                              >
                                Remove
                    </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-3 checkOutButton">
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>${total}</p>
              </div>
              <div className="px-2 d-flex justify-content-center order-checkout-button">
                <Link style={{ width: "100%" }} to="/your/order/">
                  <button onClick={() => setCartShow(false)}>Chechout </button>{" "}
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderCart;
