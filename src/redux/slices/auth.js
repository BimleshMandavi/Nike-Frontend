import { createSlice } from "@reduxjs/toolkit"
import { authApi } from "../../mocks/auth";


const initialState = {
    user:{}
}

const slice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        getUser(state,action){
            let data = {...action.payload.data}
            state.user = data
        }
    }
});


export const {reducers} = slice



export const register = () => async()=>{
   const result = await authApi.register();
   if(result){
    return true;
   }
   else{
    return false
   }
}