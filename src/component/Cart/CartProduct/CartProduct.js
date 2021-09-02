import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { productPrice } from '../../../Utility/Currency';
import './CartProduct.css'
const CartProduct = ({ removeProdcutFromCart, clearCart, handleQuantity }) => {
    const { cart } = useSelector((state) => state.cart)
    let history = useHistory();

    let cartProducts = cart.map((productInCart, index) => {
        return (
            <tr key={index}>
                <td className="pro-thumbnail"><img src={productInCart["item"].image1} alt="image1" className="shop-cart-image" /></td>
                <td className="pro-title">
                    <h6 className="title">{productInCart["item"].name}</h6>
                    <span className="text-muted">Sold By: <span className="sold-name">{productInCart["item"].vendor}</span></span>
                    <p className="text-muted">Size: {productInCart["size"]}</p>
                </td>
                <td className="pro-price">
                    <div className="price-wrap">${productPrice(productInCart["item"].price)}</div>
                </td>
                <td className="pro-quantity">
                    <div className="cart-quantity">
                        <button
                            className="btn-quantity"
                            onClick={() => handleQuantity(index, -1)}
                        >
                            <FaMinus />
                        </button>
                        <span className="display-quantity">{productInCart["quantity"]}</span>
                        <button
                            className="btn-quantity"
                            onClick={() => handleQuantity(index, 1)}
                        >
                            <FaPlus />
                        </button>
                    </div>
                </td>
                <td className="pro-subtotal">
                    <div className="price-wrap">${productPrice(productInCart["quantity"] * productInCart["item"].price)}</div>
                </td>
                <td className="pro-remove">
                    <button
                        className="btn btn-remove"
                        onClick={() => removeProdcutFromCart(productInCart)}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        );
    });
    
    return (
        <div className="row">
            <div className="col">
                <div className="cart-table table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="pro-thumbnail">Thumbnail</th>
                                <th className="pro-title">Product</th>
                                <th className="pro-price">Price</th>
                                <th className="pro-quantity">Quantity</th>
                                <th className="pro-subtotal">Total</th>
                                <th className="pro-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="6" className="text-right">
                                    <button
                                        onClick={() => history.push("/all")}
                                        className="btn btn-action">
                                        continue shopping
                                    </button>
                                    <button
                                        className="btn btn-action ml-1"
                                        onClick={clearCart}
                                    >
                                        clear cart
                                    </button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;

