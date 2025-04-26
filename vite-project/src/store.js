import { configureStore } from "@reduxjs/toolkit"; // Ensure correct case
import moviesReducer from "./movieSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // devTools: process.env.NODE_ENV !== 'production',
});