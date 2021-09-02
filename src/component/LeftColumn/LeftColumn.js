import React from 'react';
import './LeftColumn.css'
import FilterProduct from '../FilterProduct/FilterProduct';

const LeftColumn = ({ promoCodes }) => {
    return (
        <div className="col-lg-3 shop-hide">
            <div className="code-deal py-2">
                <h3 className="left-title">Great Discounts!</h3>
                <p>Use the following promo codes to get amazing discounts</p>
                <ul>
                    {promoCodes.map((promoCode, index) => (
                        <li

                            key={index}
                        >
                            <span>{promoCode.code}</span>
                            <span>
                                {promoCode.percentage}%
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <FilterProduct />
        </div>
    );
}

export default LeftColumn;
