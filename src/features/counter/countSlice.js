import { createSlice } from '@reduxjs/toolkit';

const photo = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    addCount: (state, action) => {
      state+=1
    }
  }
});

const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer