import React from 'react';
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {decrease, increase, removeItem} from "../../data/slice/CartSlice";

const CourseItem = ({id, title, price, img, quantity}) => {
    const dispatch = useDispatch();

    return (
        <div className="course-item">
            <img src={img} width={250} height={250} alt="image"/>
            <div>
                <h4>{title}</h4>
                <h4>{price}₺</h4>
                <div className="course-action-bar">
                    <button className="clear-btn" onClick={() => dispatch(increase(id))}>
                        <BsChevronUp/>
                    </button>
                    <p>{quantity}</p>
                    <button className="clear-btn" onClick={() => dispatch(decrease(id))}>
                        <BsChevronDown/>
                    </button>
                </div>
                <button
                    className="clear-btn m1"
                    onClick={() => dispatch(removeItem(id))}>Remove
                </button>
            </div>
        </div>
    );
};

export default CourseItem;