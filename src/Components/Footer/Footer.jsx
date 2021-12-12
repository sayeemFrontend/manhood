import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerBase">
      <div className="container">
        <div className="footerContent">
          <div className="row">
            <div className="col-8 col-md-5">
              <img src="/Image/footerlogo.png" alt="" />
              <p className="footer-header">Mens Collection</p>
              <p className="footer-list">We dhajsajsha jasdga jashajs sjdgd</p>
              <div className="icon-display">
                <div className="footer-icon">
                  <Link>
                    <img src="/Image/facebook.png" alt="" />
                  </Link>
                </div>
                <div className="footer-icon">
                  <Link>
                    <img src="/Image/linkdin.png" alt="" />
                  </Link>
                </div>
                <div className="footer-icon">
                  <Link>
                    <img src="/Image/outube.png" alt="" />
                  </Link>
                </div>
              </div>
              <p className="copy-write">Copyright@lotuesas aasahsajs</p>
            </div>

            <div className=" col-4 col-md-2">
              <p className="footer-header">Products</p>
              <div>
                <div>
                  <Link className="footer-list">
                    New
                  </Link>
                </div>
                <div>
                  <Link className="footer-list">
                    Upcomming
                  </Link>
                </div>
                <div>
                  <Link className="footer-list" href>
                    New Collection
                  </Link>
                </div>
                <div>
                  <Link className="footer-list" href>
                    On Sale
                  </Link>
                </div>
                <div>
                  <Link className="footer-list">
                    On Sale
                  </Link>
                </div>
                <div>
                  <Link className="footer-list">
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-4 col-md-2">
              <p className="footer-header">Resources</p>
              <div>
                <div>
                  <Link className="footer-list" >
                    Instagrap post
                  </Link>
                </div>
                <div>
                  <Link className="footer-list">
                    Bolg post
                  </Link>
                </div>
                <div>
                  <Link className="footer-list" >
                    facebook Post
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-8 col-md-3">
              <p className="footer-header">Contacts</p>
              <div>
                <div>
                  <Link className="footer-list" href>
                    Live Chat
                  </Link>
                </div>
                <div>
                  <Link className="footer-list" href>
                    mail us
                  </Link>
                </div>
              </div>

              <div className="footer-last-col">
                <p className="footer-last-row-text"> We Accept</p>
                <div className="text-center d-flex justify-content-around">
                  <Link><img src="/Image/nagad.png" alt="" /></Link>
                  <Link><img src="/Image/bkash.png" alt="" /></Link>
                  <Link><img src="/Image/rocket.png" alt="" /></Link>
                  <Link> <img src="/Image/mastercard.png" alt="" /></Link>
                  <Link><img src="/Image/visa.png" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
