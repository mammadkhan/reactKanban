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
            state.selected = state.data.map(board=>board.id).indexOf(action.payload.id)
        }        
    }
})

export const {reorder,changeSelected} = boardSlice.actions

export default boardSlice.reducer