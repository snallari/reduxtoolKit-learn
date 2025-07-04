import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    users:[],
    error:""
}

const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>res.data)
})

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading=false
            state.users=action.payload
            state.error=""
        })
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.loading=false
            state.error=action.error.message
            state.users=[]
        })
    }

})

export default userSlice.reducer;
export { fetchUsers };
