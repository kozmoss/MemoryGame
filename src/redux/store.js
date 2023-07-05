import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice"

export const store = configureStore({
    reducer:{
        cards:CardSlice,
    }
})