import React from 'react';
import { Link } from 'react-router-dom';
import { productPrice, productDiscountPrice } from '../../Utility/Currency';
import './ProductCard.css'
const ProductCardList = ({product}) => {

    return (
        <div className="col-md-12 cardList">
            <div className="product-cardShow">
                <div className="product-cardShow-img">
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.image1} alt="image1"/>
                        <img className="card-secondary__img" src={product.image2} alt="image2"/>
                    </Link>
                    {product.new ? <span className="product-card-new">new</span> : null}
                    {product.sale ? <span className="product-card-sale">Sale</span> : null}
                    {product.discount_price ? (
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. 
                    Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, 
                    vulputate adipiscing cursus eu, suscipit id nulla.</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCardList;
