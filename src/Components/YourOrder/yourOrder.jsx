import React, { useContext } from "react";
import { CartContext } from "../Context/cartContext/cartProvider";
import "./yourOrder.css";
import { AvailableShops } from "../BackendData/AvailableShops";
import GroupBuShop from "./groupByShop";
import _ from "lodash"
import { SumFunc, TotalPrice } from "./GroupBy";
import { Link } from "react-router-dom";


const YourOrder = () => {
  const deleveryCharge = "free";
  // const discount = 150
  const cartItems = useContext(CartContext).cart
  const temp = []


  // for (let i = 0; i < cartItems?.lenght; i++) {
  //   console.log("heoo");
  //   for (let j = 0; j < AvailableShops.length; j++) {
  //     if (cartItems[i].shopID == AvailableShops[j].id) {
  //       temp.push(AvailableShops[j])
  //     }
  //   }
  // }

  cartItems.forEach(i => {
    AvailableShops.forEach(it => {

      if (i.shopID === it.id) {
        temp.push(it)
      }
    })

  })
  const shops = _.uniq(temp)

  return (
    <section className="order-place-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8  custom-order-table">
            <div className="table-header-title">Your Order</div>
            {shops?.map(shp => (
              <thead>
                <tr>
                  <table className="table table-borderless">
                    <th colspan="3">
                      <div className="custom-header">
                        <div className="custom-header-position">
                          <img src="/Image/orderPlace/headerIcon.png" alt="" />
                        </div>
                        <div>{shp ? shp.name : "loading"}</div>
                      </div>
                    </th>
                    <GroupBuShop shopID={shp.id} cartItems={cartItems} />
                  </table>
                </tr>
              </thead>

            ))}

            {/* {shopIDs.map((itemId) => (
              <GroupBY
                AvailableShops={AvailableShops}
                shopID={itemId}
                cartItems={cartItems}
              />
            ))} */}
          </div>
          <div className="col-md-4">
            <div className="selected-item-card">
              {shops.map(sh => (
                <div className="custom-list-items d-flex">
                  <div className="me-auto">{sh.name}</div>
                  <div>${SumFunc(sh.id)}</div>
                </div>
              ))}


              <div className="item-card-order-detail">Order details</div>


              <div className="custom-list-items d-flex">
                <div className="me-auto">Total Price</div>
                <div>${TotalPrice(cartItems)}</div>
              </div>

              <div className="custom-list-items d-flex">
                <div className="me-auto">Delevery Charge</div>
                <div>${deleveryCharge}</div>
              </div>

              {/* <div className="custom-list-items d-flex">
                <div className="me-auto">Disscount</div>
                <div>${discount}</div>
              </div> */}


              <div className="custom-list-items border-up d-flex">
                <div className="me-auto">Total Amount</div>
                <div> ${TotalPrice(cartItems)}</div>

              </div>

              <div>
                <p className="apply-coupon-code">Apply Coupon Code:</p>
                <div className="input-code-button">
                  <input type="text" placeholder="ex: v500kll" />
                  <button className="custom-btn-code ">Apply</button>
                </div>
              </div>

              <div className="custom-checkout">
                <Link to="/checkout/">
                  <button className="custom-checkout-btn">
                    Procced to chechout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourOrder;
