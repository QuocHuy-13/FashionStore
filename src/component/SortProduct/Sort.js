import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProductByType } from '../../Redux/store/action/actions';
import './Sort.css'

const Sort = () => {
    const dispatch = useDispatch() ;
    const {filterProducts} = useSelector((state) => state.shop);
    const {sort} = useSelector(state => state.shop);
    const sortData = [
        {
            value: "Price: Low to High",
            sort: "price_lth",
        },
        {
            value: "Price: High to Low",
            sort: "price_htl",
        },
    ]

    const handleSortChange = (type) => {
        dispatch(sortProductByType(filterProducts,type));
    }

    return (
        <div className="sort-by">
            <select
                className="sort-select"
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <option value="" disabled>
                    Features
                </option>
                {sortData.map((item, index) => (
                    <option key={index} value={item.sort}>
                        {item.value}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Sort;
