import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: {
       searchTerm: '',
       data: []
   },
    reducers: {

    }
});

export default searchSlice.reducer;