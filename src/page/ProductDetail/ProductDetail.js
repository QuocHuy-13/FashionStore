import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Breadcrumbs from '../../component/BreadCrumbs/BreadCrumbs';
import './ProductDetails.css';
import { products } from '../../Redux/static/product';
import DetailContent from './DetailContent';
import DetailImage from './DetailImage';
import { addToCart } from '../../Redux/store/action/actions';
import ProductReview from './ProductReview';
import ToastMessage from '../../component/ToastMessage/ToastMessage';

const ProductDetail = ({ match }) => {
    const dispatch = useDispatch();
    const params = match.params;
    const product = products.find((product) => product.slug === params.productSlug);
    const [productDetails, setProductDetails] = useState({ item: null, size: "", quantity: 1 });

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    useEffect(() => {
        if (product) {
            setProductDetails({ ...productDetails, item: product })
        }
    },[]);

    const handleInputChange = (e) => {
        const target = e.target;
        let value = target.value;
        const name = target.name;
        if (name === "quantity") {
            if (!value.match(/[0-9]+$/)) {
                value = "";
            }
        }
        setProductDetails({ ...productDetails, [name]: value })
    };

    const handleQuantityClick = (action) => {
        let quantity = productDetails.quantity;
        if (action === "sub" && quantity < 2) {
            return;
        }
        let value = action === "sub" ? quantity - 1 : quantity + 1
        setProductDetails({ ...productDetails, quantity: value })
    };

    const disableAddToCart = () => {
        let generalValidations =
            !productDetails.item ||
            !productDetails.quantity ||
            productDetails.quantity < 1 ||
            productDetails.quantity > product.quantity;
        return generalValidations || !productDetails.size
    }

    const handleAddToCart = () => {
        const item = { ...productDetails }
        dispatch(addToCart(item));
        ToastMessage("success")
    }

    return (
        <>
            <Breadcrumbs
                breadCrumbsLinks={[
                    {
                        label: product.category,
                        to: `/category/${product.category}`,
                    },
                    {
                        label: product.name,
                        to: null,
                    },
                ]}
            />
            <div className="detail-area">
                <div className="container">
                    <div className="detail">
                        <DetailImage
                            product={product}
                        />
                        <DetailContent
                            productDetails={productDetails}
                            product={product}
                            handleInputChange={handleInputChange}
                            handleQuantityClick={handleQuantityClick}
                            disableAddToCart={disableAddToCart}
                            handleAddToCart={handleAddToCart}
                        />
                    </div>
                    <ProductReview/>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
