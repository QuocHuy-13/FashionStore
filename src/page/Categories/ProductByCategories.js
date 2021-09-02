import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Breadcrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import LeftColumn from '../../component/LeftColumn/LeftColumn';
import ShopProduct from '../../component/ShopProduct/ShopProduct';
import { fakeFetchData } from '../../Redux/store/action/actions';
import { products } from '../../Redux/static/product'; 

const ProductByCategories = ({ match }) => {
    let params = match.params;
    const dispatch = useDispatch();
    const {promoCode } = useSelector(state => state.cart);
    
    const getProductsByCategory = (params) => {
        return products.filter((product) =>
            product.category === params.category    
        )
    }
    const getProducts = getProductsByCategory(params);

    useEffect(() => {
        dispatch(fakeFetchData(getProducts))
    });

    useEffect(() => {
        window.scroll(0,0)
    },[])

    return (
        <>
            <Breadcrumbs
                breadCrumbsLinks={[
                    {
                        label: params.category,
                        to: `"/category/${params.category}"`
                    },
                ]}
            />
            <section className="shop-area">
                <div className="container">
                    <div className="row">
                        <LeftColumn 
                            promoCodes = {promoCode}
                        />
                        <ShopProduct/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductByCategories;
