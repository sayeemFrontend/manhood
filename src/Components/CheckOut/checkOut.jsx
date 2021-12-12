import React, { useState } from "react";
import AddAddress from "./AddAddress/addAddress";
import "./checkOut.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext/cartProvider";
import { AvailableShops } from "../BackendData/AvailableShops";
import _ from "lodash"
import { SumFunc, TotalPrice } from "../YourOrder/GroupBy";
import AddNewCard from "./AddNewCard/addressCard";

const CheckOut = () => {
  //adresee box data
  const addBox1 = {
    f_name: "Md. Zahid ",
    l_name: "Hossain",
    city: " Dhaka",
    post_code: " 1229",
    f_address: "Transparent Kohinoor, Plot-3 (2nd Floor, Kobi Faruk) Sarani",
    phone: "01946-366448",
    email: "",
  };
  const addBox2 = {
    f_name: "Md. Zahid ",
    l_name: "ikbal",
    city: " Dhaka",
    post_code: " 1229",
    f_address: "Transparent Kohinoor, Plot-3 (2nd Floor, Kobi Faruk) Sarani",
    phone: "01946-366448",
    email: "",
  };
  const arr = [addBox1, addBox2];
  const [address, setAddress] = React.useState(arr);
  const [active, setActive] = React.useState(null);
  const items = useContext(CartContext).cart

  //paymentbox Data

  const payBox1 = {
    card_holder: "",
    image: "Image/OrderPaymentDelevery details/mastercard.jpg",
    card_number: "**** **** **** 8797",
    expire_date: "24/25",
    cvc_cw: "",
    city: "",
    post_code: ""
  }
  const payBox2 = {
    card_holder: "",
    image: "Image/OrderPaymentDelevery details/mastercard.jpg",
    card_number: "**** **** **** 8797",
    expire_date: "24/25",
    cvc_cw: "",
    city: "",
    post_code: ""
  }

  const arrPay = [payBox1, payBox2];
  const [paymethod, setPaymethod] = React.useState(arrPay);
  const [payActive, setPayActive] = React.useState(null);
  const [check, setCheckValue] = React.useState()

  const deleveryCharge = "free";
  // const discount = 150
  const cartItems = useContext(CartContext).cart
  const temp = []

  cartItems.forEach(i => {
    AvailableShops.forEach(it => {

      if (i.shopID === it.id) {
        temp.push(it)
      }
    })

  })
  const shops = _.uniq(temp)

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckValue(e.target.value)
    }

  }

  return (

    <div>

      {/* modals */}

      <div className="modal fade" id="addAddress">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <AddAddress address={address} setAddress={setAddress} />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="addNewCard">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <AddNewCard paymethod={paymethod} setPaymethod={setPaymethod} />
            </div>
          </div>
        </div>
      </div>
      {/* modals ends */}
      <section className="order-place-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="checkout-payment-detail">
                <div className="delevery-address">

                  <img
                    className="me-3 address-box-1-header-img"
                    src="/Image/OrderPaymentDelevery details/Vector (6).png"
                    alt=""
                  />
                  <span className="address-box-1-header-name">Delivery Address</span>

                  <div className="mt-3 row">
                    {address.map((box) => (
                      <div className="col-4">
                        <div
                          className="p-3 address-box-1"
                          onClick={() => setActive(box)}
                        >
                          <div className="d-flex justify-content-between align-items-baseline address-box-header">
                            <p className="address-box-name">
                              {box.f_name + box.l_name}
                            </p>
                            <img
                              src="/Image/OrderPaymentDelevery details/editIcon.png"
                              alt=""
                            />
                          </div>
                          <div className="address-box-address">
                            <p>{box.f_address + box.city + box.post_code}</p>
                            <p>Phone:{box.phone}</p>
                          </div>
                          {active === box ? (
                            <div className="tikMark">
                              <img
                                src="/Image/OrderPaymentDelevery details/tik mark.png"
                                alt=""
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                    <div className="col-3">
                      <div style={{ cursor: "pointer" }} className="p-4 position-relative address-box-3" data-bs-toggle="modal"
                        data-bs-target="#addAddress">
                        <div className="text-center position-absolute top-50 start-50 translate-middle">
                          <img
                            src="/Image/OrderPaymentDelevery details/ant-design_plus-circle-filled.png"
                            alt=""
                          />

                          <button
                            className="customButton"

                          >
                            <p className="text-center">Add Address</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="my-4 order-summary">
                  <img
                    className="me-3 address-box-1-header-img"
                    src="/Image/OrderPaymentDelevery details/Vector (4).png"
                    alt=""
                  />
                  <span className="address-box-1-header-name">Order Summary</span>


                  {items?.map(item => (
                    <div className="ms-5 mb-3 mt-4">
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={`/${item.image}`}
                            alt=""
                            width="100"
                          />
                        </div>
                        <div className="col-10 ps-4">
                          <p className="order-summary-name">
                            {item.name}
                          </p>

                          <div className="d-flex order-summary-r2">
                            <p className="c1">${item.discountedPrce}</p>
                            <p className="c2">${item.price}</p>
                            <p className="c3">( {item.discount}% Off )</p>
                            <p className="ms-4 fw-bold">Quantity:<span className="ms-2">{item.quantity}</span> </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}

                </div>

                <div className="my-5 payment-details">
                  <img
                    className="me-3 address-box-1-header-img"
                    src="/Image/OrderPaymentDelevery details/Vector (5).png"
                    alt=""
                  />
                  <span className="address-box-1-header-name">Payment Details</span>

                  <div className="d-flex justify-content-between ms-5 mt-3 mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="checkItem"
                        id="input1"
                        value="debitCard"
                        defaultChecked
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="form-check-label" for="input1">
                        Debit card/Credit card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="input2"
                        name="checkItem"
                        value="netBank"
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="form-check-label" for="input2">
                        Net Banking
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="input3"
                        value="cashDelevery"
                        name="checkItem"
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="form-check-label" for="input3">
                        Cash on delivery
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="input4"
                        name="checkItem"
                        value="emi"
                        onChange={(e) => handleChange(e)}
                      />
                      <label className="form-check-label" for="input4">
                        EMI
                      </label>
                    </div>

                  </div>

                  <div className="row">
                    {paymethod.map((box) => (
                      <div className="col-4">
                        <div
                          className="p-3 address-box-1"
                          onClick={() => setPayActive(box)}
                        >
                          <div className="master-card">
                            <img
                              src={`/${box.image}`}
                              width="50px"
                              alt=""
                            />
                            <p className="my-2 account-no">{box.card_number}</p>
                            <p className="mb-4 expired-date">Expired on: {box.expire_date}</p>
                          </div>
                          {payActive === box ? (
                            <div className="tikMark">
                              <img
                                src="/Image/OrderPaymentDelevery details/tik mark.png"
                                alt=""
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                    <div className="col-3">
                      <div style={{ cursor: "pointer" }} className="p-4 position-relative address-box-3" data-bs-toggle="modal"
                        data-bs-target="#addNewCard">
                        <div className="text-center position-absolute top-50 start-50 translate-middle">
                          <img
                            src="/Image/OrderPaymentDelevery details/ant-design_plus-circle-filled.png"
                            alt=""
                          />

                          <button
                            className="customButton"

                          >
                            <p className="text-center">Add New Card</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <div className="d-flex ms-5">
                    <div className="p-3 me-3 address-box-1">
                      <div className="master-card">
                        <img
                          src="/Image/OrderPaymentDelevery details/mastercard.jpg"
                          width="50px"
                          alt=""
                        />
                        <p className="my-2 account-no">**** **** **** 8797</p>
                        <p className="mb-4 expired-date">Expired on: 24/25</p>
                      </div>
                      <div className="d-flex">
                        <img
                          className="ms-auto"
                          src="/Image/OrderPaymentDelevery details/tik mark.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="p-3 me-3 address-box-2">
                      <div className="master-card">
                        <img
                          src="/Image/OrderPaymentDelevery details/visa (2).png"
                          width="60px"
                          alt=""
                        />
                        <p className="my-2 account-no">**** **** **** 8797</p>
                        <p className="mb-4 expired-date">Expired on: 24/25</p>
                      </div>
                    </div>

                    <div className="p-3 position-relative address-box-3">
                      <div className="text-center position-absolute top-50 start-50 translate-middle">
                        <img
                          src="/Image/OrderPaymentDelevery details/ant-design_plus-circle-filled.png"
                          alt=""
                        />

                        <p className="text-center">Add new card</p>
                      </div>
                    </div>
                  </div>
                */}
                </div>

                <div className="payment-now">
                  <button>Payment Now</button>
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

                <div>
                  <p className="apply-coupon-code">Apply Coupon Code:</p>
                  <div className="input-code-button">
                    <input type="text" placeholder="ex: v500kll" />
                    <button className="custom-btn-code ">Apply</button>
                  </div>
                </div>

                <div className="custom-checkout">
                  <Link to="/payment/confirm/">
                    <button className="custom-checkout-btn">
                      Continue
                </button>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div >
  );
};

export default CheckOut;
