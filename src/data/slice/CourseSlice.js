import {createSlice, nanoid} from "@reduxjs/toolkit";
import Toast from "../../util/Toast";

const courseSlice = createSlice({
    name: "form",
    initialState: {
        searchTerms: "",
        data: [
            {
                id: nanoid(),
                name: "Java",
                price: 25,
                description: "Java SE 21",
                imageCode: "5968282"
            },
            {
                id: nanoid(),
                name: "C#",
                price: 15,
                description: ".NET Framework",
                imageCode: "6132221"
            },
            {
                id: nanoid(),
                name: "C++",
                price: 49,
                description: "QT UI Tool",
                imageCode: "6132222"
            },
            {
                id: nanoid(),
                name: "JavaScript",
                price: 19,
                description: "React application development",
                imageCode: "5968292"
            }
        ]
    },
    reducers: {
        addCourse(state, action) {
            const {name, description, price, imageCode} = action.payload;
            state.data.push({id: nanoid, name, description, price, imageCode});
            Toast.success("New course created.");
        },
        removeCourse(state, action) {
            const courseId = action.payload;
            state.data = state.data.filter(course => {
                if (course.id === courseId) {
                    Toast.success(`Course ${course.name} removed.`);
                    return false;
                }
                return true;
            });
        },
        updateSearchTerms(state, action) {
            state.searchTerms = action.payload;
        }
    }
});

export const {
    addCourse,
    removeCourse,
    updateSearchTerms
} = courseSlice.actions;

export default courseSlice.reducer;