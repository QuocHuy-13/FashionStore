import React from 'react';
import CheckOutCartTotals from './CheckOutCartTotals';
import PromoCodeForm from '../PromoCodeForm/PromoCodeForm';
import './YourOrder.css'

const YourOrder = ({cartProducts,subtotal,totalVat,Total,promoCodeApply,promoCodeChangeHandler,promoCodeUsed}) => {
    return (
        <div className="col-lg-5">
            <div className="your-oder-detail">
                <h2>Your Order</h2>
                <ul>
                    {cartProducts}
                    <CheckOutCartTotals
                        subtotal={subtotal}
                        vat={totalVat}
                        total={Total}
                    />
                </ul>
                <PromoCodeForm
                    promoCodeApply={promoCodeApply}
                    promoCodeChangeHandler={promoCodeChangeHandler}
                    promoCodeUsed={promoCodeUsed}
                />
            </div>
        </div>
    );
}

export default YourOrder;
