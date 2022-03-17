import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import uuid from 'react-native-uuid';
 export type NotificationType = {
  token?:string,
}


const initialState = {
} as  NotificationType

export const notificationSlice = createSlice({
    name: 'notification',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      setToken(state, action: PayloadAction<{token:string}>){
       
        state = {
            ...state,
            token : action.payload.token
        }
        return state
      }
      
    },
  })

  export const { setToken } =  notificationSlice.actions

  export default notificationSlice.reducer