import React, {useEffect} from 'react';
import './All.css';
import BreadCrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import LeftColumn from '../../component/LeftColumn/LeftColumn';
import ShopProduct from '../../component/ShopProduct/ShopProduct';
import { useSelector , useDispatch } from 'react-redux';
import { fakeFetchData } from '../../Redux/store/action/actions';
import { products } from '../../Redux/static/product'; 

const All = () => {
    const dispatch = useDispatch();
    const {promoCode} = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fakeFetchData(products))
    });

    useEffect(() => {
        window.scroll(0,0)
    },[])

    return (
        <>
            <BreadCrumbs
                breadCrumbsLinks={[
                    {
                        label: "all",
                        to: "/all"
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

export default All;
