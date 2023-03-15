import {createSlice} from '@reduxjs/toolkit'
import initialState from './initialState'

export const boardSlice = createSlice({
    name:'board',
    initialState,
    reducers:{
        reorder:(state,action)=>{
            const {destination, source} = action.payload;
            console.log(destination,source);
        },
        changeSelected:(state,action)=>{
            const index = state.indexOf(action.payload)
            console.log(index)
            // state.selected = action.payload
        }        
    }
})

export const {reorder,changeSelected} = boardSlice.actions

export default boardSlice.reducer