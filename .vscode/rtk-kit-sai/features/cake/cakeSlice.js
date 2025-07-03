import {createSlice} from '@reduxjs/toolkit'

const initialState={
    numOfCakes:10
}
//cake slice contains intial state, reducers
const cakeSlice= createSlice({
    //createslice create actions automatically, ordered and restocked are new actions
    name:'cake',
    initialState:initialState,
    reducers:{
        ordered:(state)=>{
            //directly mutate using imer lib
            state.numOfCakes--
        },
        restocked:(state, action)=>{
            state.numOfCakes+=action.payload
        }
    }
})
console.log("actions", cakeSlice.reducer)

export default cakeSlice.reducer;
export const actions = cakeSlice.actions;