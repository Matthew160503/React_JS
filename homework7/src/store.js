import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(thunk);
    },
});
