import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


type TienIchs = {
    dsTienIch?:Array<any>
}
const initialState = {

} as TienIchs

const tienIchSlice = createSlice({
  name: "tienich",
  initialState,
  reducers: {
    addTienIch(state, action: PayloadAction<{tienIch:any}>){
       
        state = {
            ...state,
            dsTienIch:state.dsTienIch ? [...state.dsTienIch , action.payload.tienIch]:[ action.payload.tienIch]
        }
        return state
      },
      setTienIch(state , action: PayloadAction<{dsTienIch:Array<any>}>){
          console.log('setTienIch dsTienIch',setTienIch.length);
          
        state = {
            dsTienIch:[...action.payload.dsTienIch]
        }
        return state
      }
  },

});

export const {  setTienIch } =  tienIchSlice.actions


export default tienIchSlice.reducer;
