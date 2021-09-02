import React, { useEffect } from 'react';
import cart_img from '../../assets/images/empty-cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from './CartProduct/CartProduct';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { Link } from 'react-router-dom';
import CartTotal from './CartTotal/CartTotal';
import { removeCartProduct, clearCart, handleChangeQuantity } from '../../Redux/store/action/actions';
import ToastMessage from '../ToastMessage/ToastMessage';
import './Cart.css'
const Cart = () => {
    const { cartTotal } = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const removeProdcutFromCart = (productInCart) => {
        dispatch(removeCartProduct(productInCart))
        ToastMessage("remove")
    }

    const clearAllProduct = () => {
        dispatch(clearCart());
        ToastMessage("clearCart")
    }

    const handleQuantity = (index, value) => {
        dispatch(handleChangeQuantity(index, value))
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <>
            <BreadCrumbs
                breadCrumbsLinks={[
                    {
                        label: "cart",
                        to: "/cart"
                    },
                ]}
            />
            <div className="container py-5">
                <div className="shop-cart p-4">
                    {cartTotal > 0 ?
                        <>
                            <CartProduct
                                removeProdcutFromCart={removeProdcutFromCart}
                                clearCart={clearAllProduct}
                                handleQuantity={handleQuantity}
                            />
                            <CartTotal />
                        </>
                        :
                        <>
                            <img src={cart_img} alt="cart-img" />
                            <h5>
                                Your cart is empty. <Link to={"/all"}>Please fill it up.</Link>
                            </h5>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Cart;
