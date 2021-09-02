import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './NavMobile.css'
const NavMobile = ({ isShow, showMenu }) => {
    return (
        <div className="nav-mobile__container">
            <div className={isShow ? "nav-mobile" : "nav-mobile active"}>
                <div className="nav-mobile__content">
                    <MenuItem onClickItem={showMenu} />
                </div>
            </div>
            <span
                className={isShow ? "nav-mobile__overplay" : "nav-mobile__overplay active"}
                onClick={showMenu}
            >
            </span>
        </div>
    );
}

export default NavMobile;
