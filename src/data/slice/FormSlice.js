import {createSlice} from "@reduxjs/toolkit";
import {addCourse} from "./CourseSlice";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: '',
        description: '',
        price: 0,
        imageCode: ''
    },
    reducers: {
        changeState(state, action) {
            let {field, value} = action.payload;
            if (field === "price") {
                value = parseInt(value);
            }
            state[field] = value;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCourse, (state, action) => {
            state.name = "";
            state.description = "";
            state.price = 0;
            state.imageCode = '';
        });
    }
});

export const {changeState} = formSlice.actions;
export default formSlice.reducer;