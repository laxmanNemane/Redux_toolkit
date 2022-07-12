import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:{
        user:{name:"", age:" " , status:""}
    },
    reducers:{
        Login(state ,action){
            state.user = action.payload;
        }
    }
})


export const {Login} = UserSlice.actions
export default UserSlice.reducer