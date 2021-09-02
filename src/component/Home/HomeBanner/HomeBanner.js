import React from "react";
import "./HomeBanner.css";
import { Link } from "react-router-dom";
import image1 from "../../../assets/images/Banner/banner1.jpg";
import image2 from "../../../assets/images/Banner/banner2.jpg";
import image3 from "../../../assets/images/Banner/banner3.jpg";
import image4 from "../../../assets/images/Banner/banner4.jpg";
import image5 from "../../../assets/images/Banner/b1.jpg";

const HomeBanner = () => {
    return (
        <section className="home-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="single-banner">
                            <Link to="/category/men">
                                <img src={image1} alt="image1" />
                                <div className="banner-content">
                                    <h2>Men's Collection</h2>
                                    <p>
                                        Our sunglasses and retro frames are all shades of great.
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="single-banner mt-4">
                            <Link to="/category/men">
                                <img src={image2} alt="image2" />
                                <div className="banner-content">
                                    <h2>Men's Collection</h2>
                                    <p>
                                        Designer or digital, vintage or leather - it's time to get
                                        smart.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="single-banner">
                            <Link to="/all">
                                <img src={image5} alt="image5" />
                                <div className="banner-content">
                                    <h2>New Men's Style</h2>
                                    <p>
                                        Style it like a boss with this week's most hyped T-shirts.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="single-banner">
                            <Link to="/category/women">
                                <img src={image3} alt="image3" />
                                <div className="banner-content">
                                    <h2>Women's Collection</h2>
                                    <p>
                                        Marley tried to convince her but she was not interested.
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="single-banner mt-4">
                            <Link to="/category/women">
                                <img src={image4} alt="image4" />
                                <div className="banner-content">
                                    <h2>Women's Collection</h2>
                                    <p>
                                        Our sunglasses and retro frames are all shades of great.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
