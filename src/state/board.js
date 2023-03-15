import {createSlice} from '@reduxjs/toolkit'
import initialState from './initialState'

export const boardSlice = createSlice({
    name:'board',
    initialState,
    reducers:{
        changeSelected(state,action){
            console.log(state.selected,action.payload)
            state.selected = action.payload
        }        
    }
})

export const {changeSelected} = boardSlice.actions

export default boardSlice.reducer