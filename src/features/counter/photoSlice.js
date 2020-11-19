import { createSlice } from "@reduxjs/toolkit";

const count = createSlice(
    {
        name: 'count',
        initialState : [],
        reducers: {
            addCount: (state, action) => {
                state.push(action.payload)
            }
        },
    }
)

const { reducer , action } = count;
export const { addCount } = action;
export default reducer;