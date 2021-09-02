import React from 'react';
import './PromoCodeForm.css'
const PromoCodeForm = ({ promoCodeUsed, promoCodeChangeHandler, promoCodeApply }) => {
    return (
        <form className="form-discount" onSubmit={promoCodeApply}>
            <input
                className="discount-input"
                type="text"
                placeholder="Coupon code"
                value={promoCodeUsed}
                onChange={(e) => promoCodeChangeHandler(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-action">
                Apply
            </button>
        </form>
    );
}

export default PromoCodeForm;
