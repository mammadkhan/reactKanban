import {configureStore} from "@reduxjs/toolkit"
import boardReducer from './board'
import uiReducer from './ui'

export const store = configureStore({
    reducer:{
        board:boardReducer,
        ui:uiReducer
    }
})