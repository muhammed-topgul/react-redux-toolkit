import React, {useEffect} from 'react';
import Navbar from "./component/navbar/Navbar";
import './style/App.css'
import {useDispatch, useSelector} from "react-redux";
import {calculateTotal} from "./data/slice/CartSlice";
import CourseForm from "./component/form/CourseForm";
import CourseSearch from "./component/search/CourseSearch";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseList from "./component/list/CourseList";

function App() {
    const {cartItems} = useSelector(store => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems]);

    return (
        <div className="App">
            <Navbar/>
            <hr/>
            <CourseForm/>
            <CourseSearch/>
            <hr/>
            {/*<Cart/>*/}
            <CourseList/>
            <ToastContainer/>
        </div>
    );
}

export default App;
