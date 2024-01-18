import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeState} from "../../data/slice/FormSlice";
import {addCourse} from "../../data/slice/CourseSlice";

const CourseForm = () => {
    const dispatch = useDispatch();
    const {name, description, price, imageCode} = useSelector(state => state.form);

    const updateState = (e) => {
        dispatch(changeState({
            field: e.target.name,
            value: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addCourse({name, description, price, imageCode}));
    }

    return (
        <div className="container">
            <h4 className="header">Add Course</h4>
            <form>
                <div className="form-div">
                    <div className="form-field">
                        <label className="w25">
                            Name:
                        </label>
                        <input type="text"
                               className="w75"
                               name="name"
                               value={name}
                               onChange={updateState}/>
                    </div>
                    <div className="form-field">
                        <label className="w25">
                            Price:
                        </label>
                        <input type="number"
                               className="w75"
                               name="price"
                               value={price}
                               onChange={updateState}/>
                    </div>
                    <div className="form-field">
                        <label className="w25">
                            Image Code:
                        </label>
                        <input type="number"
                               className="w75"
                               name="imageCode"
                               value={imageCode}
                               onChange={updateState}/>
                    </div>
                    <div className="form-field">
                        <label className="w25">
                            Description:
                        </label>
                        <textarea
                            name="description"
                            className="w75"
                            value={description}
                            onChange={updateState}/>
                    </div>
                </div>
                <input
                    className="clear-btn mb-1"
                    type="button"
                    value="Submit"
                    onClick={onSubmit}/>
            </form>
        </div>
    );
};

export default CourseForm;