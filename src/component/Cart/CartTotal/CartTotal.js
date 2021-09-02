import React from 'react';
import { Link } from 'react-router-dom'
import { productPrice } from '../../../Utility/Currency';
import { useSelector } from 'react-redux';
import './CartTotal.css'
const CartTotal = () => {
    const { cart, vat } = useSelector((state) => state.cart)
    let cartPriceValueArray = [];
    cart.map((productInCart) => {
        cartPriceValueArray.push({
            price: productInCart["item"].price,
            count: productInCart["quantity"]
        })
    })
    let subtotal = cartPriceValueArray.reduce((acc, value) => acc + value.price * value.count, 0);
    let vatPercentage = vat / 100;
    let totalVat = Math.floor(vatPercentage * subtotal)
    let total = subtotal + totalVat;
    return (
        <div className="row mt-3">
            <div className="col-lg-6 ml-auto">
                <div className="cart-total">
                    <h3>Cart Totals</h3>
                    <div className="cart-total-item">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>${productPrice(subtotal)}</td>
                                    </tr>
                                    <tr>
                                        <td>Vat</td>
                                        <td>${productPrice(totalVat)}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td className="total-amount">${productPrice(total)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Link
                        className="btn btn-action float-right"
                        to="/checkout"
                    >
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
