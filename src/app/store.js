import countReducer from '../features/counter/photoSlice';
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
    count: countReducer,
}
const store = configureStore({
    reducer: rootReducer
});

export default store;