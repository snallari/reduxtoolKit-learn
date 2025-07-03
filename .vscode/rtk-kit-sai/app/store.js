import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeslice.js";
import iceCreamReducer from "../features/icecream/icecreamSlice.js"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream:iceCreamReducer
    }
});

export default store;