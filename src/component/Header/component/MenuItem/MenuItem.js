import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ onClickItem }) => {
    const menuItem = [
        {
            title: 'HOME',
            link: "/"
        },
        {
            title: 'ALL',
            link: "/all"
        },
        {
            title: 'MEN',
            link: "/category/men"
        },
        {
            title: 'WOMEN',
            link: "/category/women"
        },
        {
            title: 'SALE',
            link: "/sale"
        },
    ]
    return (
        <ul>
            {menuItem.map((item, index) => {
                return (
                    <li key={index} onClick={onClickItem}>
                        <NavLink className="nav-link" to={item.link} exact>
                            {item.title}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
}

export default MenuItem;
