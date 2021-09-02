import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../component/ProductCard/ProductCard';
import ProductCardList from '../../component/ProductCard/ProductCardList';
import TypeShowProduct from '../../component/TypeShowProduct/TypeShowProduct';
import Sort from '../../component/SortProduct/Sort';
import ShopEmpty from '../ShopEmpty/ShopEmpty';
import './ShopProduct.css'

const ShopProduct = () => {
    const [typeDisplay, setTypeDisplay] = useState("grid");
    const {filterProducts} = useSelector((state) => state.shop);

    const productsList = filterProducts.map((product) => {
        return (
            <ProductCardList
                key={product.id}
                product={product}
            />
        )
    });

    const productsGrid = filterProducts.map((product) => {
        return (
            <ProductCard
                key={product.id}
                product={product}
            />
        )
    });

    return (
        <div className="col-lg-9">
            <div className="shop-content">
                <div className="shop-product-count">
                    <span>Products: {filterProducts.length}</span>
                </div>
                <Sort/>
                <TypeShowProduct 
                    typeDisplay = {typeDisplay}
                    setTypeDisplay = {setTypeDisplay}
                />
            </div>
            {filterProducts <=0 && <ShopEmpty/>}
            <div className="shop-product">
                {typeDisplay === "grid" ?
                    <div className="row">
                        {productsGrid}
                    </div>
                    :
                    <div className="row">
                        {productsList}
                    </div>
                }
            </div>
        </div>
    );
}

export default ShopProduct;
