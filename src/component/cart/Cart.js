import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CourseItem from "./CourseItem";
import {clearCart} from "../../data/slice/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const {cartItems, quantity, total} = useSelector(store => store.cart);

    return (
        <div className="container">
            {quantity < 1 ? (
                <section className="section">
                    <header>
                        <h4 className="header">My Shopping Cart</h4>
                        <h4>Empty</h4>
                    </header>
                </section>
            ) : (
                <section className="section">
                    <header>
                        <h4 className="header">My Shopping Cart</h4>
                    </header>
                    <div>
                        {cartItems.map((item) => <CourseItem key={item.id} {...item}/>)}
                    </div>
                    <footer>
                        <hr/>
                        <div>
                            <h4>Total Price: <span>{total} ₺</span></h4>
                        </div>
                        <button
                            className="clear-btn"
                            onClick={() => dispatch(clearCart())}>Clear
                        </button>
                    </footer>
                </section>
            )}
        </div>
    );
};


export default Cart;