import { createSlice } from "@reduxjs/toolkit"

const intialState={
    noOfIcecreams:20
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState:intialState,
    reducers:{
        ordered:(state)=>{
            state.noOfIcecreams--
        },
        restocked:(state, action)=>{
            state.noOfIcecreams+=action.payload
        }
    }
})

export default iceCreamSlice.reducer
export const actions=iceCreamSlice.actions