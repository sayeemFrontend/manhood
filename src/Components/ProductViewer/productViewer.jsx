import React from "react";
import { Link, useParams } from "react-router-dom";
import { AllProducts } from "../BackendData/DataAllProducts";
import "./productViewer.css";
import ShopUnderProduct from "./shopUnderProduct";

const ProductViewer = () => {
  const { id } = useParams();
  const productId = id;

  const product = AllProducts.find((it) => it.id == productId);

  const [disply, setDisplay] = React.useState({ display: "none" });
  const [activeImage, setActive] = React.useState(product.image[0]);
  const [size, activeSize] = React.useState("S");
  const [color, activeColor] = React.useState(product.color[0]);
  const [quantity, setQuantity] = React.useState(1);

  const handleDisplay = () => {
    setDisplay({
      display: "block",
    });
  };
  const handleClose = () => {
    setDisplay({
      display: "none",
    });
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div>
      <section className="productViewer">
        <div className="container">
          <div className="row r1">
            <div className="col-12 col-md-5 c1">
              <div className="productViewerImgWraper">
                <img src={`/${activeImage}`} alt=" " />
              </div>
              <div className="d-flex justify-content-around mt-5 productViewerMinImg">
                {product.image.map((img) => (
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => setActive(img)}
                    src={`/${img}`}
                    alt=""
                  />
                ))}
              </div>

              <div className="my-2 nextPreviousIcon">
                <p className="my-0 nextIcon">
                  Next
                  <span>
                    <img src="/Image/ProductViewer/next.png" alt="" />
                  </span>
                </p>
                <p className="previousIcon">
                  <span>
                    <img src="/Image/ProductViewer/previous.png" alt="" />
                  </span>
                  Previous
                </p>
              </div>
            </div>
            <div className="col-12 col-md-7 c2">
              <div className="r2c1">
                <p className="productViewHeader">{product.name}</p>
                <p className="productViewPara">{product.description}</p>

                <div className="d-flex r3c1">
                  <div className="px-3 d-flex flex-grow-1 align-items-center justify-content-between ratingItem">
                    <p>{product.rating}</p>
                    <img
                      src="/Image/ProductViewer/clarity_half-star-solid.png"
                      alt=""
                    />
                    <span></span>
                    <p className="raitingDescription">
                      344 People rate this this product
                    </p>
                  </div>
                  <div className="inStock">
                    <p>In Stock</p>
                  </div>
                </div>

                <div className="r4c1">
                  <p className="p1">Total Price : ${product.price}</p>
                  <p className="p2">
                    Discounted Price :{" "}
                    <span className="fw-bold span1">
                      ${Math.floor((product.price * (100 - product.discount)) / 100)}
                    </span>
                    <span className="span2 ms-1">
                      ( After {product.discount}% Discount)
                    </span>
                  </p>
                </div>

                <div className="r5">
                  <div className="r5c1" style={{ width: "270px" }}>
                    <p className="p1">Select Size:</p>
                    <div className="my-3 d-flex justify-content-between p2">
                      {product.size?.map((s) => (
                        <p
                          onClick={() => activeSize(s)}
                          style={{ cursor: "pointer" }}
                          className={
                            size === s
                              ? "rounded-circle fw-bold large"
                              : "rounded-circle"
                          }
                        >
                          {s}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="r5c2" style={{ width: "200px" }}>
                    <p className="p1">Product Color:</p>
                    <div className="d-flex justify-content-between p2" >
                      {product.color?.map((c) => (
                        <p
                          onClick={() => activeColor(c)}
                          style={{
                            cursor: "pointer",
                            backgroundColor: `#${c}`,
                          }}
                          className={
                            color === c
                              ? "rounded-circle circleActive"
                              : "rounded-circle circle"
                          }
                        ></p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="r6c1 me-5">
                    <select
                      onChange={handleChange}
                      className="form-select customSelectForm"
                      value={quantity}
                    >
                      <option value="1">Qty: 01</option>
                      <option value="2">Qty: 02</option>
                      <option value="3">Qty:03</option>
                      <option value="4">Qty:04</option>
                      <option value="5">Qty:05</option>
                    </select>
                  </div>
                  <div className="ms-5 r6c2">Sellers</div>
                </div>

                <div className="mt-3 mb-3 productDetails">Product Details:</div>

                <div className="row productDetailsList">
                  <div className="col-6">
                    <li>Color : Black</li>
                    <li>Neck Type : Round Neck</li>
                    <li>Material : Cotton</li>
                    <li>Pattern : Plain</li>
                    <li>Sleeve Type : Half</li>
                    <li>Occasion : Daily</li>
                    <li>Feature : Easily Washable</li>
                  </div>
                  <div className="col-6">
                    <li>Color : Black</li>
                    <li>Neck Type : Round Neck</li>
                    <li>Material : Cotton</li>
                    <li>Pattern : Plain</li>
                    <li>Sleeve Type : Half</li>
                    <li>Occasion : Daily</li>
                    <li>Feature : Easily Washable</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="r2">
          <div className="availableShop">
            <div className="container">
              <p>Available Shops</p>
            </div>
          </div>
          <ShopUnderProduct
            handleDisplay={handleDisplay}
            productID={product.id}
            discount={product.discount}
            name={product.name}
            size={size}
            color={color}
            image={activeImage}
            quantity={quantity}
            price={product.price}
          />
        </div>

        <div className="mt-5 container">
          <div className="row r3">
            <div className="col-12 col-md-6">
              <div className="px-1 d-flex flex-grow-1 align-items-center justify-content-between ratingItem">
                <p>{product.rating}</p>
                <img
                  src="/Image/ProductViewer/clarity_half-star-solid.png"
                  alt=""
                />
                <div className="raitingDescription">Ratings</div>
              </div>

              <div className="d-flex justify-content-between align-items-baseline">
                <div className=" mt-5  d-flex align-items-center">
                  <div className=" me-2 fw-bold fs-4"> {product.rating}</div>
                  <div className="r3c1Icon">
                    <i className="fas fa-star active"></i>
                  </div>
                </div>

                <div className="ratingList">
                  <div className="row customProgressBar">
                    <div className="col-1 ratingC1"> 5</div>
                    <div className="col-1">
                      <i className=" fas fa-star"></i>
                    </div>
                    <div className="col-9">
                      <div className="progress">
                        <div
                          className="progress-bar c1"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1">77</div>
                  </div>

                  <div className="row customProgressBar">
                    <div className="col-1 ratingC1 ">4</div>
                    <div className="col-1">
                      <i className=" fas fa-star"></i>
                    </div>
                    <div className="col-9">
                      <div className="progress">
                        <div
                          className="progress-bar c5"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1">77</div>
                  </div>

                  <div className="row customProgressBar">
                    <div className="col-1 ratingC1">3</div>
                    <div className="col-1">
                      <i className=" fas fa-star"></i>
                    </div>
                    <div className="col-9">
                      <div className="progress">
                        <div
                          className="progress-bar c3"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1">34</div>
                  </div>

                  <div className="row customProgressBar">
                    <div className="col-1 ratingC1">2</div>
                    <div className="col-1">
                      <i className=" fas fa-star"></i>
                    </div>
                    <div className="col-9">
                      <div className="progress">
                        <div
                          className="progress-bar c4"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1">23</div>
                  </div>

                  <div className="row customProgressBar">
                    <div className="col-1  ratingC1">1</div>
                    <div className="col-1 ">
                      <i className=" fas fa-star"></i>
                    </div>
                    <div className="col-9">
                      <div className="progress">
                        <div
                          className="progress-bar c5"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-1">12</div>
                  </div>
                </div>
              </div>

              <div className="commentAboutProduct">
                <div className="mt-5 mb-2 header">Customer Reviews (22)</div>

                <div className="my-2 commentBox">
                  <div className="d-flex">
                    <div>
                      <img
                        src="/Image/ProductViewer/commentProfile1.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 me-5">
                      <p className="name">Nick Joanas</p>
                      <p className="tittle">18 Dec 2020 </p>{" "}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className=" me-2 fw-bold fs-4"> 4.8</div>
                      <div className="r3c1Icon">
                        <i className="fas fa-star active"></i>
                      </div>
                    </div>
                  </div>
                  <div className="commentPara">
                    I think it will be big but it's not but the quality is good.
                    If you are going for small ones then go for it..
                  </div>
                  <div className="my-3 d-flex justify-content-between likeDisLike">
                    <div>
                      <img src="/Image/ProductViewer/ei_like.svg" alt="" />{" "}
                      <span>20</span>
                    </div>
                    <div>
                      <img src="/Image/ProductViewer/Disei_like .svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className="my-2 commentBox">
                  <div className="d-flex">
                    <div>
                      <img
                        src="/Image/ProductViewer/commentProfile1.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 me-5">
                      <p className="name">Nick Joanas</p>
                      <p className="tittle">18 Dec 2020 </p>{" "}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className=" me-2 fw-bold fs-4"> 4.8</div>
                      <div className="r3c1Icon">
                        <i className="fas fa-star active"></i>
                      </div>
                    </div>
                  </div>
                  <div className="commentPara">
                    I think it will be big but it's not but the quality is good.
                    If you are going for small ones then go for it..
                  </div>
                  <div className="my-3 d-flex justify-content-between likeDisLike">
                    <div>
                      <img src="/Image/ProductViewer/ei_like.svg" alt="" />{" "}
                      <span>20</span>
                    </div>
                    <div>
                      <img src="/Image/ProductViewer/Disei_like .svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className="my-2 commentBox">
                  <div className="d-flex">
                    <div>
                      <img
                        src="/Image/ProductViewer/commentProfile1.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 me-5">
                      <p className="name">Nick Joanas</p>
                      <p className="tittle">18 Dec 2020 </p>{" "}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className=" me-2 fw-bold fs-4"> {product.rating}</div>
                      <div className="r3c1Icon">
                        <i className="fas fa-star active"></i>
                      </div>
                    </div>
                  </div>
                  <div className="commentPara">
                    I think it will be big but it's not but the quality is good.
                    If you are going for small ones then go for it..
                  </div>
                  <div className="my-3 d-flex justify-content-between likeDisLike">
                    <div>
                      <img src="/Image/ProductViewer/ei_like.svg" alt="" />{" "}
                      <span>20</span>
                    </div>
                    <div>
                      <img src="/Image/ProductViewer/Disei_like .svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className="my-2 commentBox">
                  <div className="d-flex">
                    <div>
                      <img
                        src="/Image/ProductViewer/commentProfile1.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 me-5">
                      <p className="name">Nick Joanas</p>
                      <p className="tittle">18 Dec 2020 </p>{" "}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className=" me-2 fw-bold fs-4"> {product.rating}</div>
                      <div className="r3c1Icon">
                        <i className="fas fa-star active"></i>
                      </div>
                    </div>
                  </div>
                  <div className="commentPara">
                    I think it will be big but it's not but the quality is good.
                    If you are going for small ones then go for it..
                  </div>
                  <div className="my-3 d-flex justify-content-between likeDisLike">
                    <div>
                      <img src="/Image/ProductViewer/ei_like.svg" alt="" />{" "}
                      <span>20</span>
                    </div>
                    <div>
                      <img src="/Image/ProductViewer/Disei_like .svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className="my-2 commentBox lastCommentBox">
                  <div className="d-flex">
                    <div>
                      <img
                        src="/Image/ProductViewer/commentProfile1.png"
                        alt=""
                      />
                    </div>
                    <div className="ms-2 me-5">
                      <p className="name">Nick Joanas</p>
                      <p className="tittle">18 Dec 2020 </p>{" "}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className=" me-2 fw-bold fs-4"> 4.8</div>
                      <div className="r3c1Icon">
                        <i className="fas fa-star active"></i>
                      </div>
                    </div>
                  </div>
                  <div className="commentPara">
                    I think it will be big but it's not but the quality is good.
                    If you are going for small ones then go for it..
                  </div>
                  <div className="my-3 d-flex justify-content-between likeDisLike">
                    <div>
                      <img src="/Image/ProductViewer/ei_like.svg" alt="" />{" "}
                      <span>20</span>
                    </div>
                    <div>
                      <img src="/Image/ProductViewer/Disei_like .svg" alt="" />
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 c2">
              <p className="r3c2Header">SIMILAR PRODUCTS</p>
              <div className="row c2r1">
                <div className="col-6 c2r1c2">
                  <div className="cart text-center">
                    <img src="/Image/ProductViewer/r3cartPic.png" alt="" />
                    <div>
                      <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                      <p className="p2 ">A classic in every sense of the world</p>
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <p className="cartFlexp1">$45.00</p>
                        <p className="cartFlexp2">$55.00</p>
                        <p className="cartFlexp3">($10 less)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 c2r1c2">
                  <div className="cart text-center">
                    <img src="/Image/ProductViewer/r3cartPic.png" alt="" />
                    <div>
                      <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                      <p className="p2 ">A classic in every sense of the world</p>
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <p className="cartFlexp1 ">$45.00</p>
                        <p className="cartFlexp2">$55.00</p>
                        <p className="cartFlexp3">($10 less)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row c2r1">
                <div className="col-6 c2r1c2">
                  <div className="cart text-center">
                    <img src="/Image/ProductViewer/r3cartPic.png" alt="" />
                    <div>
                      <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                      <p className="p2 ">A classic in every sense of the world</p>
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <p className="cartFlexp1">$45.00</p>
                        <p className="cartFlexp2">$55.00</p>
                        <p className="cartFlexp3">($10 less)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 c2r1c2">
                  <div className="cart text-center">
                    <img src="/Image/ProductViewer/r3cartPic.png" alt="" />
                    <div>
                      <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                      <p className="p2 ">A classic in every sense of the world</p>
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <p className="cartFlexp1">$45.00</p>
                        <p className="cartFlexp2">$55.00</p>
                        <p className="cartFlexp3">($10 less)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row c2r1">
                <div className="col-6 c2r1c2">
                  <div className="cart text-center">
                    <img src="/Image/ProductViewer/r3cartPic.png" alt="" />
                    <div>
                      <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                      <p className="p2 ">A classic in every sense of the world</p>
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <p className="cartFlexp1">$45.00</p>
                        <p className="cartFlexp2">$55.00</p>
                        <p className="cartFlexp3">($10 less)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 c2r1c2">
                  <div className="cart text-center">
                    <img src="/Image/ProductViewer/r3cartPic.png" alt="" />
                    <div>
                      <p className="p1 ">Typographic Print Crew-Neck T-shirt</p>
                      <p className="p2 ">A classic in every sense of the world</p>
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <p className="cartFlexp1">$45.00</p>
                        <p className="cartFlexp2">$55.00</p>
                        <p className="cartFlexp3">($10 less)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div style={disply} className="custom-chat-box-container w-xs-100 w-md-25 ">
          <div className="px-3 pt-2 d-flex align-items-baseline chat-box-bar">
            <div className="me-3">
              <img src="/Image/ChatBox/chat-logo.png" alt="" />
            </div>
            <div className="me-auto chat-box-bar-title">
              <p>
                Little India <span></span>
              </p>
            </div>

            <div style={{ cursor: "pointer" }} onClick={handleClose} className="me-3">
              <img src="/Image/ChatBox/minus (2).png" alt="" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img
                onClick={handleClose}
                src="/Image/ChatBox/maki_cross-15.png"
                alt=""
              />
            </div>
          </div>

          <div className="px-3 pt-2 chat-box-body">
            <div className="mt-3 mb-5 text-center chat-box-chatting-start">
              <p>Start your conversation with little india</p>
            </div>

            <div className="d-flex justify-content-end"><div className="chat-box-msg-receive">
              <p className="m-0">Wellcom</p>
            </div></div>

            <div className="py-2 d-flex justify-content-start">
              <div className="chat-box-msg-send">
                <p className="m-0">helow how r yoou</p>
              </div>
            </div>

          </div>
          <div className="d-flex custom-chat-box-input">
            <div className="d-flex chat-box-input">
              <img className="p-1" src="/Image/ChatBox/fe_picture.png" alt="" />
              <input placeholder="Type message here..." />
              <img className="p-2" src="/Image/ChatBox/imoji.png" alt="" />
            </div>

            <img
              className="ms-3 py-1"
              src="/Image/ChatBox/chatbox icon.png"
              alt=""
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductViewer;
