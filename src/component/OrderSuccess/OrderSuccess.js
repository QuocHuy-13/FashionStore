import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { changeTypeOrderSuccess } from '../../Redux/store/action/actions';
import './OrderSuccess.css';
const OrderSuccess = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const countinueShopping = () => {
        dispatch(changeTypeOrderSuccess())
        history.push("/all");
    }
    return (
        <>
            <div className="container">
                <div className="checkOut-order">
                    <div className="checkOut-order-content">
                        <FaCheckCircle />
                        <h3>Order Success!</h3>
                        <h5>
                            Your order is successful. Thank you for shopping with us.
                        </h5>
                        <button
                            onClick={countinueShopping}
                            className="btn btn-action">
                            continue shopping
                        </button>
                        <div className="text-muted py-3">
                            Check your order object in your console
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderSuccess;
