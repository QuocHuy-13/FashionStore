import React from 'react';
import './CheckBox.css';

const CheckBox = ({content, handleOptionChange, checked, handleOptionClick}) => {
    return (
        <label 
            className="checkbox"
            onClick={handleOptionClick}
        >
            <input
                className="checkbox-input"
                type="radio"
                value={content}
                onChange={handleOptionChange}
                checked={checked}
            />
            <span className="checkMark"></span>
            <span>{content}</span>
        </label>
    );
}

export default CheckBox;
