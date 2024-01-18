import React from 'react';
import ReactRoundedImage from "react-rounded-image"
import {useDispatch} from "react-redux";
import {removeCourse} from "../../data/slice/CourseSlice";

const CourseItem = ({id, name, description, price, imageCode}) => {
    const dispatch = useDispatch();
    const getImage = (imageCode) => {
        if (!imageCode) {
            return null;
        }
        return `https://cdn-icons-png.flaticon.com/512/${imageCode.substring(0, 4)}/${imageCode}.png`;
    }

    return (
        <div className="course-item">
           <div className="m1">
               <ReactRoundedImage
                   image={getImage(imageCode)}
                   roundedSize="0"
                   imageWidth="150"
                   imageHeight="150"/>
           </div>
            <div>
                <h4>{name}</h4>
                <h4>{price}₺</h4>
                <p>{description}</p>
                <button
                    className="clear-btn m1"
                    style={{backgroundColor: "red"}}
                    onClick={() => dispatch(removeCourse(id))}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CourseItem;