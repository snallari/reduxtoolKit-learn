import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeslice.js";
import iceCreamReducer from "../features/icecream/icecreamSlice.js"
import userReducer from "../features/users/userSlice.js"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    }
});

export default store;