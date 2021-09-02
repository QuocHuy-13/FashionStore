import React from 'react';
import {productPrice} from '../../../../Utility/Currency';
const CheckOutCartTotals = (props) => {
    const {subtotal, vat, total} = props ;
    return (
        <>
            <li className="checkout-product-item">
                <div className="d-flex justify-content-between">
                    <span style={{fontWeight: 500}}>Sub Total</span>
                    <span>${productPrice(subtotal)}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span style={{fontWeight: 500}}>VAT</span>
                    <span>${productPrice(vat)}</span>
                </div>
            </li>
            <li className="checkout-product-item d-flex justify-content-between shop-checkout-total">
                <span>ToTal</span>
                <span>${productPrice(total)}</span>
            </li>
        </>
    );
}

export default CheckOutCartTotals;
