import "./paymentConfrm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext/cartProvider";
import { AvailableShops } from "../BackendData/AvailableShops";
import _ from "lodash"
import { SumFunc, TotalPrice } from "../YourOrder/GroupBy";

const PaymentConfirm = () => {
  const cartItems = useContext(CartContext).cart
  const deleveryCharge = "free";

  const temp = []
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
          <div className="col-8">
            <div className="custom-payment-page">
              <div className="d-flex align-items-center">
                <div className="just-for-block-icon"></div>
                <div className="table-header-title-total-amount">
                  Total payment amount
                </div>
                <div className="ms-auto total-payment-amount">${TotalPrice(cartItems)}</div>
              </div>

              <div className="total-payment-sub-header">
                <p>*pay with mastercard **** **** **** 9876</p>
              </div>

              <form className="custom-payment-form">
                <div className="mb-3">
                  <input type="text" placeholder="Alt. Contact Numbe" />
                </div>

                <div className="mb-5">
                  <input type="email" placeholder="Email" />
                </div>

                <ul className="list-group payment-conditions">
                  <li className="list-group-item">
                    <p>
                      <span>*</span> Delivery will be made within 7 to 45 days,
                      depending on product and campaign
                    </p>
                  </li>
                  <li className="list-group-item">
                    <p>
                      <span>*</span> Delivery charge (40tk) will be added for
                      orders from Unimart, Meenaclick,Khaas
                      food,Khaleque&sons,Little india,Shwapno,Daily
                      Bazar,Suha,Angelic,Shorong and Bengal Meat Express shops
                    </p>
                  </li>
                  <li className="list-group-item">
                    <p>
                      <span>*</span> Price included VAT for VAT applicable
                      products
                    </p>
                  </li>
                  <li className="list-group-item d-flex custom-checkbox">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div>
                      <p>
                        I agree to the <span>Terms & Conditions</span> and
                        <span>Purchasing Policy</span> of ManhoodFashion
                      </p>
                    </div>
                  </li>
                </ul>
              </form>
              <div className="d-flex justify-content-between payment-page-button">
                <button className="back">Back</button>
                {/* <!--HERE model implementaion--> */}

                <button
                  type="button"
                  className="confirm"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmDialog"
                >
                  Confirm Order
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal"
                  id="confirmDialog"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content custom-modal-dialog">
                      <img
                        src="/Image/Payment Confirm/modalBodyIcon.png"
                        alt=""
                      />
                      <div className="modal-order-confirm">Order Confirmed</div>
                    </div>
                  </div>
                </div>

                {/* <!--here closed--> */}
              </div>
            </div>
          </div>

          <div className="col-4">
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

              <div className="pb-3 ">
                <p className="apply-coupon-code">Apply Coupon Code:</p>
                <div className="input-code-button ">
                  <input type="text" placeholder="ex: v500kll" />
                  <button className="custom-btn-code ">Apply</button>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentConfirm;
