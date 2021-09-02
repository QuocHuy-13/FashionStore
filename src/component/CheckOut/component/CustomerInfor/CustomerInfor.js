import React from 'react';
import { useForm } from 'react-hook-form';
import './CustomerInfor.css'
const CustomerInfor = ({ confirmOrderHandler }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        confirmOrderHandler(data);
    }
    return (
        <div className="col-lg-7">
            <div className="checkout-billing-detail">
                <h2>Billing Detail</h2>
                <div className="billing-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-input-item">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        {...register("FirstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                                    />
                                    {errors.FirstName && errors.FirstName.type === "required" && <span className="text-danger">This is required</span>}
                                    {errors.FirstName && errors.FirstName.type === "maxLength" && <span className="text-danger">Max length exceeded</span>}
                                    {errors.FirstName && errors.FirstName.type === "pattern" && <span className="text-danger">Must be only text</span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-input-item">
                                    <label>Last Name</label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        {...register("LastName", { required: true, maxLength: 30, pattern: /^[a-zA-Z\s\W|_]+$/i })}
                                    />
                                    {errors.LastName && errors.LastName.type === "required" && <span className="text-danger">This is required</span>}
                                    {errors.LastName && errors.LastName.type === "maxLength" && <span className="text-danger">Max length exceeded</span>}
                                    {errors.LastName && errors.LastName.type === "pattern" && <span className="text-danger">Must be only text</span>}
                                </div>
                            </div>
                        </div>
                        <div className="single-input-item">
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                {...register("Email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/i })}
                            />
                            {errors.Email && errors.Email.type === "required" && <span className="text-danger">This is required</span>}
                            {errors.Email && errors.Email.type === "pattern" && <span className="text-danger">username@gmail.com</span>}
                        </div>
                        <div className="single-input-item">
                            <label>Phone</label>
                            <input
                                name="phone"
                                type="number"
                                placeholder="Your Phone"
                                {...register("Mobilenumber", { required: true, pattern: /(0[3|5|7|8|9])+([0-9]{8})\b/i })}
                            />
                            {errors.Mobilenumber && errors.Mobilenumber.type === "required" && <span className="text-danger">This is required</span>}
                            {errors.Mobilenumber && errors.Mobilenumber.type === "pattern" && <span className="text-danger">Your phone number must have 10 number and must begin with 0</span>}
                        </div>
                        <div className="single-input-item">
                            <label>Address</label>
                            <input
                                name="address"
                                type="text"
                                placeholder="Your Address"
                                {...register("Address", { required: true })}
                            />
                            {errors.Address && errors.Address.type === "required" && <span className="text-danger">This is required</span>}
                        </div>
                        <div className="single-input-item">
                            <label>Order Note</label>
                            <textarea
                                cols="30"
                                rows="3"
                                name="note"
                                {...register("Note", {})}
                            >
                            </textarea>
                        </div>
                        <hr />
                        <button className="btn btn-submit-infor btn-action" type="submit">Confirm Order</button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default CustomerInfor;
