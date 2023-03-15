import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:"dark",
    sideMenuOpen: true
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setTheme:(state)=>{
            state.theme = state.theme === "dark" ? "light" : "dark";
        },
        toggleSideMenu:(state)=>{
            state.sideMenuOpen = state.sideMenuOpen === true ? false : true;
        }
    }
});

export const { setTheme,toggleSideMenu } = uiSlice.actions;

export default uiSlice.reducer;