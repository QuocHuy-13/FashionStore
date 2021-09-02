import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import MenuItem from './component/MenuItem/MenuItem';
import './Header.css';
import NavMobile from './component/NavMobile/NavMobile';
import { FaShoppingCart, FaTimes, FaTh } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import ModalCart from './component/ModalCart/ModalCart';

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(true);

    const { cartTotal } = useSelector((state) => state.cart)

    const showMenu = () => {
        setIsShowMenu(!isShowMenu);
    }

    useEffect(() => {
        const scrollHeader = () => {
            if (window.scrollY >= 100) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        };
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        }
    });


    return (
        <header className={isScroll ? "header active" : "header"}>
            <div className="header-desktop">
                <div className="container">
                    <div className="navbar-container">
                        <div className="menu-btn">
                            {isShowMenu ? <FaTh onClick={showMenu} /> : <FaTimes onClick={showMenu} />}
                        </div>
                        <div className="logo">
                            <NavLink to="/">
                                <img src={Logo} alt="logo" />
                            </NavLink>
                        </div>
                        <div className="main-menu">
                            <MenuItem />
                        </div>
                        <div className="my-cart">
                            <div className="total-cart">
                                <NavLink to="/cart">
                                    <FaShoppingCart />
                                    <span>{cartTotal}</span>
                                </NavLink>
                            </div>
                            <ModalCart />
                        </div>
                    </div>
                </div>
            </div>
            <NavMobile
                isShow={isShowMenu}
                showMenu={showMenu}
            />
        </header>
    );
}

export default Header;
