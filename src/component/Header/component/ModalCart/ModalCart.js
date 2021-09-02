import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productPrice } from '../../../../Utility/Currency';
import './ModalCart.css'
import cart_img from '../../../../assets/images/empty-cart.svg';

const ModalCart = () => {
    const { cart, cartTotal } = useSelector(state => state.cart);
    let cartPriceValueArray = [];
    const cartItems = cart.map((item) => {
        cartPriceValueArray.push({
            price: item["item"].price,
            count: item["quantity"]
        })
        return (
            <li key={item["item"].id}>
                <div className="cart-modal-img">
                    <img src={item["item"].image1} alt="image1" />
                </div>
                <div className="cart-modal-info">
                    <h4>{item["item"].name}</h4>
                    <span>Size: {item.size}</span>
                    <span>${productPrice(item["item"].price)}
                        <span> x {item.quantity}</span>
                    </span>
                </div>
            </li>
        )
    })
    let total = cartPriceValueArray.reduce((acc, value) => acc + value.price * value.count, 0)
    return (
        <div className="cart-modal">
            {cartTotal > 0 ?
                <>
                    <ul>
                        {cartItems}
                    </ul>
                    <div className="cart-modal-total">
                        <div className="cart-modal-total__title">
                            subtotal:
                        </div>
                        <div className="cart-modal-total__price">
                            ${productPrice(total)}
                        </div>
                    </div>
                    <div className="cart-modal-action">
                        <Link to="/cart" className="cart-modal-viewCart">
                            view cart
                        </Link>
                        <Link to="/checkout" className="cart-modal-checkOut">
                            checkout
                        </Link>
                    </div>
                </>
                :
                <div className="cart-empty">
                    <img src={cart_img} alt="cart-img" />
                    <h6>Your cart is empty.Please fill it up.</h6>
                </div>
            }
        </div>
    );
}

export default ModalCart;
