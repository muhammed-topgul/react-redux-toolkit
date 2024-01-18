import React from 'react';
import {useSelector} from "react-redux";
import CourseItem from "../list/CourseItem";

const CourseList = () => {
    const {data: courses, total} = useSelector(({course: {data, searchTerms}}) => {
        let total = 0;
        const filtered = data.filter(item => {
            const includes = item.name.toLowerCase().includes(searchTerms.toLowerCase());
            if (includes) {
                total += item.price;
            }
            return includes;
        });
        return {
            data: filtered,
            total: total
        }
    });
    return (
        <div className="container">
            <section className="section">
                <header>
                    <h4 className="header">Courses</h4>
                </header>
                <div>
                    {courses.map((item) => <CourseItem key={item.id} {...item}/>)}
                </div>
            </section>
            <footer>
                <hr/>
                <div className="m1">
                    <h4>Total Price: <span>{total} ₺</span></h4>
                </div>
            </footer>
        </div>
    );
};

export default CourseList;