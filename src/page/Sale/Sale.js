import React, {useEffect} from 'react';
import Breadcrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import LeftColumn from '../../component/LeftColumn/LeftColumn';
import ShopProduct from '../../component/ShopProduct/ShopProduct';
import {useSelector, useDispatch} from 'react-redux'
import { products } from '../../Redux/static/product'; 
import { fakeFetchData } from '../../Redux/store/action/actions';

const Sale = () => {
    const dispatch = useDispatch();
    const { usedCurrency, promoCode } = useSelector(state => state.cart);
    const productsSale = products.filter((product) => {
        return product.sale === true
    });
 
    useEffect(() => {
        dispatch(fakeFetchData(productsSale))
    });

    useEffect(() => {
        window.scroll(0,0)
    },[])

    return (
        <>
            <Breadcrumbs
                    breadCrumbsLinks={[
                        {
                            label: "sale",
                            to: "/sale"
                        }
                    ]}
                />
            <section className="shop-area">
                <div className="container">
                    <div className="row">
                        <LeftColumn 
                            promoCodes = {promoCode}
                        />
                        <ShopProduct
                            usedCurrency = {usedCurrency}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sale;
