import React, { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import { useSelector, useDispatch } from 'react-redux';
import { filterProductByPrice } from '../../Redux/store/action/actions';

const FilterProduct = () => {
    const dispatch = useDispatch() ;
    const {allProducts} = useSelector((state) => state.shop);
    const [selecRadio, setSelecRadio] = useState(null);

    const handleOptionChange = (params) => {
        setSelecRadio(params);
        dispatch(filterProductByPrice(allProducts,params));
    };

    const optionPrice = [
        {
            priceName: "All Price"
        },
        {
            priceName: "$0 to $50",
        },
        {
            priceName: "$50 to $100",
        },
        {
            priceName: "$100 to $200",
        },
        {
            priceName: "More than $200",
        },
    ];

    return (
        <div className="filter-product">
            <h3 className="left-title">product frice</h3>
            <form className="form-filter">
                {optionPrice.map((item, index) => {
                    return (
                        <CheckBox
                            key={index}
                            content={item.priceName}
                            handleOptionChange={(e) => handleOptionChange(e.target.value)}
                            checked={selecRadio === item.priceName}
                            value={item.priceName}
                        />
                    );
                })}
            </form>
        </div>
    );
};

export default FilterProduct;
