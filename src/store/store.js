import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userDataSlice';

export const store = configureStore({
    reducer: {
        UserData: userDataReducer, // Add reducers here
    },
});

export default store;