import React from 'react';

const DetailImage = ({ product }) => {
    return (
        <div className="detail-image">
            <div className="detail-image__big">
                <img src={product.image1} alt="image1" />
            </div>
        </div>
    );
}

export default DetailImage;
