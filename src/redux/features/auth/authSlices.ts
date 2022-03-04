import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginApi } from "../../../ultils/api";

type UsersState = {
  token?: string
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState = {
  loading:'idle',
  token:undefined
} as UsersState

 export const loginAsync = createAsyncThunk(
    'auth/login',
    // if you type your function argument here
    async (input:{phone:string , password:string}) => {

      return await LoginApi(input)
    }
  )

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state){
       
      state = {
          ...state,
          token:undefined
         }
      return state
    }
  },
  extraReducers: (builder) => {
      builder.
      addCase(loginAsync.pending , (state) =>{
        state = {...state , loading:"pending"}
        return state
      })
      .
      addCase(loginAsync.fulfilled , (state , action) =>{
        if(action.payload.status === true)
          state = {...state , 
            loading:"succeeded" , 
            token:action.payload.result
          }
        else
          state = {
            ...state,
            loading:"failed",
            token:action.payload.errorMessage
          }
          return state
      })
  }
});
export const {logOut } =  authSlice.actions

export default authSlice.reducer;
