import React, { useEffect } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CheckOutProducts from './component/YourOrder/CheckOutProducts';
import "./CheckOut.css"
import { useSelector, useDispatch } from 'react-redux';
import CustomerInfor from './component/CustomerInfor/CustomerInfor';
import { useState } from 'react';
import AlertNotify from './component/AlertNotify/AlertNotify';
import { Redirect } from 'react-router';
import { confirmOrderSuccess } from '../../Redux/store/action/actions';
import ToastMessage from '../ToastMessage/ToastMessage';
import YourOrder from './component/YourOrder/YourOrder';
import OrderSuccess from '../OrderSuccess/OrderSuccess';

const CheckOut = () => {
    const [promoCodeUsed, setPromoCodeUsed] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("");
    const [alerMessage, setAlerMessage] = useState("");
    const [usecodepromo, setUsecodepromo] = useState(null);
    const { cart, vat, promoCode, cartTotal, orderSuccess } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    let CheckOutPriceValue = [];
    const cartProducts = cart.map(
        (productInCart, index) => {
            CheckOutPriceValue.push({
                price: productInCart["item"].price,
                count: productInCart.quantity
            });
            return (
                <CheckOutProducts
                    key={index}
                    productInCart={productInCart}
                />
            )
        });

    const promoCodeChangeHandler = (value) => {
        setPromoCodeUsed(value);
    }

    const promoCodeApply = (e) => {
        e.preventDefault();
        if (promoCodeUsed.length > 0) {
            let getPromoCode = promoCode.filter((codename) => codename.code === promoCodeUsed);
            if (getPromoCode.length > 0) {
                ToastMessage("applySuccess");
                setUsecodepromo(getPromoCode[0]);
                setShowAlert(true);
                setAlertType("alert-success");
                setAlerMessage(`The promo code you entered has given you a ${getPromoCode[0].percentage}% discount on the total price.`);
            } else {
                ToastMessage("applyFail");
                setShowAlert(true);
                setAlertType("alert-danger");
                setAlerMessage("The Promo code you entered does not have discounts")
            }
        }
        else {
            ToastMessage("applyFail");
        }
    }

    const closeAlertMessage = () => {
        setShowAlert(false);
        setAlertType("");
        setAlerMessage("");
    }

    let subtotal = CheckOutPriceValue.reduce((acc, value) => acc + value.price * value.count, 0);
    let vatPercentage = vat / 100;
    let totalVat = Math.floor(subtotal * vatPercentage);
    let percentageDiscount = usecodepromo ? usecodepromo.percentage / 100 : 0;
    let discountAmount = subtotal * percentageDiscount;
    let Total = subtotal + totalVat - discountAmount;

    const confirmOrderHandler = (data) => {
        let order = {};
        order["user"] = data;
        order["cart"] = cart;
        order["total"] = Total;
        console.log(order);
        dispatch(confirmOrderSuccess())
    }

    return (
        <>
            <BreadCrumbs
                breadCrumbsLinks={[
                    {
                        label: "checkout",
                        to: "/checkout"
                    },
                ]}
            />
            {(cartTotal <= 0 && orderSuccess === true) ?
                <OrderSuccess /> 
                :
                <div className="container py-5">
                    {cartTotal <= 0 ? <Redirect to="/cart" /> : null}
                    {showAlert ? (
                        <AlertNotify
                            alertType={alertType}
                            alerMessage={alerMessage}
                            closeAlertMessage={closeAlertMessage}
                        />
                    ) : null}
                    <div className="row row-checkout">
                        <CustomerInfor
                            confirmOrderHandler={confirmOrderHandler}
                        />
                        <YourOrder
                            cartProducts={cartProducts}
                            subtotal={subtotal}
                            totalVat={totalVat}
                            Total={Total}
                            promoCodeApply={promoCodeApply}
                            promoCodeChangeHandler={promoCodeChangeHandler}
                            promoCodeUsed={promoCodeUsed}
                        />
                    </div>
                </div>
            }
        </>
    );
}

export default CheckOut;
