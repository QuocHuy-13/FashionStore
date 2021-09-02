import React from 'react';
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AiOutlineFileDone, AiOutlineClear, AiOutlineTags } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import {MdRemoveShoppingCart} from 'react-icons/md'
import './ToastMessage.css'

function ToastMessage(type) {
    const toastType = toastTypes[type];

    const CloseButton = () => (
        <div className="toast-msg__close">
            <ImExit/>
        </div>
    );

    const ToastBody = () => (
        <div
            className="toast-msg"
            style={{ backgroundColor: `${toastType.color}` }}
        >
            <div className="toast-msg__icon">{toastType.icon}</div>
            <div className="toast-msg__content">
                <h4 className="toast-msg__title">{toastType.title}!</h4>
                <div className="toast-msg__description">{toastType.description}</div>
            </div>
        </div>
    );

    return toast(ToastBody, {
        closeButton: CloseButton,
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
    });
}

const toastTypes = {
    success: {
        title: "Success",
        description: "The product has been added to cart",
        color: "#43d787",
        icon: <AiOutlineFileDone />
    },
    remove: {
        title: "Remove",
        description: "The product has been removed from cart",
        color: "#43d787",
        icon: <MdRemoveShoppingCart/>,
    },
    clearCart: {
        title: "Clear Cart",
        description: "The product has been clean from cart",
        color: "#43d787",
        icon: <AiOutlineClear/>,
    },
    applySuccess: {
        title: "Success",
        description: "Coupon code applied successfully",
        color: "#43d787",
        icon: <AiOutlineTags/>
    },
    applyFail: {
        title: "Failed",
        description: "Coupon code applied not valid",
        color: "#E84C51",
        icon: <AiOutlineTags/>
    }
}

export default ToastMessage;