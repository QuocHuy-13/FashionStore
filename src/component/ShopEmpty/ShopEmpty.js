import React from 'react';
import image from '../../assets/images/notFound.png';
import './ShopEmpty.css'
const ShopEmpty = () => {
    return (
        <div className="shop-empty">
            <img src={image} alt="notfound" />
            <h4>
                There is no product that you are looking for.
            </h4>
        </div>
    );
}

export default ShopEmpty;
