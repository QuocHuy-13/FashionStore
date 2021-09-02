import React from 'react';
import './HomeProductNew.css'
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { products } from '../../../Redux/static/product';
import { productPrice } from '../../../Utility/Currency';

const HomeProductNew = () => {
    const listProductNew = products.filter((product) => {
        if (product.new === true) {
            return true
        }
    });

    const productsNew = listProductNew.slice(0, 4).map((product, index) => {
        return (
            <div className="col-md-3 col-sm-3" key={index}>
                <div className="show-product">
                    <div className="product-img">
                        <Link to={`/product/${product.slug}`}>
                            <img src={product.image1} alt="image1" />
                            <img className="secondary-img" src={product.image2} alt="image2" />
                        </Link>
                        <span className="product-bedge">new</span>
                    </div>
                    <div className="product-content">
                        <h3>{product.name}</h3>
                        <div className="price">
                            <span>
                                ${productPrice(product.price)}
                            </span>
                            <span>
                                ${productPrice(product.discount_price)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="home-showProduct">
            <div className="container products-section mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="products-section-title">
                            <h2>exclusive collection</h2>
                            <div className="title-icon">
                                <span>
                                    <FaAngleLeft />
                                    <FaAngleRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {productsNew}
                </div>
            </div>
        </section>
    );
}

export default HomeProductNew;
