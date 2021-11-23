import React from 'react';
import { AiFillFacebook, AiFillYoutube,AiFillTwitterSquare, AiFillInstagram} from "react-icons/ai";
import './Footer.css'
const Footer = () => {
    return (
    <div>
      <div className="footer-container text-center">
        <div className="container text-center">
                <h1>Floral Design</h1>
                <div className="icons-container d-flex align-items-center justify-content-center">
                  <div className="icon">
                    <AiFillFacebook />
                  </div>
                  <div className="icon">
                    <AiFillYoutube />
                  </div>
                  <div className="icon">
                    <AiFillTwitterSquare />
                  </div>
                  <div className="icon">
                    <AiFillInstagram />
                  </div>
                </div>
                <p className="mt-4">
                  <small>
                    *please contacts us in our socialmedea.we are also there for you.please visit our channel.and subscribe to our channel.
                  </small>
                </p>
              <div className="footer-menu-container align-items-center justify-content-center">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Delivery</li>
                  <li className="footer-menu">About us</li>
                </ul>
              </div>
                    <p className="mt-5">
                        <small>CopyRight © . All rights reserved.</small>
                    </p>
                  </div>
                </div>
              </div>
    );
};

export default Footer;