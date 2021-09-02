import React from 'react';
import { productPrice } from '../../../../Utility/Currency';
const CheckOutProducts = ({productInCart}) => {
    return (
        <>
            <li className="checkout-product-item">
                <div className="d-flex">
                    <img
                        src={productInCart["item"].image1}
                        alt="product"
                    />
                    <div className="checkout-product-info">
                        <h6>{productInCart["item"].name}</h6>
                        <p>
                            ${productPrice(productInCart["item"].price)}
                        </p>
                        <p>
                            <small className="pr-2">
                                <span>Size: </span>
                                {productInCart.size}
                            </small>
                            <small>
                                <span>Qty: </span>
                                {productInCart.quantity}
                            </small>
                        </p>
                    </div>
                </div>
            </li>
        </>
    );
}

export default CheckOutProducts;
