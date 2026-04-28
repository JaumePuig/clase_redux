import { configureStore } from "@reduxjs/toolkit";
import palabraReducer from "./redux";

export const store = configureStore({
    reducer: {
        palabra: palabraReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;