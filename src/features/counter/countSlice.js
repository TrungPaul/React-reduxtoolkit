import { createSlice } from '@reduxjs/toolkit';

const count = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    addCount: (state, action) => {
      return state += 1
    }
  }
});
 
const { reducer, actions } = count;
export const { addCount } = actions;
export default reducer