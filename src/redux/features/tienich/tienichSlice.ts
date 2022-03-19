import { ExcuteResult } from './../../../utils/api/apiTypes';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SendNotiSoS } from "../../../utils/api/Main";


const initialState = {
  status:false
} as ExcuteResult

 export const SendNotiSoSAsync = createAsyncThunk(
    'tienich/SendNotiSoS',
    // if you type your function argument here
    async (input:{idTienIch:string , token:string}) => {

      return await SendNotiSoS({idTienich:input.idTienIch , token:input.token})
    }
  )

const tienIchSlice = createSlice({
  name: "tienich",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder.
      addCase(SendNotiSoSAsync.pending , (state) =>{
        state = {...state}
        return state
      })
      .
      addCase(SendNotiSoSAsync.fulfilled , (state , action) =>{
        console.log('SendNotiSoSAsync fulfilled' , action.payload);
          return action.payload
      })
  }
});



export default tienIchSlice.reducer;
