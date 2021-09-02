import React from 'react';
import { Link } from 'react-router-dom';
import { productPrice, productDiscountPrice } from '../../Utility/Currency';
import './ProductCard.css'
const ProductCard = ({product}) => {
    return (
        <div className="col-6 col-md-4 col-lg-4 mb-4">
            <div className="product-cardShow">
                <div className="product-cardShow-img">
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.image1} alt="image1"/>
                        <img className="card-secondary__img" src={product.image2} alt="image2"/>
                    </Link>
                    {product.new ? <span className="product-card-new">new</span> : null}
                    {product.sale ? <span className="product-card-sale">Sale</span> : null}
                    {product.sale ? (
                         <span className="product-card-discount">
                            {productDiscountPrice(product.price, product.discount_price)}
                         </span>
                     ) : null}
                </div>
                <div className="product-card-content">
                    <h3>{product.name}</h3>
                    <div className="content-price">
                        <span>
                            ${productPrice(product.price)}
                        </span>
                        <span>
                            ${productPrice(product.discount_price)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
