import React from 'react';
import { FaEnvelope, FaFacebook, FaGooglePlus, FaInstagram, FaMapMarkedAlt, FaPhone, FaTwitter, FaVimeoSquare } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import payment from '../../assets/images/payment.png';
import './Footer.css';

const Footer = () => {

    const widgetIcon = [
        {
            icon: <FaFacebook/>
        },
        {
            icon: <FaTwitter/>
        },
        {
            icon: <FaGooglePlus/>
        },
        {
            icon: <FaVimeoSquare/>
        },
        {
            icon: <FaInstagram/>
        },
    ]
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-top__content">
                                <img src={logo} alt="logo" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    <br />
                                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                                </p>
                                <div className="widget-icon">
                                    <ul>
                                        {widgetIcon.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href="/#">
                                                        {item.icon}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-center__item">
                                <h3>Contact Us</h3>
                                <ul className="footer-contact">
                                    <li>
                                        <FaMapMarkedAlt/>
                                        <span>Addresss: HCM, VIET NAM</span>
                                    </li>
                                    <li>
                                        <FaEnvelope/>
                                        Email: phamquochuy0509@gmail.com
                                    </li>
                                    <li>
                                        <FaPhone/>
                                        Phone: +123 456 789
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
							<div className="footer-center__item">
								<h3>My account</h3>
								<ul className="footer-menu">
									<li><a href="/#">Order Status</a></li>
									<li><a href="/#">Register</a></li>
									<li><a href="/#">Sign-up</a></li>
									<li><a href="/#">My Wishlist</a></li>
									<li><a href="/#">Payment Options</a></li>
								</ul>
							</div>
						</div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-center__item">
                                <h3>About Us</h3>
                                <ul className="footer-menu">
                                    <li><a href="/#">Delivery</a></li>
                                    <li><a href="/#">Payment</a></li>
                                    <li><a href="/#">Return Policy</a></li>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-center__item">
                                <h3>Product tags</h3>
                                <ul className="product-tags">
                                    <li><a href="/#">collection</a></li>
                                    <li><a href="/#">fashion</a></li>
                                    <li><a href="/#">women</a></li>
                                    <li><a href="/#">men</a></li>
                                    <li><a href="/#">kid</a></li>
                                    <li><a href="/#">top</a></li>
                                    <li><a href="/#">sale</a></li>
                                    <li><a href="/#">new</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="copy-right">
                                <p>Copyright &copy; <span>PQH</span>. All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="payment-img">
                                <img src={payment} alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
