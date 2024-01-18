import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import formReducer from "./slice/FormSlice";
import searchReducer from "./slice/SearchSlice";
import courseReducer from "./slice/CourseSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        form: formReducer,
        search: searchReducer,
        course: courseReducer
    }
});