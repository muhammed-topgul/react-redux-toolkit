import React from 'react';
import {BsFillBasketFill} from "react-icons/bs";
import {useSelector} from "react-redux";

const Navbar = () => {
    const {quantity} = useSelector(store => store.cart);

    return (
        <nav>
            <div className="navbar">
                <h3>Courses</h3>
                <div className="nav-div">
                    <div className="items-count-div">
                        <p>{quantity}</p>
                    </div>
                    <BsFillBasketFill className="items-icon"/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;