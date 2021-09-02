import React from 'react';
import { FaList, FaTh } from 'react-icons/fa';
import './TypeShowProduct.css'
const TypeShowProduct = ({typeDisplay, setTypeDisplay}) => {

    const handleShowProduct = (type) => {
        setTypeDisplay(type);
    }

    return (
        <div className="view-as">
            <ul>
                <li>
                    <span>View as:</span>
                </li>
                <li className={typeDisplay === "grid" ? "active" : ""}>
                    <FaTh 
                        onClick={() => handleShowProduct("grid")}
                    /> 
                </li>
                <li className={typeDisplay === "list" ? "active" : ""}>
                    <FaList
                        onClick={() => handleShowProduct("list")}
                     />
                </li>
            </ul>
        </div>
    );
}

export default TypeShowProduct;
