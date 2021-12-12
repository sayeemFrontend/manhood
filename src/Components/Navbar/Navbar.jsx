import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext/cartProvider";
import Footer from "../Footer/Footer";
import OrderCart from "../OrderCart/orderCart";
import Sidebar from "../Sidebar/sidebar";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [cartShow, setCartShow] = React.useState(false);
  const [dotbar, setDotbar] = React.useState(false);


  const handleSidebar = () => {
    setShow(!show);
  };

  const handleCartShow = () => {
    setCartShow(!cartShow);
  };


  const cartLength = useContext(CartContext).cart.length;
  return (
    <div className="navBar fixed-top scroll-to-top">
      <nav className="navbar py-2 navbar-expand">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item " role="button" onClick={handleSidebar}>
              <a className="nav-link d-flex align-item-center" href>
                <img src="/Image/maneubar.svg" alt="" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-none d-md-block">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img className="brand-logo" src="/Image/brand.svg" alt="" />{" "}
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav  d-none d-md-flex">
            <li className="nav-item">
              <Link className="nav-link family547 color7272" to="/product/all/">
                Our Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link family547 color7272" to="/product/newin/">
                New in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link family547 color7272" to="/product/hotdeal/">
                Hot deals
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav d-none d-md-block ">
            <li className="nav-item">
              <Link className="nav-link family647 color6060" to="/marchant/login/">
                Marchant Account
              </Link>
            </li>
          </ul>

          <form className="d-flex inputContainer" action="#">
            <img
              className="searchIcon"
              src="/Image/clarity_search-line.png"
              alt=""
            />
            <input className="inputField " placeholder="Search" />
            <div className="buttonContainer">
              <button className="customButton" type="submit">
                Search
              </button>
            </div>
          </form>

          <ul className="navbar-nav lastGroup">
            <li onClick={() => window.alert("Under Processing")} className="nav-item d-none d-md-block">
              <Link className="nav-link" >
                <img src="/Image/notifications.png" alt="" />
              </Link>
            </li>

            <li className="nav-item">
              <div onClick={handleCartShow} className="nav-link position-relative" style={{ cursor: "pointer" }}>
                <img src="/Image/carticon.png" alt="" />
                <span className="ms-0 badge text-dark badgeCustom">
                  {cartLength}
                </span>
              </div>
            </li>

            <li onClick={() => window.alert("Under Processing")} className="nav-item  d-none d-md-block ">
              <Link className="nav-link">
                <img src="/Image/personicon2.png" alt="" />
              </Link>
            </li>
          </ul>
          <ul style={{ cursor: "pointer" }} onClick={() => setDotbar(!dotbar)} className="navbar nav d-md-none">
            <li className="nav-item">.</li>
            <li className="nav-item">.</li>
            <li className="nav-item">.</li>
          </ul>
        </div>
      </nav>
      <div className={dotbar ? "dotbarDisply d-md-none" : "d-none"}>
        <ul className="list-unstyled">
          <li className="nav-item  ">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li onClick={() => window.alert("Under Processing")} className="nav-item  d-none d-md-block ">
            <Link className="nav-link">
              <img src="/Image/personicon2.png" alt="" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link family547 color7272" to="/product/newin/">
              New in
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link family547 color7272" to="/product/hotdeal/">
              Hot deals
              </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link family647 color6060" to="/marchant/login/">
              Marchant Account
              </Link>
          </li>

        </ul>
      </div>
      <Sidebar show={show} />
      <OrderCart cartShow={cartShow} setCartShow={setCartShow} />
    </div>
  );
};

export default Navbar;
