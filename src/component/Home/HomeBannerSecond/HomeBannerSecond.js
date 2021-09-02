import React from 'react';
import './HomeBannerSecond.css';
import menImg from '../../../assets/images/Banner/man.jpg';
import womenImg from '../../../assets/images/Banner/lookbook-2.jpg';
import kidImg from '../../../assets/images/Banner/lookbook-5.jpg';
import { Link } from 'react-router-dom';

const HomeBannerSecond = () => {
    let itemData = [
        {
            image: menImg,
            title: "Hot Fashion",
            text: "Men Style",
            link: "/category/men",
        },
        {
            image: womenImg,
            title: "Discount-50%",
            text: "Women Style",
            link: "/category/women",
        },
        {
            image: kidImg,
            title: "New Arrivals",
            text: "Kid Style",
            link: "/category/kids",
        },
    ];

    const generaItemBanner = itemData.map((item, index) => {
        return (
            <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                <div className="item-banner__wrapper">
                    <Link to={item.link}>
                        <img src={item.image} alt="image_banner"/>
                        <div className="item-banner__content">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <section className="item-banners">
            <div className="container">
                <div className="row">
                    {generaItemBanner}
                </div>
            </div>
        </section>
    );
}

export default HomeBannerSecond;
