import React from 'react';
import { productPrice } from '../../Utility/Currency';
import Rating from '../../component/Rating/Rating';
import {FaCartArrowDown, FaShippingFast, FaRegCalendarCheck, FaTags, FaMinus, FaPlus} from 'react-icons/fa'
import sizeChart from '../../assets/images/sizeChart.PNG'

const DetailContent = ({product, disableAddToCart, handleAddToCart, handleInputChange, handleQuantityClick, productDetails}) => {
    return (
        <div className="detail-content">
            <h3 className="detail-title">{product.name}</h3>
            <div className="detail-Sold">
                <span className="detail-Sold__title">Sold By:</span>
                <span className="detail-vendor">{product.vendor}</span>
            </div>
            <Rating
                rating={product.ratings}
                ratingClassName={"detail-rating"}
            />
            <div className="detail-price-container">
                <span className="detail-price">
                    ${productPrice(product.price)}
                </span>
                <span className="detail-discount-price">
                    ${productPrice(product.discount_price)}
                </span>
            </div>
            <div className="detail-color">
                <span className="color-title">
                    color:
                </span>
                <span
                    className="color-content"
                    style={{ backgroundColor: product.color === "White" ? "black" : product.color }}
                >
                    {product.color}
                </span>
            </div>
            {product.sizes ? (
                <div className="detail-size">
                    <span className="size-title">
                        Size:
                    </span>
                    <span className="size-content">
                        <select
                            className="select-size"
                            name="size"
                            value={productDetails.size}
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>
                                Select Size
                            </option>
                            {product.sizes.map((size, index) => (
                                <option key={index} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
            ) : null}
            <div className="detail-action">
                <div className="detail-quantity">
                    <button
                        className="btn-quantity"
                        onClick={() => handleQuantityClick("sub")}
                    >
                        <FaMinus/>
                    </button>
                    <span className="display-quantity">{productDetails.quantity}</span>
                    <button
                        className="btn-quantity"
                        onClick={() => handleQuantityClick("add")}
                    >
                        <FaPlus/>
                    </button>
                </div>
                <div className="detail-addCart">
                    <button
                        type="button"
                        className="btn btn-addCart"
                        disabled={disableAddToCart()}
                        onClick={handleAddToCart}
                    >
                        <span>
                            <FaCartArrowDown/>
                            Add To Cart
                        </span>
                    </button>
                </div>
            </div>
            <div className="detail-features">
                <div className="feature">
                    <FaShippingFast/>
                    <span>Free global shipping on all orders</span>
                </div>
                <div className="feature">
                    <FaRegCalendarCheck/>
                    <span>2 hours easy returns if you change your mind</span>
                </div>
                <div className="feature">
                    <FaTags/>
                    <span>Order before noon for same day dispatch</span>
                </div>
            </div>
            <div className="detail-chart">
                <span className="chart-title">Size chart</span>
                <img src={sizeChart} alt="sizeChart"/>
            </div>
        </div>
    );
}

export default DetailContent;
