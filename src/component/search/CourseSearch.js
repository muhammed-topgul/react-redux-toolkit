import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateSearchTerms} from "../../data/slice/CourseSlice";

const CourseSearch = () => {
    const  dispatch = useDispatch();
    const searchTerms = useSelector(state => state.course.searchTerms);
    return (
        <div className="search">
            <input
                placeholder="Search..."
                value={searchTerms}
                onChange={(e) => dispatch(updateSearchTerms(e.target.value))}/>
        </div>
    );
};

export default CourseSearch;