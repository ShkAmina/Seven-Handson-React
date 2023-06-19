import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: [{ name: "Sara", age: 22, course: "Fashion Designing", batch: "2022" }, 
    { name: "Varun", age: 22, course: "Engineering", batch: "2022" },
    { name: "Aditi", age: 22, course: "MCA", batch: "2022" }],
    reducers:
    {
        editData: (state, action) => {
            state[action.payload.loc] = action.payload.currData;
            // DataContext.entries[loc] = currData;
            console.log(state)
            return (state)
        },
        addData: (state, action) => {
            state[state.length] = action.payload;
            return (state)
        }

    }
})

export const { editData, addData } = dataSlice.actions;
export default dataSlice.reducer;