import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.css'

const BreadCrumbs = (props) => {
    let links = props.breadCrumbsLinks;
    let breadCrumbsHead = null;
    function generateBreadCrumb() {
        let crumbs = [];
        if (links.length) {
            links.forEach((link, index) => {
                if (index === links.length - 1) {
                    crumbs.push(
                        <li className="breadcrumb-item active" key={index}>
                            {link.label}
                        </li>
                    );
                } else {
                    crumbs.push(
                        <li className="breadcrumb-item" key={index}>
                            <Link to={link.to}>
                                {link.label}
                            </Link>
                        </li>
                    );
                }
            });
        }
        return crumbs;
    }

    if (links[0].label === "cart") {
        breadCrumbsHead = (
            <h2>Cart</h2>
        )
    } else if (links[0].label === "checkout") {
        breadCrumbsHead = (
            <h2>CheckOut</h2>
        )
    } else {
        breadCrumbsHead = (
            <h2>Shop</h2>
        )
    }

    return (
        <div className="breadcrumb-title">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="breadcrumb-list">
                            {breadCrumbsHead}
                            <ul>
                                <li className="breadcrumb-item">
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to='/'>
                                        Shop
                                    </Link>
                                </li>
                                {generateBreadCrumb()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumbs;
