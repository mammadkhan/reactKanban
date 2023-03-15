import {createSlice} from '@reduxjs/toolkit'
import initialState from './initialState'

export const boardSlice = createSlice({
    name:'board',
    initialState,
    reducers:{
        
    }
})

export const {} = boardSlice.actions

export default boardSlice.reducer